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
  var myKey = config.MY_KEY; //For some reason, the key wouldn't work when applied like usual


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

  $('#sourceBtn').click(function(){
    $('#sources').css("display", "block");
  });

  $('#closeBtn').click(function(){
    $('#sources').css("display", "none");
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
    $('#info1, #modalheader, #modalbodytext, #player, #modalvid, #modalbodytext, #albumholder, #albumtitles').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info1').css("display", "block");
    $('#modalbox').css({"background-color": "#a71419","border-color": "#a71419"});
    $('#albumheader, #albumtitles').css("color", "#a71419");
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
    $.ajax({
      type : 'POST',
      url : 'http://ws.audioscrobbler.com/2.0/',
      data : 'method=artist.getinfo&' +
             'artist=J.+Cole&' +
             'api_key=9259102230c43036be16996729c620c2&' +
             'format=json',
      dataType : 'jsonp',
      success : function(data) {
          console.log(data.artist);
          $('#modalbodytext').append(data.artist.bio.content);
      },
      error: function(msg){
        console.log('error');
      }
    });
    $('#albumholder').append('<img class="albums" src="img/KOD.jpg"/><img class="albums" src="img/4youreyezonly.jpg"/><img class="albums" src="img/2014foresthillsdrive.jpg"/>');
    $('#albumtitles').append('<span class="albumtitle">KOD</span><span class="albumtitle">4 Your Eyez Only</span><span class="albumtitle">2014 Forest Hills Drive</span>');
    player = new YT.Player('ytplayer', {
      height: 'auto',
      width: 'auto',
      videoId: 'vUTI4bPdlgE'
    });
  });
  $('#ai2').click(function(){
    $('#defaultinfo, #info1, #info3, #info4, #info5, #info6, #info7, #info8').css("display", "none");
    $('#info2, #modalheader, #modalbodytext, #player, #modalvid, #modalbodytext, #albumholder, #albumtitles').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info2').css("display", "block");
    $('#modalbox').css({"background-color": "#214c86","border-color": "#214c86"});
    $('#albumheader, #albumtitles').css("color", "#214c86");
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
    //omen happens to be a very popular metal band name, so i had to directly take the text from the list of bios since lastFMs api doesn't let you select individual paragraphs to include
    $('#modalbodytext').append("An American rapper from Chicago. Chicago-born emcee, Omen (born Damon Coleman) goes his own route, delivering incredible songs shaped by rhymes, melodies and composition inspired, by some of his favorite artist growing up such as Nas, Stevie Wonder, Michael Jackson and Common. However, his most significant influences come from his own real life situations and emotions as well as his vivid imagination. Honest in rhyme, fresh in appearance and forward in thinking, Omen embodies a Chicago-confidence and originality seen most recently in the likes of hometown heavyweights Common, Kanye West and Lupe Fiasco.However, Omen is his own man. And at six-foot-three, he's head and shoulders above a sea of rap aspirants who simply cannot do what he does. Not only did he pen, produce and perform all the tracks on upcoming album Beyond, Omen composed the notes, hashed out the chords and arranged the instrumentation for much of the album, as well. As comfortable and creative at the piano as he is in the recording booth, Omen's turned an everyday passion for music into a productive obsession. His efforts have resulted in a sound that, in his own words, “is nontraditional with old elements.”");
    $('#albumholder').append('<img class="albums" src="img/elephanteyes.jpg"/>');
    $('#albumtitles').append('<span class="albumtitle">Elephant Eyes</span>');
    player = new YT.Player('ytplayer', {
      height: 'auto',
      width: 'auto',
      videoId: 'f7nbrgAyVuk'
    });
  });
  $('#ai3').click(function(){
    $('#defaultinfo, #info1, #info2, #info4, #info5, #info6, #info7, #info8').css("display", "none");
    $('#info3, #modalheader, #modalbodytext, #player, #modalvid, #modalbodytext, #albumholder, #albumtitles').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info3').css("display", "block");
    $('#modalbox').css({"background-color": "#d7d433","border-color": "#d7d433"});
    $('#albumheader, #albumtitles').css("color", "#d7d433");
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
    // Bas's bio on lastfm wasn't very full, I grabbed this one from Allmusic instead
    $('#modalbodytext').append("Bas started rapping as a lark and within a decade became a central member of the Dreamville roster with Last Winter (2014), Too High to Riot (2016), and Milky Way (2018), charting albums characterized by thoughtful and versatile wordplay. The son of Sudanese parents, Bas (short for Abbas Hamad) was raised in Paris until the age of eight, when his family moved to Jamaica, Queens. Coerced by a friend, he started rapping in 2010, and a series of informal sessions later was linked to J. Cole. Bas' development as a performer was fostered by touring with Cole, who eventually signed the fledgling artist to his Interscope-affiliated Dreamville label. Last Winter, jokingly referred to as \"An album from a n*gga who ain't got alotta fans yet,\" was released as a digital download and a CD in April 2014. It featured appearances from Cole and Mack Wilds and debuted on Billboard's R&B/hip-hop chart at number 18. Bas contributed to Dreamville's Revenge of the Dreamers, Vol. 2 compilation in 2015 prior to releasing his second proper album, Too High to Riot, the following March. Highlighted by \"Night Job\" and more lucid and energized than indicated by its title, the full-length went Top Ten R&B/hip-hop and cracked the Top 50 of the Billboard 200. Milky Way followed in August 2018, became Bas' third consecutive Top 20 R&B/hip-hop entry, and debuted on the Billboard 200 at number 35, pushed by the breezy, Edu Lobo-sampling Cole collaboration \"Tribe.\"");
    $('#albumholder').append('<img class="albums" src="img/milkyway.jpg"/><img class="albums" src="img/TooHighToRiot.jpeg"/><img class="albums" src="img/lastwinter.jpg"/>');
    $('#albumtitles').append('<span class="albumtitle">Milky Way</span><span class="albumtitle">Too High To Riot</span><span class="albumtitle">Last Winter</span>');
    player = new YT.Player('ytplayer', {
      height: 'auto',
      width: 'auto',
      videoId: 'OA8aw07dpg0'
    });
  });
  $('#ai4').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info5, #info6, #info7, #info8').css("display", "none");
    $('#info4, #modalheader, #modalbodytext, #player, #modalvid, #modalbodytext, #albumholder, #albumtitles').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info4').css("display", "block");
    $('#modalbox').css({"background-color": "#519e9d","border-color": "#519e9d"});
    $('#albumheader, #albumtitles').css("color", "#519e9d");
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
    $.ajax({
      type : 'POST',
      url : 'http://ws.audioscrobbler.com/2.0/',
      data : 'method=artist.getinfo&' +
             'artist=Cozz&' +
             'api_key=9259102230c43036be16996729c620c2&' +
             'format=json',
      dataType : 'jsonp',
      success : function(data) {
          console.log(data);
          $('#modalbodytext').append(data.artist.bio.content)
      },
      error: function(msg){
        console.log('error');
      }
    });
    $('#albumholder').append('<img class="albums" src="img/effected.jpg"/><img class="albums" src="img/CozzAndEffect.jpg"/>');
    $('#albumtitles').append('<span class="albumtitle">Effected</span><span class="albumtitle">Cozz & Effect</span>');
    player = new YT.Player('ytplayer', {
      height: 'auto',
      width: 'auto',
      videoId: 'OL7pnChf_9M'
    });
  });
  $('#ai5').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info6, #info7, #info8').css("display", "none");
    $('#info5, #modalheader, #modalbodytext, #player, #modalvid, #modalbodytext, #albumholder, #albumtitles').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info5').css("display", "block");
    $('#modalbox').css({"background-color": "#9ec3cc","border-color": "#9ec3cc"});
    $('#albumheader, #albumtitles').css("color", "#9ec3cc");
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
    // lute's bio on lastfm wasn't very full, I grabbed this one from Allmusic instead
    $('#modalbodytext').append("Hailing from Charlotte, North Carolina, rapper Lute (born Luther Nicholson) first burst onto the underground hip-hop scene as a member of the rap collective Forever FC, alongside Jimmy Kelso, High I'm Ry, and SchylerChaise. Lute delivered his first solo mixtape, West 1996, in 2012 while still a member of Forever FC, but took a backseat after the birth of his daughter. With the group and Lute receiving plaudits from the likes of Rick Ross and Pete Rock, it wasn't long before he was snapped up by J. Cole in 2015, signing to his then burgeoning label Dreamville. His first effort for the label dropped at the end of that year on the compilation Revenge of the Dreamers, Vol. 2, with his track \"Still Slummin'\" a posthumous production by J. Dilla. Two years later, the single \"Juggin'\" appeared and signaled Lute's return. His proper debut album, West 1996, Vol. 2 followed.");
    $('#albumholder').append('<img class="albums" src="img/1996pt2.jpg"/>');
    $('#albumtitles').append('<span class="albumtitle">West1996 pt. 2</span>');
    player = new YT.Player('ytplayer', {
      height: 'auto',
      width: 'auto',
      videoId: 'FXQNZJYWuak'
    });
  });
  $('#ai6').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info5, #info7, #info8').css("display", "none");
    $('#info6, #modalheader, #modalbodytext, #player, #modalvid, #modalbodytext, #albumholder, #albumtitles').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info6').css("display", "block");
    $('#modalbox').css({"background-color": "#8e8862","border-color": "#8e8862"});
    $('#albumheader, #albumtitles').css("color", "#8e8862");
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
    //same issue as Lute - bio from allmusic
    $('#modalbodytext').append("Discovered after she uploaded a couple examples of her work to the Web, Ari Lennox is an R&B singer/songwriter signed to J. Cole's Dreamville imprint. Based in Washington, D.C., Lennox began uploading her music around 2012 and released her debut EP, Ariography, in 2013. A couple more stray tracks were uploaded in 2014, along with the independently released single \"Bound.\" Then in 2015, she signed with Dreamville. An appearance on labelmate Omen's 2015 release Elephant Eyes followed, and in 2016 she appeared on the Dreamville compilation Revenge of the Dreamers, Vol. 2. Her second EP, PHO, followed later that year.");
    $('#albumholder').append('<img class="albums" src="img/pho.jpg"/>');
    $('#albumtitles').append('<span class="albumtitle">Pho</span>');
    player = new YT.Player('ytplayer', {
      height: 'auto',
      width: 'auto',
      videoId: 'zM0lu8xx0R4'
    });
  });
  $('#ai7').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info5, #info6, #info8').css("display", "none");
    $('#info7, #modalheader, #modalbodytext, #player, #modalvid, #modalbodytext, #albumholder, #albumtitles').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info7').css("display", "block");
    $('#modalbox').css({"background-color": "#893530","border-color": "#893530"});
    $('#albumheader, #albumtitles').css("color", "#893530");
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
    //same issue, allmusic bio. May go back and try to integrate allmusic API for this if its possible
    $('#modalbodytext').append("Born and raised in East Atlanta, J.I.D -- a name adopted and adapted from what his grandmother called him as a jittery child -- first appeared on the Atlanta hip-hop scene with his debut EP, DiCaprio, in 2015. Growing up, J.I.D's first connection with music was through his parents' collection of classic funk and soul LPs. After a stint at Hampton University playing football, J.I.D also hooked up with fellow MCs as part of the Spillage Village collective. By 2012, he had dropped out of college to focus on music, and in 2014 he headed out on what would be a productive tour with EarthGang, Bas, and Ab-Soul. Touring allowed J.I.D to craft his skills, and a year later he recorded and dropped the DiCaprio EP, which saw him team up with a host of producers, as well as EarthGang. While keen to distance himself from the generic abrasive trap sound that had dominated the Atlanta scene, J.I.D wanted to deliver something that was more than just about a beat, and instead focused his time and effort on lyrics as well. In 2016, J.I.D, alongside the rest of the Spillage Village crew, released the album Bears Like This Too Much, which saw the rapper honing his unique delivery and inspired lyrics. In 2017, he announced that he had signed to J. Cole's Dreamville label (a connection made with the rapper via J.I.D's part in the 2014 tour with Bas and Cole's friend and producer Cedric Brown), which released the single Never and full-length The Never Story at the beginning of the year. In September of 2018, he issued the single \"151 Rum,\" the first offering from DiCaprio 2, his sophomore full-length and sequel to his 2015 EP.");
    $('#albumholder').append('<img class="albums" src="img/dicaprio2.jpg"/><img class="albums" src="img/theneverstory.png"/>');
    $('#albumtitles').append('<span class="albumtitle">Dicaprio 2</span><span class="albumtitle">The Never Story</span>');
    player = new YT.Player('ytplayer', {
      height: 'auto',
      width: 'auto',
      videoId: 'ZiADuDjueJc'
    });
  });
  $('#ai8').click(function(){
    $('#defaultinfo, #info1, #info2, #info3, #info4, #info5, #info6, #info7').css("display", "none");
    $('#info8, #modalheader, #modalbodytext, #player, #modalvid, #modalbodytext, #albumholder, #albumtitles').empty();
    $('#modalvid').append('<div id="ytplayer"></div>');
    $('#info8').css("display", "block");
    $('#modalbox').css({"background-color": "#c1bd3a","border-color": "#c1bd3a"});
    $('#albumheader, #albumtitles').css("color", "#c1bd3a");
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
    //same issue as before, lastfm bio was identicle to wiki blurb.
    $('#modalbodytext').append("Hip-hop duo Johnny \"Olu O. Fann\" Venus and Wowgr8 \"Eian Undrai Parker\" formed in 2008 in Atlanta, Georgia, and became known as EarthGang. They grew up on the city's Southside, an area also home to Outkast and Future. After meeting in high school, they continued to make music together, influenced by a diverse range of artists like Curtis Mayfield, T-Pain, Lauryn Hill, and Gil Scott-Heron. They began working on their first EP while at Hampton University in Virginia, and The Better Party was released in 2010. The following year they self-released two full-length albums, Mad Men and Good News. EarthGang began to tour, and in early 2013 they performed at the A3C Festival in Atlanta. Later that same year they made their Spillage Village label debut with Shallow Graves for Toys, and the record reached number 11 on Billboard's Emerging Artists chart. The duo continued to raise their profile touring North America, including sets at SXSW. 2015 saw the release of Strays with Rabies, which included guest spots from J.U.S.T.I.C.E. League and DJ Khalil. Although naturally suspicious of record labels, and still harboring a D.I.Y. mentality, Earthgang signed to J.Cole's Dreamville Records for their following album. They were convinced after meeting Cole that with his and his label's help, they would more opportunities. Before releasing Mirror Land in 2017, they put out the EP Rags.");
    $('#albumholder').append('<img class="albums" src="img/stuck.jpg"/><img class="albums" src="img/royalty.jpeg"/><img class="albums" src="img/robots.jpg"/><img class="albums" src="img/rags.jpg"/>');
    $('#albumtitles').append('<span class="albumtitle">Stuck</span><span class="albumtitle">Royalty</span><span class="albumtitle">Robots</span><span class="albumtitle">Rags</span>');
    player = new YT.Player('ytplayer', {
      height: 'auto',
      width: 'auto',
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
