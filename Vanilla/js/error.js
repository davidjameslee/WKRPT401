/**
 * Created by David on 2015-11-25.
 */

$(document).ready(function() {
    var music = document.getElementById('music');
    music.volume = 0.1;
    //Very mysterious, much stranger
    $('.error-img').click(function() {
        music.play();
    })
});