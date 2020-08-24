import React from 'react';
import style from './recipe.module.css'
import './App.css';

const Recipe = ({title, calories, image, ingredients, source}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories:<br/>{Math.round(calories)}</p>
            <img className={style.image} src={image} alt=""/>
            <p className={style.source}>Source: {source}</p>
        </div>
    );
};

export default Recipe;