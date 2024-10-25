import LineSeparator from '../../components/LineSeparator';
import PlinkToolParam from './PlinkToolParam';

const PlinkPage = () => {
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
                <PlinkToolParam />
            </div>
            {/* {url !== '' ? <OutputGRUD url={url} /> : <></>} */}
            {/* {isLoading === true ? <Loading /> : <></>} */}
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default PlinkPage;
