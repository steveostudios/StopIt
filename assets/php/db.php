<?php
  //$stage = 'development';
  $server = [
    'development' => [
      'hostname' => 'localhost',
      'username' => 'root',
      'password' => 'root',
      'database' => 'dym_app'
    ],
    'production' => [
      'hostname' => 'localhost',
      'username' => 'root',
      'password' => 'root',
      'database' => 'dym_app'
    ]
  ];
  $mysqli = new mysqli($server[$stage]['hostname'], $server[$stage]['username'], $server[$stage]['password'], $server[$stage]['database']);
?>