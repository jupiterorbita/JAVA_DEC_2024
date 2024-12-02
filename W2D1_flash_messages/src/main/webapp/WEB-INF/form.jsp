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
	<h2>flash messages form</h2>
	
	<p style="color: red">
		${ageError }
	</p>
	
	<form action="/getFormData" method="post">
	
		<input type="hidden" name="productId" value="114" />
		<p>
			name: <input name="name" />
		</p>
		<p>
			age: <input type="number" name="age" value="0"/>
		</p>
		
		<button>submit</button>
	
	</form>
	
</div>
</body>
</html>