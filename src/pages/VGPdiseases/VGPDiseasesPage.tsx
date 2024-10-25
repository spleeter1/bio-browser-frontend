import LineSeparator from '../../components/LineSeparator';
import VGPDiseasesToolParam from './VGPDiseaseToolParam';

const VGPDiseasesPage = () => {
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
                <VGPDiseasesToolParam />
            </div>
            {/* {url !== '' ? <OutputGRUD url={url} /> : <></>} */}
            {/* {isLoading === true ? <Loading /> : <></>} */}
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default VGPDiseasesPage;
