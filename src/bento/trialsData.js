import gql from 'graphql-tag';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
const programListingIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'Bento program logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'Trials',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'clinicalTrials',
  // Value must be one of the 'field' in columns
  defaultSortField: 'program_acronym',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'clinical_trial_designation',
      header: 'Trial Code',
      link: '/trial/{clinical_trial_id}',
      display: true,
    },
    {
      dataField: 'clinical_trial_id',
      header: 'Trial ID',
      link: 'https://clinicaltrials.gov/',
    },
    {
      dataField: 'clinical_trial_short_name',
      header: 'Trial Name',
    },
    {
      dataField: 'number_of_arms',
      header: 'Arms',
    },
    {
      dataField: 'numberOfCases',
      header: 'Cases',
    },
  ],
};

// --------------- GraphQL query - Retrieve program info --------------
const GET_TRIALS_DATA_QUERY = gql`{
  clinicalTrials{
    clinical_trial_id
  clinical_trial_short_name
  clinical_trial_description
  clinical_trial_designation
  clinical_trial_long_name
  clinical_trial_type
  lead_organization
  principal_investigators
  number_of_arms
  numberOfCases
  }
}`;

export {
  programListingIcon,
  externalLinkIcon,
  table,
  GET_TRIALS_DATA_QUERY,
};
