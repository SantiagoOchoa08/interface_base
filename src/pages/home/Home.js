import React from "react";
import Title1 from "../../components/Title1";
import Introduction from "../../components/Introduction";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <Title1 />

            <br></br>

            <Introduction />

            <button className="btn"> <Link to={"/main"}> Go to Shop </Link> </button>
        </div>
    )
}

export default Home;