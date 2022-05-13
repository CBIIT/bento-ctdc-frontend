import gql from 'graphql-tag';

// --------------- GraphQL query - Retrieve stats details --------------
export const GET_ALL_IDS = gql`{
  idsLists{
    subjectIds
    sampleIds
    fileIds
    fileNames
}
  }
  `;

export const GET_SUBJECT_IDS = gql`
  query caseOverview(
    $case_id: [String],
    $first: Int= 1000, 
    $offset: Int= 0, 
    $order_by:  String= "case_id",
    $sort_direction: String= "asc"
){
    caseOverview(
        case_id: $case_id,
        first: $first,
        offset: $offset,
        order_by: $order_by,
        sort_direction: $sort_direction
    ){
        case_id
        trial_id
    }
}
`;

export const GET_IDS_BY_TYPE = () => gql`{
  idsLists {
    case_ids
  }
}
`;

export const GET_SEARCH_NODES_BY_FACET = gql`
query search(
  $clinical_trial_designation : [String],
  $clinical_trial_id : [String],
  $pubmed_id : [String],
  $trial_arm : [String],
  $disease : [String],
  $gender : [String],
  $race : [String],
  $ethnicity : [String],
  $file_type : [String],
  $file_format : [String],
  $case_id : [String],
){
  searchCases(
      clinical_trial_designation: $clinical_trial_designation
      clinical_trial_id: $clinical_trial_id
      pubmed_id: $pubmed_id
      trial_arm: $trial_arm
      disease: $disease
      gender: $gender
      race: $race
      ethnicity: $ethnicity
      file_type: $file_type
      file_format: $file_format
      case_id: $case_id
  ){
      numberOfTrials
      numberOfCases
      numberOfFiles
      numberOfArms
      numberOfDiagnoses
      numberOfFileTypes
      diagnosisCountByArm{
          arm_id
          diagnoses
      }
      trialsAndArms{
          trials
          caseSize
          arms{
              arm
              caseSize
          }
      }
      casesCountBaseOnTrialId{
          group
          subjects
      }
      casesCountBaseOnTrialCode{
          group
          subjects
      }
      casesCountBaseOnPubMedID{
          group
          subjects
      }
      casesCountBaseOnGender{
          group
          subjects
      }
      casesCountBaseOnRace{
          group
          subjects
      }
      casesCountBaseOnEthnicity{
          group
          subjects
      }
      casesCountBaseOnDiagnoses{
          group
          subjects
      }
      casesCountBaseOnFileType{
          group
          subjects
      }
      casesCountBaseOnFileFormat{
          group
          subjects
      }
      casesCountBaseOnTrialArm{
          group
          subjects
      }
      filterCasesCountBaseOnTrialId {
            group
            subjects
        }
        filterCasesCountBaseOnTrialCode {
            group
            subjects
        }
        filterCasesCountBaseOnPubMedID {
            group
            subjects
        }
        filterCasesCountBaseOnGender {
            group
            subjects
        }
        filterCasesCountBaseOnRace {
            group
            subjects
        }
        filterCasesCountBaseOnEthnicity {
            group
            subjects
        }
        filterCasesCountBaseOnDiagnoses {
            group
            subjects
        }
        filterCasesCountBaseOnFileType {
            group
            subjects
        }
        filterCasesCountBaseOnFileFormat {
            group
            subjects
        }
        filterCasesCountBaseOnTrialArm {
            group
            subjects
        }
  }
}
`;

export const GET_SEARCH_NODECOUNTS = gql`
  query nodeCounts($subject_ids: [String]=[], $sample_ids: [String] = [], $file_ids: [String]=[], $file_names: [String]=[]){
    nodeCountsFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names) {
      numberOfPrograms
      numberOfStudies
      numberOfSubjects
      numberOfLabProcedures
      numberOfSamples
      numberOfFiles
  }



subjectCountByDiagnosesFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  group
  subjects
}
subjectCountByRecurrenceScoreFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  group
  subjects
}
subjectCountByTumorSizeFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names) {
  group
  subjects
}
subjectCountByChemotherapyRegimenFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names) {
  group
  subjects
}
subjectCountByEndocrineTherapyFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  group
  subjects
}

subjectCountByFileTypeFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names) {
  group
  subjects
}

armsByProgramsFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  program
  caseSize
  children{
      arm
      caseSize
      size
  }
}  

findIdsFromLists(subject_ids: $subject_ids, sample_ids: $sample_ids, file_ids: $file_ids, file_names: $file_names){
  subjectIds
  sampleIds
  fileIds
  fileNames
}
}
  `;

