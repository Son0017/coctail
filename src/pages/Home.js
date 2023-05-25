import React from "react";
import { useState } from "react";
import CocktailList from "../components/CocktailList";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const [url, seturl] = useState("a");

  const { data, error, punding } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${url}`
  );
  //   console.log(data);
  return (
    <main>
      <section className="section search">
        <form className="search-form">
          <div className="form-control">
            <label htmlFor="name">Search Your Favorite Cocktail</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                seturl(e.target.value);
              }}
            />
          </div>
        </form>
      </section>
      {punding && <Loading />}
      <CocktailList data={data} />
    </main>
  );
};

export default Home;
