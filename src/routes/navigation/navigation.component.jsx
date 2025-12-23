import {Fragment} from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../../components/nav-bar/nav-bar.component';
import Footer from '../../components/footer/footer.component';
import ChatBotIcon from '../../components/chat-bot-icon/chat-bot-icon.component';

const Navigation = () => {

    return (
        <Fragment>
            <NavBar />
            <Outlet />
            <ChatBotIcon />
            <Footer />
        </Fragment>
    )
}

export default Navigation