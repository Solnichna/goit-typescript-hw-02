import { Vortex } from "react-loader-spinner";

const styleLoading: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30vh",
};

const Loading: React.FC = () => (
  <div style={styleLoading}>
    <Vortex
      visible={true}
      height={100}
      width={100}
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClassName="vortex-wrapper"
      color={["red", "orange", "yellow", "green", "blue", "purple"]}
    />
  </div>
);

export default Loading;