<?php
session_start();
if (isset($_SESSION["user"])) {
   header("Location: index2.html");
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charsset="UTF-8">
<meta name="viewport" content="with=device-width, initial-scale=1.0">
  <title> MIND SOLUTIONS </title>
  <link rel="stylesheet" type="text/css" href="style2.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer">
</head>
<body>
<?php
        if (isset($_POST["submit"])) {
           $fullName = $_POST["fullname"];
           $email = $_POST["email"];
           $password = $_POST["password"];
           $phone= $_POST["phone"];
           
           $passwordHash = password_hash($password, PASSWORD_DEFAULT);

           $errors = array();
           
           if (empty($fullName) OR empty($email) OR empty($password) OR empty($phone)) {
            array_push($errors,"All fields are required");
           }
           if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            array_push($errors, "Email is not valid");
           }
           if (strlen($password)<8) {
            array_push($errors,"Password must be at least 8 charactes long");
           }
           if (strlen($phone)<10) {
            array_push($errors,"Phone should be at least 10 charactes");
           }
           require_once "data.php";
           $sql = "SELECT * FROM users WHERE email = '$email'";
           $result = mysqli_query($conn, $sql);
           $rowCount = mysqli_num_rows($result);
           if ($rowCount>0) {
            array_push($errors,"Email already exists!");
           }
           if (count($errors)>1) {
            foreach ($errors as  $error) {
                echo "<div class='alert alert-danger'>$error</div>";
            }
           }else{
            
            $sql = "INSERT INTO users (fullname, email, password, phone) VALUES ( ?, ?, ?, ? )";
            $stmt = mysqli_stmt_init($conn);
            $prepareStmt = mysqli_stmt_prepare($stmt,$sql);
            if ($prepareStmt) {
                mysqli_stmt_bind_param($stmt,"sssi",$fullName, $email, $passwordHash, $phone);
                mysqli_stmt_execute($stmt);
            }else{
                die("Something went wrong");
            }
           }
          

        }
        ?>
  <header>
<nav>
    <a href="index2.html"><img src="images/logo2.png"></a>
    <div class="nav-link" id="navLinks">
        <i class="fa fa-times" onclick="hideMenu()"></i>
    <ul>
    <li><a href="index2.html">HOME</a></li>
    <li><a href="#">SERVICES</a></li>
    <li><a href="about.html">ABOUT</a></li>
    <li><a href="login.php">LOGIN</a></li>
   </ul>
</div>
<i class="fa fa-bars" onclick="showMenu()"></i>
</nav>



<div class="wrapper">
<div class="form-box register">
    <form method="post" action="quiz/quiz.html">
      <h2>Registration</h2>
      <div class="input-box">
        <span class="icon">
          <ion-icon name="person-outline"></ion-icon>      
           </span>
        <input type="fullname" class="form-control" name="fullname" placeholder="Full Name:" required>
        <label>Full Name</label>
    </div>
      <div class="input-box">
        <span class="icon">
            <ion-icon name="mail-outline"></ion-icon>
        </span>
        <input type="email" class="form-control" name="email" placeholder="Email:"  required>
        <label>Email</label>
    </div>
    <div class="input-box">
      <span class="icon">
        <ion-icon name="lock-closed-outline"></ion-icon>
      </span>
      <input type="password" class="form-control" name="password" placeholder="Password:" required>
      <label>Password</label>
  </div>
    <div class="input-box">
      <span class="icon">
        <ion-icon name="call-outline"></ion-icon> 
            </span>
      <input type="phone" class="form-control" name="phone" placeholder="Phone:" required>
      <label>Phone</label>
  </div>
  <div class="forgot">
    <label><input type="checkbox">I agree to the terms & conditions</label>
</div>
<button  type="submit"  class="form-control" name="submit" >Register</button>
      
      
              <div class="register">
                <p>Already have an account?
                  <a href="login.php" class="login-link">Login</a>
                </p>
              </div>
    </form>
  </div>


</div>
</header>

<!---social-->
<section>
  <div class="icons">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-square-twitter"></i>
    <i class="fa-brands fa-square-instagram"></i>

</div>
<div class="made">
<p>Made By Pratham, Prajwal, Yash, Janhavi</p>
</div>
</section>

    <!----javaScript---->
<script>
    var navlinks = document.getElementById("navLinks");
    function showMenu(){
        navlinks.style.right="0";
    }
    function hideMenu(){
        navlinks.style.right="-200px";
    }
</script>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>