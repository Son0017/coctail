import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = ({ data }) => {
  // Loading
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {data ? (
          data.map((item) => {
            return (
              <article className="cocktail" key={item.idDrink}>
                <Cocktail item={item} />
              </article>
            );
          })
        ) : (
          <div className="cocktail" style={{ padding: "50px" }}>
            <h1 style={{ fontSize: "50px" }}>Nothing found</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default CocktailList;
