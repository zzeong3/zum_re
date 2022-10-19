import { Link } from "react-scroll"

export default function Week() {

     const boxOpen = e => {
        e.currentTarget.parentElement.classList.toggle('open');
      };
 
    return (
        <>
            <section className='sec_week'>
                <div className="state_week">
                    <h2>이번주 꼭 확인하세요!</h2>
                    <ol className="tab_week">
                        <li>
                            <Link to="Mon" spy={true} smooth={true} offset={-142} duration={500}>
                                <strong>
                                    월<span class="num">16</span>
                                </strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="Tue" spy={true} smooth={true} offset={-142} duration={500}>
                                <strong>
                                    화<span className="num">17</span>
                                </strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="Wed" spy={true} smooth={true} offset={-142} duration={500}>
                                <strong>
                                    수<span className="num">18</span>
                                </strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="Thur" spy={true} smooth={true} offset={-142} duration={500}>
                                <strong>
                                    목<span className="num">19</span>
                                </strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="Fri" spy={true} smooth={true} offset={-142} duration={500}>
                                <strong>
                                    금<span className="num">20</span>
                                </strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="Sat" spy={true} smooth={true} offset={-142} duration={500} >
                                <strong>
                                    토<span className="num">21</span>
                                </strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="Sun" spy={true} smooth={true} offset={-142} duration={500}>
                                <strong>
                                    일<span className="num">22</span>
                                </strong>
                            </Link>
                        </li>
                    </ol>
                </div>

                <ol className="list_week">
                    <li id="Mon">
                        <Link to="Mon" spy={true} smooth={true} offset={-142} duration={500} className="tit_date">
                            월 5.16
                        </Link>  
                        <div className="box_week open">
                            <div className="area_tit">
                                <div className="area_label">
                                    <em className="ipo">IPO</em>
                                    <em className="listed">상장예정</em>
                                </div>
                                <strong className="tit_week">
                                    <span className="tit">LG 유플러스</span>
                                    <span className="txt">KOSDAQ</span>
                                </strong>
                                <dl className="offering">
                                    <dt>공모가</dt>
                                    <dd>1,234,000</dd>
                                </dl>
                            </div>
                            <div className="area_cont">
                                <ul className="list_cont">
                                    <li>
                                        <strong className="tit">주관사</strong>
                                        <span className="cont">미래에셋증권</span>
                                    </li>
                                    <li>
                                        <strong className="tit">개인청약</strong>
                                        <span className="cont">22. 3. 14 - 22. 3. 15</span>
                                    </li>
                                    <li>
                                        <strong className="tit">발표일</strong>
                                        <span className="cont">22.03.14</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn_detail" onClick={boxOpen}><span class="hidden">자세히 보기</span></button>
                        </div>
                        <div className="box_week open">
                            <div className="area_tit">
                                <div className="area_label">
                                    <em className="performanc">실적</em>
                                </div>
                                <strong className="tit_week">
                                    <span className="tit">롯데제과</span>
                                    <span className="txt">KOSDAQ</span>
                                </strong>
                                <div className="per up">
                                    <span className="price">33,350</span>
                                    <span className="point">+23.7%</span>
                                </div>
                            </div>
                            <div className="area_cont">
                                <ul className="list_cont">
                                    <li>
                                        <strong className="tit">예상 주당순이익</strong>
                                        <span className="cont">742억</span>
                                    </li>
                                    <li>
                                        <strong className="tit">예상 매출</strong>
                                        <span className="cont">5,180억</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn_detail" onClick={boxOpen}><span class="hidden">자세히 보기</span></button>
                        </div>
                    </li>

                    <li id="Tue">
                        <Link to="Tue" spy={true} smooth={true} offset={-142} duration={500} className="tit_date">
                            화 5.17
                        </Link>  
                        <div className="box_week open">
                            <div className="area_tit">
                                <div className="area_label">
                                    <em className="performanc">실적</em>
                                </div>
                                <strong className="tit_week">
                                    <span className="tit">롯데제과</span>
                                    <span className="txt">KOSDAQ</span>
                                </strong>
                                <div className="per up">
                                    <span className="price">33,350</span>
                                    <span className="point">+23.7%</span>
                                </div>
                            </div>
                            <div className="area_cont">
                                <ul className="list_cont">
                                    <li>
                                        <strong className="tit">예상 주당순이익</strong>
                                        <span className="cont">742억</span>
                                    </li>
                                    <li>
                                        <strong className="tit">예상 매출</strong>
                                        <span className="cont">5,180억</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn_detail" onClick={boxOpen}><span class="hidden">자세히 보기</span></button>
                        </div>
                        <div className="box_week open">
                            <div className="area_tit">
                                <div className="area_label">
                                    <em className="event">이벤트</em>
                                </div>
                                <strong className="tit_week">
                                    <span className="tit">구글 연례 개발자 회의 및 픽셀워치 공개</span>
                                </strong>
                            </div>
                            <div className="area_cont">
                                <div className="event_cont">
                                    <strong className="tit">이벤트 내용</strong>
                                    <p className="desc">픽셀워치는 구글과 삼성이 공동 개발한 웨어러블용 운용체계(OS) '웨어OS'로 구동되며, 자체 개발한 시스템온칩(Soc)를 탑재할 것으로 알려짐</p>
                                </div>
                            </div>
                            <button type="button" className="btn_detail" onClick={boxOpen}><span class="hidden">자세히 보기</span></button>
                        </div>
                    </li>

                    <li id="Wed">
                        <Link to="Wed" spy={true} smooth={true} offset={-142} duration={500} className="tit_date">
                            수 5.18
                        </Link>  
                        <div className="box_week open">
                            <div className="area_tit">
                                <div className="area_label">
                                    <em className="ipo">IPO</em>
                                    <em className="publicoffering">공모청약</em>
                                </div>
                                <strong className="tit_week">
                                    <span className="tit">LG 에너지 솔루션</span>
                                    <span className="txt">KOSDAQ</span>
                                </strong>
                                <dl className="offering">
                                    <dt>공모가</dt>
                                    <dd>1,234,000</dd>
                                </dl>
                            </div>
                            <div className="area_cont">
                                <ul className="list_cont">
                                    <li>
                                        <strong className="tit">주관사</strong>
                                        <span className="cont">신한금융투자</span>
                                    </li>
                                    <li>
                                        <strong className="tit">개인청약</strong>
                                        <span className="cont">22. 3. 14 - 22. 3. 15</span>
                                    </li>
                                    <li>
                                        <strong className="tit">발표일</strong>
                                        <span className="cont">22.03.14</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn_detail" onClick={boxOpen}><span class="hidden">자세히 보기</span></button>
                        </div>
                    </li>

                    <li id="Thur">
                        <Link to="Thur" spy={true} smooth={true} offset={-142} duration={500} className="tit_date">
                            목 5.19
                        </Link>  
                        <div className="box_week open">
                            <div className="area_tit">
                                <div className="area_label">
                                    <em className="performanc">실적</em>
                                </div>
                                <strong className="tit_week">
                                    <span className="tit">스튜디오 드래곤</span>
                                    <span className="txt">KOSDAQ</span>
                                </strong>
                                <div className="per down">
                                    <span className="price">33,350</span>
                                    <span className="point">-23.7%</span>
                                </div>
                            </div>
                            <div className="area_cont">
                                <ul className="list_cont">
                                    <li>
                                        <strong className="tit">예상 주당순이익</strong>
                                        <span className="cont">742억</span>
                                    </li>
                                    <li>
                                        <strong className="tit">예상 매출</strong>
                                        <span className="cont">5,180억</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn_detail" onClick={boxOpen}><span class="hidden">자세히 보기</span></button>
                        </div>
                        <div className="box_week open">
                            <div className="area_tit">
                                <div className="area_label">
                                    <em className="ipo">IPO</em>
                                    <em className="publicoffering">공모청약</em>
                                </div>
                                <strong className="tit_week">
                                    <span className="tit">엘지 라이프 사이언스 테크놀로지 센터</span>
                                    <span className="txt">KOSDAQ</span>
                                </strong>
                                <dl className="offering">
                                    <dt>공모가</dt>
                                    <dd>1,234,000</dd>
                                </dl>
                            </div>
                            <div className="area_cont">
                                <ul className="list_cont">
                                    <li>
                                        <strong className="tit">주관사</strong>
                                        <span className="cont">신한금융투자</span>
                                    </li>
                                    <li>
                                        <strong className="tit">개인청약</strong>
                                        <span className="cont">22. 3. 14 - 22. 3. 15</span>
                                    </li>
                                    <li>
                                        <strong className="tit">발표일</strong>
                                        <span className="cont">22.03.14</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn_detail" onClick={boxOpen}><span class="hidden">자세히 보기</span></button>
                        </div>
                    </li>

                    <li id="Fri">
                        <Link to="Fri" spy={true} smooth={true} offset={-142} duration={500} className="tit_date">
                            금 5.20
                        </Link>  
                        <div className="box_week open">
                            <div className="area_tit">
                                <div className="area_label">
                                    <em className="event">이벤트</em>
                                </div>
                                <strong className="tit_week">
                                    <span className="tit">xEV 트렌드 코리아 개최</span>
                                </strong>
                            </div>
                            <div className="area_cont">
                                <div className="event_cont">
                                    <strong className="tit">이벤트 내용</strong>
                                    <p className="desc">인터배터리는 국내 유일의 배터리 전문 전시회로 올해 행사에는 국내외 270여개 배터리 산업 관련 기업들이 참가해 새로운 제품과 기술을 선보일 것으로 알려짐</p>
                                </div>
                            </div>
                            <button type="button" className="btn_detail" onClick={boxOpen}><span class="hidden">자세히 보기</span></button>
                        </div>
                        <div className="box_week open">
                            <div className="area_tit">
                                <div className="area_label">
                                    <em className="ipo">IPO</em>
                                    <em className="publicoffering">공모청약</em>
                                </div>
                                <strong className="tit_week">
                                    <span className="tit">엘지 라이프 사이언스 테크놀로지 센터</span>
                                    <span className="txt">KOSDAQ</span>
                                </strong>
                                <dl className="offering">
                                    <dt>공모가</dt>
                                    <dd>1,234,000</dd>
                                </dl>
                            </div>
                            <div className="area_cont">
                                <ul className="list_cont">
                                    <li>
                                        <strong className="tit">주관사</strong>
                                        <span className="cont">신한금융투자</span>
                                    </li>
                                    <li>
                                        <strong className="tit">개인청약</strong>
                                        <span className="cont">22. 3. 14 - 22. 3. 15</span>
                                    </li>
                                    <li>
                                        <strong className="tit">발표일</strong>
                                        <span className="cont">22.03.14</span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" className="btn_detail" onClick={boxOpen}><span class="hidden">자세히 보기</span></button>
                        </div>
                    </li>
                </ol>
            </section>

        </>
    );
}
