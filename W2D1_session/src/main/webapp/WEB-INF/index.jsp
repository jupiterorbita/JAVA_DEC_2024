<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>home session</title>
</head>
<body>
	<h1>welcome to session</h1>
	<p>
		the name is <c:out value="${name }"/>
	</p>
</body>
</html>