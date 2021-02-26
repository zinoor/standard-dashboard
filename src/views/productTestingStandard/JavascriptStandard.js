import React, { forwardRef } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import MaterialTable from 'material-table';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />)
};

const JavascriptStandard = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Product Coding Standard">
      <Container maxWidth={false}>
        <MaterialTable
          icons={tableIcons}
          title="Javascript Standards"
          columns={[
            { title: 'Standard Program', field: 'name' },
            { title: 'Statement', field: 'Statement' },
            { title: 'Link to Standard', field: 'link' },
          ]}
          data={[
            {
              name: 'JavaScript Standards',
              Statement: 'Example',
              link: <a href="https://mathworks.sharepoint.com/:w:/s/ltc/appdevelopment/resourcecenter/ESaPOBJH1VVBpVpSpNchtkoB3Zu4kKQzyGMbhmPjnMfpAA" target="_blank" rel="noreferrer">Link to Standard</a>,
            }
          ]}
          options={{
            search: true
          }}
        />
      </Container>
    </Page>
  );
};

export default JavascriptStandard;
