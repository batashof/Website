import React from 'react';
import ReactDOM from 'react-dom';
import NewsLink from './newslink';



describe ('logo', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NewsLink />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    describe('correct date', () => {
        it('returns correct date', () => {
            const newsLink = new NewsLink({ date: "01/01/2018" });
            const result = {
                day: 1,
                month: 'JAN',
                year: 2018
            }      
            expect(newsLink.parseDate()).toEqual(result);      
        });
    });
})
