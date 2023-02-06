<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SIGN-UP</title>
  <style >
    .error_msg
    {
      color: #ff0000;
    }
    
    .main
    {    
      font-weight: 600;
      font-size: 25px;
      color: black;
        margin-inline: 34rem;
        margin-top: 9rem;
        padding-top: 19px;
        padding-left: 24px;
}
#submit{
         width: 8rem;
         height: 3rem;
         font-size: 1rem;
         font-weight: bolder;
         color: black;
         background: white;
}
#submit:hover{
         width: 8rem;
         height: 4rem;
         font-size: 1rem;
         font-weight: bolder;
         color: black;
         background: darkgoldenrod;
} 
#view
{
         width: 8rem;
         height: 3rem;
         font-size: 1rem;
         font-weight: bolder;
         color: black;
         background: white;
}
#view:hover{
         width: 8rem;
         height: 4rem;
         font-size: 1rem;
         font-weight: bolder;
         color: black;
         background: darkgoldenrod;

}
#view1
{
margin-inline: 35rem
}


  </style>
</head>
 <body style="color:orangered;background: linear-gradient(45deg, black, #f8f5f5);">
<div style="color:orangered;"><h3>
  <?php
  if(isset($_GET['msg']))
  {
    echo $_GET['msg'];
  } 
   ?>
</h3>
  
</div>
<div class="main">
    

    <form method="post" action="dosignup.php"> 
    NAME : <input type="text" id="name" placeholder="name" name="name" onkeyup="nameValueKeyPress();" onkeydown="nameValueKeyPress();"
    value="<?=isset($_GET['name'])?$_GET['name']:'' ?> "><br>
      <span class=" error_msg" id="name_error"></span><br>

      City : <select id="city" placeholder="city" name="city" value="<?=isset($_GET['city'])?$_GET['city']:'' ?> ">
        <option value="">select city</option>
        <option value="BHOPAL">BHOPAL</option>
        <option value="INDORE">INDORE</option>
        <option value="GWALIOR">GWALIOR</option>

          </select> <br>
          <span class=" error_msg" id="city_error"></span><br>
          
        mobile:  <input type="text" id="mobile" name="mobile" placeholder="mobile" value="<?=isset($_GET['mobile'])?$_GET['mobile']:'' ?>" onkeydown="mobileValueKeyPress();" onkeyup="mobileValueKeyPress();"><br>

        salary:  <input type="text" id="salary" name="salary" placeholder="salary" value="<?=isset($_GET['salary'])?$_GET['salary']:'' ?>"><br>
              
              <span class="error_msg" id="mobile_error"></span><br><br>
              Email :
                  <input type="email" id="email" name="email" placeholder="email"><br>
                  <span class=" error_msg" id="email_error"></span><br>

            password : <input type="password" name="password" placeholder="password"><br><br>
            confirm-password :<input type="password" name="confirm_password" placeholder="confirm_password"><br><br>  
            <span class=" password_msg" id="password_error"></span><br> 



              <input id="submit" type="submit" name="submit" value="Submit" onclick="return validation()"><br><br>


        
    </form>
    <form action=view.php>
           <input id="view" type="submit" name="view" value="veiw"><br><br>
            </form>
  </div>
</body>
<script >

 function nameValueKeyPress()
    {
        var name = document.getElementById("name");
        var s = name.value;
        //console.log(s);
        if(lettersOnlyCheck(s)){
       var name_error = document.getElementById("name_error");
       name_error.innerText = "";

        }
    }
function lettersOnlyCheck(name)
  {
     var regEx = /^[A-Za-z .]+$/;
     if(name.match(regEx) || name == '')
       {
        return true;
       }
     else
       {
       var name_error = document.getElementById("name_error");
       name_error.innerText = "This field contain only aplphabets!";  
       return false;
       }
  } 
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



