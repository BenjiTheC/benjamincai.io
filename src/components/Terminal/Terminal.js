// inspiration: https://github.com/robherley/robherley.xyz/blob/master/src/components/Terminal/index.jsx
import React, { useEffect, useRef, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useRectYListener } from '../../hooks';
import { languageColorPairs, technolgoyColorPairs, miscColorPairs } from './coloredTextMapping';
import './Terminal.scss';

const VALID = '#16980A';
const ERROR = '#DD4C4B';

const Text = ({ color = 'white', opacity = 0.87, fontWeight = 400, children }) => <span style={{ color, opacity, fontWeight }}>{children}</span>;
Text.propTypes = {
    color: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element, PropTypes.string, PropTypes.node]).isRequired,
    opacity: PropTypes.number,
    fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const Prompt = () => (
    <div className={'pad prompt'}>
        <Text fontWeight={'bold'}>you@benjamin.xyz</Text>
        <Text> | </Text>
        <Text color={'#4CE04B'} fontWeight={'bold'}>
            ~/Portfolio
        </Text>
        <Text> | </Text>
        <Text color={'#DC4BE0'} fontWeight={'bold'}>
             master
        </Text>
    </div>
);

const Cursor = ({ error = false }) => <Text color={error ? ERROR : '#46C2C4'}>» </Text>;
Cursor.propTypes = {
    error: PropTypes.bool,
};

const ErrorMsg = ({ cmd }) => (
    <Text color={ERROR}>
        benjish: command not found: {cmd}
        <br />
        Enter {"'"}help{"'"} for all valid commands
    </Text>
);
ErrorMsg.propTypes = {
    cmd: PropTypes.string.isRequired,
};

const AboutMe = () => (
    <div className={'about-me'}>
        <div>
            <Text opacity={0.6}>Name: </Text>
            <Text>Benjamin Cai</Text>
        </div>
        <div className={'pad'}>
            <Text opacity={0.6}>College: </Text>
            <Text>Stevens Insititute of Technology</Text>
        </div>
        <div className={'pad'}>
            <Text opacity={0.6}>Major: </Text>
            <Text>Software Engineering, Master of Science</Text>
        </div>
        <div className={'pad'}>
            <Text opacity={0.6}>Graduation: </Text>
            <Text>May 2020</Text>
        </div>
        <div className={'pad'}>
            <Text opacity={0.6}>Languages: </Text>
        </div>
        <div>
            {languageColorPairs.map(([language, color]) => (
                <Text key={language} color={color}>{`${language} `}</Text>
            ))}
        </div>
        <div className={'pad'}>
            <Text opacity={0.6}>Framework & Technology: </Text>
        </div>
        <div>
            {technolgoyColorPairs.map(([tech, color]) => (
                <Text key={tech} color={color}>{`${tech} `}</Text>
            ))}
        </div>
        <div className={'pad'}>
            <Text opacity={0.6}>Other: </Text>
        </div>
        <div>
            {miscColorPairs.map(([other, color]) => (
                <Text key={other} color={color}>{`${other} `}</Text>
            ))}
        </div>
    </div>
);

const ALL_COMMANDS = {
    aboutme: <AboutMe />,
    ls: <Text>about_me projects resume</Text>,
    vi: <Text>Nah it&apos;s 21st centry already, we use vim now :p</Text>,
    vim: <Text>Ever thought about emacs? XD</Text>,
    emacs: <Text>Ever thought about vim? XD</Text>,
    help: null,
    clear: null,
};

const INIT_CMD_STATE = { cmd: '', history: [], cmdsValid: [true] };

const CMD_REDUCER = (state, action) => {
    const { history, cmdsValid } = state;
    switch (action.type) {
        case 'typing':
            return { cmd: action.value, history, cmdsValid };
        case 'enter':
            return { cmd: '', history: [...history, action.newCmd], cmdsValid: [...cmdsValid, Boolean(action.newCmd in ALL_COMMANDS)] };
        case 'clear':
            return INIT_CMD_STATE;
        default:
            return state;
    }
};

