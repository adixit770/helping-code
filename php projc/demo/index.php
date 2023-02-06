<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="image/x-icon" href="phonebook.png">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    

    <title>Telephone Directory</title>
    <style >
    body {
    margin: 0;
    position: relative;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    right: 22rem;
    top: 2rem;
}
    body{
     background: url(ab.jpg);
     background-repeat: no-repeat;
     background-position: center;
     height: 550px;
    /* background-size: cover;*/
  
    }

      #log{
            box-sizing: border-box;
    width: 32rem;
    margin-left: 33rem;
    margin-top: 10rem;
      }
    </style>
    
  </head>
  <body>

    <?php
if (isset($_GET['msg']))
{
    echo $_GET['msg'];
}
?>
    <form id="log" method="post" action="login.php">
<h1>Login Page</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
  
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Sign up</button>
</form>
<br>

   <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">SignUp Page</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- signup -->
        <form class="row g-3" method="post" action="dosignup1.php">
  <div class="input-group">
  <span class="input-group-text">name</span>
  <input type="text" name="name" aria-label="First name" class="form-control">
</div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" name="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-md-6">
    <label for="conf_Password4" class="form-label">confirm-Password</label>
    <input type="password" name="conf_password" class="form-control" id="conf_Password4">
  </div>

  <div class="col-12">
    <label for="Mobile" class="form-label">Mobile</label>
    <input type="text" id="mobile" name="mobile" class="form-control" id="inputAddress" placeholder="Mobile Number" onkeydown="mobileValueKeyPress();" onkeyup="mobileValueKeyPress();">
    <span class="error_msg" id="mobile_error"></span><br><br>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" name="city" class="form-control" id="inputCity">
  </div>
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign up</button>
   
  </div>
</form>
      </div>
      </div>
  </div>
</div>


 <!-- Option 1: Bootstrap Bundle with Popper -->
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
   
  </body>





</html>
<script>
  function mobileValueKeyPress()
    {
        var mobile = document.getElementById("mobile");
        var s = mobile.value;
        console.log(s);
        if(numbersOnlyCheck(s)){
       var mobile_error = document.getElementById("mobile_error");
       mobile_error.innerText = "";

        }
    }
function numbersOnlyCheck(numbers)
  {
     var regEx = /^(\+\d{1,3}[- ]?)?\d{10}$/;
     if(numbers.match(regEx) || numbers == '')
       {
        return true;
       }
     else
       {
       var mobile_error = document.getElementById("mobile_error");
       mobile_error.innerText = "This field contain numbers!";  
       return false;
       }
  } 


</script>
