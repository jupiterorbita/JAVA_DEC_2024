<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<title>Display</title>
</head>
<body>
<div class="container">
	<h2>${success }</h2>
	<a href="/">back to form</a> <br />
	
	name: <c:out value="${name }"/> <br />
	age: <c:out value="${age }"/>
	<hr />
	
	<c:if test="${age gt 90 }">
		<marquee>you are very wise</marquee>
	</c:if>
	
	${ageError }
	
</div>
</body>
</html>