<?php
	require_once 'db.php';

	$form_questionnaire_name = mysqli_real_escape_string($conn, $_POST['form_questionnaire_name']);
	$form_questionnaire_gender = mysqli_real_escape_string($conn, $_POST['form_questionnaire_gender']);
	$form_questionnaire_lga = mysqli_real_escape_string($conn, $_POST['form_questionnaire_lga']);
	$form_questionnaire_community = mysqli_real_escape_string($conn, $_POST['form_questionnaire_community']);
	$form_questionnaire_senatorial = mysqli_real_escape_string($conn, $_POST['form_questionnaire_senatorial']);
	$form_questionnaire_1 = mysqli_real_escape_string($conn, $_POST['form_questionnaire_1']);
	$form_questionnaire_2 = mysqli_real_escape_string($conn, $_POST['form_questionnaire_2']);
	$form_questionnaire_3 = mysqli_real_escape_string($conn, $_POST['form_questionnaire_3']);
	$form_questionnaire_4 = mysqli_real_escape_string($conn, $_POST['form_questionnaire_4']);
	$form_questionnaire_4_b = mysqli_real_escape_string($conn, $_POST['form_questionnaire_4_b']);
	$form_questionnaire_5 = mysqli_real_escape_string($conn, $_POST['form_questionnaire_5']);
	$form_questionnaire_6 = mysqli_real_escape_string($conn, $_POST['form_questionnaire_6']);
	$timestamp = time() + (60*60*1);

	if($form_questionnaire_name != null and $form_questionnaire_gender != null and $form_questionnaire_community != null and $form_questionnaire_senatorial != null and $form_questionnaire_lga != '0' and $form_questionnaire_1 != '0' and $form_questionnaire_2 != '0' and $form_questionnaire_3 != '0' and $form_questionnaire_4 != '0' and $form_questionnaire_4_b != '0' and $form_questionnaire_5 != '0' and $form_questionnaire_6 != '0') {

		$query = mysqli_query($conn, "INSERT INTO form_06 (form_questionnaire_name, form_questionnaire_gender, form_questionnaire_community, form_questionnaire_senatorial, form_questionnaire_lga, form_questionnaire_1, form_questionnaire_2, form_questionnaire_3, form_questionnaire_4, form_questionnaire_4_b, form_questionnaire_5, form_questionnaire_6, form_date_created, form_field_agent) VALUES ('$form_questionnaire_name', '$form_questionnaire_gender', '$form_questionnaire_community', '$form_questionnaire_senatorial', '$form_questionnaire_lga', '$form_questionnaire_1', '$form_questionnaire_2', '$form_questionnaire_3', '$form_questionnaire_4', '$form_questionnaire_4_b', '$form_questionnaire_5', '$form_questionnaire_6', '$timestamp', 'Nkriu Agent')");

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