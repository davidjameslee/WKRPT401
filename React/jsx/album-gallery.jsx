
//Get sizes and setup the pictures
var desc = document.getElementById("description");
var height = window.innerHeight - desc.clientHeight;
var vCount = Math.max(3, Math.floor(height / 160));
var hCount = Math.floor(window.innerWidth / 160);
var albumCount = vCount * hCount;

var generateAlbums = function(data) {
    function Album(props) {
        var imgSrc = props.imgUrl || '../Resources/assets/missingalbum.png';
        return (
            <a href={props.link} target="_blank">
                <img className="album-art" src={imgSrc} />
            </a>
        );
    }
    function AlbumGallery() {
        return <div>
            {data.recenttracks.track.map(function(album, i) {
                return <Album key={i} link={album.url} imgUrl={album.image[2]["#text"]} />
            })}
        </div>
    }

    return <AlbumGallery />;
};

//Get last.fm data for album arts and render the components
$.ajax({
    type: 'POST',
    url: 'http://ws.audioscrobbler.com/2.0/',
    data: 'method=user.getRecentTracks&' + 'limit=' + albumCount + '&' + 'user=TheBroccOLee&' + 'api_key=4bf436262dec3163d512d025bfd1363d&' + 'format=json',
    dataType: 'jsonp',
    success: function (data) {
        var AlbumGallery = generateAlbums(data);
        ReactDOM.render(
            AlbumGallery,
            document.getElementById('main')
        );
    },
    error: function (code, message) {
        //RIP LASTFM API
        alert('Error Retrieving music');
    }
});
