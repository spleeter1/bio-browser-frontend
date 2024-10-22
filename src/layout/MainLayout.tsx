import { Outlet } from 'react-router-dom';
import Header from './Header';
import LeftPanel from './SideBar/LeftPanel';
// import Home from '../pages/Home';

const MainLayout = () => {
    return (
        <div
            className="layout"
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <div
                className="container"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    maxWidth: '100%',
                    marginTop: '64px',
                }}
            >
                <div className="sidebar" style={{ maxWidth: '25%' }}>
                    <LeftPanel />
                </div>
                <div className="content" style={{ width: '55%' }}>
                    <Outlet />
                    {/* <Home /> */}
                </div>
                <div className="history" style={{}}></div>
            </div>
        </div>
    );
};

export default MainLayout;