function* autoTypeGenerator() {
    yield* 'aboutme';
}

export default function Terminal() {
    const terminalRef = useRef(null);
    const cursorRef = useRef(null);
    const textContainerRef = useRef(null);
    const [{ cmd, history, cmdsValid }, dispatchCmd] = useReducer(CMD_REDUCER, INIT_CMD_STATE);
    const [startAutoType] = useRectYListener(terminalRef);

    useEffect(() => {
        if (textContainerRef.current) {
            const { current: txtCont } = textContainerRef;
            // const { y: txtContTop } = txtCont.getBoundingClientRect();
            // console.log(txtContTop);
            // if (txtContTop > 0 && txtContTop < (2 / 3) * window.innerHeight) {
            //     console.log('in text cont top changing');
            txtCont.scrollTop = txtCont.scrollHeight;
            // }
        }
    }, [history]);

    useEffect(() => {
        if (startAutoType && history.length === 0) {
            let tempCmd = ''; // seems like a non-denpendent useEffect won't recognize the change of state. This tempCmd is used to store the yielded cmd.
            const autoTypeIter = autoTypeGenerator();
            const autoTyper = setInterval(() => {
                const { value: cmdChar, done: iterFinish } = autoTypeIter.next();
                tempCmd += cmdChar || '';
                if (!iterFinish) {
                    dispatchCmd({ type: 'typing', value: tempCmd });
                } else {
                    dispatchCmd({ type: 'enter', newCmd: tempCmd });
                    clearInterval(autoTyper);

                    if (textContainerRef.current) {
                        const { y: txtContTop } = textContainerRef.current.getBoundingClientRect();
                        if (txtContTop > 0 && txtContTop < (2 / 3) * window.innerHeight) {
                            cursorRef.current.focus();
                        }
                    }
                }
            }, 300);
        }
    }, [startAutoType]);

    const onTerminalCick = () => cursorRef.current && cursorRef.current.focus();

    const onEnterCommand = ({ key, target: { value: newCmd } }) => {
        if (key === 'Enter') {
            dispatchCmd({ type: newCmd === 'clear' ? 'clear' : 'enter', newCmd });
        }
    };

    const HelpText = () => (
        <Text>
            All valid commands:
            <br />
            {Object.keys(ALL_COMMANDS).map(c => (
                <div key={c}>
                    {`- ${c}`}
                    <br />
                </div>
            ))}
        </Text>
    );

    return (
        <div ref={terminalRef} role={'presentation'} className={'terminal'} onClick={() => onTerminalCick()}>
            <div className={'terminal-menu'}>
                <div className={'terminal-menu-button close'} />
                <div className={'terminal-menu-button minimize'} />
                <div className={'terminal-menu-button expend'} />
            </div>
            <div ref={textContainerRef} className={'terminal-window'}>
                <div className={'terminal-window-text-container'}>
                    {history.map((c, idx) => (
                        <div key={`${c}-${cmdsValid.slice(idx)}`}>
                            <Prompt />
                            <div className={'pad'}>
                                <Cursor error={!cmdsValid[idx]} />
                                <Text color={c in ALL_COMMANDS ? VALID : ERROR}>{c}</Text>
                            </div>
                            <div className={'pad'}>{c === 'help' ? <HelpText /> : ALL_COMMANDS[c] || <ErrorMsg cmd={c} />}</div>
                        </div>
                    ))}
                    <Prompt />
                    <div className={'pad'}>
                        <Cursor error={!cmdsValid.slice(-1)[0]} />
                        <input
                            ref={cursorRef}
                            autoCapitalize={'none'}
                            spellCheck={false}
                            type={'text'}
                            onKeyDown={e => onEnterCommand(e)}
                            onChange={({ target: { value } }) => dispatchCmd({ type: 'typing', value })}
                            value={cmd}
                            style={{ color: cmd in ALL_COMMANDS ? VALID : ERROR, fontWeight: cmd in ALL_COMMANDS ? 'normal' : 'bold' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
