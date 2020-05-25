import React from 'react';
import PropTypes from 'prop-types';
import Partner from '../partner/Partner.component';
import PartnerLogos from '../../../assets/images/partner-logos.png';
import './partners_list.styles.scss';

const PartnersList = ( { partners } ) => {
  return (
    <>
      <div className="partners-list row-with-wrap">
        <img src={PartnerLogos} />
      </div>
    </>
  )
};

PartnersList.defaultProps = {
  partners: [{"": ""}]
};

PartnersList.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.objectOf(String))
}
export default PartnersList;
