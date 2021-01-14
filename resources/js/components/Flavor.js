import React, { useState, useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const Flavor = () =>  {
  const [detailflavor,setDetailFlavor] = useState([]);
  //パラメーターを取得
  const {id} = useParams();
  const idNum = parseInt(id);
  const [sweet, setSweet] = useState(false);
  const [flash, setFlash] = useState(false);
  const [hot, setHot] = useState(false);
  const [main, setMain] = useState(false);
  const [wired, setWired] = useState(false);

  ////Home画面表示を初回かそれ以降か判断
  const to = {
    pathname:'/',
    state:'already'
  }
  
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

  useEffect(() => {
   //tableのtaste表記変更
   if(detailflavor.taste == "sweet"){
    setSweet(true);
  }else if(detailflavor.taste == "flesh"){
    setFlash(true);
  }else if(detailflavor.taste == "hot"){
    setHot(true);
  }

  //tableのtype表記変更
  if(detailflavor.select_type == "main"){
    setMain(true);
  }else if(detailflavor.select_type == "wired"){
    setWired(true);
  } 
  },[detailflavor]);

  console.log(detailflavor);




  return(
    <>
      <Navbar />
      <div className="flavor_main_wrapper">
        <ol className="link_list">
          <li>
            <Link to={to}>
              <span>TOP</span>
            </Link>
          </li> 
          <li>
            <Link to="/searchflavors">
              <span>THE FLAVOR SEARCH</span>
            </Link>
          </li> 
          <li>
            <Link to="/Flavorlist">
              <span>{detailflavor.category}</span>
            </Link>
          </li> 
        </ol>
        <div className="flavor_main_content">
          <div className="content_flavor_imgwapper">
            <div className="content_flavor_img">
              <img src={`images/flavors/${detailflavor.image_id}`}/>
            </div>
          </div>

          <div className="content_detail_wapper">
            <div className="content_detail_box">
              <div className="content_detail_name">
                <span>{detailflavor.englishName}</span>
              </div>
              
              <div className="content_detail_description">
                <h3><span>{detailflavor.name}</span></h3>
                <p>{detailflavor.feature_intro}</p>
              </div>
              
              <div className="content_chart content_chart_active">
                <table>
                  <tbody>
                    <tr className="content_chart_taste">
                        <th>TASTE</th>
                      <td>
                        <div className={sweet?  "chart_taste_active": ""}
                        >甘め</div>
                        <div 
                          className={flash? "chart_taste_active" : ""}
                        >さっぱりめ</div>
                        <div 
                          className={hot? "chart_taste_active" :"" }
                          >からめ</div>
                      </td>
                    </tr>
                    <tr className="content_chart_type">
                        <th>TYPE</th>
                      <td>
                        <div 
                          className={main?  "chart_type_active": ""}
                        >王道</div>
                        <div 
                          className={wired? "chart_type_active" : ""
                        }>変わり種</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="recommend_flavor">
                <h3 className="recommend_title">おすすめ組み合わせ</h3>
                  <ul className="recommend_flavor_box">
                    <li>
                      <Link to="/">
                        <span>name</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>name2</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>name3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>name4</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>name5</span>
                      </Link>
                    </li>
                  </ul>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Flavor;

