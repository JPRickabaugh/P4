$(document).ready(function(){
  console.log ('Scripts Loaded');
  var apiParams1 = {action: 'query', prop: 'extracts', format: 'json', titles: 'Dreamville_Records', exintro: 1};

  $.ajax({ //as of now, it looks like a may have to do a separate ajax call for each description
    "url":"https://en.wikipedia.org/w/api.php?" + $.param(apiParams1),
    "dataType": "jsonp",
    //data: apiParams,
    success: function(response){
        console.log(response.query.pages[41775413].extract);
        var dreamvilleInfo = response.query.pages[41775413].extract;
        $('#infodiv').append(dreamvilleInfo);

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
