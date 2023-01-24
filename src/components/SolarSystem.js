import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/SolarSystem.css';

const makeAPlanetCard = ({ name, image }) => (
  <PlanetCard planetName={ name } planetImage={ image } key={ name } />
);

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planets-sec">
          { Planets.map(makeAPlanetCard) }
          <hr width="100%" />
        </section>
      </div>
    );
  }
}

export default SolarSystem;
