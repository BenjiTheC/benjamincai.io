import React from 'react';
import projectsData from './projectsData';
import Project from './Project';
import './Projects.scss';

export default function PojectList() {
    return (
        <div className={'project-list'}>
            {projectsData.map(({ id, ...prjProps }) => (
                <Project key={id} {...prjProps} />
            ))}
        </div>
    );
}
