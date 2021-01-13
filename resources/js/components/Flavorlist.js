import React,{useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import Navbar from './Navbar';
import axios from 'axios';

const Flavorlist = () => {
  const [fruits,setFruits] = useState([]);
  const [spices,setSpices] = useState([]);
  const [cocktails,setCocktail] = useState([]);
  const [others,setOther] = useState([]);

  const getFlavornames = async() => {
    const params = new FormData();
    await axios.post('api/getFlavornames',params)
    .then(function(response){
      setFruits(response.data.params.fruits);
      setSpices(response.data.params.spices);
      setCocktail(response.data.params.cocktail);
      setOther(response.data.params.other);
      console.log(response.data.params.fruits);
    })
    .catch(function (error){
      console.log('getエラー');
      });
  }

  useEffect(() => {
    getFlavornames();
  }, []);

  console.log(fruits,'fruit');


  return(
    <>
      <Navbar />
      <div className="flavor_list_main">
        <div className="flavor_category_contents">
          <div className="flavor_category_content">
            <h2 className="category_title">Fruit</h2>
            <ul className="flavor_category_lists">
              {fruits.map((fruit,index) =>
                <Link to={`/Flavor/${fruit.id}`} key={index}>
                  <li>
                    <span>{fruit.name}</span>
                  </li>
                </Link>
              )}
            </ul>
          </div>

          <div className="flavor_category_content">
            <h2 className="category_title">Spice</h2>
            <ul className="flavor_category_lists">
              {spices.map((spice,index) =>
                <Link to={`/Flavor/${spice.id}`} key={index}>
                  <li>
                    <span>{spice.name}</span>
                  </li>
                </Link>
              )}
            </ul>
          </div>

          <div className="flavor_category_content">
            <h2 className="category_title">Cocktail</h2>
            <ul className="flavor_category_lists">
            {cocktails.map((cocktail,index) =>
              <Link to={`/Flavor/${cocktail.id}`} key={index}>
                <li>
                  <span>{cocktail.name}</span>
                </li>
              </Link>
            )}
            </ul>
          </div>

          <div className="flavor_category_content">
            <h2 className="category_title">Other</h2>
            <ul className="flavor_category_lists">
            {others.map((other,index) =>
              <Link to={`/Flavor/${other.id}`} key={index}>
                <li>
                  <span>{other.name}</span>
                </li>
              </Link>
            )}
            </ul>
          </div>
        
        </div>
      </div>


    </>
  )
}

export default Flavorlist;