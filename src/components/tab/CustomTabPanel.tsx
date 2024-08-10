// import { Box } from '@mui/material';
// import { TabPanelProps } from './CustomTab.types';

// // 탭 안의 내용
// const CustomTabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {/* 탭 하단 찐 내용 */}
//       {value === index && <Box sx={{ paddingTop: '25px' }}>{children}</Box>}
//     </div>
//   );
// };
// export default CustomTabPanel;

import React, { useState } from 'react';
import { Box, Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
import { TabPanelProps } from './CustomTab.types';
import CustomTabTitle from './CustomTabTitle';
import * as S from 'components/common/Components.styles';
import colors from 'theme/variableColors';

// 탭 안의 내용
const CustomTabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  showTabTitle,
  title,
  showFilter,
  ...other
}) => {
  const [selectedFilter, setSelectedFilter] = useState('종료 임박순');

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    console.log(filter);
  };

  const renderFilteredContent = () => {
    if (selectedFilter === '종료 임박순') {
      return children;
    } else if (selectedFilter === '인기순') {
      return children;
    } else if (selectedFilter === '최신순') {
      return children;
    }
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <S.Row style={{ alignContent: 'center', alignItems: 'center' }}>
        {/* 탭 하단의 제목이 있을 경우에만 렌더링 */}
        {showTabTitle && title && <CustomTabTitle title={title} />}
        {/* 필터 버튼 */}
        {showFilter && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedFilter} // Set the value to selectedFilter
              >
                <FormControlLabel
                  value="종료 임박순"
                  control={
                    <Radio
                      sx={{
                        color: colors.whiteGrey,
                        '&.Mui-checked': {
                          color: colors.primary,
                        },
                      }}
                    />
                  }
                  label="종료 임박순"
                  onClick={() => handleFilterChange('종료 임박순')}
                />
                <FormControlLabel
                  value="인기순"
                  control={
                    <Radio
                      sx={{
                        color: colors.whiteGrey,
                        '&.Mui-checked': {
                          color: colors.primary,
                        },
                      }}
                    />
                  }
                  label="인기순"
                  onClick={() => handleFilterChange('인기순')}
                />
                <FormControlLabel
                  value="최신순"
                  control={
                    <Radio
                      sx={{
                        color: colors.whiteGrey,
                        '&.Mui-checked': {
                          color: colors.primary,
                        },
                      }}
                    />
                  }
                  label="최신순"
                  onClick={() => handleFilterChange('최신순')}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        )}
      </S.Row>

      {/* 탭 하단 찐 내용 */}
      {value === index && <Box sx={{ paddingTop: '25px' }}>{renderFilteredContent()}</Box>}
    </div>
  );
};

export default CustomTabPanel;
