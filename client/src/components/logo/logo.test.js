import Logo from './logo.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import logo_text from './logo_text.svg';
import logo_size_l from './logo_size_l.svg';

describe ('logo', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Logo />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    describe('className', () => {
        it('returns correct class when text prop is defined', () => {
            const logo = new Logo({ text: true });
            expect(logo.defineClass()).toBe('Logo Logo_size_m Logo_with-text');
        });

        it('returns correct class when without text', () => {
            const logo = new Logo({});
            expect(logo.defineClass()).toBe('Logo Logo_size_l');            
        });
    });

    describe('src', () => {
        it('returns big image url when used without text', () => {
            const logo = new Logo({ text: true });
            expect(logo.defineSrc()).toBe('logo_text.svg');
        })

        it('returns small image url when used with text', () => {
            const logo = new Logo({});
            expect(logo.defineSrc()).toBe('logo_size_l.svg');
        })
    });
})