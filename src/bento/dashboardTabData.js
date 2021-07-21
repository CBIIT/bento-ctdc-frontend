/* eslint-disable max-len */
import gql from 'graphql-tag';
import { customCasesTabDownloadCSV, customFilesTabDownloadCSV } from './tableDownloadCSV';

// --------------- Tooltip configuration --------------
export const tooltipContent = {
  icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/action/help/materialicons/24px.svg',
  alt: 'tooltipIcon',
  0: 'Click button to add selected files associated with the selected case(s).',
  1: 'Click button to add selected files associated with the selected sample(s).',
  2: 'Click button to add selected files.',
};

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Tabs Table configuration --------------
export const tabContainers = [
  {

    name: 'Cases',
    dataField: 'dataCase',
    api: 'GET_CASES_OVERVIEW_QUERY',
    paginationAPIField: 'caseOverviewPaged',
    paginationAPIFieldDesc: 'caseOverviewPagedDesc',
    count: 'numberOfCases',
    dataKey: 'case_id',
    defaultSortField: 'case_id',
    defaultSortDirection: 'asc',
    buttonText: 'Add Selected Files',
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#09A175',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    ActiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },
    DeactiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    columns: [
      {
        dataField: 'case_id',
        header: 'Case ID',
        sort: 'asc',
        link: '/case/{case_id}',
        primary: true,
        display: true,
      },
      {
        dataField: 'clinical_trial_code',
        header: 'Trial Code',
        sort: 'asc',
        link: '/trial/{clinical_trial_id}',
        display: true,
      },
      {
        dataField: 'arm_id',
        header: 'Arm',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'arm_drug',
        header: 'Arm Trearment',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'disease',
        header: 'Diagnosis',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'gender',
        header: 'Gender',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'race',
        header: 'Race',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'ethnicity',
        header: 'Ethnicity',
        sort: 'asc',
        display: true,
      },
    ],
    id: 'case_tab',
    onRowsSelect: 'type1',
    disableRowSelection: 'type1',
    tableID: 'case_tab_table',
    selectableRows: true,
    tableDownloadCSV: customCasesTabDownloadCSV,
    tabIndex: '0',
    downloadFileName: 'Bento_Dashboard_cases_download',
    headerPagination: true,
    footerPagination: true,
  },
  {
    name: 'Files',
    dataField: 'dataFile',
    api: 'GET_FILES_OVERVIEW_QUERY',
    paginationAPIField: 'fileOverview',
    paginationAPIFieldDesc: 'fileOverviewDesc',
    defaultSortField: 'file_name',
    defaultSortDirection: 'asc',
    count: 'numberOfFiles',
    buttonText: 'Add Selected Files',
    dataKey: 'file_name',
    saveButtonDefaultStyle: {
      color: '#fff',
      backgroundColor: '#DC2FDA',
      opacity: '1',
      border: '0px',
      cursor: 'pointer',
    },
    DeactiveSaveButtonDefaultStyle: {
      opacity: '0.3',
      cursor: 'auto',
    },
    ActiveSaveButtonDefaultStyle: {
      cursor: 'pointer',
      opacity: 'unset',
      border: 'unset',
    },
    columns: [
      {
        dataField: 'file_name',
        header: 'File Name',
        sort: 'asc',
        primary: true,
        display: true,
      },
      {
        dataField: 'uuid',
        header: 'Association',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_description',
        header: 'Description',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_format',
        header: 'File Format',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'file_size',
        header: 'Size',
        sort: 'asc',
        display: true,
        formatBytes: true,
      },
      // {
      //   dataField: '', // This need to left empty if no data need to be displayed before file download icon
      //   header: 'Access',
      //   sort: 'asc',
      //   display: true,
      //   downloadDocument: true, // To indicate that column is document donwload
      //   documentDownloadProps: {
      //     // Max file size needs to bin Bytes to seperate two support file preview and download
      //     maxFileSize: 315,
      //     // Tool top text for file download
      //     toolTipTextFileDownload: 'Download a copy of this file',
      //     // Tool top text for file preview
      //     toolTipTextFilePreview: 'Because of its size and/or format, this file is unavailable for download and must be accessed via the My Files workflow',
      //     // datafield where file file column exists in the table
      //     fileSizeColumn: 'file_size',
      //     // datafield where file file id exists in the table which is used to get file location
      //     fileLocationColumn: 'file_id',
      //     // file download icon
      //     iconFileDownload: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadPDF.svg',
      //     // file preview ico
      //     iconFilePreview: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/DocumentDownloadCloud.svg',
      //   },
      // },
      {
        dataField: 'trial_code',
        header: 'Trial Code',
        sort: 'asc',
        link: '/trials/{trial_code}',
        display: true,
      },
      {
        dataField: 'trial_id',
        header: 'Trial ID',
        sort: 'asc',
        display: false,
      },
      {
        dataField: 'arm',
        header: 'Arm',
        sort: 'asc',
        display: true,
      },
      {
        dataField: 'case_id',
        header: 'Case ID',
        sort: 'asc',
        link: '/case/{case_id}',
        display: true,
      },
      {
        dataField: 'uuid',
        header: 'UUID',
        sort: 'asc',
        display: false,
      },
    ],
    id: 'file_tab',
    onRowsSelect: 'type2',
    disableRowSelection: 'type3',
    tableID: 'file_tab_table',
    selectableRows: true,
    tabIndex: '2',
    tableDownloadCSV: customFilesTabDownloadCSV,
    downloadFileName: 'Bento_Dashboard_cases_download',
    headerPagination: true,
    footerPagination: true,
  },
];

