$(document).ready(function(){
  console.log ('Scripts Loaded');
//  var myKey = config.MY_KEY;
  var url = '';
  var billboardData = [];
  var query = '';

  $('button').click(function(){
    query = $('#query').val();
    console.log(query);
    var url = 'http://billboard.modulo.site/search/artist?q=' + query;
    console.log(url);

    $.ajax({
      type:'GET',
      dataType:'json',
      data: billboardData,
      url: url,
      success:function(billboardData){
        console.log(billboardData);
        html = '';
      }
    });



  });
});
