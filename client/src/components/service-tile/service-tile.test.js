import ServiceTile from './service-tile.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  DevopsIcon,
  DevelopmentIcon,
  QAIcon,
  AgileIcon,
  CloudIcon,
  DigitalTransformationIcon,
  BIIcon,
  MicrosoftIcon,
  JavaIcon,
  PHPIcon,
  QATechIcon,
  BITechIcon,
  DefaultIcon,
  ServicesIcon,
  TechnologiesIcon,
  SectorsIcon,
  ModelIcon,
  DurationIcon
} from './service-icons';

describe('ServiceTile', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ServiceTile division="devops" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('defineContent', () => {
    let division;
    it('returns correct content when division prop is "devops"', () => {
      division = 'devops';
      const serviceTile = new ServiceTile({ division: division });
      expect(serviceTile.defineContent(division).icon).toEqual(<DevopsIcon />);
      expect(serviceTile.defineContent(division).name).toBe('Devops');
      expect(serviceTile.defineContent(division).url).toBe(
        '/continuous-delivery/'
      );
    });

    it('returns correct content when division prop is "development"', () => {
      division = 'development';
      const serviceTile = new ServiceTile({ division: division });
      expect(serviceTile.defineContent(division).icon).toEqual(
        <DevelopmentIcon />
      );
      expect(serviceTile.defineContent(division).name).toEqual(
        'Software development'
      );
      expect(serviceTile.defineContent(division).url).toEqual(
        '/software-development/'
      );
    });
    it('returns correct content when division prop is "qa"', () => {
      division = 'qa';
      const serviceTile = new ServiceTile({ division: 'qa' });
      expect(serviceTile.defineContent(division).icon).toEqual(<QAIcon />);
      expect(serviceTile.defineContent(division).name).toEqual('QA/Automation');
      expect(serviceTile.defineContent(division).url).toEqual(
        '/qa-automation/'
      );
    });
    it('returns correct content when division prop is "cloud"', () => {
      division = 'cloud';
      const serviceTile = new ServiceTile({ division: 'cloud' });
      expect(serviceTile.defineContent(division).icon).toEqual(<CloudIcon />);
      expect(serviceTile.defineContent(division).name).toEqual('Cloud');
      expect(serviceTile.defineContent(division).url).toEqual(
        '/cloud/'
      );
    });
    it('returns correct content when division prop is "digital"', () => {
      division = 'digital';
      const serviceTile = new ServiceTile({ division: 'digital' });
      expect(serviceTile.defineContent(division).icon).toEqual(
        <DigitalTransformationIcon />
      );
      expect(serviceTile.defineContent(division).name).toEqual(
        'Digital transformation'
      );
      expect(serviceTile.defineContent(division).url).toEqual(
        '/digitaltransformation/'
      );
    });
    it('returns correct content when division prop is "bi"', () => {
      division = 'bi';
      const serviceTile = new ServiceTile({ division: 'business' });
      expect(serviceTile.defineContent(division).icon).toEqual(<BIIcon />);
      expect(serviceTile.defineContent(division).name).toEqual(
        'Business intelligence'
      );
      expect(serviceTile.defineContent(division).url).toEqual(
        '/business-intelligence/'
      );
    });
    it('returns correct content when division prop is "Devops"', () => {
      division = 'devops';
      const serviceTile = new ServiceTile({ division: 'devops' });
      expect(serviceTile.defineContent(division).icon).toEqual(<DevopsIcon />);
      expect(serviceTile.defineContent(division).name).toEqual('Devops');
      expect(serviceTile.defineContent(division).url).toEqual(
        '/continuous-delivery/'
      );
    });
    it('returns correct content when division prop is "agile"', () => {
      division = 'agile';
      const serviceTile = new ServiceTile({ division: 'agile' });
      expect(serviceTile.defineContent(division).icon).toEqual(<AgileIcon />);
      expect(serviceTile.defineContent(division).name).toEqual(
        'Agile Consulting'
      );
      expect(serviceTile.defineContent(division).url).toEqual(
        '/agile-consulting/'
      );
    });
  });
});
