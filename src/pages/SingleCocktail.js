import React from "react";
// import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
// i=id, id from useParams

const SingleCocktail = () => {
  const { id } = useParams();
  const { data, punding, error } = useFetch(`${url}${id}`);
  function ingEl(item) {
    let k = 1;
    let x = "";
    let result = "";
    for (let i = 1; i <= k; i++) {
      x = `strIngredient${i}`;

      if (item[x]) {
        result += `${item[x]}, `;
        k++;
      } else {
        k = 0;
      }
    }
    console.log(result);
    return result;
  }
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      {punding && <Loading />}
      {data &&
        data.map((item) => {
          return (
            <div key={item.idDrink}>
              {/* Back to Home Link */}
              <h2 className="section-title">{item.strDrink}</h2>
              <div className="drink">
                <img src={`${item.strDrinkThumb}`} alt="" />
                <div className="drink-info">
                  <p>
                    <span className="drink-data">name : </span>
                    {item.strDrink}
                  </p>
                  <p>
                    <span className="drink-data">category : </span>
                    {item.strCategory}
                  </p>
                  <p>
                    <span className="drink-data">info : </span>
                    {item.strAlcoholic}
                  </p>
                  <p>
                    <span className="drink-data">glass : </span>
                    {item.strGlass}
                  </p>
                  <p>
                    <span className="drink-data">instructions : </span>
                    {item.strInstructions}
                  </p>
                  <p>
                    <span className="drink-data">ingredients :</span>
                    {ingEl(item)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default SingleCocktail;
