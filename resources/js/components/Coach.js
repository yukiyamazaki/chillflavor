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
        <main>
          <div className="style_wrap_intro">
            <div className="style_topImage">
              <img src=""></img>
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
                      <img alt="山崎" />
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

                    </div>
                     
                  </a>
                </div>

              </li>

            </ul>

        </main>

      </div>

      {/* main */}
      


      {/* footer */}
    </>
  );
}


export default Coach;