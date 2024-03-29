import React from 'react';
import Exlink from '../ExLink';
import './Hero.scss';

export default function Hero() {
    return (
        <>
            <h1 className="m-horizontal-auto p-mobile-bottom-1 p-desktop-top-2 p-desktop-bottom-1 benjamin-cai">
                Benjamin Ca<span className="last-letter">i</span>
            </h1>
            <div className="hero" />
            <div className="flex-row align-center m-horizontal-auto bio">
                <div>
                    <div className="m-2 profile-pic-frame" />
                    <div className="p-vertical-1 p-horizontal-2 brief">
                        My name is Benjamin Cai. I’m a full-stack developer currently based on Austin, TX, also a second-year graduate student in
                        <Exlink to="https://www.stevens.edu/">Stevens Institute of Technology</Exlink>, majoring in Software Engineering. My current
                        areas of interests are Cloud(AWS), backend development and Machine Learning.
                    </div>
                </div>
            </div>
        </>
    );
}
