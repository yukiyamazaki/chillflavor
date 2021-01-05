import React from 'react';
import Navbar from './Navbar';

const Searchflavors = () => {
  return(
    <>
      {/* header */}
      <div className="contents_header_wrap">
       <Navbar />
        {/* ここからMain */}
        <main>
          <div className="style_wrap_intro">
            <div className="style_topImage">
              <img src="images/design/electnic.svg"></img>
            </div>
            <h2 className="style_title">フレイバーを選ぶ</h2>
            <div className="style_description">あなたのご希望をもとに<span>あなたにおすすめの順に</span>フレイバーを全て表示しています。希望条件が明確な場合は、絞り込んでみましょう。</div>
          </div>
          <div className="style_wrap_search">
            <div className="search_btn_wrap">
              <button className="search_btn_how">
                <img/>
                <span>フレイバの選び方</span>
              </button>
              <button className="search_btn_filter">
                <img/>
                <span>絞り込み</span>
              </button>
            </div>
            <div className="style_count">
              20人
            </div>
          </div>
          {/* ここからコーチの結果を表示 */}
          <ul className="contents_style_ul">
            <li>
              <div className="style_wraper_content">
                <a className="content_main">
                  <div className="style_img">
                    <img src="images/coaches/S__6979644.jpg" alt="" />
                  </div>
                  <div className="style_flavor_text">
                    <div className="style_flavor_name">レモン</div>
                    <div className="style_flavor_discription">
                      すっきりとした口当たりで・・・・
                    </div>
                  </div>
                    
                </a>
              </div>
            </li>
            <li>
              <div className="style_wraper_content">
                <a className="content_main">
                  <div className="style_img">
                    <img src="images/coaches/S__6979644.jpg" alt="" />
                  </div>
                  <div className="style_flavor_text">
                    <div className="style_flavor_name">レモン</div>
                    <div className="style_flavor_discription">
                      すっきりとした口当たりで・・・・
                    </div>
                  </div>
                    
                </a>
              </div>
            </li>
            <li>
              <div className="style_wraper_content">
                <a className="content_main">
                  <div className="style_img">
                    <img src="images/coaches/S__6979644.jpg" alt="" />
                  </div>
                  <div className="style_flavor_text">
                    <div className="style_flavor_name">レモン</div>
                    <div className="style_flavor_discription">
                      すっきりとした口当たりで・・・・
                    </div>
                  </div>
                    
                </a>
              </div>
            </li>

          </ul>
          <div className="style_wrap_more">
            <button>
              もっとコートをみる
              <img src="images/design/cheak_blue.svg"/>
            </button>
          </div>
          <h3 className="style_subTitle">フレイバー選びにお困りですか？</h3>

          {/* 絞り込みbuttonをクリック時に表示 */}
          <div className="style_modalMenu_wrapper">
            <div className="style_modalMenu_bg"></div>
            <div className="style_modal_content">
              <div className="style_modal_mainwapper">
                <div className="style_main_choices">
                  <div className="style_main_inputkeyword">キーワードで絞り込み</div>
                  <div className="style_inputkeyword_wrap">
                    <input type="text" className="style_inputkeyword_text"></input>
                  </div>
                  <div className="style_main_inputTitle">テイスト</div>
                  <ul className="style_main_list">
                    <li className="style_main_listItem">
                      <input className="style_checkbox_teste" type="checkbox"></input>
                      <label className="style_label_teste">
                        あまめ
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="style_main_modalFooter">
                  <div className="style_modal_result">
                    該当10つ
                  </div>
                  <button className="style_modal_btn">この条件で絞り込む</button>
                  
                </div>
              </div>
              <div className="style_modal_headerwapper">
                コーチを絞り込む
                <div className="style_modal_header_close">
                  <img src="images/design/batumark.svg"></img>
                </div>
              </div>
            </div>
          </div>

        </main>
       
        <footer className="footer_contents_wraper">
          <div className="footer_wave">
            <img />
          </div>
          <div className="footer_contents_main">
            <div className="footer_contents_logo">TARUSHIRU</div>
            <small>©TARUSHIRU inc.</small>
          </div>
        </footer>

      </div>

      {/* main */}
      


      {/* footer */}
    </>
  );
}


export default Searchflavors;