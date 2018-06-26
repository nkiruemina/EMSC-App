<?php
	require_once 'db.php';

	$text_lga = mysqli_real_escape_string($conn, $_POST['text_lga']);
	$text_time = mysqli_real_escape_string($conn, $_POST['text_time']);
	$text_comments = mysqli_real_escape_string($conn, $_POST['text_comments']);
	$timestamp = time() + (60*60*1);

	if($text_time != null and $text_comments != null) {
		$query = mysqli_query($conn, "INSERT INTO form_02 (form_lga, form_time, form_comments, form_date_created, form_field_agent) VALUES ('$text_lga', '$text_time', '$text_comments', '$timestamp', 'Nkriu Agent')");

		if($query) {
			$reply = array(
				'Type' => 'success',
				'Reply' => 'Form saved successfully !'
			);
			exit(json_encode($reply));
		} else {
			$reply = array(
				'Type' => 'error',
				'Reply' => 'Server is under constructions! Please try again later.'
			);
			exit(json_encode($reply));
		}					
	} else {
		$reply = array(
			'Type' => 'fill',
			'Reply' => 'Please answer all the questions.'
		);
		exit(json_encode($reply));
	}
?>