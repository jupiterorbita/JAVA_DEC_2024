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
    <title>Add Trip</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
<div class="container">
	<h1>Create your trip</h1>
	${userList }
	
	
	<form:form action="/trips/new" 
		method="POST" 
		modelAttribute="newTrip">
		<p>
			<form:label path="location">location</form:label>
			<form:input path="location" class="form-control"/>
			<form:errors path="location" class="err"/>
		</p>
		<p>
			<form:label path="tripLength">length of trip</form:label>
			<form:input type="number" step="1" min="0" path="tripLength" class="form-control"/>
			<form:errors path="tripLength" style="color:red"/>
		</p>
		<p>
			<form:label path="description">Description</form:label>
			<form:textarea path="description" class="form-control"/>
			<form:errors path="description" style="color:red"/>
		</p>
		
		<p>
			<form:label path="owner">Owner</form:label>
			<form:select path="owner">
				<c:forEach items="${userList }" var="eachUser">
					<form:option value="${eachUser}"> ${eachUser.username }</form:option>
				</c:forEach>
			</form:select>
			<form:errors path="owner" class="err"/>
		</p>
	
			<input type="submit" value="Submit" class="btn btn-primary"/>
	
	</form:form>
	
	
	
	
	
	
</div>
</body>
</html>