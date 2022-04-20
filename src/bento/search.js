import gql from 'graphql-tag';

// --------------- Icons configuration --------------
// Ideal size for programListingIcon is 100x100 px
// Ideal size for externalLinkIcon is 16x16 px
export const programListingIcon = {
  src: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/programIcon.svg',
  alt: 'Bento program logo',
};

export const SEARCH = gql`
query globalSearch($input : String,
    $first : Int,
    $offset : Int){
    globalSearch(input: $input, first: $first, offset: $offset) {
        clinical_trial_count
        clinical_trials {
            clinical_trial_id
            clinical_trial_short_name
            clinical_trial_long_name
            clinical_trial_designation
        }
        arm_count
        arms {
            arm
            arm_id
            arm_drug
        }
        case_count
        cases {
            case_id
        }
        file_count
        files {
            file_name
            file_description
        }
        model_count
        model {
            node_name
            property_name
            property_description
            property_required
            property_type
            value
            highlight
        }
        about_count
        about_page {
            page
            title
            type
            text
        }
    }
}
`;

export const SEARCH_PAGE_RESULT_ARMS = gql`
query globalSearch($input : String,
    $first : Int,
    $offset : Int){
    globalSearch(input: $input, first: $first, offset: $offset) {
        arm_count
        arms {
            arm
            arm_id
            arm_drug
            type
        }
    }
}
`;

export const SEARCH_PAGE_RESULT_CASES = gql`
query globalSearch($input : String,
    $first : Int,
    $offset : Int){
    globalSearch(input: $input, first: $first, offset: $offset) {
        case_count
        cases {
            case_id
            type
        }
    }
}
`;

export const SEARCH_PAGE_RESULT_CLINICAL_TRIALS = gql`
query globalSearch($input : String,
    $first : Int,
    $offset : Int){
    globalSearch(input: $input, first: $first, offset: $offset) {
        clinical_trial_count
        clinical_trials {
            clinical_trial_id
            clinical_trial_short_name
            clinical_trial_long_name
            clinical_trial_designation
            type
        }
    }
}
`;

export const SEARCH_PAGE_RESULT_FILES = gql`
query globalSearch($input : String,
    $first : Int,
    $offset : Int){
    globalSearch(input: $input, first: $first, offset: $offset) {
        file_count
        files {
            file_name
            file_description
            type
        }
    }
}
`;

export const SEARCH_PAGE_RESULT_MODEL = gql`
query globalSearch($input : String,
    $first : Int,
    $offset : Int){
    globalSearch(input: $input, first: $first, offset: $offset) {
        model_count
        model {
            node_name
            property_name
            property_description
            property_required
            property_type
            value
            highlight
            type
        }
    }
}
`;

export const SEARCH_PAGE_RESULT_ABOUT = gql`
query globalSearch($input : String,
    $first : Int,
    $offset : Int){
    globalSearch(input: $input, first: $first, offset: $offset) {
        about_count
        about_page {
            page
            title
            type
            text
        }
    }
}
`;

export const SEARCH_PAGE_RESULTS = gql`
query globalSearch($input : String,
    $first : Int,
    $offset : Int){
    globalSearch(input: $input, first: $first, offset: $offset) {
        clinical_trial_count
        arm_count
        case_count
        file_count
        model_count
        about_count
    }
}
`;
