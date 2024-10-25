import LineSeparator from '../../components/LineSeparator';
import FilteringSVToolParam from './FilteringSVToolParam';

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
            {/* {url !== '' ? <OutputGRUD url={url} /> : <></>} */}
            {/* {isLoading === true ? <Loading /> : <></>} */}
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default FilteringSVPage;
