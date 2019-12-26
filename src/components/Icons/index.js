import React from 'react';
import PropTypes from 'prop-types';
import Octions, { Terminal, Repo, File, MarkGithub, Mail, Grabber } from '@primer/octicons-react';
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
        <Octions verticalAlign={VERTICAL_ALIGN} icon={Terminal} />
    </IconBox>
);

export const Projects = () => (
    <IconBox>
        <Octions verticalAlign={VERTICAL_ALIGN} icon={Repo} />
    </IconBox>
);

export const Resume = () => (
    <IconBox>
        <Octions verticalAlign={VERTICAL_ALIGN} icon={File} />
    </IconBox>
);

export const GitHub = () => (
    <IconBox type={'side'}>
        <Octions verticalAlign={VERTICAL_ALIGN} icon={MarkGithub} />
    </IconBox>
);

export const LinkedIn = () => (
    <IconBox type={'side'}>
        <LinkedInIcon />
    </IconBox>
);

export const Email = () => (
    <IconBox type={'side'}>
        <Octions verticalAlign={VERTICAL_ALIGN} icon={Mail} />
    </IconBox>
);

export const Menu = () => (
    <IconBox type={'menu'}>
        <Octions verticalAlign={VERTICAL_ALIGN} icon={Grabber} size={'small'} />
    </IconBox>
);
