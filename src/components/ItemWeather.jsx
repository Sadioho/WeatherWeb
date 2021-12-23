import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconSvg from './IconSvg';
import { ReactComponent as ChillyIcon } from '../icons/chilly.svg';

const ItemWeather = (props) => {
  const { day, degrees, icon, sizeIcon } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
        '& > .item-weather ': {
          padding: '10px',
          height: '160px',
          borderRadius: '15px',
        },
        '& .text-degrees': {
          color: 'gray',
        },
      }}
    >
      <Paper className="item-weather" elevation={3}>
        <Typography
          variant="body"
          gutterBottom
          component="div"
          sx={{ padding: '10px 0px' }}
        >
          <b>Sun</b>
        </Typography>
        <IconSvg icon={icon} size={sizeIcon} />
        <Typography variant="body" gutterBottom component="div">
          <b> 63°C </b> <b className="text-degrees"> 63°C </b>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ItemWeather;
