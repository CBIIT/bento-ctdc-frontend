import gql from 'graphql-tag';
import { FileOnRowsSelect } from '../utils/fileTable';
import { SampleOnRowsSelect } from '../utils/sampleFileTable';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  src: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
};

// -------------- Case ID area configurations --------------
const caseHeader = {
  label: 'Case ID',
  dataField: 'case_id',
};

// --------------- Data panel configuration --------------
const leftPanel = [
  // Each object here represents a subsection in the panel
  // A maximum of 3 subsections are allowed
  {
    sectionHeader: 'Demographics',
    // sectionDesc: 'Demographic Related Info',
    properties: [
      // A maximum of 10 properties are allowed
      {
        label: 'Gender',
        dataField: 'gender',
      },
      {
        label: 'Race',
        dataField: 'race',
      },
      {
        label: 'Ethnicity',
        dataField: 'ethnicity',
      },
    ],
  },
  {
    sectionHeader: 'Diagnosis',
    // sectionDesc: 'Diagnosis Related Info',
    properties: [
      {
        label: 'Diagnosis',
        dataField: 'disease',
      },
    ],
  },
];

const rightPanel = [
  // Each object here represents a subsection in the panel
  // A maximum of 3 subsections are allowed
  {
    sectionHeader: 'TRIAL',
    // sectionDesc: 'Treatment Related Info',
    properties: [
      // A maximum of 10 properties are allowed
      {
        label: 'Assigned to Trial',
        dataField: 'clinical_trial_code',
      },
      {
        label: 'ARM',
        dataField: 'chemotherapy_regimen_group',
      },
      {
        label: 'ARM TREATMENT',
        dataField: 'chemotherapy_regimen',
      },
      {
        label: 'ARM TARGET',
        dataField: 'endocrine_therapy_type',
      },
    ],
  },
];

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Table 1 configuration --------------
const table1 = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  tableTitle: 'ASSOCIATED SAMPLES',
  // Field name for files data, need to be updated only when using a different GraphQL query
  subjectDetailField: 'samples',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'sample_id',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  saveButtonDefaultStyle: {
    color: '#fff',
    backgroundColor: '#09A175',
    opacity: '1',
    border: '0px',
    cursor: 'pointer',
  },
  ActiveSaveButtonDefaultStyle: {
    disabled: 'true',
    opacity: '0.3',
    cursor: 'auto',
  },
  DeactiveSaveButtonDefaultStyle: {
    cursor: 'pointer',
    opacity: 'unset',
    border: 'unset',
  },
  // Help Icon Message
  tooltipMessage: 'Click button to add selected files associated with the selected sample(s).',
  helpMessage: 'Here help message',
  // showHideColumns 'true' or 'false'
  showHideColumns: true,
  // download csv
  download: false,
  // downloaded File Name
  downloadFileName: 'Bento_case_files_download',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: true,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'sample_id',
      header: 'Sample ID',
      sort: 'asc',
      primary: true,
      display: true,
    },
    {
      dataField: 'disease_subtype',
      header: 'Diagnosis',
      dataFromRoot: true,
    },
    {
      dataField: 'tissue_type',
      header: 'Tissue Type',
    },
    {
      dataField: 'composition',
      header: 'Tissue Composition',
    },
    {
      dataField: 'sample_anatomic_site',
      header: 'Sample Anatomic Site',
    },
    {
      dataField: 'method_of_sample_procurement',
      header: 'Sample Procurement Method',
    },
    {
      dataField: 'test_name',
      header: 'Platform',
      dataFromRoot: true,
    },
  ],
  // Util Functions
  // Custom function on selct checkbox is selected.
  customOnRowsSelect: SampleOnRowsSelect,
};

// --------------- Table 2 configuration --------------
const table2 = {
  // Set 'display' to false to hide the table entirely
  display: true,
  // Table title
  tableTitle: 'ASSOCIATED FILES',
  // Field name for files data, need to be updated only when using a different GraphQL query
  subjectDetailField: 'files',
  // Value must be one of the 'dataField's in fileTableColumns
  defaultSortField: 'file_name',
  // 'asc' or 'desc'
  defaultSortDirection: 'asc',
  // Text to appear on Add to cart button
  buttonText: 'Add Selected Files',
  saveButtonDefaultStyle: {
    color: '#fff',
    backgroundColor: '#09A175',
    opacity: '1',
    border: '0px',
    cursor: 'pointer',
  },
  ActiveSaveButtonDefaultStyle: {
    disabled: 'true',
    opacity: '0.3',
    cursor: 'auto',
  },
  DeactiveSaveButtonDefaultStyle: {
    cursor: 'pointer',
    opacity: 'unset',
    border: 'unset',
  },
  // Help Icon Message
  tooltipMessage: 'Click button to add selected files.',
  helpMessage: 'Here help message',
  // showHideColumns 'true' or 'false'
  showHideColumns: true,
  // download csv 'true' or 'false'
  download: false,
  // downloaded File Name
  downloadFileName: 'Bento_case_samples_download',
  // Set 'selectableRows' to true to show the row selection
  selectableRows: true,
  // A maximum of 10 columns are allowed
  columns: [
    {
      dataField: 'file_name',
      header: 'File Name',
    },
    {
      dataField: 'file_type',
      header: 'File Type',
    },
    {
      dataField: 'association',
      header: 'Association',
    },
    {
      dataField: 'file_description',
      header: 'Description',
    },
    {
      dataField: 'file_format',
      header: 'Format',
    },
    {
      dataField: 'file_size',
      header: 'Size',
      // set formatBytes to true to display file size (in bytes) in a more human readable format
      formatBytes: true,
    },
  ],
  // Util Functions
  // Custom function on selct checkbox is selected.
  customOnRowsSelect: FileOnRowsSelect,
};

// --------------- GraphQL query configuration --------------

// query name, also used as root of returned data
const dataRoot = 'caseDetailByCaseId';
// query name, also used as key for files to Samples Mapping.
const filesOfCase = 'filesOfCase';
// Primary ID field used to query a case
const caseIDField = 'case_id';

// GraphQL query to retrieve detailed info for a case
const GET_CASE_DETAIL_DATA_QUERY = gql`
query caseDetailByCaseId($case_id: String!){
    caseDetailByCaseId(case_id:$case_id){
      case_id
      clinical_trial_code
      clinical_trial_id
      disease
      gender
      race
      arms{
          arm_id
          arm_target
          arm_drug
      }
      ethnicity
  }
  filesOfCase(case_id:$case_id){
  parent 
  file_name 
  file_type 
  file_description 
  file_format 
  file_size 
  md5sum 
  }
}`;

export {
  caseHeader,
  dataRoot,
  caseIDField,
  filesOfCase,
  leftPanel,
  rightPanel,
  table1,
  table2,
  GET_CASE_DETAIL_DATA_QUERY,
};
