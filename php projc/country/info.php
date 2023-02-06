<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
	<div style="margin-left: 20%;">
		<select class="name" id="country">
			<option value="">select country</option> 
			
		</select><br>
		<select class="name" id="state">
			<option value="">select state</option>
			
		</select><br>
		<select class="name" id="city">
			<option value="">select city</option>
			
		</select><br>
		
	</div>

</body>

<script src="js/jquery.js"></script>

<script>
	
	$.ajax({
		url:'country.php',
		success:function(res){
			const data = JSON.parse(res);
			var options = "<option value=''>select country</option>";
			$.each(data.data,function (key,val) {
		 options+="<option value='"+val.id+"'>"+val.name+"</option>";
			})
		$("#country").html(options);
		},
		error:function(e){
			alert(e);
		}
	})
/*	$("#country").on("change",function(){ 
		$.ajax({
		url:'state.php',
		data:{id:$("#country").val()},
		success:function(res){
		
	 		const data = JSON.parse(res);
			var options = "<option value=''>select state</option>";
	 	$.each(data.data,function (key,val) {
	 	options+="<option value='"+val.id+"'>"+val.name+"</option>";
	 		})
	 		$("#state").html(options);
	 	},
	 	error:function(e)
	 	{
	 		alert(e);
	 	}
	    })
	    })
	$("#state").on("change",function(){
		$.ajax({
		url:'city.php',
		data:{id:$("#state").val()},
		success:function(res){
			const data = JSON.parse(res);
			var options = "<option value=''>select city</option>";
			$.each(data.data,function (key,val) {
		options+="<option value='"+val.id+"'>"+val.name+"</option>";
			})
			$("#city").html(options);
		},
		error:function(e){
			alert(e);
		}
	})
	})
*/
</script>
</html>