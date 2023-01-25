import React from 'react';
import PropTypes from 'prop-types';

class MissionInfos extends React.Component {
  render() {
    const { testid, iconSrc, altText, info } = this.props;
    return (
      <div>
        <img src={ iconSrc } alt={ altText } />
        <p data-testid={ testid }>{ info }</p>
      </div>
    );
  }
}

MissionInfos.propTypes = {
  testid: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default MissionInfos;
