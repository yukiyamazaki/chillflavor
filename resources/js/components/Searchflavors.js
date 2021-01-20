import React from 'react';
import {Link} from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Navbar from './Navbar';

const Searchflavors = () => {
  const [modal,setModal] = useState(false);
  //DBから取得したflavor情報
  const [flavors,setFlavors] = useState([]);
  //キーワード検索
  const [keyword,setKeyword] = useState("");
   //表示件数の制限
  const [limit,setLimit] = useState(5);
  //表示するリスト
  const [lists,setList] = useState([]);
  //もっとみるボタン
  const [moreBtn,setMoreBtn] = useState(true);
  //選び方のモーダルを表示するボタン
  const [modalhow,setModalhow] = useState(false);
  //絞り込みエリアのcheckbox
  const inputtastes = useRef([]);
  const inputypes = useRef([]);
  const inputcate = useRef([]);
  //絞り込みカウント
  const [countnow,setCountnow] = useState(0);
  //全件分のID
  const [allflavors,setAllflavors] = useState([]);
  const [allflavorid,setAllflavorid] = useState([]);
  //DBからから取得したflavoerの件数
  const flavorCount = flavors.length;

  //検索inputの定義
  //keyword input
  const handleChange = (e) =>{
    // setKeyword(e.target.value);
    setKeyword(e.target.value);
  }

  //選び方のモーダル開閉
  const howmodalCkick = (e) => {
    e.preventDefault();
    if(!modalhow){
      setModalhow(true);
    }else{
      setModalhow(false);
    }
  }
  
  // チェックボックス
  //taste
  const changeTaste = (e) =>{
    if(inputtastes.current.includes(e.target.value)){
      //OFF
      inputtastes.current= inputtastes.current.filter(item => item !== e.target.value);
      countDatabase();
    }else{
      // ON
      inputtastes.current = [...inputtastes.current, e.target.value];
      countDatabase();
    }
  }
  
  //type
  const changeType = (e) =>{
    if(inputypes.current.includes(e.target.value)){
      //OFF
      inputypes.current= inputypes.current.filter(item => item !== e.target.value);
      countDatabase();
      
    }else{
      // ON
      inputypes.current = [...inputypes.current, e.target.value];
      countDatabase();
    }
  };
  
  //category
  const changeCategory = (e) =>{
    if(inputcate.current.includes(e.target.value)){
      //OFF
      inputcate.current= inputcate.current.filter(item => item !== e.target.value);
      countDatabase();
    }else{
      inputcate.current = [...inputcate.current, e.target.value];
      countDatabase();
    }
  };

  //count取得エリア
    const countDatabase = async() =>{
      let changeParams = {
        allflavorid:allflavorid,
        tastes: inputtastes.current,
        types:inputypes.current,
        categories:inputcate.current,
       }
      //test部分
      const params = new FormData;
      _.forEach(changeParams, (value, key) => {
        if (Array.isArray(value)) {
          _.forEach(value, (v, _) => {
            params.append(key + '[]', v)
          })
        } else {
          params.append(key, value)
        }
      });
      await axios.post('api/countFlavors',params)
      .then((response)=>{
        setCountnow(response.data.countflavors.length);
      })
      .catch((error)=>{
        alert('フレイバーが見つかりませんでした');
        setCountnow();
        console.log(error.data,'formdataエラー');
      });
    }

  //do the modal ON
  const handdleModal = e =>{
    e.preventDefault();
    if(!modal){
      setModal(true);
    }
  }

   //do the modal OFF
   const isModal_off = e => {
    e.preventDefault();
    if(modal){
      setModal(false);
    }
  }
 
  //表示件数の制限する変数
  const limitFlavors = flavors.slice(0,limit);

  //絞り込みをClick
  const narrowFlavor = async(e) =>{
    e.preventDefault();
    setLimit(5);
    //formに入力された値をもとに検索結果の取得
    if(!confirm('検索します。よろしいですか？')) {
      return;
    }
    let sendParams = {
      allflavorid:allflavorid,
      tastes: inputtastes.current,
      types:inputypes.current,
      categories:inputcate.current,
    }
    if(keyword){
      //キーワード検索のinputに値があれば、checkboxは無視して検索
      const params = new FormData();
      params.append("search_keyword",keyword);
      await axios.post('api/Searchflavors',params)
      .then(function(response){
        // 成功した時
        setFlavors(response.data.flavors);
      })
      .catch(function(error){
        // 失敗したとき
        console.log('Keywordエラー');
      });
      //初期化
      inputtastes.current = [];
      inputypes.current = [];
      inputcate.current = [];
      //limit初期値
      setLimit(5);
      //input初期化
      setKeyword("");
      //modalを閉じる
      setModal(false);
      //countnow初期化
      setCountnow([0]);
    }else{
      const params = new FormData;
      _.forEach(sendParams, (value, key) => {
        if (Array.isArray(value)) {
          _.forEach(value, (v, _) => {
            params.append(key + '[]', v)
          })
        } else {
          params.append(key, value)
        }
      })
     
      await axios.post('api/checkedFlavors',params)
      .then((response)=>{
        if(!response.data.flavors.length == 0){
          setFlavors(response.data.flavors);
        }else{
          setFlavors([]);
          alert('フレイバーが見つかりませんでした');
        };
      })
      .catch((error)=>{
        alert('フレイバーが見つかりませんでした');
        setFlavors([]);
      });
      
      //初期化
      inputtastes.current = [];
      inputypes.current = [];
      inputcate.current = [];
      //input初期化
      setKeyword("");
      //limit初期値
      setLimit(5);
      //modalを閉じる
      setModal(false);
      //countnow初期化
      setCountnow([0]);
    }
  }

  //もっとみるで、取得件数を＋５
  const isMoreflavors = e => {
    e.preventDefault();
    setLimit(limit + 5);
  }

   //flavorsフィールドの初期値は全件表示
  const getFlavors = async() =>{
    const params = new FormData();
    await axios.post('api/flavors',params)
    .then(function(response){
      // 成功した時
      setFlavors(response.data.flavors);
      setAllflavors(response.data.flavors);
    })
    .catch(function(error){
      // 失敗したとき
      console.log('Fitstエラー');
    });
  }

  //以下useEffect
  //forEach抜けた後でないと、値を更新しない。
  useEffect(() => {
    let addflavorids=[];
    allflavors.forEach(flavor =>{
      addflavorids.push(flavor.id);
    })
    setAllflavorid(addflavorids);//ここで更新されないのが問題
  },[allflavors]);

 //表示件数の制限
  useEffect(() => {
    setList(limitFlavors);
  },[flavors,limit])

  //取得したflavorsが全て表示された場合は、もっとみるを非表示
  useEffect(() => {
    if(limit>=flavorCount && flavorCount){
      setMoreBtn(false);
    }else{
      setMoreBtn(true);
    }
  },[limit,flavorCount]);

  //初期状態のflavor表示
  useEffect(() =>{
    if(!flavorCount){
      getFlavors();
    }
  },[])
  
  return(
    <>
      {/* header */}
      <div className="contents_header_wrap">
        {/* This is props TEST */}
       <Navbar/>
        {/* ここからMain */}
        <main >
          <div className="style_wrap_intro">
            <div className="style_topImage">
              <img src="images/design/electnic.svg"></img>
            </div>
            <h2 className="style_title">フレイバーを選ぶ</h2>
            <div className="style_description">あなたのご希望をもとに<span>あなたにおすすめの順に</span>フレイバーを全て表示しています。希望条件が明確な場合は、絞り込んでみましょう。</div>
          </div>
          <div className="style_wrap_search">
            <div className="search_btn_wrap">
              <button 
                className="search_btn_how" onClick={howmodalCkick}
              >
                <img/>
                <span>フレイバの選び方</span>
              </button>
              <button 
                className="search_btn_filter"
                onClick={handdleModal} 
              >
                <img src="images/design/filter.svg"/>
                <span>絞り込み</span>
              </button>
            </div>
            <div className="style_count">
              該当：{flavorCount}件
            </div>
          </div>

          {/* シーシャの探し方  modal */}
          <div className={modalhow? "onmodal_howchoice_wraper style_modal_show":"onmodal_howchoice_wraper"}
          >
            <div className="onmodal_howchoice_bg"></div>
            <div className="onmadal_howchoice_main slick-initialized">
              <div 
                className="onmadal_howchoice_close"
                onClick={howmodalCkick}
              ></div>
              <div className="onmadal_howchoice_slider">
                <button className="modal_slick_next slick_disable"></button>
                <div className="sllicc_list">
                  <div className="slick_track">
                    <div className="slick-slide slick-active slick-current">
                      <div>
                        <div className="slick_content">
                          <div className="img">開発中</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="modal_slick_prev"></button>
              </div>

            </div>
            

          </div>

          {/* ここからFlavorの検索結果を表示 */}
          <ul className="contents_style_ul">
          {lists.map((flavor) =>
            <Link to={`/Flavor/${flavor.id}`} key={flavor.id}>
              <li>
                <div className="style_wraper_content">
                  <div className="content_main">
                    <div className="style_img">
                      <img src={`images/flavors/${flavor.image_id}`} alt="" />
                    </div>
                    <div className="style_flavor_text">
                      <div className="style_flavor_top">
                        <div className="style_flavor_name">{flavor.name}</div>
                        <div className="style_flavor_contents">
                          <div className="style_flavor_taste">{flavor.taste}</div>
                          <div className="style_flavor_category">{flavor.category}</div>
                        </div>
                      </div>
                      <div className="style_flavor_discription">
                        {flavor.feature_intro}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
            )}            
          </ul>

          <div 
            className={moreBtn ? "style_wrap_more ":"style_wrap_more active_limit"}
          >
           <div>
              <p>--end--</p>
            </div>
            <button
              // {modal ? "" : "content_limit"}
              onClick={isMoreflavors}
            >
              もっとみる
              <img src="images/design/check_p.svg"/>
            </button>
          </div>

            {/* 絞り込みbuttonをクリック時に表示 */}
            <div 
              className={modal ? "style_modalMenu_wrapper style_able_btn" : "style_modalMenu_wrapper style_modal_disable"}
            >
            <div className="style_modalMenu_bg"></div>
            <div className="style_modal_content">
            {/* formエリア */}
              <form 
                id="narrowForm" 
                className="style_modal_mainwapper"
                method="get"
              >
                <div className="style_main_choices">
                  <div className="style_main_inputkeyword">キーワードで絞り込み</div>
                  <div className="style_inputkeyword_wrap">
                    <input 
                      type="text" 
                      name="name"
                      className="style_inputkeyword_text"
                      value={keyword}
                      onChange={handleChange}
                    />
                  </div>
                  {/* CheckBox（teste） */}
                  <div className="style_main_inputTitle">テイスト</div>
                  <ul className="style_main_list">
                    <li className="style_main_listItem">
                      <input 
                        className="style_checkbox_teste" 
                        type="checkbox"
                        id="taste_sweet"
                        value="sweet"
                        checked={inputtastes.current.includes('sweet')}
                        onChange={changeTaste}
                      />
                      <label 
                        className="style_label_teste" 
                        htmlFor="taste_sweet"
                      >
                        <div className="taest_label_name">
                            あまめ
                        </div>
                      </label>
                    </li>
                    <li className="style_main_listItem">
                      <input 
                        className="style_checkbox_teste" 
                        type="checkbox"
                        id="taste_fefresh"
                        value="flesh"
                        checked={inputtastes.current.includes('flesh')}
                        onChange={changeTaste}
                      />
                      <label 
                        className="style_label_teste" htmlFor="taste_fefresh"
                      >
                        <div className="taest_label_name">
                            さっぱり
                        </div>
                      </label>
                    </li>
                    <li className="style_main_listItem">
                      <input 
                        className="style_checkbox_teste" 
                        type="checkbox"
                        id="taste_hot"
                        value="hot"
                        checked={inputtastes.current.includes('hot')}
                        onChange={changeTaste}
                        />
                      <label 
                        className="style_label_teste" 
                        htmlFor="taste_hot"
                      >
                        <div className="taest_label_name">
                            からめ
                        </div>
                      </label>
                    </li>
                  </ul>

                  {/* CheckBox（type） */}
                  <div className="style_main_inputTitle">タイプ</div>
                  <ul className="style_main_list__type">
                    <li className="style_main_listItem__type">
                      <input 
                        className="style_checkbox_type" 
                        type="checkbox" 
                        id="type_main"
                        value="main"
                        checked={inputypes.current.includes('main')}
                        onChange={changeType}
                        />
                      <label 
                        className="style_label_type" 
                        htmlFor="type_main"
                      >
                        <div className="taest_label_name">
                          王道
                        </div>
                      </label>
                    </li>
                    <li className="style_main_listItem__type">
                      <input 
                        className="style_checkbox_type" 
                        type="checkbox" 
                        id="type_weird"
                        value="wired"
                        checked={inputypes.current.includes('wired')}
                        onChange={changeType}
                        />
                      <label 
                        className="style_label_type" 
                        htmlFor="type_weird"
                      >
                        <div className="taest_label_name">
                          変わり種
                        </div>
                      </label>
                    </li>
                  </ul>

                  {/* CheckBox（category） */}
                  <div className="style_main_inputTitle">カテゴリ</div>
                  {/* フルーツ系 */}
                  <div className="style_main_input__category">
                    <ul className="style_category_wrap">
                      <li className="style_cate_listItem">
                        <input 
                          type="checkbox" 
                          id="category_fruit" className="style_checkbox_category"
                          value="fruit"
                          checked={inputcate.current.includes('fruit')}
                          onChange={changeCategory}
                          />
                        <label 
                          htmlFor="category_fruit" className="style_label_category"
                        >フルーツ系</label>
                      </li>
                      {/* カクテル */}
                      <li className="style_cate_listItem">
                        <input 
                          type="checkbox" 
                          id="category_drink" className="style_checkbox_category"
                          value="drink"
                          checked={inputcate.current.includes('drink')}
                          onChange={changeCategory}
                        />
                        <label 
                          htmlFor="category_drink" className="style_label_category"
                        >カクテル系</label>
                      </li>
                      {/* スパイス系 */}
                      <li className="style_cate_listItem">
                        <input 
                          type="checkbox" 
                          id="category_spices" className="style_checkbox_category"
                          value="spices"
                          checked={inputcate.current.includes('spices')}
                          onChange={changeCategory}
                        />
                        <label 
                          htmlFor="category_spices" className="style_label_category"
                        >スパイス系</label>
                      </li>
                      {/* その他 */}
                      <li className="style_cate_listItem">
                        <input 
                          type="checkbox" 
                          id="category_other" className="style_checkbox_category"
                          value="other"
                          checked={inputcate.current.includes('other')}
                          onChange={changeCategory}
                        />
                        <label 
                          htmlFor="category_other" className="style_label_category"
                        >その他</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="style_main_modalFooter">
                  <div className="style_modal_result">
                    該当：<span>{countnow}</span>件
                  </div>
                  <button 
                    className="style_modal_btn"
                    onClick={narrowFlavor}
                  >この条件で絞り込む</button>
                </div>
              </form>
              {/* ここまでformエリア */}
              <div className="style_modal_headerwapper">
                フレイバーを絞り込む
                <button       
                  className=
                  "style_modal_header_close"
                  onClick={isModal_off}
                >
                  <img src="images/design/batumark.svg"></img>
                </button>
              </div>
            </div>
          </div>
        </main>
       
       {/* footer */}
        <footer className="footer_contents_wraper">
          <div className="footer_wave">
            <img />
          </div>
          <div className="footer_contents_main">
            <div className="footer_contents_logo">CHILL FLAVOR</div>
            <small>CHILL FLAVOR inc.</small>
          </div>
        </footer>

      </div>

      {/* main */}
      


      {/* footer */}
    </>
  );
}


export default Searchflavors;