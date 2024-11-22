<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>This is the cool page 😎</h1>
<%-- 	<p>
		ArrayList: ${names}
	</p> --%>
	
	<c:forEach var="name" items="${names }">
		<li>${name}</li>
	</c:forEach>
	
	<p>there are ${names.size()} people in the list</p>
	
</body>
</html>