const { useState, useEffect } = require("react");

// import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [punding, setPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const req = async (url) => {
      try {
        setPending(true);
        const responce = await fetch(url);
        if (!responce.ok) {
          throw new Error("Some thing went wrong");
        }
        const elems = await responce.json();
        setData(elems.drinks);
        setPending(false);
      } catch {
        setPending(false);
        setError("Some thing went wrong");
        setData(null);
      }
    };
    console.log(url);
    req(url);
  }, [url]);

  return { data, error, punding };
};
export { useFetch };
