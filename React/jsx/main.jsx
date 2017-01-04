
//JSON data for elements
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

//Job React Code
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
        {jobs.map(function(job) {
            return <JobEntry title={job.title} subtitle={job.subtitle} imgUrl={job.imgUrl} />
        })}
    </div>;
}

//Project React Code
function ProjectEntry(props) {
    var wip = null;
    if (props.wip)
        wip = <h4>(Work in Progress)</h4>;
    return (
        <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="subsection-entry">
                <div className="subsection-image">
                    <img src={props.imgUrl} />
                </div>
                <div className="subsection-description">
                    <h3>{props.title}</h3>
                    {wip}
                    <h4><a href={props.link} target="_blank">Can be found here.</a></h4>
                </div>
            </div>
        </div>
    );
}

function ProjectEntries() {
    return <div>
        {projects.map(function(project) {
            return <ProjectEntry title={project.title} link={project.link} imgUrl={project.imgUrl} wip={project.wip} />
        })}
    </div>;
}

//Rendering of components
const JobElement = <JobEntries />;
ReactDOM.render(
    JobElement,
    document.getElementById('jobs')
);

const ProjectElement = <ProjectEntries />;
ReactDOM.render(
    ProjectElement,
    document.getElementById('projects')
);