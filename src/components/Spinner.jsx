import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#c2405c"
      loading={loading}
      size={150}
    />
  );
};

export default Spinner;
