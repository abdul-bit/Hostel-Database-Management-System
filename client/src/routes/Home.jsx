import React from "react";
import AddStudent from "../components/AddStudent";
import CardItem from "../components/CardItem";
import Cards from "../components/Cards";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Interactive from "../components/Interactive";
import ListStudents from "../components/ListStudents";
import Redirect from "../Redirect";



const Home = () => {
    return (
        <div>

            <div class="box" style={{ position: "sticky" }}>
                <Interactive />
            </div>
            <div class="box overlay">
                <HeroSection />
                {/* <Cards /> */}

            </div>


            <br />






        </div >
    );
};

export default Home;
