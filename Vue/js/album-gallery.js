var albumComponent = {
    props: ['href', 'src'],
    template: '<a :href="href" target="_blank"><img class="album-art" :src="src || \'../Resources/assets/missingalbum.png\'" /></a>'
};

var app = new Vue({
    el: '#main',
    data: {
        albums: []
    },
    components: {
        'album': albumComponent
    },
    mounted: function() {
        var desc = document.getElementById("description");
        var height = window.innerHeight - desc.clientHeight;
        var vCount = Math.max(3, Math.floor(height/160));
        var hCount = Math.floor(window.innerWidth/160);
        var albumCount = vCount * hCount;
        this.setupGallery(albumCount)
    },
    methods: {
        setupGallery: function(albumCount) {
            var that = this;
            $.ajax({
                type: 'POST',
                url: 'http://ws.audioscrobbler.com/2.0/',
                data: 'method=user.getRecentTracks&' +
                'limit=' + albumCount + '&' +
                'user=TheBroccOLee&' +
                'api_key=4bf436262dec3163d512d025bfd1363d&' +
                'format=json',
                dataType: 'jsonp',
                success: function(data){
                    that.albums = data.recenttracks.track.map(function(album) {
                        return {
                            link: album.url,
                            imgUrl: album.image[2]['#text']
                        }
                    });
                },
                error: function(code, message) {
                    //RIP LASTFM API
                    alert('Error Retrieving music');
                }
            })
        }
    }
});
