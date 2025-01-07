import { InfinitySpin } from "react-loader-spinner";
import Styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={Styles.loader}>
      <InfinitySpin
        visible={true}
        height={80}
        width={80}
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
