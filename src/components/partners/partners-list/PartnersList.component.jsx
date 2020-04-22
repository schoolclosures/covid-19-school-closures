import React from 'react';
import PropTypes from 'prop-types';
import Partner from '../partner/Partner.component';
import './partners_list.styles.scss';

const PartnersList = ( { partners } ) => {
  return (
    <>
      <div className="partners-list row-with-wrap">
        <Partner name={"Khan Academy"}/>
        <Partner name={"Dexter"}/>
        <Partner name={"Prenda"}/>
        <Partner name={"Twillo"}/>
        <Partner name={"ClassDojo"}/>
        <Partner name={"Code"}/>
        <Partner name={"Crisis Text Line"}/>
        <Partner name={"Learn Capital"}/>
        <Partner name={"LTSE"}/>
        <Partner name={"Modulo"}/>
        <Partner name={"Okta"}/>
        <Partner name={"Outschool"}/>
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
