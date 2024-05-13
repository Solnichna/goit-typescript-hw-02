import { Vortex } from "react-loader-spinner";

const styleLoading = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30vh",
};

const Loading = () => (
  <div style={styleLoading}>
    <Vortex
      visible={true}
      height="100"
      width="100"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={["red", "orange", "yellow", "green", "blue", "purple"]}
    />
  </div>
);

export default Loading;