import gql from 'graphql-tag';

// --------------- Page title configuration --------------
const pageTitle = {
  label: 'Trial :',
  dataField: 'clinical_trial_designation',
};

const pageSubTitle = {
  dataField: 'clinical_trial_short_name',
};

const breadCrumb = {
  label: 'ALL PROGRAMS',
  link: '/trials',
};

// --------------- Aggregated count configuration --------------
const aggregateCount = {
  labelText: 'Cases',
  dataField: 'number_of_cases',
  link: '/cases',
  display: true,
};

// --------------- Icons configuration --------------
// Ideal size for programDetailIcon is 107x107 px
// Ideal size for externalLinkIcon is 16x16 px
const programDetailIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'Bento program logo',
};

const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Left Pannel configuration --------------
// A maximum of 6 leftPanelattributes are allowed
const leftPanel = {
  attributes: [
    {
      dataField: 'clinical_trial_long_name',
      label: 'Trial Name',
    },
    {
      dataField: 'clinical_trial_id',
      label: 'Trial Id',
    },
    {
      dataField: 'clinical_trial_description',
      label: 'Trial Description',
    },
    {
      dataField: 'clinical_trial_type',
      label: 'TRIAL TYPE',
    },
    {
      dataField: 'lead_organization',
      label: 'LEAD ORGANIZATION',
    },
    {
      dataField: 'principal_investigators',
      label: 'PRINCIPAL INVESTIGATORS',
    },
    // {
    //   dataField: 'program_external_url',
    //   label: 'External Link to Program',
    //   externalLinkToLabel: true,
    // },
  ],
};

// --------------- Right Pannel configuration --------------
// Ideal size for fileIconSrc is 66x53 px
const rightPanel = {
  widget: [
    {
      dataField: 'diagnoses',
      label: 'Diagnosis',
      display: false,
    },
  ],
  files: [
    {
      dataField: 'fileCountByTrialId', // Todo: Include this property in clinicalTrialByTrialId.
      label: 'Number of files',
      fileIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programNumberofFilesIcon.svg',
      fileIconAlt: 'Number of files icon',
      display: true,
    },
  ],
  links: [
    {
      label: 'Mutation Exploration',
      icon: 'https://cbioportal.bento-tools.org/reactapp/images/369b022222badf37b2b0c284f4ae2284.png',
      link: 'https://cbioportal.bento-tools.org/study/summary?id=match_z1',
      display: true,
    },

  ],
};

// --------------- Table configuration --------------
const table = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  title: 'TRIAL ARMS',
  // Field name for table data, need to be updated only when using a different GraphQL query
  dataField: 'clinicalTrialArmByTrialId',
  // Value must be one of the 'field' in columns
  defaultSortField: 'arm_id',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: false,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'arm_id',
      header: 'Arm',
      link: '/cases',
    },
    {
      dataField: 'arm_drug',
      header: 'Arm Treatment',
    },
    {
      dataField: 'arm_target',
      header: 'Arm Target',
    },
    {
      dataField: 'pubmed_id',
      header: 'PubMed ID',
    },
    {
      dataField: 'number_of_cases',
      header: 'Associated Cases',
    },
  ],
};

// --------------- GraphQL query - Retrieve program details --------------
const GET_TRIAL_DETAIL_DATA_QUERY = gql`
query trialIdQueries(
  $ids: [String],
  $id: String!
){

    searchCases(
        clinical_trial_id: $ids
    ){
        casesCountBaseOnTrialId{
            group
            subjects
        }
        numberOfFiles
    }

  fileCountByTrialId(trial_id:$id)
  clinicalTrialByTrialId(trial_id: $id) {
      clinical_trial_id
      clinical_trial_short_name
      clinical_trial_description
      clinical_trial_designation
      clinical_trial_long_name
      clinical_trial_type
      lead_organization
      principal_investigators
      number_of_cases
      number_of_arms
  }
  clinicalTrialArmByTrialId(trial_id:$id){
      arm_id
      arm_target
      arm_drug
      pubmed_id
      number_of_cases
  }
}`;

export {
  pageTitle,
  pageSubTitle,
  aggregateCount,
  programDetailIcon,
  leftPanel,
  rightPanel,
  externalLinkIcon,
  breadCrumb,
  GET_TRIAL_DETAIL_DATA_QUERY,
  table,
};
