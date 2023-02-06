<?php
session_start();
if (!isset($_SESSION['person_id']))
{
    header("Location: index.php");
    die();
}
?>
<?php
include 'datac.php';
//$view ="select *from entry where person_salary=(select Max(person_salary) from entry)";
// $view ="select *from entry where person_salary=(select Min(person_salary) from entry)";
//$view ="select *from entry group by person_salary order by  person_salary desc limit 0,1";
// $view="select * from entry where person_id<3";
// $view="select * from entry where person_name like 'aman'";
$view = "select * from profile";

if (isset($_GET['search']))
{
    $search = $_GET['search'];
    $view = "select * from profile where 
	 person_name like'%$search%'or
	 person_email like'%$search%'or
	 person_mobile like'%$search%'or
	 person_id like'%$search%'
	 person_city like '%$search%'";
}

$result = $conn->query($view);
?>
<style >
	.td{
		height: 6rem;
	}
</style>
<form action="show.php">
      <input  style="background: linear-gradient(45deg, #e69494, #78e1a8b0); width: 33rem;height: 2rem;margin-inline: 17rem;" type="text" name="search" placeholder="Search Data">
      <input style="width: 9rem;height: 30px;margin-inline: -17rem;background: repeating-linear-gradient(45deg, #e48080, #5bec8dab 100px);"type="submit"value="Search">
    </form>
<table border="1" style="border: 1px solid darkred;font-size: larger;color: navy; margin-inline: 17rem;background: linear-gradient(45deg, #c65c5c, #a2dcad);width: 63rem;height: 9rem;"font-style: oblique;color: navy; >
	<tr>
		<th>ID</th>
		<th>NAME</th>
		<th>EMAIL</th>
		<th>MOBILE</th>
		<th>CITY</th>
		<th>ACTION</th>
	</tr>

<?php
while ($row = $result->fetch_assoc())
{
?>
	<tr>
		<td class="td"><?=$row['person_id'] ?></td>
		<td class="td"><?=$row['person_name'] ?></td >
		<td class="td"><?=$row['person_email'] ?></td>
		<td class="td"><?=$row['person_mobile'] ?></td >
		<td class="td"><?=$row['person_city'] ?></td >
		

		<td class="td"><a style="text-decoration: none;" href="update1.php?person_id=<?=$row['person_id'] ?>">EDIT</a>
		<a style="text-decoration: none;" href="delete1.php?person_id=<?=$row['person_id'] ?>">DELETE</a></td>

	</tr>
<?php
} ?>
</table>
