import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import IPhone from '../iPhone/iPhone';


const Pims = () => {

    return (
        <Container>
            <LeftSide>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    direction={"vertical"}
                    mousewheel={true}
                    speed={700}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    modules={[Mousewheel, Pagination]}
                    className="slider-style"
                // autoHeight={true}
                >
                    <SwiperSlide className="swiper-slider">
                        <h1>Мы разработали приложение доставки еды для популярного кафе из Москвы. Это привело к увеличению выручки на 20% за счет прямых продаж клиентам.</h1>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider">
                        <h1>Проблема:</h1>
                        <SubText className="tertiaryButtonText">PIMS открыли свое первое заведение в центре города и столкнулись с длинными очередями из-за высокого спроса. После открытия еще 5 локаций и подключения к Яндекс.Еде они также начали получать 1000 онлайн-заказов на доставку ежемесячно. Они хотели решить проблему длинных очередей, а также сэкономить 30%-ную комиссию, которую они платили Яндексу за свою службу доставки.</SubText>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider">
                        <h1>Цель:</h1>
                        <SubText className="tertiaryButtonText">Создать решение для предварительного заказа еды на вынос, чтобы не стоять в очереди, а также прямую службу доставки от PIMS.</SubText>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slider">
                        <h1>Решение: </h1>
                        <SubText className="tertiaryButtonText">Простое в использовании приложение с возможностью заказа на вынос или доставки.</SubText>
                    </SwiperSlide>
                </Swiper>
            </LeftSide>
            <RightSide>
                <IPhone></IPhone>
            </RightSide>
        </Container>
    )

}

export default Pims;


const Container = styled.div`
    width: 70%;
    max-width: 1000px;
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LeftSide = styled.div`
    width: 50%;
    height: 100%;
`

const RightSide = styled.div`
    /* position: fixed;
    top: 90px;
    right: 23%; */
    width: fit-content;
    height: 100%;
`

const SubText = styled.div`
    margin: 30px 0;
    line-height: 19.36px;
`

