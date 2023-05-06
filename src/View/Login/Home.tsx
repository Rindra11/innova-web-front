import React from 'react'
import { Link } from "react-router-dom";
import '../../Assets/style/Home.css';
import { type } from 'os';

import logo from '../../Assets/img/reve.jpg';

const Home = () => {
    return <h1>Accueil</h1>;
  };
  
  const Apropos = () => {
    return <h1>À propos</h1>;
  };
  
  const Historique = () => {
    return <h1>Historique</h1>;
  };
  


const Header: React.FC = () => {

  return(
    <div>
    <section className="home" id="home">
        <div className="content">
            <h3>Bonjour, Bienvenue</h3>
            <span>Dans notre site de préduction de rêve..</span>
            <p>Le rêve est une « disposition de l'esprit généralement nocturne, survenant au cours du sommeil, et 
              qui procure à l'individu éveillé des souvenirs nommés eux aussi rêves ».</p>
            <Link to="/" className="btn">Explorer maintenant</Link>
        </div>
    </section>

    <section className="about" id="about">
        <h1 className="heading">about us</h1>
        <div className="row">
            <div className="video-container">
                <h3>Best video</h3>
            </div>
            <div className="content">
                <h3>Pourquoi nous choisir?</h3>
                <p>Au cours de l'histoire et des civilisations, le rêve a été un moyen de s'affranchir du temps et de l'espace ordinaires, pour accéder au surnaturel, aux ancêtres, au divin, ou encore comme un moyen de guérison, de connaissance et de révélation.</p>
                <p>L'approche rationnelle et scientifique en fait un processus ancré dans le corps et lié à l'activité cérébrale au cours du sommeil. Le rêve pose toujours la question de son sens et de sa signification, ou de son rôle et de sa fonction (approches philosophique, psychodynamique, neurobiologique…).</p>
                <Link to="/" className="btn">Apprendre mieux</Link>
            </div>
        </div>
    </section>

    <section className="card" id="card">
    <h1 className="heading">Poster Vos rêves</h1>
    <div className="box-container">
        <div className="box">
            <span className="discount">De quel rêve s'agit-il?</span>
            <div className="image">
                
                <div className="icons">
                    <Link to="/" className="fas fa-heart"></Link>
                    <Link to="/" className="fas fa-heart"></Link>
                    <Link to="/" className="fas fa-heart"></Link>
                </div>
            </div>
            <div className="content">
                <h3>3D Innovation</h3>
            </div>
        </div>

        <div className="box">
            <span className="discount">De quel rêve s'agit-il?</span>
            <div className="image">
                
                <div className="icons">
                    <Link to="/" className="fas fa-heart"></Link>
                    <Link to="/" className="fas fa-share"></Link>
                    <Link to="/" className="fas fa-heart"></Link>
                </div>
            </div>
            <div className="content">
                <h3>3D Innovation</h3>
            </div>
        </div>
    </div>
</section>

    </div>
  )

}

export default Header;
