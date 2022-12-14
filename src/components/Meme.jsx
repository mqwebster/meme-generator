import { useState } from 'react';
import memes from '/src/memesData.js';
import './css/Meme.css';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    image: '',
  });

  const [allMemesData, setAllMemesData] = useState(memes);

  const getMemeImage = () => {
    const memesList = allMemesData.data.memes;
    const randNum = Math.floor(Math.random() * memesList.length);
    const url = memesList[randNum].url;

    setMeme((prevState) => ({
      ...prevState,
      image: url,
    }));
  };

  return (
    <div className='meme-form'>
      <div className='meme-form__inputs'>
        <input
          type='text'
          name='input-top'
          placeholder='Meme Upper Text'
          className='meme-form__input top'
        />
        <input
          type='text'
          name='input-bottom'
          placeholder='Meme Lower Text'
          className='meme-form__input bottom'
        />
      </div>

      <div className='meme-form__submit'>
        <input
          type='button'
          name='button'
          value='Get a new meme image 🖼'
          className='meme-form__btn'
          onClick={getMemeImage}
        />
      </div>

      {meme.image && (
        <div className='meme-img'>
          <img src={meme.image} alt='Meme' className='meme-img__inner' />
        </div>
      )}
    </div>
  );
}
