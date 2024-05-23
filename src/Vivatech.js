import React from 'react';
import ReactPlayer from 'react-player';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importez les icônes de la bibliothèque react-icons

const Vivatech = () => {
  return (
    <>
      <div>
        {/* Vidéo en arrière-plan */}
        <div className="background-video">
          <ReactPlayer
            url='./video.mp4'
            loop
            muted
            playing
            playsinline
            autoPlay
            className="video-player"
          />
        </div>

        {/* Filtre de petits points */}
        <div className="dot-filter"></div>

        {/* Texte et boutons par-dessus l'image */}
        <div className="text-overlay">
          <div className="text-container">
            <p className="text-background">
              Vous vous attendiez à quoi ? 🤣
            </p>
            <p className="text-background">
              J'ai fait ça parce que, soyons honnêtes, quelle meilleure façon de chercher un stage en web3/blockchain qu'avec un peu d'humour ?
            </p>
            <p className="text-background">
              Disponible dès juin ou septembre !
            </p>
            <p className="text-background">
              N'hésitez pas à me contacter !
            </p>
            <div className="mt-4">
              {/* Utilisez les icônes Bootstrap */}
              <button onClick={() => window.open("https://linkedin.com/in/florian-a-dev", "_blank")} className="btn btn-primary mx-2"><FaLinkedin /></button>
              <button onClick={() => window.open("https://github.com/florian-a", "_blank")} className="btn btn-primary mx-2"><FaGithub /></button>
              <a href="mailto:linkedin@florian-a.dev?subject=Rickroll&body=N'hésitez pas à m'envoyer un petit message !" className="btn btn-primary mx-2"><FaEnvelope /></a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vivatech;
