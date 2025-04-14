import React, { useEffect, useState } from "react";
import "../styles.scss";
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector, useAppDispatch } from '../Hooks'
import { addFavorite } from "../Slices/Favoritesslice";
import { changeIsfav, setIsfav } from "../Slices/isfavslice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CustomPopper from "../Components/CustomPopper";


const API_KEY = "vzY5H5w9MdG9MJ3LFBRXPhdCAP0Zu9fuHbMYomvn";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<{ title: string } | null>(null);

  const recipeType = ['quick', 'healthy', 'low-carb', 'vegetarian', 'gluten-free', 'keto', 'high-protein', 'low-fat', 'dairy-free']
  const isFav = useAppSelector((state) => state.isfavorite.value)
  const favorites = useAppSelector((state) => state.favorite.value)
  const dispatch = useAppDispatch()

  const generateRecipe = async () => {
    if (!prompt) return;
    setLoading(true);
    isFav ? dispatch(changeIsfav()) : ''
    const recipeName = selectedRecipe ? selectedRecipe.title + ' ' + prompt : prompt;
    if (favorites.find((elem) => elem.name.toLowerCase() === recipeName.toLowerCase())) {
      dispatch(setIsfav({ value: true }))
      console.log("Already favorite");
    }
    try {
      const response = await fetch("https://api.cohere.ai/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "command",
          prompt: `Give a ${selectedRecipe?.title ? selectedRecipe?.title : "short"} recipe for ${prompt}`,
          max_tokens: 550,
        }),
      });

      const data = await response.json();
      if (data.text) {
        setResult(data.text);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }

    setLoading(false);
  };

  const addToFavorites = () => {
    if (result && !isFav) {
      const recipeName = selectedRecipe ? selectedRecipe.title + ' ' + prompt : prompt;

      if (favorites.find((elem) => elem.name.toLowerCase() === recipeName.toLowerCase())) {
        console.log("Already favorite");
      } else {
        dispatch(addFavorite({
          id: uuidv4(),
          name: recipeName,
          howtocook: result,
        }));
        dispatch(changeIsfav());
      }
    }
    console.log(favorites);
  };


  useEffect(() => {
    console.log(prompt);
  }, [prompt])

  const options = recipeType.map((type) => ({ title: type }));
  console.log(selectedRecipe?.title);

  return <>
    <h1>Find recipe for any food and enjoy the process of cooking!</h1>
    <Autocomplete
      options={options}
      className="custom-autocomplete"
      getOptionLabel={(option) => option.title}
      value={selectedRecipe}
      onChange={(event, newValue) => {
        setSelectedRecipe(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="Recipe Type" />}
      PopperComponent={CustomPopper}
      sx={{ width: 300 }}
    />
    <div id="resultContainer">
      {
        result ? "" : <p className={`text-sm ${loading ? "shimmer-text" : ""}`}>
          {loading ? "Searching for the most delicious recipes..." : "Tiramisù... interesting!"}
        </p>
      }
      <p id="resultText" className="whitespace-pre-line">{result}</p>
    </div>
    {result ? <button className="addbutton" onClick={() => addToFavorites()}>
      <FontAwesomeIcon style={{ fontSize: "0.5em" }} className={isFav ? 'red' : ''} icon={isFav ? solidHeart : regularHeart} />
    </button> : ''}
    <input
      type="text"
      id="promptInput"
      className="input-field placeholder-white"
      placeholder="Enter any type of food..."
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      onKeyUp={(e) => e.key === "Enter" && generateRecipe()}
    />
    <div className="button-container">
      <button
        id="generateBtn"
        className="button generate-btn"
        onClick={generateRecipe}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>
      <button id="stopBtn" disabled className="button stop-btn disabled">Stop</button>
    </div>
  </>

};

export default Home;
