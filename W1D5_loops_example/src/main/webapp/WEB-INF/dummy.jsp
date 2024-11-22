<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
	<h2>hello there ninjas</h2>
	${ listOfNinjas}
	
	<hr />
	<c:forEach var="oneNinja" items="${listOfNinjas }">
		<li>${oneNinja.getName()} has a power of ${oneNinja.power} </li>
	
	</c:forEach>
</body>
</html>