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

  $.ajax({ //as of now, it looks like a may have to do a separate ajax call for each description
    "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams0),
    "dataType": "jsonp",
    //data: apiParams,
    success: function(response){
  //      console.log(response.query.pages[41775413].extract);
  //      var dreamvilleInfo = response.query.pages[41775413].extract;
        console.log(response.query.pages)
  //      $('#infodiv').append(dreamvilleInfo);

    }
  });
/*    $.ajax({
      type:'GET',
      dataType:'jsonp',
      data: data,
      url: 'http://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&origin=*&page=pizza',
      success:function(data){
        console.log(data);
      },
      error:function(msg){
        console.log('error');
      }
    }); */ //earlier test w parse method
});
