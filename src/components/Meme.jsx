import React from 'react';
import './css/Meme.css';

export default function Meme() {
  return (
    <div className='meme-form'>
      <form>
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
            type='submit'
            name='submit'
            value='Get a new meme image 🖼'
            className='meme-form__btn'
          />
        </div>
      </form>
    </div>
  );
}
