<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add user</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
<div class="container">
	<h1>Add User</h1>
	<a href="/trips">back</a>
	
	<form:form action="/users/new" 
		method="post"
		modelAttribute="newUser">
		
		<p>
			<form:label path="username">username</form:label>
			<form:input path="username" class="form-control"/>
			<form:errors path="username" class="err"/>
		</p>
		<p>
			<form:label path="email">email</form:label>
			<form:input path="email" class="form-control"/>
			<form:errors path="email" class="err"/>
		</p>

		<input type="submit" value="Submit" class="btn btn-primary"/>
	
	</form:form>














</div>
</body>
</html>