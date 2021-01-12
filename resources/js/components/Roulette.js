import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const Roulette = () => {
  return(
    <>
      <Navbar />
      <div className="roulette_wrapper">
        <h2 className="roulette_titile">フレイバールーレット</h2>
        <ul className="select_feeling">
          <li className="style_roulette_testeItme">
            <input className="style_roulette_teste" id="roulette-sweet" type="radio" name="taste"></input>
            <label className="style_roulette_label" htmlFor="roulette-sweet">
              <div className="style_roulette_label_name" name="taste">あまい</div>
            </label>
          </li>
          <li className="style_roulette_testeItme">
            <input className="style_roulette_teste" id="roulette-flash" type="radio" name="taste"></input>
            <label className="style_roulette_label" htmlFor="roulette-flash">
              <div className="style_roulette_label_name">さっぱり</div>
            </label>
          </li>
          <li className="style_roulette_testeItme">
            <input className="style_roulette_teste" id="roulette-hot" type="radio" name="taste"></input>
            <label className="style_roulette_label" htmlFor="roulette-hot">
              <div className="style_roulette_label_name">からめ</div>
            </label>
          </li>
        </ul>

        <ul className="select_feeling">
          <li className="style_roulette_testeItme">
            <input className="style_roulette_teste" id="roulette-main" type="radio" name="type"></input>
            <label className="style_roulette_label" htmlFor="roulette-main" >
              <div className="style_roulette_label_name">王道</div>
            </label>
          </li>
          <li className="style_roulette_testeItme">
            <input className="style_roulette_teste" id="roulette-weard" type="radio" name="type"></input>
            <label className="style_roulette_label" htmlFor="roulette-weard">
              <div className="style_roulette_label_name">変わり種</div>
            </label>
          </li>
        </ul>

        <div className="style_roulette_start">
          <button className="style_roulette_start_btn">START</button>
        </div>
      </div>
    </>
  )
}

export default Roulette;