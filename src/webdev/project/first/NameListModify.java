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

/**
 * Created by yerfd on 2/20/2017.
 */
@WebServlet(name = "NameListModify")
public class NameListModify extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Just confirm we are calling the servlet we think we are
        out.println("JSON Post");
        Person person = new Person();
        person.setFirst(request.getParameter("firstName"));
        person.setLast(request.getParameter("lastName"));
        person.setEmail(request.getParameter("email"));
        person.setPhone(request.getParameter("phone"));
        person.setBirthday(request.getParameter("birthday"));

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
        PersonDAO.addPeople(person);

    }
}
