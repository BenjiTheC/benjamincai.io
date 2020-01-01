import React from 'react';
import PropTypes from 'prop-types';
import ExLink from '../ExLink';
import { education, professionalExperience, sideProjects } from './resumeData';
import './Resume.scss';

const Education = ({ school, graduation, major, degree, gpa }) => (
    <div className={'education'}>
        <div className={'flex-row flex-mobile-column justify-space-between align-center align-mobile-flex-start'}>
            <span className={'school'}>{school}</span>
            <span className={'graduation'}>Graduation: {graduation}</span>
        </div>
        <div className={'major'}>
            {degree} in {major}
        </div>
        <div className={'gpa content'}>GPA: {gpa}</div>
    </div>
);
Education.propTypes = {
    school: PropTypes.string.isRequired,
    graduation: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    gpa: PropTypes.string.isRequired,
};

const Job = ({ jobHeader, jobTitle, employer, duration, location, desc }) => (
    <div className={'job'}>
        <div className={'flex-desktop-row flex-mobile-column justify-desktop-space-between job-brief'}>
            <div className={'job-brief-col-0'}>
                <div className={'job-header'}>
                    <span className={'job-header'}>{jobHeader}, </span>
                    <span className={'employer content'}>{employer}</span>
                </div>
                <div className={'job-title'}>{jobTitle}</div>
            </div>
            <div className={'job-brief-col-1'}>
                <div className={'location'}>{location}</div>
                <div className={'duration'}>{duration}</div>
            </div>
        </div>
        <ul className={'job-desc content'}>
            {desc.map(d => (
                <li key={d.slice(5)}>{d}</li>
            ))}
        </ul>
        <hr />
    </div>
);
Job.propTypes = {
    jobHeader: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    desc: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const SideProject = ({ prjName, prjSrc, prjDesc }) => (
    <div className={'side-project'}>
        <div className={'side-project-name'}>{prjName}</div>
        <div className={'side-project-src'}>
            <span className={'src-name-header'}>Source Code: </span>
            {prjSrc ? <ExLink to={prjSrc}>{prjSrc}</ExLink> : 'Unavailable for now'}
        </div>
        <ul className={'side-project-desc content'}>
            {prjDesc.map(prjD => (
                <li key={prjD.slice(5)}>{prjD}</li>
            ))}
        </ul>
    </div>
);
SideProject.propTypes = {
    prjName: PropTypes.string.isRequired,
    prjSrc: PropTypes.string.isRequired,
    prjDesc: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Resume() {
    return (
        <div className={'resume'}>
            <div className={'personal-info'}>
                <h1 className={'full-name'}>
                    <span className={'first-name'}>Benjamin</span> <span className={'last-name'}>Cai</span>
                </h1>
                <ul className={'contact'}>
                    <li>Hoboken, NJ, 07030</li>
                    <li>201-221-6187</li>
                    <li>benjamincaiyh@gmail.com</li>
                </ul>
            </div>
            <hr />
            <section className={'portfolio'}>
                <span>
                    <strong>LinkedIn: </strong>
                    <ExLink to={'www.linkedin.com/in/benjamin-cai'}>
                        <span className={'content'}>www.linkedin.com/in/benjamin-cai</span>
                    </ExLink>
                </span>
                <span>
                    <strong>GitHub: </strong>
                    <ExLink to={'github.com/BenjiTheC'}>
                        <span className={'content'}>github.com/BenjiTheC</span>
                    </ExLink>
                </span>
            </section>

            <h2>Education</h2>
            <hr />
            <section id={'education'}>
                {education.map(({ id, ...eduProps }) => (
                    <Education key={id} {...eduProps} />
                ))}
            </section>

            <h2>Skills</h2>
            <hr />
            <section id={'skills'}>
                <div className={'skills'}>
                    <div key={0} className={'flex-row flex-mobile-column justify-space-between skills-row'}>
                        <span className={'skills-header'}>Technology: </span>
                        <span className={'skills-content content'}>
                            JavaScript, Python, React, React Native, NodeJS, ExpressJs, Click, Pandas, Matplotlib
                        </span>
                    </div>
                    <div key={1} className={'flex-row flex-mobile-column justify-space-between skills-row'}>
                        <span className={'skills-header'}>Software tools: </span>
                        <span className={'skills-content content'}>Git, vim, VS Code, XCode, DataGrip</span>
                    </div>
                </div>
            </section>

            <h2>Professional Experience</h2>
            <hr />
            <section id={'professional-exprience'}>
                {professionalExperience.map(({ id, ...jobProps }) => (
                    <Job key={id} {...jobProps} />
                ))}
            </section>

            <h2>Side Projects</h2>
            <hr />
            <section id={'side-projects'}>
                {sideProjects.map(({ id, ...prjProps }) => (
                    <SideProject key={id} {...prjProps} />
                ))}
            </section>
        </div>
    );
}
