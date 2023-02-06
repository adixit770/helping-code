<?php
session_start();
if (!isset($_SESSION['person_id']))
{
    header("Location: index.php");
    die();
}
?>

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Contact Page</title> 
    <!-- Custom Css -->

<style type="text/css">
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 3.5rem;
    font-size: 20px;
    padding-left: 2.5rem;
}
.container.abc{
  height: 400px;
    background: url(https://images.unsplash.com/photo-1547831498-28939330f0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=949&q=80);
    background-repeat: no-repeat;
    background-size: cover;
}
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1pxsolidrgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
    background: radial-gradient(#fff, #02ffdd0f);
}

</style>
  </head>

<?php
/*View Contact*/
include 'datac.php';

$view = "select * from profile";
if (isset($_GET['email']))
{
    $search = $_GET['email'];

    $view = "select * from profile where person_email='$search'";
}
$result = $conn->query($view);
?>
<table class="table table-dark table-striped">
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#"><button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add</button></a>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h3  class="modal-title" id="exampleModalLabel" class="display-3">PhoneBook</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" >
         
          <div class="container abc">
   
<form method="post" action="addcontacts.php">
<div class="profile" style="color:black;">
   <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" name="name" placeholder="Name">
  <label for="floatingInput" >name</label>
</div>

   <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" name="email" placeholder="name@example.com">
  <label for="floatingInput">email</label>
</div>
   <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" name="mobile" placeholder="Mobile">
  <label for="floatingInput">mobile</label>
</div>
</div>


  </div>    

      </div>
      <div class="modal-footer">
        <a href="addcontacts.php"><input type="submit" name="save" value="submit"></a>
      </div></form>
    </div>
  </div>
</div>

        </li>
        <li class="nav-item">
          <a class="nav-link" href="show.php">Update</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="show.php">View</a>
        </li>
        <li class="nav-item">
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add Group
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Group</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form method="post" action="group.php" >
      <div class="modal-body">
  
 <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" name="group" placeholder="group">
  <label for="floatingInput">Group</label>
</div>

      </div>
      <div class="modal-footer">
        <a href="addcontacts.php"><input type="submit" name="save" value="submit"></a>
      </div></form>
    </div>
  </div>
</div>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="unset.php">Signout</a>
        </li>
        <form>
        <div class="dropdown">
      <select class="name bg-success" id="group">
      <option value="">select group</option> 
      </select>
</div></form>
      </ul>
       <form class="m-5">
           <input class="form-control " type="text" class="user_search" name="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success " value="Search" type="submit" >Search</button>
      </form>

    
    </div>
  </div>
</nav>
<?php
$person_id = $_SESSION['person_id'];
$view = "SELECT * FROM `contacts`"; 
if(isset($_GET['search']))
{
  $search=$_GET['search'];
   $view="select * from contacts where 
   add_name like'%$search%'AND person_id=$person_id or
   add_email like'%$search%'AND person_id=$person_id or
   add_mobile like'%$search%'AND person_id=$person_id or
   add_id like'%$search%'AND person_id=$person_id ";
}  
else
{
  $view="select * from contacts WHERE person_id='$person_id' AND group_id='$user'";  
}
$result = $conn->query($view);
?>


<div class="container">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">phone Number</th> 
      <th scope="col">ACTION</th>
      
<?php
while ($row = $result->fetch_assoc())
{
?>
  <tr>
    <td class="td"><?=$row['add_id'] ?></td>
    <td class="td"><?=$row['add_name'] ?></td >
    <td class="td"><?=$row['add_email'] ?></td>
    <td class="td"><?=$row['add_mobile'] ?></td >
    
    <td class="td"><a style="text-decoration: none;" href="contactupdate.php?add_id=<?=$row['add_id'] ?>">EDIT</a>
    <a style="text-decoration: none;" href="contactdelete.php?add_id=<?=$row['add_id'] ?>">DELETE</a></td>

  </tr>
<?php
} ?>

</table>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
<script src="js/jquery.js"></script>

<script>
  
  $.ajax({
    url:'show_group.php',
    success:function(res){
      const data = JSON.parse(res);
      var options = "<option value=''>Select Group</option>";
      $.each(data.data,function (key,val) {
     options+="<option value='"+val.group_id+"'>"+val.group_name+"</option>";
      })
    $("#group").html(options);
    },
    error:function(e){
      alert(e);
    }
  });

</script>
