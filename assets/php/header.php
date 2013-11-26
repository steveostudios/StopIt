<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php echo $game_title; ?></title>
<?php
  foreach ($styles as &$style) {
    // JQuery UI
    if($style[0] == "jquery-ui") {
      echo "\t<!-- ". strtoupper($style[2]) ." JQuery UI -->\n";
      if($style[2] == "cdn") {
        echo "\t<link href=\"http://code.jquery.com/ui/". $style[1] ."/themes/smoothness/jquery-ui.css\" rel=\"stylesheet\" media=\"screen\">\n";
      } else if($style[2] == "local") {
        
      }
    }
    // Bootstrap
    if($style[0] == "bootstrap") {
      echo "\t<!-- ". strtoupper($style[2]) ." Bootstrap -->\n";
      if($style[2] == "cdn") {
        echo "\t<link href=\"//netdna.bootstrapcdn.com/bootstrap/". $style[1] ."/css/bootstrap.min.css\" rel=\"stylesheet\" media=\"screen\">\n";
      } else if($style[2] == "local") {
        
      }
    }
    // Font Awesome
    if($style[0] == "fontawesome") {
      echo "\t<!-- ". strtoupper($style[2]) ." Font Awesome -->\n";
      if($style[2] == "cdn") {
        echo "\t<link href=\"//netdna.bootstrapcdn.com/font-awesome/". $style[1] ."/css/font-awesome.min.css\" rel=\"stylesheet\" media=\"screen\">\n";
      } else if($style[2] == "local") {
        
      }
    }
  }
?>
    <!-- <?php echo $game_title; ?> -->
    <link href="assets/css/style.css" type="text/css" rel="stylesheet">
  </head>
  <body>