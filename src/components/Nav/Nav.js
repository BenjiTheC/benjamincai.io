import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as WebsiteBrand } from '../../assets/img/website_brand.svg';
import { GitHub, LinkedIn, Email } from '../Icons';
import ExLink from '../ExLink';
import TabsGroup from './TabsGroup';
import './Nav.scss';

const Contacts = () => (
    <div className={'flex-row align-center contacts-group'}>
        <ExLink to={'https://github.com/BenjiTheC'}>
            <GitHub />
        </ExLink>
        <ExLink to={'https://www.linkedin.com/in/benjamin-cai/'}>
            <LinkedIn />
        </ExLink>
        <ExLink to={'mailto:benjamincaiyh@gmail.com'}>
            <Email />
        </ExLink>
    </div>
);

export default function Nav() {
    return (
        <header>
            <nav className={'flex-row align-center justify-space-between'}>
                <Link to={'/'}>
                    <WebsiteBrand title={'website brand'} className={'m-left-1 m-top-auto m-bottom-auto website-brand'} />
                </Link>
                <TabsGroup />
                <Contacts />
            </nav>
        </header>
    );
}
