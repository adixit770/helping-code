<?php 
include 'dbconnection.php';
//$view ="select *from entry where user_salary=(select Max(user_salary) from entry)";
// $view ="select *from entry where user_salary=(select Min(user_salary) from entry)";
 //$view ="select *from entry group by user_salary order by  user_salary desc limit 0,1";
// $view="select * from entry where user_id<3";
// $view="select * from entry where user_name like 'aman'";

$view="select * from entry";

if(isset($_GET['search']))
{
	$search=$_GET['search'];
	 $view="select * from entry where 
	 user_name like'%$search%'or
	 user_email like'%$search%'or
	 user_mobile like'%$search%'or
	 user_id like'%$search%'or
	 user_salary like'%$search%'";
}

$result=$conn->query($view);
?>
<style >
	.td{
		height: 6rem;
	}
</style>
<form action="view.php">
      <input  style="background: linear-gradient(45deg, #e69494, #78e1a8b0); width: 33rem;height: 2rem;margin-inline: 17rem;" type="text" name="search" placeholder="Search Data">
      <input style="width: 9rem;height: 30px;margin-inline: -17rem;background: repeating-linear-gradient(45deg, #e48080, #5bec8dab 100px);"type="submit"value="Search">
    </form>
<table border="1" style="border: 1px solid darkred;font-size: larger;color: navy; margin-inline: 17rem;background: linear-gradient(45deg, #c65c5c, #a2dcad);width: 63rem;height: 9rem;"font-style: oblique;color: navy; >
	<tr>
		<th>ID</th>
		<th>NAME</th>
		<th>CITY</th>
		<th>EMAIL</th>
		<th>MOBILE</th>
		<th>SALARY</th>
		<th>ACTION</th>
	</tr>

<?php
while ($row=$result->fetch_assoc())
 {
 ?>
	<tr>
		<td class="td"><?=$row['user_id']?></td>
		<td class="td"><?=$row['user_name']?></td >
		<td class="td"><?=$row['user_city']?></td >
		<td class="td"><?=$row['user_email']?></td>
		<td class="td"><?=$row['user_mobile']?></td >
		<td class="td"><?=$row['user_salary']?></td >

		<td class="td"><a style="text-decoration: none;" href="update.php?user_id=<?=$row['user_id']?>">EDIT</a>
		<a style="text-decoration: none;" href="delete.php?user_id=<?=$row['user_id']?>">DELETE</a></td>

	</tr>
<?php } ?>
</table>
