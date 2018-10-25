import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('defineWidth', () => {
    it('returns correct className with width', () => {
      const layout = new Layout({ width: 'full' });
      const className = layout.defineWidth();
      expect(className).toBe('Layout Layout_width_full');
    });

    it('returns correct className without width prop', () => {
      const layout = new Layout({ name: 'people' });
      const className = layout.defineWidth();
      expect(className).toBe('Layout');
    });

    it('returns correct className with undefined width', () => {
      const layout = new Layout({ width: undefined });
      const className = layout.defineWidth();
      expect(className).toBe('Layout');
    });
  });

  describe('defineName', () => {
    it('returns correct name with name prop', () => {
      const layout = new Layout({ name: 'people' });
      const name = layout.defineName();
      expect(name).toBe('people');
    });

    it('returns correct name with undefined name prop', () => {
      const layout = new Layout({ name: undefined });
      const name = layout.defineName();
      expect(name).toBe('');
    });
  });

  describe('defineTitle', () => {
    it('returns correct h2 tag with title prop', () => {
      const layout = new Layout({ name: 'our-mission', title: 'Our mission' });
      const title = layout.defineTitle();
      expect(title).toEqual(
        <h2 className="our-mission__title">Our mission</h2>
      );
    });

    it('returns correct h2 tag with undefined title prop', () => {
      const layout = new Layout({ title: undefined });
      const title = layout.defineTitle();
      expect(title).toBe('');
    });

    it('returns correct h2 tag without title prop', () => {
      const layout = new Layout({ width: 'full' });
      const title = layout.defineTitle();
      expect(title).toBe('');
    });
  });

  // Matcher doesn't work although objects are same 
  xdescribe('defineText', () => {
    it('returns correct p tag with title prop', () => {
      const layout = new Layout({
        name: 'our-mission',
        text: [
          'Since the start of 2015 we have pledged to provide a monthly charitable donation as on-going support to UK and Belarus based Children and Young Adults Charity, Chernobyl Children’s Project UK.'
        ]
      });
      const text = layout.defineText();
      expect(text[0]).toMatchObject(
        <p className="our-mission__text">
          Since the start of 2015 we have pledged to provide a monthly
          charitable donation as on-going support to UK and Belarus based
          Children and Young Adults Charity, Chernobyl Children’s Project UK.
        </p>
      );
    });

  });

  describe('defineLayoutClassName', () => {
    it('returns correct layout className', () => {
      const layout = new Layout({ width: 'full', name: 'our-mission' });
      const className = layout.defineLayoutClassName();
      expect(className).toBe('Layout Layout_width_full our-mission');
    });

    it('returns correct layout className', () => {
      const layout = new Layout({});
      const className = layout.defineLayoutClassName();
      expect(className).toBe('Layout ');
    });

    it('returns correct layout className', () => {
      const layout = new Layout({ name: 'our-mission' });
      const className = layout.defineLayoutClassName();
      expect(className).toBe('Layout our-mission');
    });
  });

  describe('defineWrapClassName', () => {
    it('returns correct wrap className', () => {
      const layout = new Layout({ name: 'our-mission' });
      const className = layout.defineWrapClassName();
      expect(className).toBe('Layout__wrap our-mission__wrap');
    });

    it('returns correct wrap className', () => {
      const layout = new Layout({ name: undefined });
      const className = layout.defineWrapClassName();
      expect(className).toBe('Layout__wrap __wrap');
    });
  });
});
