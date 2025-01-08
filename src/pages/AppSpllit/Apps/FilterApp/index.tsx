import { useState } from "react";

const FilterApp = () => {
  const [title, setTitle] = useState("Filter App");
  return (
    <div onClick={() => setTitle("ReRender Filter App")}>
      {title} - By React
    </div>
  );
};

export default FilterApp;
