import React from 'react';
import { Box, Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
import { TabPanelProps } from './CustomTab.types';
import CustomTabTitle from './CustomTabTitle';
import * as S from 'components/common/Components.styles';
import colors from 'theme/variableColors';

const filterMapping = {
  '종료 임박순': 'END',
  인기순: 'POPULAR',
  최신순: 'NEWEST',
};

// 탭 안의 내용
const CustomTabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  showTabTitle,
  title,
  showFilter,
  onFilterChange,
  selectedFilter, // 현재 탭의 필터 상태를 받음
  ...other
}) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value;

    // 한글 필터 값을 영문 API 호출 값으로 변환
    const apiFilter = filterMapping[filter];

    // 부모 컴포넌트에 필터 값 전달
    if (onFilterChange) {
      onFilterChange(apiFilter);
    }

    console.log('선택된 필터:', apiFilter);
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
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={Object.keys(filterMapping).find((key) => filterMapping[key] === selectedFilter)} // 부모 컴포넌트로부터 받은 현재 필터 상태값을 한국어로 변환하여 사용
                onChange={handleFilterChange} // 변경 핸들러
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
                />
              </RadioGroup>
            </FormControl>
          </Box>
        )}
      </S.Row>

      {/* 탭 하단 찐 내용 */}
      {value === index && <Box sx={{ paddingTop: '25px' }}>{children}</Box>}
    </div>
  );
};

export default CustomTabPanel;
