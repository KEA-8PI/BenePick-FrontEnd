import SelectCategory from 'components/select/SelectCategory';
import SearchBar from 'components/searchbar/SearchBar';
import CustomTab from 'components/tab/CustomTab';

const HomeView = () => {
  const tabData = [
    { label: '진행중', content: <div>Content for Tab 1</div> },
    { label: '응모 예정', content: <div>Content for Tab 2</div> },
    { label: '응모 종료', content: <div>Content for Tab 3</div> },
  ];
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
          <SelectCategory />
          <SearchBar />
        </div>
        <CustomTab tabs={tabData} />
      </div>
    </>
  );
};

export default HomeView;
