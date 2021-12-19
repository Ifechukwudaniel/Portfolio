import Header from "./Header"

const Layout = ({ children, categories, seo }) => (
  <>
    <Header categories={categories} />
    {children}
  </>
)

export default Layout
