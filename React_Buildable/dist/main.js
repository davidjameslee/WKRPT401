
//JSON data for elements
var jobs = [{
    title: 'Toronto Transit Commision',
    subtitle: 'C#.NET, Oracle & Crystal Reports Developer',
    imgUrl: '../Resources/assets/TTCLOGO.png'
}, {
    title: 'IBI Group',
    subtitle: 'Junior Developer',
    imgUrl: '../Resources/assets/IBIGROUPLOGO.jpg'
}, {
    title: 'Veeva Systems',
    subtitle: 'Intern Performance Engineer',
    imgUrl: '../Resources/assets/VEEVALOGO.jpg'
}];
var projects = [{
    title: 'Pebble Watchface',
    link: 'https://apps.getpebble.com/applications/55aa77fbc380d0dd7c00009e',
    imgUrl: '../Resources/assets/PebblePulseSS.png',
    wip: false
}, {
    title: 'List Application',
    link: 'https://github.com/davidjameslee/ListApp',
    imgUrl: '../Resources/assets/ListAppSS.JPG',
    wip: true
}, {
    title: 'Trinket Keyboard',
    link: 'keyboard.html',
    imgUrl: '../Resources/assets/KeyboardImg.jpg',
    wip: false
}, {
    title: 'Personal Website',
    link: '',
    imgUrl: '../Resources/assets/clouds.jpg',
    wip: false
}];
var contactLinks = [{
    link: 'https://www.linkedin.com/in/dj6lee',
    icon: 'fa-linkedin-square',
    className: 'link-linkedin'
}, {
    link: 'http://www.last.fm/user/TheBroccOLee',
    icon: 'fa-lastfm-square',
    className: 'link-lastfm'
}, {
    link: 'https://github.com/davidjameslee',
    icon: 'fa-github-square',
    className: 'link-github'
}, {
    link: 'mailto:info@djlee.xyz',
    icon: 'fa-envelope-square',
    className: 'link-email'
}];

//Job React Code
function JobEntry(props) {
    return React.createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-4' },
        React.createElement(
            'div',
            { className: 'subsection-entry' },
            React.createElement(
                'div',
                { className: 'subsection-image' },
                React.createElement('img', { src: props.imgUrl })
            ),
            React.createElement(
                'div',
                { className: 'subsection-description' },
                React.createElement(
                    'h3',
                    null,
                    props.title
                ),
                React.createElement(
                    'h4',
                    null,
                    props.subtitle
                )
            )
        )
    );
}

function JobEntries() {
    return React.createElement(
        'div',
        null,
        jobs.map(function (job) {
            return React.createElement(JobEntry, { title: job.title, subtitle: job.subtitle, imgUrl: job.imgUrl });
        })
    );
}

//Project React Code
function ProjectEntry(props) {
    var wip = null;
    if (props.wip) wip = React.createElement(
        'h4',
        null,
        '(Work in Progress)'
    );
    return React.createElement(
        'div',
        { className: 'col-xs-12 col-sm-6 col-md-6' },
        React.createElement(
            'div',
            { className: 'subsection-entry' },
            React.createElement(
                'div',
                { className: 'subsection-image' },
                React.createElement('img', { src: props.imgUrl })
            ),
            React.createElement(
                'div',
                { className: 'subsection-description' },
                React.createElement(
                    'h3',
                    null,
                    props.title
                ),
                wip,
                React.createElement(
                    'h4',
                    null,
                    React.createElement(
                        'a',
                        { href: props.link, target: '_blank' },
                        'Can be found here.'
                    )
                )
            )
        )
    );
}

function ProjectEntries() {
    return React.createElement(
        'div',
        null,
        projects.map(function (project) {
            return React.createElement(ProjectEntry, { title: project.title, link: project.link, imgUrl: project.imgUrl, wip: project.wip });
        })
    );
}

//Footer Contact Links
function ContactLink(props) {
    return React.createElement(
        'div',
        { className: "contact-link " + props.className },
        React.createElement(
            'a',
            { href: props.link },
            React.createElement('i', { className: "fa " + props.icon })
        )
    );
}
function ContactLinks() {
    return React.createElement(
        'div',
        null,
        contactLinks.map(function (link) {
            return React.createElement(ContactLink, { className: link.className, link: link.link, icon: link.icon });
        })
    );
}

//Rendering of components
var JobElement = React.createElement(JobEntries, null);
ReactDOM.render(JobElement, document.getElementById('jobs'));

var ProjectElement = React.createElement(ProjectEntries, null);
ReactDOM.render(ProjectElement, document.getElementById('projects'));

var ContactLinksElement = React.createElement(ContactLinks, null);
ReactDOM.render(ContactLinksElement, document.getElementById('contacts'));