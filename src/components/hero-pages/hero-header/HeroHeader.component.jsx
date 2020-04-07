import React from 'react';
import PropTypes from 'prop-types';
import './hero_header.styles.scss';

const HeroHeader = ( { heroType } ) => {
  return (
    <>
      <div className="hero-header">
        <h1 className="heading pink-underline">
          Resources for { heroType }
        </h1>
        <div>
          <p className="sub-text">
            Resources curated by the community for fellow { heroType.toLowerCase() }.
          </p>
        </div>
      </div>
    </>
  )
};

HeroHeader.defaultProps = {
  heroType: "",
};

HeroHeader.propTypes = {
  heroType: PropTypes.string,
}

export default HeroHeader;
