import { ClipLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      cssOverride={override}
      size={150}
      color="#4338ca"
      loading={loading}
    />
  );
};

export default Spinner;
