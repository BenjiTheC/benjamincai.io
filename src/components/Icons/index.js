import React from 'react';
import PropTypes from 'prop-types';
import { TerminalIcon, RepoIcon, FileIcon, MarkGithubIcon, MailIcon, GrabberIcon, CodeIcon, LockIcon } from '@primer/octicons-react';
import { ReactComponent as LinkedInIcon } from '../../assets/img/linkedin-in-brands.svg';
import './Icons.scss';

const VERTICAL_ALIGN = 'middle';

const IconBox = ({ children, type = 'tab' }) => <div className={`icon-box ${type}`}>{children}</div>;
IconBox.propTypes = {
    children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object, PropTypes.string]).isRequired,
    type: PropTypes.oneOf(['tab', 'side', 'menu']),
};

export const AboutMe = () => (
    <IconBox>
        <TerminalIcon verticalAlign={VERTICAL_ALIGN} />
    </IconBox>
);

export const Projects = () => (
    <IconBox>
        <RepoIcon verticalAlign={VERTICAL_ALIGN} />
    </IconBox>
);

export const Resume = () => (
    <IconBox>
        <FileIcon verticalAlign={VERTICAL_ALIGN} />
    </IconBox>
);

export const GitHub = () => (
    <IconBox type={'side'}>
        <MarkGithubIcon verticalAlign={VERTICAL_ALIGN} />
    </IconBox>
);

export const LinkedIn = () => (
    <IconBox type={'side'}>
        <LinkedInIcon />
    </IconBox>
);

export const Email = () => (
    <IconBox type={'side'}>
        <MailIcon verticalAlign={VERTICAL_ALIGN} />
    </IconBox>
);

export const Menu = () => (
    <IconBox type={'menu'}>
        <GrabberIcon verticalAlign={VERTICAL_ALIGN} size={'small'} />
    </IconBox>
);

export const SourceCode = () => (
    <IconBox type={'side'}>
        <CodeIcon verticalAlign={VERTICAL_ALIGN} />
    </IconBox>
);

export const SourceLock = () => (
    <IconBox type={'side'}>
        <LockIcon verticalAlign={VERTICAL_ALIGN} />
    </IconBox>
);
