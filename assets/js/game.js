$(function() {
  var prizes = [
    { 'id': 0
      , 'name': 'Printer'
      , 'icontype': 'fa'
      , 'icon': 'print'
      , 'description': 'A brand new printer!'
      , 'color': '#4AD9D9'
      , 'invert': true
    }
    , { 'id': 1
      , 'name': '$10 store credit'
      , 'icontype': 'fa'
      , 'icon': 'money'
      , 'description': '$10 store credit'
      , 'color': '#F5A503'
    }
    , { 'id': 2
      , 'name': 'Nothing'
      , 'icontype': 'fa'
      , 'icon': 'frown-o'
      , 'description': 'Absolutely nothing'
      , 'color': '#F2385A'
      , 'invert': true
    }
    , { 'id': 3
      , 'name': 'Flag'
      , 'icontype': 'fa'
      , 'icon': 'flag'
      , 'description': 'Check out this cool flag. It\'s yours!'
      , 'color': '#36B1BF'
    }
    , { 'id': 4
      , 'name': 'Fire Extinguisher'
      , 'icontype': 'fa'
      , 'icon': 'fire-extinguisher'
      , 'description': 'You never know...'
      , 'color': '#F5A503'
      , 'invert': true
    }
    , { 'id': 5
      , 'name': 'Rocket'
      , 'icontype': 'fa'
      , 'icon': 'rocket'
      , 'description': 'To the moon, Gromet'
      , 'color': '#36B1BF'
      , 'invert': true
    }
    , { 'id': 6
      , 'name': 'Microphone'
      , 'icontype': 'fa'
      , 'icon': 'microphone'
      , 'description': 'Mic check...1...2...3'
      , 'color': '#F2385A'
      , 'invert': true
    }
    , { 'id': 7
      , 'name': 'Anchor'
      , 'icontype': 'fa'
      , 'icon': 'anchor'
      , 'description': 'You won a boat anchor. Good luck getting that on the plane'
      , 'color': '#4AD9D9'
    }
    , { 'id': 8
      , 'name': 'Apple'
      , 'icontype': 'fa'
      , 'icon': 'apple'
      , 'description': 'You won a partially eaten apple'
      , 'color': '#F5A503'
      , 'invert': true
    }
    , { 'id': 9
      , 'name': 'Thumbs Up'
      , 'icontype': 'fa'
      , 'icon': 'thumbs-up'
      , 'description': 'Thumbs up from Parker - right on!'
      , 'color': '#36B1BF'
    }
    , { 'id': 10
      , 'name': 'Umbrella'
      , 'icontype': 'fa'
      , 'icon': 'umbrella'
      , 'description': 'It might be raining outside - I wouldn\'t know cuz I\'m stuck in here...'
      , 'color': '#F2385A'
      , 'invert': true
    }
    , { 'id': 11
      , 'name': 'Flask'
      , 'icontype': 'fa'
      , 'icon': 'flask'
      , 'description': 'You won a flask full of something... I don\'t remember what I put in it.'
      , 'color': '#36B1BF'
    }
    , { 'id': 12
      , 'name': 'Heart'
      , 'icontype': 'fa'
      , 'icon': 'heart'
      , 'description': 'You won my heart'
      , 'color': '#F2385A'
      , 'invert': true
    }
    , { 'id': 13
      , 'name': 'Floppy'
      , 'icontype': 'fa'
      , 'icon': 'floppy-o'
      , 'description': 'You won a 3-1/4 floppy disk. I don\'t know what is on it because I can\'t read it.'
      , 'color': '#F5A503'
    }
    , { 'id': 14
      , 'name': 'Up'
      , 'icontype': 'fa'
      , 'icon': 'hand-o-up'
      , 'description': 'What\'s that?'
      , 'color': '#4AD9D9'
      , 'invert': true
    }
    , { 'id': 15
      , 'name': 'Card'
      , 'icontype': 'fa'
      , 'icon': 'credit-card'
      , 'description': 'You won Josh\'s Starbucks Gold card'
      , 'color': '#36B1BF'
      , 'invert': true
    }
    , { 'id': 16
      , 'name': 'Heart'
      , 'icontype': 'fa'
      , 'icon': 'heart'
      , 'description': 'You won a my heart'
      , 'color': '#F2385A'
      , 'invert': true
    }
    , { 'id': 17
      , 'name': 'Arrow'
      , 'icontype': 'fa'
      , 'icon': 'arrow-up'
      , 'description': 'Something'
      , 'color': '#4AD9D9'
    }
    , { 'id': 18
      , 'name': 'Check'
      , 'icontype': 'fa'
      , 'icon': 'check-circle-o'
      , 'description': 'You won a check(mark). It\'s worth it\'s weight in pixels'
      , 'color': '#36B1BF'
      , 'invert': true
    }
    , { 'id': 19
      , 'name': 'Heart'
      , 'icontype': 'fa'
      , 'icon': 'heart'
      , 'description': 'You won a my heart'
      , 'color': '#F5A503'
      , 'invert': true
    }
    , { 'id': 20
      , 'name': 'Light Bulb'
      , 'icontype': 'fa'
      , 'icon': 'lightbulb-o'
      , 'description': 'You won a light bulb. It\'s in my bag.'
      , 'color': '#4AD9D9'
      , 'invert': true
    }
    , { 'id': 21
      , 'name': 'Arrow'
      , 'icontype': 'fa'
      , 'icon': 'arrow-right'
      , 'description': 'You won whatever this means'
      , 'color': '#ff0033'
    }
    , { 'id': 22
      , 'name': 'Music'
      , 'icontype': 'fa'
      , 'icon': 'music'
      , 'description': 'You won a Petra CD'
      , 'color': '#F5A503'
      , 'invert': true
    }
    , { 'id': 23
      , 'name': 'Plus'
      , 'icontype': 'fa'
      , 'icon': 'plus-circle'
      , 'description': 'You won math'
      , 'color': '#36B1BF'
      , 'invert': true
    }
    , { 'id': 24
      , 'name': 'Email'
      , 'icontype': 'fa'
      , 'icon': 'envelope-o'
      , 'description': 'Check your email for an awesome prize'
      , 'color': '#F5A503'
    }
    , { 'id': 25
      , 'name': 'Download'
      , 'icontype': 'fa'
      , 'icon': 'download'
      , 'description': 'You won a downloadable something'
      , 'color': '#F2385A'
      , 'invert': true
    }
    , { 'id': 26
      , 'name': 'Instagram'
      , 'icontype': 'fa'
      , 'icon': 'camera'
      , 'description': 'You won an Instagram with Parker'
      , 'color': '#4AD9D9'
      , 'invert': true
    }
    , { 'id': 27
      , 'name': 'Friends'
      , 'icontype': 'fa'
      , 'icon': 'users'
      , 'description': 'You won friends'
      , 'color': '#36B1BF'
    }
    , 
  ];
  
  var emails = [];
  var state = 'standby';  
  var email, prize_id, prize_name, interval, testresults;
  
  // Initial focus on email input.
  $('#form_email #email').focus();
  
  // Build prizes.
  $.each(prizes, function(i, item) {
    var icon;
    switch(prizes[i].icontype) {
      case 'fa':
        icon = '<i class="fa fa-'+ prizes[i].icon +' fa-5x"></i>';
        break;
      case 'other':
        //execute code block 2
        break;
      default:
        //code to be executed if n is different from case 1 and 2
    }
    var listyle;
    if (prizes[i].invert == true) {
      listyle = 'background: '+ prizes[i].color +'; color: #FFFFEC;';
    } else {
      listyle = 'background: #FFFFEC; color: '+ prizes[i].color;
    }
    $('ul#prizes').append('<li id="prize_'+ prizes[i].id +'" style="'+ listyle +'">'+ icon +'<br /><span class="title">'+ prizes[i].name +'</span></li>');
  });

  // On "Return" button push.
  $(document).keypress(function(e) {
    if(e.which == 13) {
      if(state == 'standby') {
        if(checkemail($('#email').val()) == true) {
          if($.inArray($('#email').val(), emails) != 0) {
            email = $('#email').val();
            $('#form_email').hide();
            emails.push(email);
            console.log(emails);
            interval = setInterval(function() {myTimer()},100);
            state = 'running';
          } else {
            $('#alert').removeClass('alert-success').addClass('alert-danger');          
            $('#alert').text('Oh snap! Looks like the email already exists. No cheating!');
            $('#alert').show();
          }
        } else {
          $('#alert').removeClass('alert-success').addClass('alert-danger');          
          $('#alert').text('Looks like a type - cuz that doesn\'t look like an email address.');
          $('#alert').show();
        }
      } else if(state == 'running') {
        clearInterval(interval);
        prize_id = Math.floor(Math.random() * prizes.length) + 1;
        prize_name = prizes[prize_id].name;
        $('ul#prizes li').css("border", "none");
        $('#overlay_prize #prize_icon').html('<i class="fa fa-'+ prizes[prize_id].icon +' fa-5x"></i>');
        $('#overlay_prize #prize_name').text(prizes[prize_id].name);
        $('#overlay_prize #prize_description').text(prizes[prize_id].description);
        $('ul#prizes li#prize_'+ prize_id).css("border", "10px solid #fff");
        $('#overlay').css('background', prizes[prize_id].color);
        $('#overlay').fadeIn();
        $('#overlay_prize').fadeIn();
        state = 'display';
      } else if(state == 'display') {
        $('#overlay').fadeOut();
        $('#overlay_prize').fadeOut();
        $('ul#prizes li').css("border", "none");
        $('#form_email').find("input[type=text], input[type=email], textarea").val("");
        $('#form_email').show();
        $('#form_email #email').focus();
        state = 'standby';
      var formURL = $('#form_email').attr("action");
      $.ajax( {
          url : formURL,
          type: "POST",
          data : 'stage='+ stage +'&email='+ email +'&prize_id='+ prize_id +'&prize_name='+ prize_name,
          success:function(data, textStatus, jqXHR) {            
            //alert(data);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            //if fails      
          }
      });
      }
    }
  });
  
  // Do nothing on submit.
  $( "#form_email" ).submit(function(e) {
    e.preventDefault();
  });
  // Remove alert when typing.
  $('#email').on('input', function() {
    $('#alert').hide();
  });
  // Run the timer.
  function myTimer() {
    $('ul#prizes li').css("border", "none");
    
    var random = Math.floor(Math.random() * prizes.length) + 1;
    $('ul#prizes li#prize_'+ random).css("border", "10px solid #fff");
    //$('ul#prizes li#prize_'+ random).toggle({ effect: "scale", percent: '110%'});
  }
  // Email validation.
  function checkemail(email) {
    var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (filter.test(email)) {
      testresults = true;
    } else {      
      testresults = false;
    }
    return (testresults)
  }
});