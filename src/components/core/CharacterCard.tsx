import React, { Fragment } from 'react';
import { renderContent } from '@/utils/helpers';

// ICONS
import { BsEyeFill } from 'react-icons/bs';

// INTERFACES
import { ICharacter } from '@/interfaces';

interface IProps {
  character: ICharacter | any;
}

const CharacterCard = ({ character }: IProps) => {
  return (
    <Fragment>
      <div className="card col-span-12 col-span-md-4">
        <div className="card__media">
          <img
            src={renderContent(character?.image || character?.item?.image)}
            alt="Rick and Morty"
          />

          <div
            title={'Specie'}
            className="card__media-box pdx-16 pdy-4 fs-14 fw-semi-bold"
          >
            {renderContent(character?.species || character?.item?.species)}
          </div>
        </div>

        <div className="card__title pdy-10 fw-semi-bold fs-17">
          {renderContent(character?.name || character?.item?.name)}
          <sup
            title={'Status'}
            className="bg-primary fs-10 text-white pdx-10 pdy-2 round-10 mgl-2"
          >
            {renderContent(character?.status || character?.item?.status)}
          </sup>
        </div>

        <button title={'View full details'} className="card__btn pdy-16 pdx-24">
          <div className="card__btn-copy fs-16 fw-semi-bold">See More</div>

          <BsEyeFill
            fontSize={20}
            className="animate__animated animate__pulse text-primary"
          />
        </button>
      </div>
    </Fragment>
  );
};

export { CharacterCard as default };
