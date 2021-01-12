import React,{useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import Navbar from './Navbar';
import axios from 'axios';

const Flavorlist = () => {
  const [alfakhels,setAlfakhel] = useState([]);
  const [fumaris,setFumari] = useState([]);
  const [socialsmokes,setSocialsmoke] = useState([]);
  const [declouds,setDecloud] = useState([]);
  const [trifectas,setTrifecta] = useState([]);
  const [butas,setButa] = useState([]);
  const [goldenlavas,setGoldenlava] = useState([]);

  const getBrand = async() => {
    const params = new FormData();
    await axios.post('api/getBrand',params)
    .then(function(response){
      setAlfakhel(response.data.params.alfakhels);
      setFumari(response.data.params.fumaris);
      setSocialsmoke(response.data.params.socialsmokes);
      setDecloud(response.data.params.declouds);
      setTrifecta(response.data.params.trifectas);
      setButa(response.data.params.butas);
      setGoldenlava(response.data.params.goldenlavas);
      console.log(response.data.params.alfakhels);
    })
    .catch(function (error){
      console.log('getエラー');
      });
  }

  useEffect(() => {
    getBrand();
  }, []);


  return(
    <>
      <Navbar />
      <div className="brand_list_main">
        <div className="flavor_category_contents">
          <div className="flavor_category_content">
            <h2 className="brand_title">Alfakhe</h2>
            <ul className="flavor_brand_lists">
              {alfakhels.map((alfakhel,index) =>
                <Link to={`/Flavor/${alfakhel.id}`} key={index}>
                  <li>
                    <span>{alfakhel.name}</span>
                  </li>
                </Link>
              )}
            </ul>
          </div>

          <div className="flavor_category_content">
            <h2 className="brand_title">Fumari</h2>
            <ul className="flavor_brand_lists">
              {fumaris.map((fumari,index) =>
                <Link to={`/Flavor/${fumari.id}`} key={index}>
                  <li>
                    <span>{fumari.name}</span>
                  </li>
                </Link>
              )}
            </ul>
          </div>

          <div className="flavor_category_content">
            <h2 className="brand_title">Social smokes</h2>
            <ul className="flavor_brand_lists">
            {socialsmokes.map((socialsmoke,index) =>
              <Link to={`/Flavor/${socialsmoke.id}`} key={index}>
                <li>
                  <span>{socialsmoke.name}</span>
                </li>
              </Link>
            )}
            </ul>
          </div>

          <div className="flavor_category_content">
            <h2 className="brand_title">De cloud</h2>
            <ul className="flavor_brand_lists">
            {declouds.map((decloud,index) =>
              <Link to={`/Flavor/${decloud.id}`} key={index}>
                <li>
                  <span>{decloud.name}</span>
                </li>
              </Link>
            )}
            </ul>
          </div>
          <div className="flavor_category_content">
            <h2 className="brand_title">Trifecta</h2>
            <ul className="flavor_brand_lists">
            {trifectas.map((trifecta,index) =>
              <Link to={`/Flavor/${trifecta.id}`} key={index}>
                <li>
                  <span>{trifecta.name}</span>
                </li>
              </Link>
            )}
            </ul>
          </div>
          <div className="flavor_category_content">
            <h2 className="brand_title">Buta tabacco</h2>
            <ul className="flavor_brand_lists">
            {butas.map((buta,index) =>
              <Link to={`/Flavor/${buta.id}`} key={index}>
                <li>
                  <span>{buta.name}</span>
                </li>
              </Link>
            )}
            </ul>
          </div>
          <div className="flavor_category_content">
            <h2 className="brand_title">Golden lavalina</h2>
            <ul className="flavor_brand_lists">
            {goldenlavas.map((goldenlava,index) =>
              <Link to={`/Flavor/${goldenlava.id}`} key={index}>
                <li>
                  <span>{goldenlava.name}</span>
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