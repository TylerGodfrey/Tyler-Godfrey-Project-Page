package webdev.project.first;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by yerfd on 3/2/2017.
 */
@WebServlet(name = "NameListDelete")
public class NameListDelete extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        out.println("Post");

        out.println("JSON Post");
        Person person = new Person();
        person.setFirst(request.getParameter("firstName"));
        person.setLast(request.getParameter("lastName"));
        person.setEmail(request.getParameter("email"));
        person.setPhone(request.getParameter("phone"));
        person.setBirthday(request.getParameter("birthday"));
        person.setId(Integer.parseInt(request.getParameter("id")));

        out.println("Deleting record with the following information: First name: "+person.getFirst() + ", Last name: "+person.getLast() + ", Email: "+person.getEmail() + ", Phone: "+person.getPhone() + ", Birthday: "+person.getBirthday());
        PersonDAO.deletePeople(person);
    }
}
