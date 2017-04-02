<?php

 	require_once 'login.php';
	print_r($_POST);
	$login = $_POST['login'];
	$password = $_POST['password'];

	$count = mysqli_query($connection, "SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
	if(mysqli_num_rows($count) == 0)
	{
		echo 'u unregistred';
	}
	else
	{
		echo 'Hello, ' . $login . '!';
	}





?>