export const CASES_FILE_QUERY = gql`
query fileOverview(
    $subject_ids: [String],
    $file_ids: [String],
    $programs: [String],
    $studies: [String],
    $diagnoses: [String],
    $rc_scores: [String],
    $tumor_sizes: [String],
    $chemo_regimen: [String],
    $tumor_grades: [String],
    $er_status: [String],
    $pr_status: [String],
    $endo_therapies: [String],
    $meno_status: [String],
    $tissue_type: [String],
    $composition: [String],
    $association: [String],
    $file_type: [String],
    $age_at_index: [Float],
    $first: Int, 
    $offset: Int, 
    $order_by:  String
    $sort_direction: String ){
    fileOverview(
        subject_ids: $subject_ids,
        file_ids: $file_ids,
        programs: $programs,
        studies: $studies,
        diagnoses: $diagnoses,
        rc_scores: $rc_scores,
        tumor_sizes: $tumor_sizes,
        chemo_regimen: $chemo_regimen,
        tumor_grades: $tumor_grades,
        er_status: $er_status,
        pr_status: $pr_status,
        endo_therapies: $endo_therapies,
        meno_status: $meno_status,
        tissue_type: $tissue_type,
        composition: $composition,
        association: $association,       
        file_type: $file_type,
        age_at_index: $age_at_index,
        first: $first, 
        offset: $offset, 
        order_by: $order_by,
        sort_direction: $sort_direction
    ){
        file_id,
        file_name,
        association,
        file_description,
        file_format,
        file_size,
        program,
        arm,
        subject_id,
        sample_id,
        diagnosis,
    }
}
`;

export const CASES_SAMPLE_QUERY = gql`
query sampleOverview(
    $subject_ids: [String],
    $sample_ids: [String],
    $programs: [String] ,
    $studies: [String] ,
    $diagnoses: [String] ,
    $rc_scores: [String] ,
    $tumor_sizes: [String] ,
    $chemo_regimen: [String] ,
    $tumor_grades: [String] ,
    $er_status: [String] ,
    $pr_status: [String] ,
    $endo_therapies: [String] ,
    $meno_status: [String] ,
    $tissue_type: [String],
    $composition: [String],
    $association: [String],
    $file_type: [String],
    $age_at_index: [Float],
    $first: Int, 
    $offset: Int, 
    $order_by:  String
    $sort_direction: String ){
    sampleOverview(
        subject_ids: $subject_ids,
        sample_ids: $sample_ids,
        programs: $programs,
        studies: $studies,
        diagnoses: $diagnoses,
        rc_scores: $rc_scores,
        tumor_sizes: $tumor_sizes,
        chemo_regimen: $chemo_regimen,
        tumor_grades: $tumor_grades,
        er_status: $er_status,
        pr_status: $pr_status,
        endo_therapies: $endo_therapies,
        meno_status: $meno_status,
        tissue_type: $tissue_type,
        composition: $composition,
        association: $association,       
        file_type: $file_type,
        age_at_index: $age_at_index,
        first: $first, 
        offset: $offset, 
        order_by: $order_by,
        sort_direction: $sort_direction
    ){
        sample_id,
        subject_id,
        program,
        arm,
        diagnosis,
        tissue_type,
        tissue_composition,
        sample_anatomic_site,
        sample_procurement_method,
        platform,
        files 
    }
}`;

export const GET_LOCAL_CASES_OVERVIEW_QUERY = gql`
query caseOverview(
    $case_id: [String],
    $clinical_trial_designation : [String],
    $clinical_trial_id : [String],
    $pubmed_id : [String],
    $trial_arm : [String],
    $disease : [String],
    $gender : [String],
    $race : [String],
    $ethnicity : [String],
    $file_type : [String],
    $file_format : [String],
    $first: Int= 1000, 
    $offset: Int= 0, 
    $order_by:  String,
    $sort_direction: String= "asc"
){
    caseOverview(
        case_id: $case_id,
        clinical_trial_designation: $clinical_trial_designation
        clinical_trial_id: $clinical_trial_id
        pubmed_id: $pubmed_id
        trial_arm: $trial_arm
        disease: $disease
        gender: $gender
        race: $race
        ethnicity: $ethnicity
        file_type: $file_type
        file_format: $file_format
        first: $first
        offset: $offset
        order_by: $order_by
        sort_direction: $sort_direction
    ){
        case_id
        trial_code
        arm_id
        arm_treatment
        diagnosis
        gender
        race
        ethnicity
    }
}`;

export const widgetsSearchData = [
  {
    type: 'sunburst',
    label: 'Trial and Arms',
    dataName: 'armsByProgramsFromLists',
    mapWithDashboardWidget: 'trialsAndArms',
    datatable_level1_field: 'trials',
    datatable_level2_field: 'arms',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Diagnosis',
    dataName: 'subjectCountByDiagnosesFromLists',
    mapWithDashboardWidget: 'casesCountBaseOnDiagnoses',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Gender',
    dataName: 'subjectCountByRecurrenceScoreFromLists',
    mapWithDashboardWidget: 'casesCountBaseOnGender',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Race',
    dataName: 'subjectCountByTumorSizeFromLists',
    mapWithDashboardWidget: 'casesCountBaseOnRace',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Ethnicity',
    dataName: 'subjectCountByChemotherapyRegimenFromLists',
    mapWithDashboardWidget: 'casesCountBaseOnEthnicity',
    titleText: 'Cases',
    show: true,
  },
  {
    type: 'donut',
    label: 'Pubmed ID',
    dataName: 'subjectCountByEndocrineTherapyFromLists',
    mapWithDashboardWidget: 'casesCountBaseOnPubMedID',
    titleText: 'Cases',
    show: true,
  },
];

export const ageAtIndex = 10;
