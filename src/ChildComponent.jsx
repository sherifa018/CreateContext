import { dataContext } from "./ParentComp";
import { useContext } from "react";

const ChildComp = () => {
  const data = useContext(dataContext);
  return (
    <div>
      <h1>ChildComp {`Hello${data}`}</h1>
    </div>
  );
};

export default ChildComp;
