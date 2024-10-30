import { Outlet } from 'react-router-dom';
import Header from './Header';
import LeftPanel from './SideBar/LeftPanel';
import HistoryBar from './HistoryBar.tsx/HistoryBar';
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
                <div className="sidebar" style={{ flex: '0 0 20%' }}>
                    <LeftPanel />
                </div>
                <div
                    //flex: grow shrink basis
                    className="content"
                    style={{ flex: '0 0 60%', maxWidth: '100%' }}
                >
                    <Outlet />
                    {/* <Home /> */}
                </div>
                <div
                    className="history"
                    style={{
                        maxWidth: '20%',
                        borderLeft: '2px solid #e8ecee',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyItems: 'center',
                    }}
                >
                    <HistoryBar />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
