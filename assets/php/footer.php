<?php
  foreach ($scripts as &$script) {
    // JQuery
    if($script[0] == "jquery") {
      echo "\t<!-- ". strtoupper($script[2]) ." JQuery -->\n";
      if($script[2] == "cdn") {
        echo "\t<script src=\"http://code.jquery.com/jquery-". $script[1] .".min.js\"></script>\n";
      } else if($script[2] == "local") {
        
      }
    }
    // JQuery UI
    if($script[0] == "jquery-ui") {
      echo "\t<!-- ". strtoupper($script[2]) ." JQuery-UI -->\n";
      if($script[2] == "cdn") {
        echo "\t<script src=\"http://code.jquery.com/ui/". $script[1] ."/jquery-ui.js\"></script>\n";
      } else if($script[2] == "local") {
        
      }
    }
    // Font Awesome
    if($script[0] == "bootstrap") {
      echo "\t<!-- ". strtoupper($script[2]) ." Bootstrap -->\n";
      if($script[2] == "cdn") {
        echo "\t<script src=\"//netdna.bootstrapcdn.com/bootstrap/". $script[1] ."/js/bootstrap.min.js\"></script>\n";
      } else if($script[2] == "local") {
        
      }
    }
  }
?>
    <!-- <?php echo $game_title; ?> -->
    <?php echo $add_script; ?>
    <script type="text/javascript">var stage = "<?php echo $stage; ?>"</script>
    <script src="assets/js/game.js"></script>
  </body>
</html>