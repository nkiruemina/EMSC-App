<?php
    require_once 'db.php';
    if(!empty($_POST['user']) and !empty($_POST['pass'])) {
        $user = mysqli_real_escape_string($conn, $_POST['user']);
        $pass = mysqli_real_escape_string($conn, $_POST['pass']);
        
        $query = mysqli_query($conn, "SELECT * FROM emsc_users WHERE user_username = '$user'");
        if(mysqli_num_rows($query) == 1) {
            $info = mysqli_fetch_array($query);
            $pass = md5($pass);
            if($info['user_password'] == $pass) {
                session_start();
                $_SESSION['username'] = $user;
                exit("success");
            } else {
                exit("password");
            }
        } else {
            exit("username");
        }
    } else {
        exit("fill");
    }
?>
