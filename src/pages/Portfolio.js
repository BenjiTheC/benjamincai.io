import React from 'react';
import { Nav, Hero } from '../components';

export default function Portfolio() {
    return (
        <>
            <Nav />
            <Hero />
            <main className={'m-desktop-horizontal-auto'}>
                <section id={'about-me'}>
                    <h2>About Me</h2>
                </section>
                <section id={'projects'}>
                    <h2>Projects</h2>
                </section>
                <section id={'resume'}>
                    <h2>Resume</h2>
                </section>
            </main>
        </>
    );
}
