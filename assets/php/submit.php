<?php
  $stage = $_POST['stage'];
  require_once('db.php');
  $sql = "INSERT INTO `stopit`
       (`id`, `date`, `email`, `prize_id`, `prize_name`)
       VALUES 
       (NULL, '". date("Y-m-d H:i:s") ."', '". $_POST['email'] ."', '". $_POST['prize_id'] ."', '". $_POST['prize_name'] ."')";

  if ($mysqli->connect_errno) {
    exit();
  }
  
  $result = $mysqli->query($sql);
  if (!$result) {
    exit();
  }
?>