import React, { useState } from 'react';
import { styled } from 'styled-components'
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import Loading from 'react-loading';

interface SliderProps {
  images: string[];
}

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  box-sizing:border-box;
  border-radius:15px;
  z-index:-1;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwipedLeft:(eventData) =>handleSwipeLeft(),
    onSwipedRight:(eventData) =>handleSwipeRight()
  });
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSwipeLeft = () => {
    handlePrev();

  };

  const handleSwipeRight = () => {
    handleNext();
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Container>
      <div className="jsx-2513715661 mobile-slider-inner-container">
  <img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__mobile-slider__dark__time.svg" alt="" className="jsx-2513715661 mobile-slidr__time-img"/>
  <img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__mobile-slider__dark__mobile-battrery.svg" alt="" className="jsx-2513715661 mobile-slidr__battery-img"/>
  <img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__mobile-slider__indicator.svg" alt="" className="jsx-2513715661 mobile-slidr__indicator-img"/>
    <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-rtl">
        <SwiperWrapper {...handlers} className="swiper-wrapper">
        {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Slider image ${index}`}
                animate={{ x: 100 * currentIndex + "%" }}
                transition={{ type: "tween" }}
              />
            ))}
        </SwiperWrapper>
        <SwiperButton onClick={handlePrev} right={true} src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__arrow-light.svg" className="swiper-button-next custom-swiper-button-next mobile-slider__left-arrow" alt="" tabIndex={0} role="button" aria-label="Next slide"/>
        <SwiperButton onClick={handleNext} right={false} src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__arrow-light.svg" className="swiper-button-prev custom-swiper-button-prev mobile-slider__right-arrow" alt="" tabIndex={0} role="button" aria-label="Previous slide"/>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
        </div>
</div>
    </Container>
  );
};

export default Slider;
const Container = styled.div`
.mobile-slider-inner-container {
    border: 4px solid black;
    border-radius: 15px;
    position: relative;
    width: 150px;
    height: 324px;
    z-index:10;
    box-sizing:border-box;
    background:var(--bg-color-secondary)
}
@media (min-width: 992px){
.mobile-slider-inner-container {
    width: 230px;
    height: 500px;
    border: 5px solid black;
    -webkit-transform: translateX(100px) translateY(0);
    -ms-transform: translateX(100px) translateY(0);
    transform: translateX(100px) translateY(0);
    box-sizing:border-box;

}
}
.mobile-slidr__time-img {
    position: absolute;
    width: 16px;
    left: 6px;
    z-index: 100;
    top: 4px;
}
.mobile-slidr__battery-img {
    position: absolute;
    z-index: 100;
    right: 3px;
    width: 31px;
    top: 3px;
}
@media (min-width: 992px){
  .mobile-slidr__battery-img {
    width: 33px;
}
}
.mobile-slidr__indicator-img {
    position: absolute;
    bottom: 4px;
    right: 22%;
    z-index: 100;
}
@media (min-width: 992px){
.mobile-slidr__indicator-img {
    right: 32%;
}
}

`
const SwiperWrapper = styled.div`
  transition-duration:0;
  overflow:hidden;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
}
.mobile-slider-item {
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 10px;
}

  
`
interface SwiperButtonProps{
  right:boolean
}
const SwiperButton = styled.img<SwiperButtonProps>`
    right:${props=>props.right?"-54px":"unset"};
    left:${props=>props.right?"unset":"-54px"};
    width: 40px;
    outline: none;
    -webkit-transform:${props=>props.right?"rotate(180deg)":"unset"};
    -ms-transform:${props=>props.right?"rotate(180deg)":"unset"};
    transform:${props=>props.right?"rotate(180deg)":"unset"};

    position: absolute;
    top: 50%;
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

`