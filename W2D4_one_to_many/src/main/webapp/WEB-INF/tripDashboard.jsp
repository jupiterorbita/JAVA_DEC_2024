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
    <title>Trips ✈️</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
<div class="container">
	<h2>Trip Dashaboard</h2>
	<a href="/users/new">ADD A USER 👤</a>
	<a href="/trips/new">CREATE A TRIP ✈️</a>
	
	
	<!-- ${allTrips } -->
	
	<table class="table">
		<thead>
			<tr>
				<th>id</th>
				<th>location</th>
				<th>length</th>
				<th>owner</th>
				<th>created trips</th>
			</tr>
		</thead>
		
		<tbody>
			<c:forEach items="${allTrips }" var="eachTrip">
				<tr>
					<td>${eachTrip.id }</td>
					<td>${eachTrip.location }</td>
					<td>${eachTrip.tripLength} days</td>
					<td>
						<a href="/users/${eachTrip.owner.id}">
						
							${eachTrip.owner.username}
						</a>
					
					</td>
					<td>${eachTrip.owner.ownedTrips.size()}</td>
				</tr>
			</c:forEach>

		</tbody>
	
	
	</table>
	
	
	
	
	
	
	
	
	
	
	
	
</div>
</body>
</html>