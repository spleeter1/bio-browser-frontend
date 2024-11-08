import LineSeparator from "../../components/LineSeparator";
import GRUDToolParam from "./GRUDToolParam";

const GRUDpage = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "1%",
        flexDirection: "column",
      }}
    >
      <LineSeparator content="Tool Parameters" />
      <div>
        <GRUDToolParam />
      </div>
      <LineSeparator content="Help" />
      <LineSeparator content="Tutorial" />
      <LineSeparator content="Help Forum" />
    </div>
  );
};
export default GRUDpage;
