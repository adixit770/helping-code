<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div>

<table>

        <thead>

            <tr>

                <th scope="col">Id</th>

                <th scope="col">Name</th>

                <th scope="col">Mobile</th>        

                <th scope="col">Address</th>
                <th scope="col">Email</th>

            </tr>

        </thead>

        <tbody>

            <?php

           foreach ($users as $aman){

            ?>

                <tr>

                    <td class="td"><?= $aman['user_id'] ?></td>

                    <td class="td"><?= $aman['user_name'] ?></td>

                    <td class="td"><?= $aman['user_mobile'] ?></td>
                    <td class="td"><?= $aman['user_add'] ?></td>
                    <td class="td"><?= $aman['user_email'] ?></td>

                    <td class="td"><a  href="<?php echo base_url();?>  update?id=<?= $aman['user_id']?>" >EDIT</a>

                                   <a  href="<?php echo base_url();?> delete?id=<?= $aman['user_id']?>">DELETE</a>

                    </td>

                </tr>

            <?php

            } ?>

        </tbody>

    </table>

    </div>
</body>
</html>

<?php
// echo "<pre>";
// print_r($users);
// echo $name;
?>

