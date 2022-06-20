const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="header">Header goes here</div>
      {children}
      <div className="footer">footer goes here</div>
    </div>
  );
};

export default Layout;
