import { useState, useRef, useEffect, useCallback } from 'react';
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
  const isInitialRender = useRef(true);

  const handleChange = useCallback((event, newIndex) => {
    console.log('Tab changed to:', newIndex);
    setNavIndex(newIndex);
    isInitialRender.current = false; // 탭 클릭 시 초기 렌더링 상태 해제
  }, []);

  const handleTabClick = (index) => {
    setNavIndex(index);
    isInitialRender.current = false; // 탭 클릭 시 초기 렌더링 상태 해제
  };

  useEffect(() => {
    if (isInitialRender.current) {
      return;
    }

    if (navIndex !== null) {
      const targetRef = scrollRef.current[navIndex];
      const offsetTop = targetRef.offsetTop;
      const elementHeight = targetRef.offsetHeight;
      const windowHeight = window.innerHeight;

      // 중앙으로 맞추기 위해 스크롤 위치 계산
      const scrollToPosition = offsetTop - windowHeight / 2 + elementHeight / 2;

      window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    }
  }, [scrollRef, navIndex]);

  // 현재 스크롤 위치에 따라 NavBar 버튼 스타일이 바뀌도록 클래스명을 지정한다.
  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach((ref) => {
            ref.className = ref.className.replace(' active', '');
          });

          navRef.current[idx].className += ' active';
        }
      });
    };

    window.addEventListener('scroll', changeNavBtnStyle);

    return () => {
      window.removeEventListener('scroll', changeNavBtnStyle);
    };
  }, [scrollRef]);

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
            <Tab key={idx} label={name} ref={(el) => (navRef.current[idx] = el)} onClick={() => handleTabClick(idx)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default GoodsDetailTab;
