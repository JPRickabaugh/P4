$(document).ready(function(){
  console.log ('Scripts Loaded');
  var apiParams0 = {action: 'query', prop: 'extracts', format: 'json', titles: 'Dreamville_Records', exintro: 1}; //pageid = 41775413
  var apiParams1 = {action: 'query', prop: 'extracts', format: 'json', titles: 'J._Cole', exintro: 1}; //pageid = 23306612
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

  $('#ai1').click(function(){
    $('#defaultinfo, #info2, #info3, #info4, #info5, #info6, #info7, #info8').css("display", "none");
    $("#info1").empty();
    $('#info1').css("display", "block");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams1),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[23306612].extract);
        var jColeInfo = response.query.pages[23306612].extract;
        $('#info1').append(jColeInfo);
      },
      error: function(msg){
        console.log('error');
      }
    });
  });
  $('#ai2').click(function(){
    $('#defaultinfo, #info1, #info3, #info4, #info5, #info6, #info7, #info8').css("display", "none");
    $("#info2").empty();
    $('#info2').css("display", "block");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams2),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[43576965].extract);
        var omenInfo = response.query.pages[43576965].extract;
        $('#info2').append(omenInfo);
      },
      error: function(msg){
        console.log('error');
      }
    });
  });
  $('#ai3').click(function(){
    $('#defaultinfo, #info1, #info2, #info4, #info5, #info6, #info7, #info8').css("display", "none");
    $("#info3").empty();
    $('#info3').css("display", "block");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams3),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[42614201].extract);
        var basInfo = response.query.pages[42614201].extract;
        $('#info3').append(basInfo);
      },
      error: function(msg){
        console.log('error');
      }
    });
  });
  $('#ai4').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info5, #info6, #info7, #info8').css("display", "none");
    $("#info4").empty();
    $('#info4').css("display", "block");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams4),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[43576183].extract);
        var cozzInfo = response.query.pages[43576183].extract;
        $('#info4').append(cozzInfo);
      },
      error: function(msg){
        console.log('error');
      }
    });
  });
  $('#ai5').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info6, #info7, #info8').css("display", "none");
    $("#info5").empty();
    $('#info5').css("display", "block");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams5),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[48760021].extract);
        var luteInfo = response.query.pages[48760021].extract;
        $('#info5').append(luteInfo);
      },
      error: function(msg){
        console.log('error');
      }
    });
  });
  $('#ai6').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info5, #info7, #info8').css("display", "none");
    $("#info6").empty();
    $('#info6').css("display", "block");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams6),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[48760011].extract);
        var ariLennoxInfo = response.query.pages[48760011].extract;
        $('#info6').append(ariLennoxInfo);
      },
      error: function(msg){
        console.log('error');
      }
    });
  });
  $('#ai7').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info5, #info6, #info8').css("display", "none");
    $("#info7").empty();
    $('#info7').css("display", "block");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams7),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[53256071].extract);
        var jidInfo = response.query.pages[53256071].extract;
        $('#info7').append(jidInfo);
      },
      error: function(msg){
        console.log('error');
      }
    });
  });
  $('#ai8').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info5, #info6, #info7').css("display", "none");
    $("#info8").empty();
    $('#info8').css("display", "block");
    $.ajax({
      "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams8),
      "dataType": "jsonp",
      success: function(response){
        console.log(response.query.pages[44017272].extract);
        var earthgangInfo = response.query.pages[44017272].extract;
        $('#info8').append(earthgangInfo);
      },
      error: function(msg){
        console.log('error');
      }
    });
  });

});
