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
    <title>Tacos</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
<div class="container">
	<h2>edit trip</h2>
	<a href="/trips">back</a>
	
	<form:form action="/trips/${oneTrip.id }/edit" 
	method="put" 
	modelAttribute="oneTrip">
	
	<!-- <form:errors path="*"/> -->
		
		<div>
			<form:label path="location">location</form:label>
			<form:input path="location" class="form-control"/>
			<form:errors path="location" style="color:red"/>
		</div>
		<div>
			<form:label path="tripLength">tripLength</form:label>
			<form:input type="number" step="1" min="1" path="tripLength" class="form-control"/>
			<form:errors path="tripLength" style="color:red"/>
		</div>
		<div>
			<form:label path="description">description</form:label>
			<form:textarea path="description" class="form-control"/>
			<form:errors path="description" style="color:red"/>
		</div>
		<div>
			<form:label path="owner">owner</form:label>
			<form:input path="owner" class="form-control"/>
			<form:errors path="owner" style="color:red"/>
		</div>
		
		<p></p>
		<input type="submit" value="update" class="btn btn-primary" />
		
	</form:form>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</div>
</body>
</html>