$(document).ready(function(){
  console.log ('Scripts Loaded');
  var apiParams0 = {action: 'query', prop: 'extracts', format: 'json', titles: 'Dreamville_Records', exintro: 1}; //pageid = 41775413
  var apiParams1 = {action: 'query', prop: 'extracts', exsentences: '9', format: 'json', titles: 'J._Cole', exintro: 1}; //pageid = 23306612 - exsentences limits the amount of sentences extracted, his full default extraction is too large.
  var apiParams2 = {action: 'query', prop: 'extracts', format: 'json', titles: 'Omen_(musician)', exintro: 1}; //pageid = 43576965
  var apiParams3 = {action: 'query', prop: 'extracts', format: 'json', titles: 'Bas_(rapper)', exintro: 1}; //pageid = 42614201
  var apiParams4 = {action: 'query', prop: 'extracts', format: 'json', titles: 'Cozz', exintro: 1}; //pageid = 43576183
  var apiParams5 = {action: 'query', prop: 'extracts', format: 'json', titles: 'Lute_(rapper)', exintro: 1}; //pageid = 48760021
  var apiParams6 = {action: 'query', prop: 'extracts', format: 'json', titles: 'Ari_Lennox', exintro: 1}; //pageid = 48760011
  var apiParams7 = {action: 'query', prop: 'extracts', format: 'json', titles: 'J.I.D', exintro: 1}; //pageid = 53256071
  var apiParams8 = {action: 'query', prop: 'extracts', format: 'json', titles: 'EarthGang', exintro: 1}; //pageid = 44017272
  //made separate api parameter variables for each article

  $.ajax({ //as of now, it looks like a may have to do a separate ajax call for each description
    "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams0),
    "dataType": "jsonp",
    //data: apiParams,
    success: function(response){
      console.log(response.query.pages[41775413].extract);
      var dreamvilleInfo = response.query.pages[41775413].extract;
      $('#defaultinfo').append(dreamvilleInfo);
    },
    error: function(msg){
      console.log('error');
    }
  });


  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;



  $('#ai1').click(function(){
    $('#defaultinfo, #info2, #info3, #info4, #info5, #info6, #info7, #info8').css("display", "none");
    $('#info1, #modalheader, #modalbodytext, #player, #modalbillboard, #modalvid').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info1').css("display", "block");
    $('#modalbox').css({"background-color": "#a71419","border-color": "#a71419"});
    $('#myBtn').css("z-index", "0");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams1),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[23306612].extract);
        var jColeInfo = response.query.pages[23306612].extract;
        var jColeTitle = response.query.pages[23306612].title;
        $('#info1').append(jColeInfo);
        $('#modalheader').append(jColeTitle);
      },
      error: function(msg){
        console.log('error');
      }
    });
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'vUTI4bPdlgE'
    });
  });
  $('#ai2').click(function(){
    $('#defaultinfo, #info1, #info3, #info4, #info5, #info6, #info7, #info8').css("display", "none");
    $('#info2, #modalheader, #modalbodytext, #player, #modalbillboard, #modalvid').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info2').css("display", "block");
    $('#modalbox').css({"background-color": "#214c86","border-color": "#214c86"});
    $('#myBtn').css("z-index", "0");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams2),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[43576965].extract);
        var omenInfo = response.query.pages[43576965].extract;
        var omenTitle = 'OMEN'; //Omen's wikipedia title includes "(Musician)" so I just hard coded this one and a few others with similar issues
        $('#info2').append(omenInfo);
        $('#modalheader').append(omenTitle);
      },
      error: function(msg){
        console.log('error');
      }
    });
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'f7nbrgAyVuk'
    });
  });
  $('#ai3').click(function(){
    $('#defaultinfo, #info1, #info2, #info4, #info5, #info6, #info7, #info8').css("display", "none");
    $('#info3, #modalheader, #modalbodytext, #player, #modalbillboard, #modalvid').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info3').css("display", "block");
    $('#modalbox').css({"background-color": "#d7d433","border-color": "#d7d433"});
    $('#myBtn').css("z-index", "0");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams3),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[42614201].extract);
        var basInfo = response.query.pages[42614201].extract;
        var basTitle = 'BAS';
        $('#info3').append(basInfo);
        $('#modalheader').append(basTitle);
      },
      error: function(msg){
        console.log('error');
      }
    });
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'OA8aw07dpg0'
    });
  });
  $('#ai4').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info5, #info6, #info7, #info8').css("display", "none");
    $('#info4, #modalheader, #modalbodytext, #player, #modalbillboard, #modalvid').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info4').css("display", "block");
    $('#modalbox').css({"background-color": "#519e9d","border-color": "#519e9d"});
    $('#myBtn').css("z-index", "0");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams4),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[43576183].extract);
        var cozzInfo = response.query.pages[43576183].extract;
        var cozzTitle = response.query.pages[43576183].title;
        $('#info4').append(cozzInfo);
        $('#modalheader').append(cozzTitle);
      },
      error: function(msg){
        console.log('error');
      }
    });
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'OL7pnChf_9M'
    });
  });
  $('#ai5').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info6, #info7, #info8').css("display", "none");
    $('#info5, #modalheader, #modalbodytext, #player, #modalbillboard, #modalvid').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info5').css("display", "block");
    $('#modalbox').css({"background-color": "#9ec3cc","border-color": "#9ec3cc"});
    $('#myBtn').css("z-index", "0");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams5),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[48760021].extract);
        var luteInfo = response.query.pages[48760021].extract;
        var luteTitle = 'LUTE';
        $('#info5').append(luteInfo);
        $('#modalheader').append(luteTitle);
      },
      error: function(msg){
        console.log('error');
      }
    });
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'FXQNZJYWuak'
    });
  });
  $('#ai6').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info5, #info7, #info8').css("display", "none");
    $('#info6, #modalheader, #modalbodytext, #player, #modalbillboard, #modalvid').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info6').css("display", "block");
    $('#modalbox').css({"background-color": "#8e8862","border-color": "#8e8862"});
    $('#myBtn').css("z-index", "0");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams6),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[48760011].extract);
        var ariLennoxInfo = response.query.pages[48760011].extract;
        var ariLennoxTitle = response.query.pages[48760011].title;
        $('#info6').append(ariLennoxInfo);
        $('#modalheader').append(ariLennoxTitle);
      },
      error: function(msg){
        console.log('error');
      }
    });
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'zM0lu8xx0R4'
    });
  });
  $('#ai7').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info5, #info6, #info8').css("display", "none");
    $('#info7, #modalheader, #modalbodytext, #player, #modalbillboard, #modalvid').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info7').css("display", "block");
    $('#modalbox').css({"background-color": "#893530","border-color": "#893530"});
    $('#myBtn').css("z-index", "0");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams7),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[53256071].extract);
        var jidInfo = response.query.pages[53256071].extract;
        var jidTitle = response.query.pages[53256071].title;
        $('#info7').append(jidInfo);
        $('#modalheader').append(jidTitle);
      },
      error: function(msg){
        console.log('error');
      }
    });
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'ZiADuDjueJc'
    });
  });
  $('#ai8').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info5, #info6, #info7').css("display", "none");
    $('#info8, #modalheader, #modalbodytext, #player, #modalbillboard, #modalvid').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info8').css("display", "block");
    $('#modalbox').css({"background-color": "#c1bd3a","border-color": "#c1bd3a"});
    $('#myBtn').css("z-index", "0");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams8),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[44017272].extract);
        var earthgangInfo = response.query.pages[44017272].extract;
        var earthgangTitle = response.query.pages[44017272].title;
        $('#info8').append(earthgangInfo);
        $('#modalheader').append(earthgangTitle);
      },
      error: function(msg){
        console.log('error');
      }
    });
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'zgNVvtOp8mU'
    });
  });
  // Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});
