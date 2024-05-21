// import React from 'react';
import './styles/App.css';
import pepe from './assets/pepe1.svg';


function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Black Pepe</h1>
        <nav className='nav'>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className='hero'>
        <img src={pepe} alt="crying pepe" className='crying_pepe' />
        <h1>black crying pepe</h1>
        <div className="buttons">
          <a href="#">Buy</a>
          <a href="#">Sell</a>
          <a href="#">Trade</a>
        </div>
      </section>
      <section className='hero-description'>
        <div className="description">
          <p>Black Crying Pepe is a unique crypto collectible token inspired by the internet phenomenon of Pepe the Frog. This digital asset captures the essence of the iconic Pepe meme in a distinctive and emotive form. The token&apos;s design features Pepe in a rare black coloration, with tears streaming down his face, symbolizing a range of emotions from melancholy to resilience.</p>
        </div>
        </section>
        <section className="information">
          <div className='information'>
            <h1>What is Black Crying Pepe?</h1>
            <div className="info">
              <p>Black Crying Pepe refers to a variant of the popular Pepe the Frog meme characterized by a black coloration and tears streaming down its face. Pepe the Frog originated as an internet meme in the early 2000s and has since evolved into a widely recognized symbol across various online communities.</p>
              <p>The crying variation of Pepe typically portrays the character with teardrops, conveying a range of emotions such as sadness, frustration, or empathy. The addition of a black coloration to this version adds another layer of visual impact, often interpreted as a representation of deeper emotional intensity or a darker mood.</p>
              <p>Like many other iterations of Pepe, the Black Crying Pepe meme has been widely shared and adapted in online conversations, forums, and social media platforms. It&apos;s a testament to the versatility of the Pepe character and its ability to resonate with internet users in expressing a wide array of emotions and sentiments.</p>
            </div>
          </div>
        </section>
        <footer>
          <h1>footer</h1>
        </footer>
      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
}

export default App;
