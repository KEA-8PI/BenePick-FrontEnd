const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div style={{ padding: '110px 188px 0 188px' }}>
      {/* <Header /> */}
      <main>{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
