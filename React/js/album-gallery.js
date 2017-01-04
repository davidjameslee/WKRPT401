$(function () {

    //Get sizes and setup the pictures
    var setupGallery = function () {
        var desc = document.getElementById("description");
        var height = window.innerHeight - desc.clientHeight;
        var vCount = Math.max(3, Math.floor(height / 160));
        var hCount = Math.floor(window.innerWidth / 160);
        var albumCount = vCount * hCount;

        var albums = new Array(albumCount);

        //Get last.fm data for album arts
        $.ajax({
            type: 'POST',
            url: 'http://ws.audioscrobbler.com/2.0/',
            data: 'method=user.getRecentTracks&' + 'limit=' + albumCount + '&' + 'user=TheBroccOLee&' + 'api_key=4bf436262dec3163d512d025bfd1363d&' + 'format=json',
            dataType: 'jsonp',
            success: function (data) {
                var album;
                var link;
                //document.getElementById("music-info").innerHTML = JSON.stringify(data,undefined, 2);

                for (var i = 0; i < albumCount; i++) {
                    //Create the album art image
                    album = document.createElement('img');
                    link = document.createElement('a');
                    listEntry = document.createElement('li');

                    link.href = data.recenttracks.track[i].url;
                    link.target = '_blank';

                    album.className = 'album-art';

                    if (data.recenttracks.track[i].image[2]["#text"].length > 0) {
                        album.src = data.recenttracks.track[i].image[2]["#text"];
                    } else {
                        album.src = '../Resources/assets/missingalbum.png';
                    }

                    //Add album to link and link to array
                    link.appendChild(album);
                    albums[i] = link;
                }
                for (var i = 0; i < albumCount; i++) {
                    main.appendChild(albums[i]);
                }
            },
            error: function (code, message) {
                //RIP LASTFM API
                alert('Error Retrieving music');
            }
        });
    };

    setupGallery();
});