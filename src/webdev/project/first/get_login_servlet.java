package webdev.project.first;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

@WebServlet(name = "GetSessionServlet")
public class get_login_servlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // --- Sessions ---

        // - This example uses a session to keep count of client requests.
        HttpSession session = request.getSession();

        int myCount = 0;

        Integer countObject = (Integer)session.getAttribute("Count");
        if(countObject != null)
            myCount = countObject.intValue();

        Integer newCount = new Integer(myCount + 1);
        session.setAttribute("Count", newCount);

        // - This example shows how to display the age of a session
        //double ageInHours = (System.currentTimeMillis() - session.getCreationTime()) / (1000. * 60. * 60.);
        //double lastAccessInHours = (System.currentTimeMillis() - session.getLastAccessedTime()) / (1000. * 60. * 60.);

        //out.println(String.format("Session created %.3f hours ago.", ageInHours ));
        //out.println(String.format("Last accessed   %.3f hours ago.", lastAccessInHours ));

        // - This example lists every session variable
        //out.println("Session Attributes:");
        //Enumeration<String> attributes = session.getAttributeNames();
        //while(attributes.hasMoreElements()) {
        //    String attribute = attributes.nextElement();
        //    out.println(String.format("  %s = '%s'", attribute, session.getAttribute(attribute).toString()));
        //}
        String loginID = (String)session.getAttribute("loginID");
        if (loginID != null) {
            out.println(loginID);
        }
        else {
            out.println("You are not logged in.");
        }


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
