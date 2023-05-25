import React from "react";
import { Link } from "react-router-dom";
import { SingleCocktail } from "../pages/SingleCocktail";
const Cocktail = ({ item }) => {
  const { image, name, glass, info, link } = {
    name: item.strDrink,
    glass: item.strGlass,
    info: item.strAlcoholic,
    image: item.strDrinkThumb,
    link: item.idDrink,
  };
  //   console.log(image);
  return (
    <article>
      <div className="img-container">
        <img src={`${image}`} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link className="btn btn-primary" to={`/singlecocktail/${link}`}>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
