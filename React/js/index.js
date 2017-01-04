//Scripting like a Cassiopeia Main

// Scrolling Smoothly with navbar
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 36
        }, 800);
        return false;
      }
    }
  });

  //Collapse navbar on collapsed menu clicks
  $('.nav a').on('click', function () {
    if ($('.navbar-toggle').css('display') != 'none') {
      $(".navbar-toggle").trigger("click");
    }
  });

  //Load correct navbar on page load
  if (window.innerWidth > 768) {
    if (window.scrollY > 0) {
      $('#navbar').removeClass("navbar-locked");
      // $('#navbar').addClass("navbar-fixed-top");
    } else {
      // $('#navbar').removeClass("navbar-fixed-top");
      $('#navbar').addClass("navbar-locked");
    }
  }
  //On Scroll
  $(window).scroll(function () {
    if (window.innerWidth > 768) {
      if (window.scrollY > 0) {
        $('#navbar').removeClass("navbar-solid");
      } else {
        $('#navbar').addClass("navbar-solid");
      }
    }
  });

  //It's why they call me edgelord >_<
  var dark = true;
  $('#LightSwitch').on('click', function () {
    if (dark) {
      $('#light-theme').attr('href', '../Resources/css/index-light.css');
      $('#WebsiteThumb').attr('src', '../Resources/assets/grass.jpg');
      dark = false;
    } else {
      $('#light-theme').attr('href', '');
      $('#WebsiteThumb').attr('src', '../Resources/assets/clouds.jpg');
      dark = true;
    }
  });

  //Soon™
  var footerDrawerHidden = true;
  $('.footer-drawer-toggle').on('click', function () {
    if (footerDrawerHidden) {
      $('.footer-drawer').removeClass('hidden');
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      $('.footer-drawer').addClass('hidden');
    }
    $('#footer-toggle-button').toggleClass('fa-angle-double-down fa-angle-double-up');
    footerDrawerHidden = !footerDrawerHidden;
  });

  //Dance Party
  var redPill = true;
  $('#pill').on('click', function () {
    if (redPill) {
      $('#pill').attr('src', '../Resources/assets/BluePill.svg');
      $('.easteregg').removeClass('hidden');
    } else {
      $('#pill').attr('src', '../Resources/assets/RedPill.svg');
      $('.easteregg').addClass('hidden');
      $('.subsection-image img').removeClass('shake-slow shake-constant');
      if (canvasEnabled) {
        initalizeCanvas();
      }
    };
    redPill = !redPill;
  });

  $('#mop').on('click', function () {
    $('.subsection-image img').toggleClass('shake-slow shake-constant');
  });

  //Get last.fm data/THIS IS MY JAM!!!1!1!one1!!
  $.ajax({
    type: 'POST',
    url: 'http://ws.audioscrobbler.com/2.0/',
    data: 'method=user.getRecentTracks&' + 'limit=1&' + 'user=TheBroccOLee&' + 'api_key=4bf436262dec3163d512d025bfd1363d&' + 'format=json',
    dataType: 'jsonp',
    success: function (data) {
      if (data.recenttracks.track[0]["@attr"] != null && data.recenttracks.track[0]["@attr"].nowplaying == 'true') {
        $('#current-song-display').removeClass('hidden');
        $('#current-song-text').text(data.recenttracks.track[0].name + ' - ' + data.recenttracks.track[0].artist['#text']);
        $('#current-song-text').attr('href', data.recenttracks.track[0].url);
      }
    },
    error: function (code, message) {
      //RIP LASTFM API
      alert('Error Retrieving music');
    }
  });

  var canvasEnabled = false;
  var canvasInterval;
  var initalizeCanvas = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    if (canvasEnabled) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      clearInterval(canvasInterval);
      canvasEnabled = false;
      return;
    }

    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
    var y = window.innerHeight;

    var segCount = 5;
    var colors = ["#F0F8FF", "#ADD8E6", "#00BFFF", "#6495ED", "#4682B4", "#191970"];

    var segments = [];
    var temp, start, end, thickness, color, direction;
    var count = 0;

    for (var i = 150; i < window.innerHeight * 0.9; i = i + window.innerHeight * 0.02) {
      for (var j = 0; j < segCount; j++) {

        temp = Math.random() * (2 * Math.PI / segCount) + j * (2 * Math.PI / segCount);
        start = Math.random() * (2 * Math.PI / segCount) + j * (2 * Math.PI / segCount) + 1.2;
        end = Math.max(temp, start);
        start = Math.min(temp, start);
        thickness = Math.round(Math.random() * window.innerHeight * 0.02);
        color = colors[Math.round(Math.random() * 5)];
        direction = (Math.random() - 0.5) * 0.05;

        segments[count] = { ring: i, start: start, end: end, thickness: thickness, color: color, direction: direction };
        count++;
      }
    }

    var redraw = function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.rect(0, 50, canvas.width, canvas.height);
      context.fillStyle = "rgba(0,0,0, 0.6)";
      context.fill();

      for (var i = 0; i < segments.length; i++) {
        context.beginPath();
        context.lineWidth = segments[i].thickness;
        context.arc(0, y, segments[i].ring, segments[i].start, segments[i].end);
        context.strokeStyle = segments[i].color;
        context.stroke();
      }
      for (var i = 0; i < segments.length; i++) {
        segments[i].start += segments[i].direction;
        segments[i].end += segments[i].direction;
      }
    };
    canvasInterval = setInterval(redraw, 60);
    canvasEnabled = true;
    $('html,body').animate({ scrollTop: 0 }, 800);
  };

  //Spin to win?
  $('#fea').on('click', initalizeCanvas);
});