// --------------- Tabs Header Data configuration --------------
export const tabs = [
  {
    id: 'case_tab',
    title: 'Cases',
    dataField: 'dataCase',
    count: 'numberOfCases',
  },
  {
    id: 'file_tab',
    title: 'Files',
    dataField: 'dataFile',
    count: 'numberOfFiles',
  },
];

// --------------- Tabs Header Style configuration --------------
export const tabIndex = [
  {
    title: 'Cases',
    primaryColor: '#D6F2EA',
    secondaryColor: '#FFDFB8',
    selectedColor: '#10A075',
  },
  {
    title: 'Files',
    primaryColor: '#F7D7F7',
    secondaryColor: '#86D6F0',
    selectedColor: '#C92EC7',
  },
];

// #############################################################################
export const DASHBOARD_QUERY = gql`{
  numberOfTrials
  numberOfCases
  numberOfFiles
  trialsAndArms{
    trials
    caseSize
    arms{
        arms
        caseSize
    }
  }

   casesCountBaseOnTrialId {
      group
      count
  }
   casesCountBaseOnTrialCode {
      group
      count
  }
   casesCountBaseOnPubMedID {
      group
      count
  }
   casesCountBaseOnGender {
      group
      count
  }
   casesCountBaseOnRace {
      group
      count
  }
  casesCountBaseOnEthnicity {
      group
      count
  }
  casesCountBaseOnDiagnoses {
      group
      count
  }
   casesCountBaseOnFileType {
      group
      count
  }
  casesCountBaseOnFileFormat {
      group
      count
  }

  casesCountBaseOnTrialArm {
      group
      count
  }

  caseOverviewPaged(first: 10) {   
    case_id
    clinical_trial_code
    arm_id
    arm_drug
    disease
    gender
    race
    arm_target
    ethnicity
    clinical_trial_id
    pubmed_id
    trial_arm
    file_types
    file_formats
    files{
       uuid
      }
  }
}`;

export const FILTER_GROUP_QUERY = gql`
  query groupCounts($case_ids: [String]){
    trialsAndArms(case_ids: $case_ids){
      trials
      caseSize
      arms{
          arms
          caseSize
      }
 }
 casesCountBaseOnTrial(case_ids: $case_ids) {
  group
  count
}
 casesCountBaseOnDiagnoses(case_ids: $case_ids){
  group
  count
}
 casesCountBaseOnGender(case_ids: $case_ids){
  group
  count
}
 casesCountBaseOnRace(case_ids: $case_ids) {
  group
  count
}
 casesCountBaseOnEthnicity(case_ids: $case_ids) {
  group
  count
}
casesCountBaseOnPubMedID(case_ids: $case_ids){
  group
  count
}

}`;

