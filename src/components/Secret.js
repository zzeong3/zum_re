import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

export default function Secret() {
   
    return (
        <>
        <section className='sec_secret'>
            <h2>고수들의 투자 비법!</h2>
            <Link to='/' className="link_more">더보기</Link>
            <Swiper 
                slidesPerView={2}
                spaceBetween={8}
                className="swiper_secret"
            >
                <SwiperSlide>
                    <em className="label type1">국내증시동향</em>
                    <strong className="tit">글로벌 부동산 메가 트렌드, 단독주택(Single-Family Rental) 투자 글로벌 부동산 메가 트렌드, 단독주택(Single-Family Rental) 투자</strong>
                    <div className="info">
                        <span className="profile"><img src={process.env.PUBLIC_URL + '/img/img_profile1.png'} alt="프로필1"/></span>
                        <em className="name">뉴히어로뉴히어로</em>
                        <span className="txt">originaloriginaloriginaloriginal</span>
                    </div>
                    <Link to='/'><span className="hidden">상세페이지로 이동</span></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <em className="label type2">투자트랜드</em>
                    <strong className="tit">하락장에 강한 8% 고배당+월배당 ETF 'NUSI'</strong>
                    <div className="info">
                    <span className="profile"><img src={process.env.PUBLIC_URL + '/img/img_profile2.png'} alt="프로필2"/></span>
                        <em className="name">제이형코치</em>
                        <span className="txt">original</span>
                    </div>
                    <Link to='/'><span className="hidden">상세페이지로 이동</span></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <em className="label type3">해외증시동향</em>
                    <strong className="tit">인기 걸그룹 빌리, 메타버스 세상 '이프랜드'에 뜬다</strong>
                    <div className="info">
                    <span className="profile"><img src={process.env.PUBLIC_URL + '/img/img_profile3.png'} alt="프로필3"/></span>
                        <em className="name">부로마블</em>
                        <span className="txt">original</span>
                    </div>
                    <Link to='/'><span className="hidden">상세페이지로 이동</span></Link>
                </SwiperSlide>
            </Swiper>
        </section>

        </>
    );
}
