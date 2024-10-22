import LineSeparator from '../../components/LineSeparator';
import SkinCancerToolParam from './SkinCancerToolParam';

const GRUDpage = () => {
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
                <SkinCancerToolParam />
            </div>
            {/* {url !== '' ? <OutputGRUD url={url} /> : <></>} */}
            {/* {isLoading === true ? <Loading /> : <></>} */}
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default GRUDpage;
