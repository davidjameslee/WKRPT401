
var app = angular.module('app', []);
app.controller('indexController', function($scope) {
    $scope.jobs = [
        {
            title: 'Toronto Transit Commision',
            subtitle: 'C#.NET, Oracle & Crystal Reports Developer',
            imgUrl: '../Resources/assets/TTCLOGO.png'
        },
        {
            title: 'IBI Group',
            subtitle: 'Junior Developer',
            imgUrl: '../Resources/assets/IBIGROUPLOGO.jpg'
        },
        {
            title: 'Veeva Systems',
            subtitle: 'Intern Performance Engineer',
            imgUrl: '../Resources/assets/VEEVALOGO.jpg'
        }
    ];
    $scope.projects = [
        {
            title: 'Pebble Watchface',
            link: 'https://apps.getpebble.com/applications/55aa77fbc380d0dd7c00009e',
            imgUrl: '../Resources/assets/PebblePulseSS.png',
            wip: false
        },
        {
            title: 'List Application',
            link: 'https://github.com/davidjameslee/ListApp',
            imgUrl: '../Resources/assets/ListAppSS.JPG',
            wip: true
        },
        {
            title: 'Trinket Keyboard',
            link: 'keyboard.html',
            imgUrl: '../Resources/assets/KeyboardImg.jpg',
            wip: false
        },
        {
            title: 'Personal Website',
            link: '',
            imgUrl: '../Resources/assets/clouds.jpg',
            wip: false
        }
    ]
});