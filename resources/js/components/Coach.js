import React from 'react';

const Coach = () => {
  return(
    <>
      {/* header */}
      <div className="contents_header_wrap">
        <header className="contents_header">
          <div className="header_contents_wrapper">
            <h1 className="contents_title">
              <a>
                <span>TARUSHIRU</span>
              </a>
            </h1>
            <button className="contents_headerbtn">=</button>
          </div>
        </header>
        {/* ここからactiveなMenubar */}
        {/* header_floatMenu_activeにdisplay:none */}
        <div className="header_floatMenu_active header_floatMenu_usual">
          <ul className="header_floatMenu_wraper">
            <div>
              <li>
                <a>マイページ</a>
              </li>
              <li>
                <a>登録情報の変更</a>
              </li>
              <li>
                <a>ログアウト</a>
              </li>
            </div>
            <li>
              <div></div>
            </li>
            <li>
              <a>運営会社</a>
            </li>
            <li>
              <a>利用規約</a>
            </li>
            <li>
              <a>プライバシーポリシー</a>
            </li>
            <li>
              <a>お問い合わせ</a>
            </li>
          </ul>
        </div>
        {/* ここからMain */}
        <main>
          <div className="style_wrap_intro">
            <div className="style_topImage">
              <img src="images/design/electnic.svg"></img>
            </div>
            <h2 className="style_title">コーチを選ぶ</h2>
            <div className="style_description">アンケートをもとに<span>あなたにおすすめの順に</span>コーチを全員表示しています。希望条件が明確な場合は、絞り込んでみましょう。</div>
          </div>
          <div className="style_wrap_search">
            <div className="search_btn_wrap">
              <button className="search_btn_how">
                <img/>
                <span>コーチの選び方</span>
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
                    <img src="images/coaches/S__6979644.jpg" alt="" />
                    <div className="style_img_textwrap"></div>
                    <div className="style_img_text">
                      <div className="style_text_Kana">たつみりょう</div>
                      <div className="style_text_Name">辰巳涼</div>
                      <div className="style_text_data">
                        33歳/東京都/在住
                      </div>
                    </div>
                  </div>
                  <div className="style_data">
                    <div className="style_data_rank">プロフェッショナル親</div>
                    <div className="style_data_pricepone">
                      <div className="style_data_price_title">対面</div>
                      <div className="style_data_price_main">
                        <span>$3000</span>
                        <span>/60分</span>
                      </div>
                    </div>
                    <div className="style_data_satisfaiwrap">
                      <div className="style_data_satisfai_content">
                        <div>★</div>
                        <div>★</div>
                        <div>★</div>
                        <div>★</div>
                        <div>★</div>
                        <span className="style_data_satisfaiScore"></span>
                        <span className="style_data_satisfaiCount">
                          (32件)
                        </span>
                      </div>
                    </div>
                    <div className="style_data_price">
                      <div className="style_data_priceMain">
                        <span>$3000/</span>
                        <span>60分</span>
                      </div>
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
          <h3 className="style_subTitle">コート選びにお困りですか</h3>
          <div className="style_Linebtn_wrap">
            <div className="style_line_content">
              <a className="style_line_btn">
                <img src="images/design/line_logo.png"></img>
                <span>コーチに提案を依頼する</span>
              </a>
              <div className="style_logo_text">LINEアプリを開きます</div>
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


export default Coach;