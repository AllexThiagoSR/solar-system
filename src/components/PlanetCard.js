import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className={ `${planetName} planet-card` }>
        <p data-testid="planet-name" className="planet-name">{ planetName }</p>
        <div className="planet-img">
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
