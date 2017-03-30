package webdev.project.first;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by paul.craven on 3/20/2017.
 */
@WebServlet(name = "login_servlet")
public class login_servlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        String loginID = request.getParameter("loginID");
      //  String sessionValue = request.getParameter("sessionValue");

        HttpSession session = request.getSession();
       // session.setAttribute(sessionKey, sessionValue);
        session.setAttribute("loginID", loginID);

        out.println("Done setting the session variable");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}