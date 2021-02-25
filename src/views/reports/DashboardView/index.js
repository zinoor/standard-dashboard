import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import ProductCard from 'src/views/product/ProductListView/ProductCard';
import data from 'src/views/product/ProductListView/data';
import ProductDesignMetric from './ProductDesignMetric';
import ProductTestingMetric from './ProductTestingMetric';
import ProductCodingMetric from './ProductCodingMetric';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [products] = useState(data);
  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid item>
            <Box mt={3}>
              <Grid
                container
                spacing={3}
              >
                {products.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <ProductCard
                      className={classes.productCard}
                      product={product}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item>
            <Box mt={6}>
              <ProductDesignMetric />
            </Box>
          </Grid>
          <Grid item>
            <Box mt={6}>
              <ProductTestingMetric />
            </Box>
          </Grid>
          <Grid item>
            <Box mt={6}>
              <ProductCodingMetric />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
