import NavBar from './navBar';
import Footer from './footer';

const Layout = ({children}) => {
    return(
    <>
    <NavBar />
    <main>{ children }</main>
    <Footer />
    </>
    );
}

export default Layout;