import gql from 'graphql-tag';

export const statsStyling = {
  global: {
    horizontalStyle: true,
    statTitleFirst: true,
    height: '47px',
    background: '#3695A9',
  },
  statsGroup: {
    margin: '4px 80px',
  },
  statsIcon: {
    // width: '45px',
    // height: '45px',
  },
  statCount: {
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
    fontSize: 'calc(11.2px)',
    margin: '13px 0px 0px',
    // float: 'left',
  },
  statTitle: {
    color: '#000000',
    fontFamily: 'sans-serif',
    fontWeight: '600',
    fontSize: 'calc(11.2px)',
    textTransform: 'none',
    // float: 'none',
  },
};

export const globalStatsData = [
  // A maximum of 6 stats are allowed
  {
    statTitle: 'TRIALS:',
    type: 'field',
    statAPI: 'numberOfTrials',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/ctdc_Assets/ctdc/images/statsBar/stats-bar-trials.svg',
    statIconAlt: 'TRIALS Stats Bar Icon',
  },
  {
    statTitle: 'CASES:',
    type: 'field',
    statAPI: 'numberOfCases',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/ctdc_Assets/ctdc/images/statsBar/stats-bar-cases.svg',
    statIconAlt: 'CASES Stats Bar Icon',
  },
  {
    statTitle: 'FILES:',
    type: 'field',
    statAPI: 'numberOfFiles',
    statIconSrc: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/ctdc_Assets/ctdc/images/statsBar/stats-bar-files.svg',
    statIconAlt: 'FILES Stats Bar Icon',
  },
];

// --------------- GraphQL query - Retrieve stats details --------------
export const GET_GLOBAL_STATS_DATA_QUERY = gql`{
  numberOfTrials
  numberOfCases
  numberOfFiles
}`;