export const FILTER_QUERY = gql`
query search(
  $clinical_trial_id: [String] ,
  $clinical_trial_designation: [String] ,
  $pubmed_id: [String] ,
  $gender: [String] ,
  $race: [String] ,
  $ethnicity: [String] ,
  $disease: [String] ,
  $file_type: [String] ,
  $file_format: [String] ,
  $trial_arm: [String] ,
  $first: Int ) {
searchSubjects(
  clinical_trial_id: $clinical_trial_id ,
  clinical_trial_designation:  $clinical_trial_designation ,
  pubmed_id: $pubmed_id,
  gender: $gender,
  race: $race ,
  ethnicity: $ethnicity,
  disease: $disease ,
  file_type: $file_type,
  file_format: $file_format ,
  trial_arm: $trial_arm,
      first: $first) {
        numberOfTrials
        numberOfCases
        numberOfFiles
        fileIds
        caseIds
  firstPage {
    case_id
    clinical_trial_code
    arm_id
    arm_drug
    disease
    gender
    race
    arm_target
    ethnicity
    clinical_trial_id
    pubmed_id
    trial_arm
    file_types
    file_formats
    files{
       uuid
    }
      }
}
filterCasesCountBaseOnTrialId(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
filterCasesCountBaseOnTrialCode(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
filterCasesCountBaseOnPubMedID(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
filterCasesCountBaseOnGender(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
filterCasesCountBaseOnRace(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
filterCasesCountBaseOnEthnicity(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
filterCasesCountBaseOnDiagnosis(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
filterCasesCountBaseOnFileType(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
filterCasesCountBaseOnFileFormat(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
filterCasesCountBaseOnTrialArm(clinical_trial_id: $clinical_trial_id , clinical_trial_designation:  $clinical_trial_designation , pubmed_id: $pubmed_id, gender: $gender, race: $race , ethnicity: $ethnicity, disease: $disease , file_type: $file_type, file_format: $file_format , trial_arm: $trial_arm,) {
  group
  count
}
}
`;

// --------------- GraphQL query - Retrieve files tab details --------------
export const GET_FILES_OVERVIEW_QUERY = gql`
query fileOverview($uuid: [String], $offset: Int = 0, $first: Int = 10, $order_by:String ="file_name"){
  fileOverview(uuid: $uuid, offset: $offset,first: $first, order_by: $order_by) {
    uuid
    file_name
    file_description
    file_format
    file_size
    trial
    trial_id
    arm
    case_id
    disease
  }
}
  `;

export const GET_FILES_OVERVIEW_DESC_QUERY = gql`
  query fileOverviewDesc($uuid: [String], $offset: Int = 0, $first: Int = 10, $order_by:String ="file_name"){
    fileOverviewDesc(uuid: $uuid, offset: $offset,first: $first, order_by: $order_by) {
      uuid
      file_name
      file_description
      file_format
      file_size
      trial
      trial_id
      arm
      case_id
      disease
    }
  }
    `;

// --------------- GraphQL query - Retrieve sample tab details --------------

export const GET_CASES_OVERVIEW_QUERY = gql`
query caseOverviewPaged($case_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String =""){
  caseOverviewPaged(case_ids: $case_ids, first: $first, offset: $offset, order_by: $order_by) {
    case_id
    clinical_trial_code
    arm_id
    arm_drug
    disease
    gender
    race
    arm_target
    ethnicity
    clinical_trial_id
    pubmed_id
    trial_arm
    file_types
    file_formats
    files{
        uuid
    }
  }
}`;

// --------------- GraphQL query - Retrieve sample tab details --------------

export const GET_CASES_OVERVIEW_DESC_QUERY = gql`
  query caseOverviewPagedDesc($case_ids: [String], $offset: Int = 0, $first: Int = 10, $order_by:String =""){
    caseOverviewPagedDesc(case_ids: $case_ids, first: $first, offset: $offset, order_by: $order_by) {
      case_id
      clinical_trial_code
      arm_id
      arm_drug
      disease
      gender
      race
      arm_target
      ethnicity
      clinical_trial_id
      files{
        uuid
      }
    }
}`;

export const GET_ALL_FILEIDS_CASESTAB_FOR_SELECT_ALL = gql`
  query caseOverviewPaged($case_ids: [String], $offset: Int = 0, $first: Int = 10000000, $order_by:String =""){
    caseOverviewPaged(case_ids: $case_ids, first: $first, offset: $offset, order_by: $order_by) {
        files{
          uuid
        }
    }
}`;

export const GET_ALL_FILEIDS_FILESTAB_FOR_SELECT_ALL = gql`
query fileOverview($uuid: [String], $offset: Int = 0, $first: Int = 10, $order_by: String = "file_name") {
  fileOverview(uuid: $uuid, offset: $offset, first: $first, order_by: $order_by) {
    uuid
  }
}
  `;

// --------------- GraphQL query - Retrieve files tab details --------------
export const GET_FILES_NAME_QUERY = gql`
query fileOverview($uuid: [String], $offset: Int = 0, $first: Int = 100000, $order_by:String ="file_name"){
  fileOverview(uuid: $uuid, offset: $offset,first: $first, order_by: $order_by) {
    file_name
  }
}
  `;

export const GET_FILE_IDS_FROM_FILE_NAME = gql`
  query (
      $file_name: [String],
      $offset: Int,
      $first: Int,
      $order_by: String
  )
  {
      fileIdsFromFileNameDesc(
          file_name:$file_name, 
          offset:$offset,
          first:$first,
          order_by:$order_by
      )
      {
          file_id
      }
  }`;
