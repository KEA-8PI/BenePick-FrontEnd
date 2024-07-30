import { useState, useRef, useEffect } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import colors from 'theme/variableColors';

const tabData = [
  { idx: 0, name: '응모 현황 정보' },
  { idx: 1, name: '결과 발표' },
  { idx: 2, name: '안내 사항' },
];

const GoodsDetailTab = ({ scrollRef }) => {
  const [navIndex, setNavIndex] = useState(0);
  const navRef = useRef([]); // 이동할 각각의 컴포넌트에 대응하는 목차 버튼을 저장할 ref 배열

  useEffect(() => {
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth' });
  }, [scrollRef, navIndex]);

  // 현재 스크롤 위치에 따라 NavBar 버튼 스타일이 바뀌도록 클래스명을 지정한다.
  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach((navEl) => {
            if (navEl) {
              navEl.classList.remove('active');
            }
          });

          if (navRef.current[idx]) {
            navRef.current[idx].classList.add('active');
          }
          // // 현재 섹션의 인덱스를 콘솔에 출력
          // console.log(`현재 섹션 인덱스: ${idx}`);
        }
      });
    };

    window.addEventListener('scroll', changeNavBtnStyle);

    return () => {
      window.removeEventListener('scroll', changeNavBtnStyle);
    };
  }, [scrollRef]);

  const handleChange = (event, newIndex) => {
    setNavIndex(newIndex);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={navIndex}
          onChange={handleChange}
          aria-label="custom tabs"
          textColor="inherit"
          sx={{ '& .MuiTab-root': { fontSize: '15px' } }}
          TabIndicatorProps={{ style: { backgroundColor: colors.primary } }}
        >
          {tabData.map(({ idx, name }) => (
            <Tab key={idx} label={name} ref={(el) => (navRef.current[idx] = el)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default GoodsDetailTab;
