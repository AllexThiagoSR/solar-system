import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missionsList from '../data/missions';

const makeAMissionCard = ({ name, country, year, destination }) => (
  <MissionCard
    key={ name }
    name={ name }
    country={ country }
    year={ year }
    destination={ destination }
  />
);

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="missions-sec">
          { missionsList.map(makeAMissionCard) }
        </section>
      </div>
    );
  }
}

export default Missions;
