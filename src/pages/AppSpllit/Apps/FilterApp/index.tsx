import { useEffect, useState } from "react";

const FilterApp = () => {
  const [title, setTitle] = useState("Filter App");

  useEffect(() => {
    console.log("调试window - react", window);
    window.test = "react";
  }, []);

  return (
    <>
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() =>
          setTitle(
            `ReRender Filter App - \n ${parseInt(Math.random() * 1000 + "")}`
          )
        }
      >
        {title} - By React
      </div>
      <br />
    </>
  );
};

export default FilterApp;