function validation() 
{
  var email=document.getElementById('email').value;
  var mobile = document.getElementById('mobile');
  var name=document.getElementById('name').value;
  var city=document.getElementById('city').value;
  var temp=true;  
  


  if(name==""&&city==""&&mobile==""&&email=="")
  {
    document.getElementById('name_error').innerText="name is empty"
    document.getElementById('city_error').innerText="city not selected"
    document.getElementById('mobile_error').innerText="checkbox is empty"
    document.getElementById('email_error').innerText="invalid email address"
    temp=false;
    return temp;
    }

  
  else if(name!=""&&city==""&&mobile==""&&email=="")
  {
    document.getElementById('city_error').innerText="city not selected"
    document.getElementById('mobile_error').innerText="checkbox is empty"
    document.getElementById('email_error').innerText="invalid email address"
    temp=false;
    return temp;
  }
  else if(name==""&&city!=""&&mobile==""&&email=="")
  {
    document.getElementById('name_error').innerText="name is empty"
    document.getElementById('mobile_error').innerText="checkbox is empty"
    document.getElementById('email_error').innerText="invalid email address"
    temp=false;
    return temp;
  }
  else if(name==""&&city==""&&mobile!=""&&email=="")
  {
    document.getElementById('name_error').innerText="name is empty"
    document.getElementById('city_error').innerText="city not selected"
    document.getElementById('email_error').innerText="invalid email address"
    temp=false;
    return temp;
  }
  else if(name==""&&city==""&&mobile==""&&email!="")
  {
    document.getElementById('name_error').innerText="name is empty"
    document.getElementById('city_error').innerText="city not selected"
    document.getElementById('mobile_error').innerText="checkbox is empty"

    temp=false;
    return temp;
  }
  else if(name==""&&city==""&&mobileked!=0&&email!="")
  { 
    document.getElementById('name_error').innerText="name is empty"
    document.getElementById('city_error').innerText="city not selected"
    

    temp=false;
    return temp;
  }
  else if(name==""&&city!=""&&mobile==""&&email!="")
  { 
    document.getElementById('name_error').innerText="name is empty"
    document.getElementById('mobile_error').innerText="checkbox is empty"
    

    temp=false;
    return temp;
  }
  else if(name!=""&&city==""&&mobile==""&&email!="")
  { 
    document.getElementById('city_error').innerText="city not selected"
    document.getElementById('mobile_error').innerText="checkbox is empty"
    

    temp=false;
    return temp;
  }

        else if(name==""&&city!=""&&mobile!=0&&email=="")
  { 
    document.getElementById('email_error').innerText="invalid email address"
    document.getElementById('name_error').innerText="name is empty"
    

    temp=false;
    return temp;
  }
  else if(name!=""&&city==""&&mobile!=0&&email=="")
  { 
    document.getElementById('city_error').innerText="city not selected"
    document.getElementById('email_error').innerText="invalid email address"
    

    temp=false;
    return temp;
  }
  else if(name!=""&&city!=""&&mobile==""&&email=="")
  { 
    document.getElementById('email_error').innerText="invalid email address"
    document.getElementById('mobile_error').innerText="checkbox is empty"
    

    temp=false;
    return temp;
  }
  else if(name!=""&&city!=""&&mobile!=0&&email=="")
  {
    
    document.getElementById('email_error').innerText="invalid email address"
    temp=false;
    return temp;
  }
else if(name!=""&&city!=""&&mobile==""&&email!="")
  {
    
    document.getElementById('mobile_error').innerText="checkbox is empty"
    temp=false;
    return temp;
  }
  else if(name!=""&&city==""&&mobile!=0&&email!="")
  {
    
    document.getElementById('city_error').innerText="city not selected"
    temp=false;
    return temp;
  }
  else if(name=""&&city!=""&&mobile!=0&&email!="")
  {
    
    document.getElementById('email_error').innerText="invalid email address"
    temp=false;
    return temp;
  }
     

  
  
  else
    return temp;
}





</script>
</html>
