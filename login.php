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
           $email = $_POST["email"];
           $password = $_POST["password"];
            require_once "data.php";
            $sql = "SELECT * FROM users WHERE email = '$email'";
            $result = mysqli_query($conn, $sql);
            $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
            if ($user) {
                if (password_verify($password, $user["password"])) {
                    session_start();
                    $_SESSION["user"] = "yes";
                    header("Location:  index2.html");
                    die();
                }else{
                    echo "<div class='alert alert-danger'>Password does not match</div>";
                }
            }else{
                echo "<div class='alert alert-danger'>Email does not match</div>";
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
<div class="form-box login">
    <form action="">
      <h2>Login</h2>
      <div class="input-box">
        <span class="icon">
            <ion-icon name="mail-outline"></ion-icon>
        </span>
        <input type="email" class="form-control" name="email"  required>
        <label>Email</label>
    </div>
    <div class="input-box">
      <span class="icon">
          <ion-icon name="lock-closed-outline"></ion-icon>
      </span>
      <input type="password" class="form-control" name="password" required>
      <label>Password</label>
  </div>
  <div class="forgot">
    <label><input type="checkbox">Remember me</label>
    <a href="#">Forgot Password?</a>
</div>
<button type="submit" class="form-control" name="submit" >Login</button>
              <div class="register">
                <p>Don't have account? 
                  <a href="register.php" class="register-link">Register</a>
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
<script src="script.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>