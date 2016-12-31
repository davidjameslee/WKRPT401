var app = angular.module('albumGallery', []);

app.controller('albumController', function($scope, $http){
    var navbar = document.getElementById("navbar");
    var desc = document.getElementById("description");
    var height = window.innerHeight - desc.clientHeight - navbar.clientHeight;
    var width = window.innerWidth - 20;
    var vCount = Math.max(3, Math.floor(height/162));
    var hCount = Math.max(1, Math.floor(width/162));
    var albumCount = (vCount * hCount)-1;//Account for zero indexing on API
    var url = 'http://ws.audioscrobbler.com/2.0/?' +
        'method=user.getRecentTracks&' +
        'limit=' + albumCount + '&' +
        'user=TheBroccOLee&' +
        'api_key=4bf436262dec3163d512d025bfd1363d&' +
        'format=json';

    $http.post(url).success(function(data){
        $scope.albums = data.recenttracks.track;
        $scope.albums.forEach(function(element, index, array){
            if(element.image[2]['#text'].length == 0)
                element.image[2]['#text'] = 'assets/missingalbum.png';
        });
    }).error(function(){
        alert('Error Getting Albums!');
    });
})