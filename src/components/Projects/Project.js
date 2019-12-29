import React from 'react';
import PropTypes from 'prop-types';
import ExLink from '../ExLink';
import { languageColorPairs, technolgoyColorPairs, miscColorPairs } from '../Terminal/coloredTextMapping';
import { SourceCode, SourceLock } from '../Icons';
import './Projects.scss';

const ALL_COLOR_PAIRS = [...languageColorPairs, ...technolgoyColorPairs, ...miscColorPairs];

export default function Project({ title, desc, techs, src }) {
    return (
        <article className={'m-desktop-vertical-3 m-mobile-vertical-2 p-1 p-desktop-2 project'}>
            <header className={'flex-row justify-space-between align-center project-title'}>
                <h3>{title}</h3>
                <div className={`flex-row flex-cc project-src ${src ? 'avai' : 'lock'}`}>
                    {src ? (
                        <ExLink to={src}>
                            <SourceCode />
                        </ExLink>
                    ) : (
                        <SourceLock />
                    )}
                </div>
            </header>
            <section className={'project-desc'}>{desc}</section>
            <footer className={'m-top-1 project-techs'}>
                <span className={'tech-header'}>Technologies used: </span>
                {techs.map(tech => (
                    <span key={tech} style={{ color: (ALL_COLOR_PAIRS.find(p => p[0] === tech) || [null, 'white'])[1] }}>
                        {tech}{' '}
                    </span>
                ))}
            </footer>
        </article>
    );
}
Project.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.elementType, PropTypes.node, PropTypes.string])).isRequired,
    src: PropTypes.string,
};
