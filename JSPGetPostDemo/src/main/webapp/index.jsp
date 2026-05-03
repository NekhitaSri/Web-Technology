<!DOCTYPE html>
<html>
<head>
    <title>GET POST Demo</title>
</head>
<body>

<h2>Enter Details</h2>

<form method="get">
    Name: <input type="text" name="gname"><br>
    Age: <input type="text" name="gage"><br>
    <input type="submit" value="GET">
</form>

<form method="post">
    Name: <input type="text" name="pname"><br>
    Age: <input type="text" name="pageValue"><br>
    <input type="submit" value="POST">
</form>

<%
String gname = request.getParameter("gname");
String gage = request.getParameter("gage");

if(gname != null && gage != null) {
%>

<p><b>GET Method Output:</b></p>
Name: <%= gname %><br>
Age: <%= gage %><br>

<%
}

String pname = request.getParameter("pname");
String pageValue = request.getParameter("pageValue");

if(pname != null && pageValue != null) {
%>

<p><b>POST Method Output:</b></p>
Name: <%= pname %><br>
Age: <%= pageValue %><br>

<%
}
%>

</body>
</html>