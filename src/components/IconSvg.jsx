import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const IconSvg = ({ icon, size }) => {
  return <SvgIcon component={icon} sx={{ fontSize: size ? size : 90 }} />;
};

export default IconSvg;
