import React from 'react';
import { TabTitleProps } from './CustomTab.types';

const CustomTabTitle: React.FC<TabTitleProps> = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
export default CustomTabTitle;
