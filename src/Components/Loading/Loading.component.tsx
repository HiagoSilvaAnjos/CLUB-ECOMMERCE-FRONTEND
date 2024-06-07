import { SyncLoader } from "react-spinners";
import { LoadingContainer } from "./Loading.styles";

interface LoadingProps {
  message?: string;
}

const LoadingComponent = ({ message }: LoadingProps) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={20} />
    </LoadingContainer>
  );
};

export default LoadingComponent;
