package com.user;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/UserServlet")
public class UserServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String name = request.getParameter("name");
        String pass = request.getParameter("pass");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        if(name.equals("admin") && pass.equals("123")) {
            out.println("<h2>Welcome " + name + "</h2>");
        } else {
            out.println("<h2>Invalid Login</h2>");
        }
    }
}