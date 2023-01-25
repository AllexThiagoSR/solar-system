import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MissionCard.css';
import yearIcon from '../images/yearIcon.png';
import locIcon from '../images/locationIcon.png';
import destIcon from '../images/destinationIcon.png';
import MissionInfos from './MissionInfos';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <div className="mission-name"><p data-testid="mission-name">{ name }</p></div>
        <div className="mission-other-infos">
          <MissionInfos
            testid="mission-year"
            iconSrc={ yearIcon }
            altText="Year icon"
            info={ year }
          />
          <MissionInfos
            testid="mission-country"
            iconSrc={ locIcon }
            altText="Country icon"
            info={ country }
          />
          <MissionInfos
            testid="mission-destination"
            iconSrc={ destIcon }
            altText="Destination icon"
            info={ destination }
          />
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
