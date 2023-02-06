<?php
include 'datac.php';
$row = "";
if (!isset($_GET['add_id']))
{
    header("location:profile.php");
}
else
{
    $add_id = $_GET['add_id'];
    $view = "select *from contacts where add_id=$add_id";
    $result = $conn->query($view);
    $row = $result->fetch_assoc();
}
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Telephone</title>
    <style >
    body{
     background: url(a.jpg);
     background-repeat: no-repeat;
     background-position: center;
     height: 550px;
     background-size: cover;
     width: 31rem;
    margin-top: 10rem;
    margin-inline: 37rem;
  
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
   <h1>Update Page</h1>
        <form class="row g-3" method="post" action="contactdoupdate.php">
    <input type="hidden" name="add_id" value="<?=$row['add_id'] ?>"> 
  <div class="input-group">
  <span class="input-group-text">name</span>
  <input type="text" name="name" aria-label="First name" class="form-control" value="<?=$row['add_name'] ?>">
</div>
  <div class="col-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" name="email" class="form-control" id="inputEmail4"value="<?=$row['add_email'] ?>">
  </div>

  <div class="col-6">
    <label for="Mobile" class="form-label">Mobile</label>
    <input type="text" id="mobile" name="mobile" class="form-control" id="inputAddress" placeholder="Mobile Number" onkeydown="mobileValueKeyPress();" onkeyup="mobileValueKeyPress();"value="<?=$row['add_mobile'] ?>">
    <span class="error_msg" id="mobile_error"></span><br><br>
  </div>
 
    <input type="submit" name="update" value="update"class="btn btn-primary">
   
  </div>
  </div>
 
</form>
      


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
