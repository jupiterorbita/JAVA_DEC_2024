<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<title>Insert title here</title>
</head>
<body>
<div class="container">
<h1>Trip Dashboard</h1>
	<%-- <c:out value="${tripList}"/> --%>
	<a href="/trips/new">create new Trip</a>
	<hr />
	
	<table class="table">
		<thead>
			<tr>
				<td>id</td>
				<td>location</td>
				<td>planner</td>
				<td>trip Length</td>
				<!-- NOT PART OF LECTURE -->
				<td>ACTIONS</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${tripList}" var="eachTrip">
				<tr>
					<td>${eachTrip.id }</td>
					<td>
						<a href="/trips/${eachTrip.id }"> ${eachTrip.location }</a>
					</td>
					<td>${eachTrip.owner}</td>
					<td>${eachTrip.tripLength}</td>
					<!-- NOT PART OF LECTURE -->
					<td>
						<a href="/trips/${eachTrip.id}/edit">edit</a>
						
					</td>
				</tr>
			</c:forEach>
			
		</tbody>
	</table>
</div>
</body>
</html>