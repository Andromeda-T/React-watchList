import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";/
import StarRating from "./starRating";

function Test() {
    // accses to the main rating number
    const [movieRating, setMovieRating] = useState(0);
    return (
        <div>
            <StarRating setMovieRating={setMovieRating} />
            <p>Your rate for this movie is {movieRating}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <StarRating
            maxRating={10}
            color="#fcc419"
            size={38}
            className="test"
            defaultRating={3}
            setMovieRating={0}
        />
        <Test />
    </React.StrictMode>
);
