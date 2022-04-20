import React from 'react';
import CaseCard from './cards/caseCard';
// import SampleCard from './cards/sampleCard';
import ArmCard from './cards/armCard';
import FileCard from './cards/fileCard';
import ClinicalCard from './cards/ClinicalTrialCard';
import ValueCard from './cards/valueCard';
import AboutCard from './cards/aboutCard';

const Components = {
  case: CaseCard,
  arm: ArmCard,
  file: FileCard,
  clinical_trial: ClinicalCard,
  node: ValueCard,
  value: ValueCard,
  property: ValueCard,
  about: AboutCard,
};

export default ({
  searchText, data, classes, index,
}) => {
  if (typeof Components[data.type] !== 'undefined') {
    return React.createElement(Components[data.type], {
      data, classes, index, searchText,
    });
  }
  return React.createElement(
    () => (
      <div>
        The component
        {' '}
        {data.type}
        {' '}
        has not been created yet.
      </div>
    ),
  );
};
