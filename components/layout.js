import Header from "./Header"

const Layout = ({ children, darkHeader }) => (
  <>
    <Header darkHeader={darkHeader} />
    {children}
  </>
)

export default Layout
