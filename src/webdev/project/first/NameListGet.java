package webdev.project.first;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import com.google.gson.Gson;
import webdev.project.first.Person;

@WebServlet(name = "NameListGet")
public class NameListGet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        // Replace the line below with your database code that will
        // write out your JSON file.
        List<Person> myPeople = PersonDAO.getPeople();

        Gson gson = new Gson();

        // serializes target to Json
        String json = gson.toJson(myPeople);

        out.println(json);

    }
}
