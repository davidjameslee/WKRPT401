

var jobs = [
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
var projects = [
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
];

function JobEntry(props) {
    return (
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="subsection-entry">
                    <div className="subsection-image">
                        <img src={props.imgUrl} />
                    </div>
                    <div className="subsection-description">
                        <h3>{props.title}</h3>
                        <h4>{props.subtitle}</h4>
                    </div>
                </div>
            </div>
        );
}

function JobEntries() {
    return <div>
        {jobs.map(function(object) {
            return <JobEntry title={object.title} subtitle={object.subtitle} imgUrl={object.imgUrl} />
        })}
    </div>;
}

const element = <JobEntries />;
ReactDOM.render(
    element,
    document.getElementById('jobs')
);