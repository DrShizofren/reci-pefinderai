import React, { useEffect, useState } from "react";
import "../styles.scss";
import { v4 as uuidv4 } from 'uuid';
import { Heart } from "lucide-react";
import { useAppSelector, useAppDispatch } from '../Hooks'
import { addFavorite } from "../Slices/Favoritesslice";
import { changeIsfav } from "../Slices/isfavslice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";


const API_KEY = "vzY5H5w9MdG9MJ3LFBRXPhdCAP0Zu9fuHbMYomvn";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const isFav = useAppSelector((state) => state.isfavorite.value)
  const favorites = useAppSelector((state) => state.favorite.value)
  const dispatch = useAppDispatch()

  const generateRecipe = async () => {
    if (!prompt) return;
    setLoading(true);
    isFav ? dispatch(changeIsfav()) : ''
    try {
      const response = await fetch("https://api.cohere.ai/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "command",
          prompt: `Give a short recipe for ${prompt}, with ingredients and steps.`,
          max_tokens: 500,
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
  console.log(typeof (result));

  const addToFavorites = () => {

    if (result && !isFav) {
      if (favorites.find((elem) => elem.name === prompt)) {
        console.log("Already favorite");
      } else {
        dispatch(addFavorite({
          id: uuidv4(),
          name: prompt,
          howtocook: result,
        }));
        dispatch(changeIsfav())
      }
    }
    console.log(favorites);

  }

  useEffect(() => {
    console.log(favorites);
  }, [favorites])

  return <>
    <h1>Find recipe for any food and enjoy the process of cooking!</h1>
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
