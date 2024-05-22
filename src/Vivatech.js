import React from 'react';
import { Helmet } from 'react-helmet';

const Vivatech = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100" style={{ fontFamily: 'Comic Neue', backgroundColor: '#3fc4ff', color: '#000', marginBottom: '100px' }}>
        <img src={`/itstrape.jpg`} alt="Vivatech" className="img-fluid" style={{ maxHeight: '50vh', maxWidth: '100%' }} />
        <hr style={{ width: '80%', height: '2px', backgroundColor: '#000', margin: '20px auto' }} />
        <p className="text-center mt-4" style={{ maxWidth: '800px', width: '100%', margin: '0 auto', fontSize: '1.5rem' }}>
          Je sais, cette blague était un peu naze... 😅 <br /><br />
          Plus sérieusement, je suis de l'école 42, passionné par la blockchain et le Web3, et <strong>je suis à la recherche d'un stage</strong> dans ce domaine.<br /><br />
          Si vous êtes prêts à découvrir mes compétences (et mes blagues douteuses), n'hésitez pas à me contacter !
        </p>
        <hr style={{ width: '80%', height: '2px', backgroundColor: '#000', margin: '20px auto' }} />
        <div className="mt-4">
          <a href="https://linkedin.com/in/florian-a-dev/" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg text-dark me-2">LinkedIn</a>
          <a href="https://github.com/florian-a/" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg text-dark">GitHub</a>

        </div>
      </div>
    </>
  );
}

export default Vivatech;
