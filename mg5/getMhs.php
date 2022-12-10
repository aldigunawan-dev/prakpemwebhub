<table border="1">
<tr>
  <th> No. </th>
  <th> NIM </th>
  <th> Nama </th>
  <th> Program Studi </th>
</tr>
<?php
  $mysqli = new mysqli("localhost", "root", "", "ajax");
  if($mysqli->connect_error) {
    exit('Could not connect');
  }

  $sql = "SELECT * FROM mahasiswa WHERE prodi = ?";

  $stmt = $mysqli->prepare($sql);
  $stmt->bind_param("s", $_GET['q']);
  $stmt->execute();
  $result = $stmt->get_result();

  $i = 0;
  while ($data = mysqli_fetch_array($result)) :
  $i++;
?>

<tr>
  <td> <?= $i ?> </td>
  <td> <?= $data["nim"] ?> </td>
  <td> <?= $data["nama"] ?> </td>
  <td> <?= $data["prodi"] ?> </td>
</tr>
  <?php
    endwhile
  ?>
</table>
