import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { AboutMe, Projects, Resume } from '../Icons';

const Tab = ({ tabIcon, tabDesc, tabLink }) => {
    const { pathname, hash } = useLocation();
    const fullPath = `${pathname}${hash}`;

    return (
        <Link to={tabLink}>
            <div className={`nav-tab flex-column align-center ${tabLink === fullPath && 'selected'}`}>
                {tabIcon()}
                <div className={'m-bottom-auto tab-desc'}>{tabDesc}</div>
                <div className={'selected-bottom-bar'} />
            </div>
        </Link>
    );
};
Tab.propTypes = {
    tabIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object, PropTypes.string]).isRequired,
    tabDesc: PropTypes.string.isRequired,
    tabLink: PropTypes.string.isRequired,
};

export default function TabsGroup() {
    return (
        <div className={'flex-row align-center'}>
            <Tab tabIcon={AboutMe} tabDesc={'AboutMe'} tabLink={'/#about-me'} />
            <Tab tabIcon={Projects} tabDesc={'Projects'} tabLink={'/#projects'} />
            <Tab tabIcon={Resume} tabDesc={'Resume'} tabLink={'/#resume'} />
        </div>
    );
}
