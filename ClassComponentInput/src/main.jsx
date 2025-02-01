import { createRoot } from "react-dom/client";
import ParentComponent from "./ParentComponent";
import mainStyle from "./main.module.css";

createRoot(document.getElementById("root")).render(
  <>
    <div className={mainStyle.main}>
      <ParentComponent />
    </div>
  </>
);
