import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { AboutMe, Projects, Resume } from '../Icons';
import './Nav.scss';

const Tab = ({ tabIcon, tabDesc, tabLink, onClose }) => {
    const { pathname, hash } = useLocation();
    const fullPath = `${pathname}${hash}`;

    const onLinkClick = () => window.innerWidth < 768 && onClose();

    return (
        <Link
            to={tabLink}
            className={`p-mobile-horizontal-1 flex-mobile-row flex-desktop-column justify-desktop-center align-center nav-tab ${
                tabLink === fullPath ? 'selected' : ''
            }`}
            role={'button'}
            onClick={onLinkClick}
        >
            {tabIcon()}
            <div className={'m-mobile-left-1 m-desktop-bottom-auto tab-desc'}>{tabDesc}</div>
            <div className={'selected-bottom-bar'} />
        </Link>
    );
};
Tab.propTypes = {
    tabIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object, PropTypes.string]).isRequired,
    tabDesc: PropTypes.string.isRequired,
    tabLink: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default function TabsGroup({ style = {}, onClose }) {
    return (
        <>
            <div role={'presentation'} onClick={() => onClose()} className={'modal-mobile'} />
            <nav className={'m-mobile-1 flex-row flex-mobile-column elevate-desktop-0 elevate-mobile-2 tabs-group'} style={style}>
                <Tab tabIcon={AboutMe} tabDesc={'AboutMe'} tabLink={'/#about-me'} onClose={() => onClose()} />
                <Tab tabIcon={Projects} tabDesc={'Projects'} tabLink={'/#projects'} onClose={() => onClose()} />
                <Tab tabIcon={Resume} tabDesc={'Resume'} tabLink={'/#resume'} onClose={() => onClose()} />
            </nav>
        </>
    );
}
TabsGroup.propTypes = {
    style: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};
