$(document).ready(function(){ 
    var button = $("button")
    var mapa = "http://bing.com/maps/default.aspx?cp="
          
    button.on("click", function(e){
        e.preventDefault();
        
            navigator.geolocation.getCurrentPosition(
            function (position){
                var lat = position.coords.latitude
                var lon = position.coords.longitude 
                lat = String(lat);
                lon = String(lon);
                mapa = mapa+lat+"~"+lon;
                /*$("div").append(mapa);*/
                
                console.log(mapa);
                
                var link = $("<a></a>", {
                    href: mapa,
                    text: "pokaż na mapie",
                });
                $("div").append(link)
            },
            function(errorObj){
                alert("błąd")
            });

    });
   
});
