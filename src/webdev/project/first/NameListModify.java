package webdev.project.first;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by yerfd on 2/20/2017.
 */
@WebServlet(name = "NameListModify")
public class NameListModify extends HttpServlet {

    private Pattern namePattern;
    private Pattern emailAddressPattern;
    private Pattern phoneNumberDashPattern;
    private Pattern phoneNumberNoDashPattern;
    private Pattern birthdayPattern;

    public NameListModify() {
        namePattern = Pattern.compile("^[A-Za-záéíóúñÄäÖöÜüßбвгдёжзийклмнопрстуфхцчшщъыьэюя\\'\\w\\-]{1,20}$");
        phoneNumberDashPattern = Pattern.compile("^\\d{3}-\\d{3}-\\d{4}$");
        phoneNumberNoDashPattern = Pattern.compile("^\\d{10}$");
        birthdayPattern = Pattern.compile("^\\d{4}-\\d{2}-\\d{2}$");
        emailAddressPattern = Pattern.compile("^[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9\\.\\-]+\\.[a-z]{2,4}$");
        //emailAddressPattern = Pattern.compile("\\S+");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Just confirm we are calling the servlet we think we are
        out.println("JSON Post");
        Person person = new Person();
        if (request.getParameter("id") != null && request.getParameter("id").length() > 0) {
            person.setId(Integer.parseInt(request.getParameter("id")));
        }

        person.setFirst(request.getParameter("firstName"));
        person.setLast(request.getParameter("lastName"));
        person.setEmail(request.getParameter("email"));
        person.setPhone(request.getParameter("phone"));
        person.setBirthday(request.getParameter("birthday"));

        // Now create matcher object.
        Matcher m = namePattern.matcher(person.getFirst());
        if (m.find( )) {
            out.println("Passed first name validation");
        } else {
            out.println("Did not pass first name validation");
            return;
        }
        m = namePattern.matcher(person.getLast());
        if (m.find( )) {
            out.println("Passed last name validation");
        } else {
            out.println("Did not pass last name validation");
            return;
        }
        m = emailAddressPattern.matcher(person.getEmail());
        if (m.find( )) {
            out.println("Passed email validation");
        } else {
            out.println("Did not pass email validation");
            return;
        }
        m = phoneNumberDashPattern.matcher(person.getPhone());
        if (m.find( )) {
            out.println("Passed phone number validation");
        } else {
            m = phoneNumberNoDashPattern.matcher(person.getPhone());
            if (m.find( )) {
                out.println("Missing dashes; otherwise fine.");
            } else {
                out.println("Did not pass phone number validation");
                return;
            }
        }
        m = birthdayPattern.matcher(person.getBirthday());
        if (m.find( )) {
            out.println("Passed birthday validation");
        } else {
            out.println("Did not pass birthday validation");
            return;
        }


/*        // Open the request for reading. Read in each line, put it into a string.
        // Yes, I think there should be an easier way.
        java.io.BufferedReader in = request.getReader();
        String requestString = new String();
        for (String line; (line = in.readLine()) != null; requestString += line);

        // Output the string we got as a request, just as a check
        out.println(requestString);

        // Great! Now we want to use GSON to parse the object, and pop it into our business object. Field
        // names have to match. That's the magic.
        Gson gson = new Gson();
        Person fromJson = gson.fromJson(requestString, Person.class);
*/

        // Make sure our field was set.
        out.println("First name: "+person.getFirst() + ", Last name: "+person.getLast() + ", Email: "+person.getEmail() + ", Phone: "+person.getPhone() + ", Birthday: "+person.getBirthday());
        if (person.getId() == null){
            out.println("Adding person.");
            PersonDAO.addPeople(person);
        }
        else {
            out.println("Editing person.");
            PersonDAO.editPeople(person);
        }


    }
}
