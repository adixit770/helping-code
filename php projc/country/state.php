<?php
include 'dbconnection.php';
$id = $_GET['id'];
$data = array();
$all_data = array();

$view = "select * from tbl_states where country_id=$id";
$result= $conn->query($view);
$check = mysqli_fetch_array($result);
    if (isset($check))
  {	
	while($row= $result->fetch_assoc()){
		array_push($all_data, $row);
	}
	$data['status'] = 'success';
	$data['data'] = $all_data;
	$data['msg'] = 'success';

 }else{
 	$data['status'] = 'failed';
	$data['data'] = $all_data;
	$data['msg'] = 'No record found';

 }

echo json_encode($data);


?>