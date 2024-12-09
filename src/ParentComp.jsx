import { useState, createContext } from "react";
import ChildComp from "./ChildComponent";
export const dataContext = createContext();
const ParentComp = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <h1>ParentComp</h1>
      <dataContext.Provider value={data}>
        <ChildComp />
      </dataContext.Provider>
    </div>
  );
};

export default ParentComp;
