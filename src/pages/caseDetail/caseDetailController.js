import React from 'react';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import CaseDetailView from './caseDetailView';
import { Typography } from '../../components/Wrappers/Wrappers';
import {
  GET_CASE_DETAIL_DATA_QUERY, dataRoot, caseIDField1, caseIDField2, caseIDField, filesOfCase,
} from '../../bento/caseDetailData';

const CaseDetailContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_CASE_DETAIL_DATA_QUERY, {
    variables: { [caseIDField1]: match.params.id, [caseIDField2]: [match.params.id] },
  });

  if (loading) return <CircularProgress />;
  if (error || !data || data[dataRoot][caseIDField] !== match.params.id) {
    return (
      <Typography variant="h5" color="error" size="sm">
        {error ? `An error has occurred in loading stats component: ${error}` : 'Recieved wrong data'}
      </Typography>
    );
  }

  return <CaseDetailView data={data[dataRoot]} filesOfCase={data[filesOfCase]} />;
};

export default CaseDetailContainer;
