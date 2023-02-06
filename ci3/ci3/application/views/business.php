<?php
//echo "<pre>";
//print_r($users);
?>
<!doctype html>
<html lang="en">

<head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <title>Business</title>
</head>

<body>
        
        <h1>Business</h1>
        <a href=<?php
                echo base_url('home'); ?>>HOME</a>
        <a href=<?php
                echo base_url('contacts'); ?>>Contacts</a>
        <a class="text-success" href=<?php
                echo base_url('business'); ?>>Business</a>
        <a href=<?php
                echo base_url('about'); ?>>About</a>
               <!-- <a href=<?php //echo base_url('error_404'); ?>>Error</a> -->



               <table class="table  table-success">
                <thead>
                <tr class="table-dark ">

                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">NUMBER</th>
                        </tr>
                </thead>
                <tbody>
                        <?php foreach ($users as $business) {
                        ?>
                                <tr>
                                        <td><?= $business['user_id']; ?></th>
                                        <td><?= $business['user_name']; ?></td>
                                        <td><?= $business['user_number']; ?></td>
                                </tr>
                        <?php
                        }
                        ?>
                </tbody>
        </table>
        <!-- <h1><?php //echo $name; 
                        ?><h1> -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>