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
    <title>dashboard</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
<div class="container">
	<h1>Hello ${userName} with id: ${userId } </h1>
	<a href="/logout">logout</a>
	<hr />
	<a href="/trips/new">add a trip</a> <br />
	<a href="/tripsThatHaveLikes">Trips that have likes</a>
	
	<%-- ${thisUser.ownedTrips } --%>
	<table class="table">
		<thead>
			<tr>
				<th>id</th>
				<th>location</th>
				<th>length</th>
			</tr>
		</thead>
		
		<tbody>
		
		<c:forEach items="${thisUser.ownedTrips }" var="oneTrip">
			<tr>
				<td>${oneTrip.id }</td>
				<td>${oneTrip.location}</td>
				<td>${oneTrip.tripLength}</td>
			</tr>
		</c:forEach>
		
		</tbody>
	</table>
	
	<hr />
	
	${allTrips }
	
	<table class="table">
		<thead>
			<tr>
				<th>id</th>
				<th>location</th>
				<th>length</th>
				<th>created by</th>
				<th>actions</th>
				<th>liked trips</th>
			</tr>
		</thead>
		
		<tbody>
		
		<c:forEach items="${allTrips }" var="oneTrip">
			<tr>
				<td>${oneTrip.id }</td>
				<td>${oneTrip.location}</td>
				<td>${oneTrip.tripLength}</td>
				<td>${oneTrip.owner.userName}</td>
				<td>
				
				<c:if test="${userId eq oneTrip.owner.id }">
				
					<a href="/trips/${oneTrip.id }/edit">edit</a>
					
					<form action="/trips/${oneTrip.id}" method="post">
					    <input type="hidden" name="_method" value="delete">
					    <input type="submit" value="Delete">
					</form>
				</c:if>

				</td>
				<td>
					<c:if test="${oneTrip.likers.contains(thisUser) eq false }">
		
						<a href="/addToLikedTrips/${oneTrip.id}">Like</a>
					</c:if>
					<c:if test="${oneTrip.likers.contains(thisUser)}">
		
						<a href="/removeUserFromLikedTrips/${oneTrip.id}">Unlike</a>
					</c:if>
					

					
				</td>
			</tr>
		</c:forEach>
		
		</tbody>
	</table>
	
	
	
</div>
</body>
</html>