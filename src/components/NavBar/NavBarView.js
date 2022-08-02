import React from 'react';
import { NavBar } from 'bento-components';
// import { useSelector } from 'react-redux';
import {
  navBarData, navBarCartData, navBarstyling, externalLinks,
} from '../../bento/navigationBarData';

const BentoNavBar = ({ cartFieldIds }) => (
  <>
    <NavBar
      navBarData={navBarData}
      navBarCartData={navBarCartData}
      navBarstyling={navBarstyling}
      numberOfCases={cartFieldIds.length || 0}
      externalLinksFlag
      externalLinks={externalLinks}
    />
  </>
);
export default BentoNavBar;
