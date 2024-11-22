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
	<h1>hello views</h1>
	<p>
		the name is <c:out value="${name}"/> 
		and their age is <c:out value="${age}"/> 
	</p>
	<p>
		name without "c out": ${name} 
	</p>
</body>
</html>