<?php
	require_once 'db.php';

	$text_lga = mysqli_real_escape_string($conn, $_POST['text_lga']);
	$text_time = mysqli_real_escape_string($conn, $_POST['text_time']);
	$text_officials = mysqli_real_escape_string($conn, $_POST['text_officials']);
	$text_officers = mysqli_real_escape_string($conn, $_POST['text_officers']);
	$text_radio = mysqli_real_escape_string($conn, $_POST['text_radio']);
	$text_comments = mysqli_real_escape_string($conn, $_POST['text_comments']);
	$timestamp = time() + (60*60*1);

	if($text_time != null and $text_officials != null and $text_officers != null and $text_comments != null) {
		$query = mysqli_query($conn, "INSERT INTO form_01 (form_lga, form_time, form_officials, form_officers, form_radio, form_comments, form_date_created, form_field_agent) VALUES ('$text_lga', '$text_time', '$text_officials', '$text_officers', '$text_radio', '$text_comments', '$timestamp', 'Nkriu Agent')");

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