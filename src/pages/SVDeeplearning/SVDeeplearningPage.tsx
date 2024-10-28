import LineSeparator from '../../components/LineSeparator';
import FilteringSVToolParam from './SVDeeplearningToolParam';

const FilteringSVPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                padding: '1%',
                flexDirection: 'column',
            }}
        >
            <LineSeparator content="Tool Parameters" />
            <div>
                <FilteringSVToolParam />
            </div>
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default FilteringSVPage;
