import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider';



describe ('Slider', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Slider>
            <div>1</div>
            <div>2</div>
            </Slider >
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

})