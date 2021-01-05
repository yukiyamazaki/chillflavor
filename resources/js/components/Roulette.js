import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const Roulette = () => {
  return(
    <>
      <Navbar />
      <div className="roulette_wrapper">
        <div className="select_feeling">
          <input type="button"/>
            <p>あまめ</p>
          <button>
            <p>すっきり</p>
          </button>
          <button>
            <p>からめ</p>
          </button>
        </div>
        <div className="select_type">
          <button>
            <p>王道</p>
          </button>
          <button>
            <p>すこし変わり種</p>
          </button>
        </div>
        <div>
          <button>
            <p>START</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Roulette;