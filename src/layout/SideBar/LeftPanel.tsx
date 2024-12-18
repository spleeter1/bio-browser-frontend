import PanelLeftTop from './PanelLeftTop';
// import NestedList from './nestedList';
import PanelControl from './PanelControl';
import NestedList from './NestedList';

const PanelLeft = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                // maxWidth: '25%',
                border: '2px solid #e8ecee',
                borderTop: 'none',
            }}
        >
            <div
                style={{
                    maxWidth: '100%',
                    padding: '10% 5%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'space-around',
                    gap: '30px',
                }}
            >
                <PanelLeftTop />
                <PanelControl />
            </div>

            <NestedList />
        </div>
    );
};
export default PanelLeft;
