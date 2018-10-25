import List from './list.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

describe('list', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <List layout="vertical">
        <a />
        <a />
        <a />
      </List>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('defineClassName', () => {
    it('returns correct class when layout prop is "vertical"', () => {
      const list = new List({ layout: 'vertical' });
      expect(list.defineClassName()).toBe('List List_layout_vertical');
    });
    it('returns correct class when layout prop is "horisontal"', () => {
      const list = new List({ layout: 'horisontal' });
      expect(list.defineClassName()).toBe('List List_layout_horisontal');
    });
    it('returns correct class when layout prop is "vertical-centered"', () => {
      const list = new List({ layout: 'vertical-centered' });
      expect(list.defineClassName()).toBe('List List_layout_vertical-centered');
    });
    it('returns correct class when layout prop is "vertical-with-bullets"', () => {
      const list = new List({ layout: 'vertical-with-bullets' });
      expect(list.defineClassName()).toBe(
        'List List_layout_vertical-with-bullets'
      );
    });
    it('returns correct class when layout prop is "with-grid"', () => {
      const list = new List({ layout: 'with-grid' });
      expect(list.defineClassName()).toBe('List List_layout_with-grid');
    });
    it('returns correct class when layout prop is "horisontal-with-border"', () => {
      const list = new List({ layout: 'horisontal-with-border' });
      expect(list.defineClassName()).toBe('List List_layout_horisontal-with-border');
    });
  });
});
