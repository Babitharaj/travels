import Link from "next/link";
import styles from "./breadcrumbs.module.scss";

export default function Breadcrumbs(props) {
  //const { breadcrumb } = props;
  return (
    <div className={styles["breadcrums"] + " d-flex align-items-center justify-content-between"}>
      <ul className="flex-fill d-flex align-items-center">

        {/* {breadcrumb?.parentCategories?.slice(0).reverse()?.map((item, index) => (
           */}
          <li key={index}>
          <Link  href="#">
            <a className="d-flex align-items-center"><span>Home</span></a>
          </Link>
        </li>
        {/* ))} */}
        <li>Resort</li>

      </ul>
    
    </div>
  );
}
