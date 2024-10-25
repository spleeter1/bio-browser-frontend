import LineSeparator from '../../components/LineSeparator';
import PRSice2ToolParam from './PRSice2ToolParam';

const PRSice2Page = () => {
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
                {/* <UploadParams uploadTitle={`Data GRUD`.toUpperCase()} /> */}
                <PRSice2ToolParam />
            </div>
            {/* {url !== '' ? <OutputGRUD url={url} /> : <></>} */}
            {/* {isLoading === true ? <Loading /> : <></>} */}
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default PRSice2Page;
