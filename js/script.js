document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("next").onclick = function() {
        var short = 'http://vm.tiktok.com/ZMJGY'
        var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * 62);
            short += characters.charAt(index);
        };
        console.log(short);
        var x = new XMLHttpRequest();
        x.open('GET', 'https://cors-anywhere.herokuapp.com/'+short, true);
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        x.onload = function() {
            var start = x.responseText.indexOf('https://www.tiktok.com');
            var end = x.responseText.substr(start, 100).indexOf('"');
            var url = x.responseText.substr(start, end);
            if (!url.includes("video")) {
                document.getElementById("next").click();
                return false;
            }
            document.getElementById("content").innerHTML=`<a href="${url}" class="embedly-card" id="embed">Embedly</a>`
            console.log("Going to: " + url);
        };
        x.send();
        return false;
    };
    document.getElementById("next").click();

    document.onkeypress = function(ke) {
        if (ke.key === " ") {
            document.getElementById("next").click();
        }
    }
});