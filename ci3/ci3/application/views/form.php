<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo base_url('insert')?>" method="post">

    Email:
        <input type="email" name="email" id="email" placeholder="Email"/>
    Mobile:
        <input type="text" name="mobile" id="mobile" placeholder="Mobile"/>

        <input type="submit" value="submit">submit</input>
        
    </form>
</body>
</html>