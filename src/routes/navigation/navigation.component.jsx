import {Fragment} from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../../components/nav-bar/nav-bar.component';
import Footer from '../../components/footer/footer.component';

const Navigation = () => {

    return (
        <Fragment>
            <NavBar />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Navigation