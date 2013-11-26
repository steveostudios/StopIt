<?php 
  $stage = 'development';
  $game_slug = 'stopit';
  $game_title = 'Stop It';
  $styles = [
    ['jquery-ui', '1.10.3', 'cdn'],
    ['bootstrap', '3.0.0', 'cdn'],
    ['fontawesome', '4.0.2', 'cdn']
  ];
  $scripts =[
    ['jquery', '2.0.3' ,'cdn'],
    ['jquery-ui', '1.10.3' ,'cdn'],
    ['bootstrap', '3.0.0' ,'cdn']
  ];
  require_once('assets/php/header.php');
?>
  <ul id="prizes"></ul>
  <div id="input_overlay">
    <form id="form_email" class="form-group" action="assets/php/submit.php">
      <input type="email" id="email" name="email" class="form-control" placeholder="Type your email" />
      <div id="alert" class="alert alert-danger"></div>
    </form>
  </div>
  <div id="overlay"></div>
  <div id="overlay_prize"><span id="prize_icon"></span><span id="prize_name"></span><span id="prize_description"></span></div>  
<?php
  require_once('assets/php/footer.php');
?>