  client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`Forèst `,` Fhelp`,` Forèst`,`Fhelp`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/idk`);
    }, ms);1000

});
  
