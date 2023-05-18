<?php

$name=$_POST['Name'];
$email=$_POST['Email'];
$phone=$_POST['Phone'];
$subject=$_POST['Subject'];
$message=$_POST['Message'];
$conn=new mysqli('localhost','root','','health');
if($conn->connect_error)
{
	die('COnnection failed :'.$conn->connect_error);
}
else{
	$stmt= $conn->prepare('insert into contactus(Name,Email,Phone,Subject,Message) 
	values(?,?,?,?,?)');
    $stmt->bind_param("ssiss",$name,$email,$phone,$subject,$message);
	$stmt->execute();
	echo "message sent";
	$stmt->close();
	$conn->close();
}

?>