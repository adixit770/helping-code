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

        <title>Home</title>
</head>

<body>


        <h1>Home</h1>
        <a class="text-warning" href=<?php
                                        echo base_url('home'); ?>>HOME</a>
        <a href=<?php
                echo base_url('contacts'); ?>>Contacts</a>
        <a href=<?php
                echo base_url('business'); ?>>Business</a>
        <a href=<?php
                echo base_url('about'); ?>>About</a><br>
        <!-- <a href=<?php //echo base_url('error_404'); 
                        ?>>Error</a> -->
        <form method="post" action="<?php
                echo base_url('insert'); ?>">
                <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" name="name" placeholder="Name">
                        <label for="floatingInput">NAME</label>
                </div>
                <div class="form-floating" >
                        <input type="text" class="form-control" id="floatingPassword " name="number" placeholder="Number">
                        <label for="floatingNumber">Number</label>
                </div><br>
                <input type="submit">
        </form><br>

        <table class="table  table-warning">
                <thead>
                        <tr class="table-dark ">
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">NUMBER</th>
                                <th scope="col">Action</th>
                        </tr>
                </thead>
                <tbody>
                        <?php foreach ($users as $home) ////database name home is variable
                        {
                        ?>
                                <tr>
                                        <td><?= $home['user_id']; ?></th>
                                        <td><?= $home['user_name']; ?></td>
                                        <td><?= $home['user_number']; ?></td>
                                        <td><a href="<?php echo base_url() ?>home?id=<?= $home['user_id']; ?>">Edit</a>
                                            <a href="<?php echo base_url() ?>delete?id=<?= $home['user_id']; ?>">Delete</a>
                                        </td>
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