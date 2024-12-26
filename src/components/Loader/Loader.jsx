import { MagnifyingGlass } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => (
  <div className={s.loader}>
    <MagnifyingGlass
      color="#e15b64"
      glassColor="c0efffc0efff"
      height={80}
      width={80}
    />
  </div>
);

export default Loader;
