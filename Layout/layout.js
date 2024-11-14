import Header from "@/blocks/header/header";
import Footer from "../blocks/footer/footer";

function Layout(props) {
  const headerProps =
    props?.children?.props?.children[1]?.props?.uiSettings?.TT00023C01;
  const footerProps =
    props?.children?.props?.children[1]?.props?.uiSettings?.TT00023C02;

  // const headerProps = props?.children?.props?.children?.props?.uiSettings?.TT00023C01;
  // const footerProps = props?.children?.props?.children?.props?.uiSettings?.TT00023C02;

  return (
    <>
      <Header headerProps={headerProps} flag={props?.flag}/>

      {props.children}

      <Footer footerProps={footerProps} />
    </>
  );
}
export default Layout;
