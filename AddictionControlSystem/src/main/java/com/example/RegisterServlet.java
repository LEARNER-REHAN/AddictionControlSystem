package com.example;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;
import java.sql.*;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        try {
            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO users(email, password) VALUES (?, ?)"
            );

            ps.setString(1, email);
            ps.setString(2, password);

            int i = ps.executeUpdate();

            if (i > 0) {
                response.sendRedirect("login.html");
            } else {
                response.getWriter().println("Registration Failed!");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}