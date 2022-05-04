/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  withStyles,
  Backdrop,
  Divider,
  CircularProgress,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

const CustomExpansionPanelSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 48,
    '&$expanded': {
      minHeight: 48,
    },
  },
  content: {
    '&$expanded': {
      margin: '16px 0',
    },
  },
  expanded: {},
})(ExpansionPanelSummary);

const FacetPanel = ({ classes }) => {
  const isSidebarLoading = useSelector((state) => (
    state.dashboardTab
      && state.dashboardTab.setSideBarLoading
      ? state.dashboardTab.setSideBarLoading : false));
  const tabDataLoading = useSelector((state) => (state.dashboardTab
        && state.dashboardTab.isDashboardTableLoading
    ? state.dashboardTab.isDashboardTableLoading
    : false));

  return (
    <>
      <Divider
        variant="middle"
        style={{
          backgroundColor: '#ff9742',
          margin: '0px',
          height: '5px',
        }}
      />
      <ExpansionPanel
        classes={{
          root: classes.expansionPanelRoot,
        }}
      >
        <CustomExpansionPanelSummary>
          {/* <ListItemText primary={sideBarItem.groupName} /> */}
          <div
            className={classes.sectionSummaryText}
          >
            Filter by Mutations
          </div>

        </CustomExpansionPanelSummary>

        <ExpansionPanelDetails classes={{ root: classes.expansionPanelDetailsRoot }}>
          <List component="nav">
            <ListItem
              classes={{
                root: classes.expansionPanelsideBarItem,
              }}
            >
              <Avatar>
                <LinkIcon />
              </Avatar>
              <Link target="_blank" rel="noopener" href="https://cbioportal.bento-tools.org/study/summary?id=match_z1">
                <ListItemText primary="cBioPortal" secondary="Click to redirect" />
              </Link>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Backdrop className={classes.backdrop} open={isSidebarLoading || tabDataLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

const styles = () => ({
  expansionPanelRoot: {
    boxShadow: 'none',
    borderRight: '1px solid #B1B1B1',
    margin: 'auto',
    position: 'initial',
    '&:before': {
      position: 'initial',
    },
  },
  expansionPanelsideBarItem: {
    boxShadow: 'none',
    borderTop: '1px solid #B1B1B1',
    margin: 'auto',
    position: 'initial',
    '&:before': {
      position: 'initial',
    },
  },
  backdrop: {
    // position: 'absolute',
    zIndex: 99999,
    background: 'rgba(0, 0, 0, 0.1)',
  },
  expansionPanelDetailsRoot: {
    paddingBottom: '8px',
    display: 'unset',
  },

  sectionSummaryText: {
    marginLeft: '-6px',
    color: '#000000',
    fontFamily: 'Open Sans',
    fontWeight: '300',
    fontSize: '20px',
    lineHeight: '26px',
    letterSpacing: 0,
  },
});
export default withStyles(styles)(FacetPanel);
