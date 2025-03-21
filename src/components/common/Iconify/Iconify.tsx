import { forwardRef } from 'react';
import { IconifyProps } from './Iconify.types';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';

const Iconify = forwardRef<HTMLElement, IconifyProps>(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

export default Iconify;
