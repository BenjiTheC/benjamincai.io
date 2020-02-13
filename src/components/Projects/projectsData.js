const projectsData = [
    {
        id: 0,
        title: 'Supply Room',
        desc:
            'My intern project in Amazon. This is a feature providing bulking purchase for multi-location business customers. React Native is used to build the user interface which is cross-platform but has a feeling of native user experience. The front-end communicates with the back-end services which query the relevent data from inner Amazon API under the help of the utilization of Redux and Redux Thunk.',
        techs: ['JavaScript', 'React Native', 'React', 'Redux'],
        src: null,
    },
    {
        id: 3,
        title: 'Benjamincai.io',
        desc:
            "What you are looking at right now. Using latest React and hooks, shit tons of fun building it. Currently it's a pure React front-end and SASS styled website, but I plan to add a back-end for it written in C++.",
        techs: ['React', 'SASS'],
        src: 'https://github.com/BenjiTheC/benjamincai.io',
    },
    {
        id: 1,
        title: 'Stevens Duckcard Office',
        desc:
            "A Python based solution for tedious data processing daily work in Duckcard(campus card) Office of Stevens Institute of Technology. I was working as a student staff there and found a lot of daily routine are kinda silly. So I use Python's built-in packages and SQLite to build a desktop app that read the downloaded csv files and process it on demand. I use Click, a Python package, to build command line interface.",
        techs: ['Python', 'SQLite'],
        src: 'https://github.com/BenjiTheC/Stevens_DuckCardOffice',
    },
    {
        id: 2,
        title: 'Zoobentos_IHCAS',
        desc:
            "The website for Division of Benthology and Floodplain Ecology, Institute of Hydrobiology, Chinese Academy of Sciences. My friend's research division (benthology and floodplain ecology) needed a new website and I happened to have a desire to get more familiar with server side rendering web app. The Handlebars is used for HTML template and back-end server is built with ExpressJS.",
        techs: ['NodeJS', 'ExpressJS', 'Handlebars', 'JavaScript'],
        src: 'https://github.com/BenjiTheC/Zoobentos_IHCAS',
    },
];

export default projectsData;
