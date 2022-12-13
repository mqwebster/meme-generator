import { useState } from 'react';
import memes from '/src/memesData.js';
import './css/Meme.css';

export default function Meme() {
  const [memeImage, setMemeImage] = useState('');

  const getMemeImage = () => {
    const memesList = memes.data.memes;
    const randNum = Math.floor(Math.random() * memesList.length);
    setMemeImage(memesList[randNum].url);
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

      <div className='meme-img'>
        <img src={memeImage} className='meme-img__inner' />
      </div>
    </div>
  );
}
