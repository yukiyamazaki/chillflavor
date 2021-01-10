import React, { useState, useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const Flavor = () =>  {
  const [detailflavor,setDetailFlavor] = useState([]);
  //パラメーターを取得
  const {id} = useParams();
  const idNum = parseInt(id);
  
  //Flavorの情報を取得
  const detailFavor = async() => {
    if(idNum){
      const params = new FormData();
      params.append('id',idNum);
      await axios.post('api/Flavor',params)
      .then(function(response){
        // 成功した時
        setDetailFlavor(response.data.flavor);
        
      })
      .catch(function(error){
        // 失敗したとき
        console.log('flavor data取得エラー');
        return;
      });
    }else{
      console.log('このidのフレイバー情報がありません。')
    }
  }
 
  useEffect(() => {
    detailFavor();
  },[])
  console.log(detailflavor);


  return(
    <>
      <Navbar />
      <div className="flavor_main_wrapper">
        <div className="flavor_main_content">
          <div className="content_flavor_name">{detailflavor.name}</div>
          <div className="content_flavor_img">
            <img src={`images/flavors/${detailflavor.image_id}`}/>
          </div>

          <div className="content_flavor_detail">
            <div className="content_flavor_feature">
              <h2>特徴</h2>
              <p>{detailflavor.feature_intro}</p>
            </div>
            <div className="content_flavor_tags">
              <h2>タグ</h2>
              <div className="content_flavor_tag">{detailflavor.taste}</div>
              <div className="content_flavor_tag">{detailflavor.category}</div>
              <div className="content_flavor_tag">{detailflavor.select_type}</div>
              <div className="content_flavor_tag">b</div>
              <div className="content_flavor_tag">c</div>
            </div>
            <div className="content_flavor_combination">
              <h2>オススメの組み合わせ</h2>
              <ul>
                <li>
                  <Link to="/flavor">
                    <span>▶かぼす</span>
                  </Link>
                </li>
                <li>
                  <Link to="/flavor">
                    <span>▶ダブルアップル</span>
                  </Link>
                </li>
                <li>
                  <Link to="/flavor">
                    <span>▶スイカ</span>
                  </Link>
                </li>
              </ul>           
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Flavor;

