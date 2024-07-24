import React from 'react';
import colors from '../../theme/variableColors';
import ProfilePopover from 'components/popover/ProfilePopover';
import * as S from 'components/common/Components.styles';

// 타입 정의
interface NavItem {
  title: string;
  path: string;
}

interface MemberNavBarProps {
  navItems: NavItem[];
  memberNavItems: NavItem[];
  path: string;
}

// 컴포넌트 정의
const MemberNavBar: React.FC<MemberNavBarProps> = ({ navItems, memberNavItems, path }) => {
  return (
    <S.HeaderWrapper>
      <nav
        style={{
          backgroundColor: 'white',
          position: 'fixed',
          margin: 'auto',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '90px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          justifyContent: 'space-between', // 양 끝으로 배치
        }}
      >
        <div
          style={{
            flex: 'justify-center',
            justifyItems: 'center',
            marginLeft: '33px',
          }}
        >
          <a href="/">
            <img src="/images/benepickLogo.png" alt="logo" width={180} height={52} />
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '40px',
              marginRight: '50px',
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => {
              return (
                <a
                  key={item.title}
                  href={item.path}
                  className="nav-item"
                  style={{
                    color: path === item.path ? colors.primary : '#000000',
                    fontSize: '15px',
                    fontWeight: path === item.path ? 'bold' : 'regular',
                  }}
                >
                  {item.title}
                </a>
              );
            })}
            {memberNavItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="nav-item"
                style={{
                  color: path === item.path ? colors.primary : '#000000',
                  fontSize: '15px',
                  fontWeight: path === item.path ? 'bold' : 'regular',
                }}
              >
                {item.title}
              </a>
            ))}
          </ul>
          <div
            style={{
              marginRight: '20px',
            }}
          >
            <ProfilePopover />
          </div>
        </div>
      </nav>
    </S.HeaderWrapper>
  );
};

export default MemberNavBar;
