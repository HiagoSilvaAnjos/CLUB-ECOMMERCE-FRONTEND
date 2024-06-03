import { SyncLoader } from "react-spinners";
import { LoadingContainer } from "./Loading.styles";

const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <SyncLoader size={20} />
    </LoadingContainer>
  );
};

export default LoadingComponent;
