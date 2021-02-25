import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme
} from '@material-ui/core';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const ProductCodingMetric = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [50, 20, 30],
        backgroundColor: [
          colors.green[600],
          colors.orange[600],
          colors.blue[500]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Approved', 'In-progress', 'Proposed']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Approved',
      value: 50,
      icon: CheckOutlinedIcon,
      color: colors.green[600]
    },
    {
      title: 'In-Progress',
      value: 20,
      icon: RotateLeftOutlinedIcon,
      color: colors.orange[600]
    },
    {
      title: 'Proposed',
      value: 30,
      icon: AutorenewOutlinedIcon,
      color: colors.blue[500]
    }
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Product Coding Standard Metrics" />
      <Divider />
      <CardContent>
        <Box
          height={300}
          position="relative"
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              p={1}
              textAlign="center"
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

ProductCodingMetric.propTypes = {
  className: PropTypes.string
};

export default ProductCodingMetric;
