import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

/*<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
  const [counter, setCounter] = useState(0);
  make sure you add await everytime you have a promise bc some data does not come back instantly (or a then)
  */
const App = () => {

  const APP_ID = '9795d175';
  const APP_KEY = '0612e54f226788c03fe344f0adefc045';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

const updateSearch = e => {
  setSearch(e.target.value);
};

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
  /*grey out recipe when hover link to the recipe source page and clean up calorie count */
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type = "submit">SEARCH</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} /*these are the props which is from the useState */
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        source={recipe.recipe.source}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
