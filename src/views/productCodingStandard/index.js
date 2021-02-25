import React, { useState } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import ProductCard from 'src/views/product/ProductListView/ProductCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ProductCodingStandard = () => {
  const classes = useStyles();
  const [products] = useState(data);
  return (
    <Page
      className={classes.root}
      title="Product Coding Standard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
          className="mt-6"
        >
          <Grid
            container
            spacing={6}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={4}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  product={product}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProductCodingStandard;
