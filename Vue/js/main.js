var app = new Vue({
    el: '#app',
    data: {
        jobs: [
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
        ],
        projects: [
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
        ],
        contactLinks: [
            {
                link: 'https://www.linkedin.com/in/dj6lee',
                icon: 'fa-linkedin-square',
                className: 'link-linkedin'
            },
            {
                link: 'http://www.last.fm/user/TheBroccOLee',
                icon: 'fa-lastfm-square',
                className: 'link-lastfm'
            },
            {
                link: 'https://github.com/davidjameslee',
                icon: 'fa-github-square',
                className: 'link-github'
            },
            {
                link: 'mailto:info@djlee.xyz',
                icon: 'fa-envelope-square',
                className: 'link-email'
            }
        ]
    }
});