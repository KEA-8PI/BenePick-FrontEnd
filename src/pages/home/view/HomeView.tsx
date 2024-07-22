import SelectCategory from 'components/select/SelectCategory';
import SearchBar from 'components/searchBar/SearchBar';
import CustomTab from 'components/tab/CustomTab';
import { Wrapper } from 'components/common/Components.styles';

const HomeView = () => {
  const tabData = [
    { label: '진행중', content: <div>Content for Tab 1</div> },
    { label: '응모 예정', content: <div>Content for Tab 2</div> },
    { label: '응모 종료', content: <div>Content for Tab 3</div> },
  ];
  return (
    <>
      <Wrapper>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
          <SelectCategory />
          <SearchBar />
        </div>
        <CustomTab tabs={tabData} />
      </Wrapper>
    </>
  );
};

export default HomeView;
