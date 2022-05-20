/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Footer } from 'bento-components';
import gql from 'graphql-tag';
import FooterData from '../../bento/globalFooterData';
import env from '../../utils/env';
import client from '../../utils/graphqlClient';

const FILE_SERVICE_API = env.REACT_APP_FILE_SERVICE_API;
const BE_VERSION_API = env.REACT_APP_BE_VERSION_API;

const ICDCFooter = () => {
  const [footerUpdatedData, setFooterUpdatedData] = useState(FooterData);

  const getBEVersion = async () => {
    const response = await fetch(
      BE_VERSION_API,
    ).then((resp) => (resp))
      .catch(() => ({ version: '' }));
    const data = response.json();
    return data;
  };
  useEffect(() => {
    const getSystems = async () => {
      const response = await fetch(
        `${FILE_SERVICE_API}version`,
      ).then((resp) => (resp))
        .catch(() => ({ version: '' }));
      const data = response.json();
      const beVersion = await getBEVersion();
      setFooterUpdatedData({ ...FooterData, ...{ FileServiceVersion: data.version || '' }, ...{ BEversion: beVersion.version } });
    };
    getSystems();
  }, [FooterData]);

  return <><Footer data={footerUpdatedData} /></>;
};

export default ICDCFooter;