import gql from 'graphql-tag';

// --------------- Dashboard Sidebar Filters configuration --------------
// A maximum of 12 facetSearchData are allowed
export const facetSearchData = [
  {
    label: 'Trial Code', field: 'group', api: 'casesCountBaseOnTrialCode', apiForFiltering: 'filterCasesCountBaseOnTrialCode', datafield: 'clinical_trial_designation', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Trial ID', field: 'group', api: 'casesCountBaseOnTrialId', apiForFiltering: 'filterCasesCountBaseOnTrialId', datafield: 'clinical_trial_id', section: 'Filter By Cases', show: true,
  },
  {
    label: 'PubMed ID', field: 'group', api: 'casesCountBaseOnPubMedID', apiForFiltering: 'filterCasesCountBaseOnPubMedID', datafield: 'pubmed_id', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Trial Arm', field: 'group', api: 'casesCountBaseOnTrialArm', apiForFiltering: 'filterCasesCountBaseOnTrialArm', datafield: 'trial_arm', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Diagnosis', field: 'group', api: 'casesCountBaseOnDiagnosis', apiForFiltering: 'filterCasesCountBaseOnDiagnosis', datafield: 'disease', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Gender', field: 'group', api: 'casesCountBaseOnGender', apiForFiltering: 'filterCasesCountBaseOnGender', datafield: 'gender', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Race', field: 'group', api: 'casesCountBaseOnRace', apiForFiltering: 'filterCasesCountBaseOnRace', datafield: 'race', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Ethnicity', field: 'group', api: 'casesCountBaseOnEthnicity', apiForFiltering: 'filterCasesCountBaseOnEthnicity', datafield: 'ethnicity', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Associated File Type', field: 'group', api: 'casesCountBaseOnFileType', apiForFiltering: 'filterCasesCountBaseOnFileType', datafield: 'file_type', section: 'Filter By Cases', show: true,
  },
  {
    label: 'Associated File Format', field: 'group', api: 'casesCountBaseOnFileFormat', apiForFiltering: 'filterCasesCountBaseOnFileFormat', datafield: 'file_format', section: 'Filter By Cases', show: true,
  },
];

// --------------- Dashboard Sidebar Sections styling --------------
export const facetSectionVariables = {
  'Filter By Cases': {
    color: '#10A075',
    checkBoxColorsOne: '#E8F7DC',
    checkBoxColorsTwo: '#F5FDEE',
    height: '5px',
    isExpanded: false,
  },
};

// --------------- Default Dashboard Sidebar Sections styling --------------
export const defaultFacetSectionVariables = {
  color: '#000000',
  checkBoxColorsOne: '#E8F7DC',
  checkBoxColorsTwo: '#F5FDEE',
  height: '5px',
  isExpanded: false,
};

// --------------- Dashboard Widgets configuration --------------
// A maximum of 6 widgets are allowed
export const widgetsData = [
  {
    type: 'sunburst',
    label: 'Trials and Arms',
    dataName: 'trialsAndArms',
    datatable_level1_field: 'trials',
    datatable_level2_field: 'arms',
    show: true,
  },
  {
    type: 'donut',
    label: 'Diagnosis',
    dataName: 'casesCountBaseOnDiagnosis',
    datatable_field: 'disease',
    show: true,
  },
  {
    type: 'donut',
    label: 'Gender',
    dataName: 'casesCountBaseOnGender',
    datatable_field: 'gender',
    show: true,
  },
  {
    type: 'donut',
    label: 'Race',
    dataName: 'casesCountBaseOnRace',
    datatable_field: 'race',
    show: true,
  },
  {
    type: 'donut',
    label: 'Ethnicity',
    dataName: 'casesCountBaseOnEthnicity',
    datatable_field: 'ethnicity',
    show: true,
  },
  {
    type: 'donut',
    label: 'Pubmed ID',
    dataName: 'casesCountBaseOnPubMedID',
    datatable_field: 'pubmed_id',
    show: true,
  },
];

// --------------- Dahboard Table external link configuration --------------
// Ideal size for externalLinkIcon is 16x16 px
export const externalLinkIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/externalLinkIcon.svg',
  alt: 'External link icon',
};

// --------------- Facet resetIcon link configuration --------------
// Ideal size for resetIcon is 16x16 px
export const resetIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg',
  alt: 'Reset icon',
  size: '12 px',
};

// --------------- Dashboard Table configuration --------------
export const dashboardTable = {
  tableTitle: 'Cases',
  tableData: [
    // A maximum of 10 columns (tableData) are allowed
    {
      dataField: 'subject_id',
      header: 'Case ID',
      sort: 'asc',
      link: '/case/{subject_id}',
      primary: true,
      display: true,
    },
    {
      dataField: 'program',
      header: 'Program Code',
      sort: 'asc',
      link: '/program/{program_id}',
      display: true,
    },
    {
      dataField: 'program_id',
      header: 'Program ID',
      sort: 'asc',
      display: false,
    },
    {
      dataField: 'study_acronym',
      header: 'Arm',
      sort: 'asc',
      link: '/arm/{study_acronym}',
      display: true,
    },
    {
      dataField: 'diagnosis',
      header: 'Diagnosis',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'recurrence_score',
      header: 'Recurrence Score',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'tumor_size',
      header: 'Tumor Size (cm)',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'er_status',
      header: 'ER Status',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'pr_status',
      header: 'PR Status',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'age_at_index',
      header: 'Age (years)',
      sort: 'asc',
      display: true,
    },
    {
      dataField: 'survival_time',
      header: 'Survival (days)',
      sort: 'asc',
      display: true,
    },
  ],
};

// --------------- Sorting related labels configuration --------------
export const sortLabels = {
  sortAlphabetically: 'Sort alphabetically',
  sortByCount: 'Sort by counts',
  showMore: '...expand to see all selections',
};

export const showCheckboxCount = 5;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfLabProcedures
  numberOfFiles
  subjectCountByProgram{
        group
        subjects
      }
    subjectCountByStudy{
        group
        subjects
      }
    subjectCountByDiagnoses{
        group
        subjects
      }
    subjectCountByRecurrenceScore{
        group
        subjects
      }
    subjectCountByTumorSize{
        group
        subjects
      }
    subjectCountByChemotherapyRegimen{
        group
        subjects
      }
    subjectCountByTumorGrade{
        group
        subjects
      }
  subjectCountByErStatus{
        group
        subjects
      }
  subjectCountByPrStatus{
        group
        subjects
      }
  subjectCountByMenopauseStatus{
        group
        subjects
      }
  subjectCountByChemotherapyRegimen{
        group
        subjects
      }
      subjectCountByEndocrineTherapy{
    group
    subjects
  }
  subjectCountByFileType{
    group
    subjects
}
subjectCountByFileAssociation {
    group
    subjects
}
subjectCountByTissueComposition{
    group
    subjects
}
subjectCountByTissueType{
    group
    subjects
}
    armsByPrograms {
        program
        caseSize
        children {
            arm
            caseSize
            size
        }
    }
    subjectOverViewPaged(first: 100) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;

// --------------- Dashboard Query configuration --------------
export const GET_DASHBOARD_TABLE_DATA_QUERY = gql`{
  subjectOverViewPaged(first: 1000000) {
      subject_id
      program_id
      study_info
      samples
      program
      study_acronym
      diagnosis
      recurrence_score
      tumor_size
      tumor_grade
      er_status
      pr_status
      chemotherapy
      endocrine_therapy
      menopause_status
      age_at_index
      survival_time
      lab_procedures
      files{
        file_id
      }
  }
  }`;
