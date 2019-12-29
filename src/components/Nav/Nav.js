import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { ReactComponent as WebsiteBrand } from '../../assets/img/website_brand.svg';
import { GitHub, LinkedIn, Email, Menu } from '../Icons';
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
    const [shouldTabsShow, setTabsShow] = useState(null);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setTabsShow(false);
        } else {
            setTabsShow(true);
        }
    }, []);

    useEffect(() => {
        const onWindowWidthChange = () => {
            if (window.innerWidth < 768 && shouldTabsShow) {
                setTabsShow(false);
            } else if (window.innerWidth >= 768 && !shouldTabsShow) {
                setTabsShow(true);
            }
        };
        window.addEventListener('resize', onWindowWidthChange);
        return () => {
            window.removeEventListener('resize', onWindowWidthChange);
        };
    });

    const MenuButton = () => (
        <button type={'button'} onClick={() => setTabsShow(!shouldTabsShow)} className={'menu-button'}>
            <Menu />
        </button>
    );
    return (
        <>
            <header className={'flex-row justify-space-between align-center nav-header'}>
                <Link to={'/'} className={'m-left-1'} role={'button'} onClick={() => window.scroll({ top: 0, left: 0 })}>
                    <WebsiteBrand title={'website brand'} className={'website-brand'} />
                </Link>
                <div className={'flex-row align-center'}>
                    <Contacts />
                    <MenuButton />
                </div>
                {shouldTabsShow && <TabsGroup onClose={() => setTabsShow(!shouldTabsShow)} />}
            </header>
            <div className={'space-filler'} />
        </>
    );
}
