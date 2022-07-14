import React, { Fragment } from 'react';

// ICONS
import { BsEyeFill } from 'react-icons/bs';

const CharacterCard = () => {

  return (
    <Fragment>
      <div className="card col-span-12 col-span-md-4">
        <div className="card__media">
          <img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" alt="Rick and Morty" />

          <div title={'Specie'} className="card__media-box pdx-16 pdy-4 fs-14 fw-semi-bold">Human</div>
        </div>

        <div className="card__title pdy-10 fw-semi-bold fs-17">Rick Morty <sup className='bg-primary fs-10 text-white pdx-10 pdy-2 round-10'>ALIVE</sup></div>

        <button title={'View full details'} className="card__btn pdy-16 pdx-24">
          <div className="card__btn-copy fs-16 fw-semi-bold">
            See More
          </div>

          <BsEyeFill fontSize={20} className="animate__animated animate__pulse text-primary" />
        </button>
      </div>
    </Fragment>
  );
}

export { CharacterCard as default };