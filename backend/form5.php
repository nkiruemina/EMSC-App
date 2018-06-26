<?php
	require_once 'db.php';

	$form_questionnaire_name = mysqli_real_escape_string($db, $_POST['form_questionnaire_name']);
    $form_questionnaire_gender = mysqli_real_escape_string($db, $_POST['form_questionnaire_gender']);
    $form_questionnaire_lga = mysqli_real_escape_string($db, $_POST['form_questionnaire_lga']);

    $form_questionnaire_community = mysqli_real_escape_string($db, $_POST['form_questionnaire_community']);
    $form_questionnaire_senatorial = mysqli_real_escape_string($db, $_POST['form_questionnaire_senatorial']);
    //
    $form_questionnaire_1 = mysqli_real_escape_string($db, $_POST['form_questionnaire_1']);
    $form_questionnaire_1_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_1_b']);
    $form_questionnaire_2 = mysqli_real_escape_string($db, $_POST['form_questionnaire_2']);
    $form_questionnaire_2_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_2_b']);
    $form_questionnaire_3 = mysqli_real_escape_string($db, $_POST['form_questionnaire_3']);
    $form_questionnaire_3_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_3_b']);
    $form_questionnaire_4 = mysqli_real_escape_string($db, $_POST['form_questionnaire_4']);
    $form_questionnaire_4_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_4_b']);
    $form_questionnaire_5 = mysqli_real_escape_string($db, $_POST['form_questionnaire_5']);
    $form_questionnaire_5_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_5_b']);
    $form_questionnaire_6 = mysqli_real_escape_string($db, $_POST['form_questionnaire_6']);
    $form_questionnaire_6_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_6_b']);
    $form_questionnaire_7 = mysqli_real_escape_string($db, $_POST['form_questionnaire_7']);
    $form_questionnaire_7_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_7_b']);
    $form_questionnaire_8 = mysqli_real_escape_string($db, $_POST['form_questionnaire_8']);
    $form_questionnaire_8_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_8_b']);
    $form_questionnaire_9 = mysqli_real_escape_string($db, $_POST['form_questionnaire_9']);
    $form_questionnaire_9_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_9_b']);
    $form_questionnaire_10 = mysqli_real_escape_string($db, $_POST['form_questionnaire_10']);
    $form_questionnaire_10_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_10_b']);
    $form_questionnaire_11 = mysqli_real_escape_string($db, $_POST['form_questionnaire_11']);
    $form_questionnaire_11_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_11_b']);
    $form_questionnaire_12 = mysqli_real_escape_string($db, $_POST['form_questionnaire_12']);
    $form_questionnaire_12_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_12_b']);
    $form_questionnaire_13 = mysqli_real_escape_string($db, $_POST['form_questionnaire_13']);
    $form_questionnaire_13_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_13_b']);
    $form_questionnaire_14 = mysqli_real_escape_string($db, $_POST['form_questionnaire_14']);
    $form_questionnaire_14_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_14_b']);
    $form_questionnaire_15 = mysqli_real_escape_string($db, $_POST['form_questionnaire_15']);
    $form_questionnaire_15_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_15_b']);
    $form_questionnaire_16 = mysqli_real_escape_string($db, $_POST['form_questionnaire_16']);
    $form_questionnaire_16_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_16_b']);
    $form_questionnaire_17 = mysqli_real_escape_string($db, $_POST['form_questionnaire_17']);
    $form_questionnaire_17_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_17_b']);
    $form_questionnaire_18 = mysqli_real_escape_string($db, $_POST['form_questionnaire_18']);
    $form_questionnaire_18_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_18_b']);
    $form_questionnaire_19 = mysqli_real_escape_string($db, $_POST['form_questionnaire_19']);
    $form_questionnaire_19_b = mysqli_real_escape_string($db, $_POST['form_questionnaire_19_b']);
	$timestamp = time() + (60*60*1);

	if($form_questionnaire_11 != '0' and $form_questionnaire_11_b != null and $form_questionnaire_12 != '0' and $form_questionnaire_12_b != null and $form_questionnaire_13 != '0' and $form_questionnaire_13_b != null and $form_questionnaire_14 != '0' and $form_questionnaire_14_b != null and $form_questionnaire_15 != '0' and $form_questionnaire_15_b != null and $form_questionnaire_16 != '0' and $form_questionnaire_16_b != null and $form_questionnaire_17 != '0' and $form_questionnaire_17_b != null and $form_questionnaire_18 != '0' and $form_questionnaire_18_b != null and $form_questionnaire_19 != '0' and $form_questionnaire_19_b != null) {
			$query = mysqli_query($db,"INSERT INTO form_05 SET form_questionnaire_name='$form_questionnaire_name', form_questionnaire_gender='$form_questionnaire_gender', form_questionnaire_community='$form_questionnaire_community', form_questionnaire_senatorial='$form_questionnaire_senatorial', form_questionnaire_lga='$form_questionnaire_lga', form_questionnaire_1='$form_questionnaire_1', form_questionnaire_1_b='$form_questionnaire_1_b', form_questionnaire_2='$form_questionnaire_2', form_questionnaire_2_b='$form_questionnaire_2_b', form_questionnaire_3='$form_questionnaire_3', form_questionnaire_3_b='$form_questionnaire_3_b', form_questionnaire_4='$form_questionnaire_4', form_questionnaire_4_b='$form_questionnaire_4_b', form_questionnaire_5='$form_questionnaire_5', form_questionnaire_5_b='$form_questionnaire_5_b', form_questionnaire_6='$form_questionnaire_6', form_questionnaire_6_b='$form_questionnaire_6_b', form_questionnaire_7='$form_questionnaire_7', form_questionnaire_7_b='$form_questionnaire_7_b', form_questionnaire_8='$form_questionnaire_8', form_questionnaire_8_b='$form_questionnaire_8_b', form_questionnaire_9='$form_questionnaire_9', form_questionnaire_9_b='$form_questionnaire_9_b', form_questionnaire_10='$form_questionnaire_10', form_questionnaire_10_b='$form_questionnaire_10_b', form_questionnaire_11='$form_questionnaire_11', form_questionnaire_11_b='$form_questionnaire_11_b', form_questionnaire_12='$form_questionnaire_12', form_questionnaire_12_b='$form_questionnaire_12_b', form_questionnaire_13='$form_questionnaire_13', form_questionnaire_13_b='$form_questionnaire_13_b', form_questionnaire_14='$form_questionnaire_14', form_questionnaire_14_b='$form_questionnaire_14_b', form_questionnaire_15='$form_questionnaire_15', form_questionnaire_15_b='$form_questionnaire_15_b', form_questionnaire_16='$form_questionnaire_16', form_questionnaire_16_b='$form_questionnaire_16_b', form_questionnaire_17='$form_questionnaire_17', form_questionnaire_17_b='$form_questionnaire_17_b', form_questionnaire_18='$form_questionnaire_18', form_questionnaire_18_b='$form_questionnaire_18_b', form_questionnaire_19='$form_questionnaire_19', form_questionnaire_19_b='$form_questionnaire_19_b', form_date_created=$timestamp, form_field_agent='Nkiru Agent'");
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
			'Reply' => 'Please answer alll the questions.'
		);
		exit(json_encode($reply));
	}
?>




