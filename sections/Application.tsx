import Card from '@/components/Card'
import { Banner } from '@/components/Icons'
import { styled } from 'styled-components'
import ApplicationsIcons from '@/components/ApplicationsIcons'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import useWindowSize from '@/hooks/useWindowSize';
import { useEffect, useRef } from 'react';


const Container = styled.div`
   width:100%;
   height:90vh;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   border-top: 2px solid var(--badge-and-lines);
   position:relative;
   margin-top:10px;

   .swiper-horizontal {
    touch-action: pan-y;
}
.swiper, swiper-container {
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: block;
}
.swiper-android .swiper-slide, .swiper-wrapper {
    transform: translate3d(0px,0,0);
}

.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function,initial);
    box-sizing: content-box;
}
.swiper-backface-hidden .swiper-slide {
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.swiper-slide, swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
}

`
const Label = styled.div`
    position:absolute;
    top:0;
    padding: 8px 30px;
    border-radius: 0px 0px 20px 20px;
    display: inline;
    font-size: 22px;
    background-color:var(--badge-and-lines);
`
const BannerHolder = styled.div`
  width:100%;
  height: 90px;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 10px 0px;
  background-color: var(--bg-color-secondary);
  transition:all 500ms;
  svg{
      transform:scale(.5625)
    }
  @media (min-width: 576px) {
    height: 160px;
    svg{
      transform:scale(1)
    }
    }
`
const IconsHolder = styled.div`
    width: 100%;
    @media screen and (min-width:767px) {
      width:80%
    }
    display: flex;
    column-gap: 20px;
    position:relative;
`
export default function Application() {
  const Icons = ApplicationsIcons();
  const {width} = useWindowSize();
  const myDivRef = useRef<any>();
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  useEffect(() => {
    const myDiv = myDivRef.current;

    const handleMouseDown = (event: MouseEvent) => {
      isDraggingRef.current = true;
      startXRef.current = event.pageX - myDiv.offsetLeft;
      scrollLeftRef.current = myDiv.scrollLeft;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const x = event.pageX - myDiv.offsetLeft;
      const walk = x - startXRef.current;
      myDiv.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    myDiv.addEventListener('mousedown', handleMouseDown);

    return () => {
      myDiv.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleScrollPrevious = () => {
    const myDiv = myDivRef.current;
    myDiv.scrollBy({ left: -myDiv.offsetWidth, behavior: 'smooth' });
  };

  const handleScrollNext = () => {
    const myDiv = myDivRef.current;
    myDiv.scrollBy({ left: myDiv.offsetWidth, behavior: 'smooth' });
  };
  console.log(width)
  return (
    <Container>
        <Label>
           خدمات
        </Label>
        {
        width>767?
        <>
<SwiperButton onClick={handleScrollPrevious} right={false} src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__arrow-light.svg" className="swiper-button-prev custom-swiper-button-prev mobile-slider__right-arrow" alt="" tabIndex={0} role="button" aria-label="Previous slide"/>
<SwiperButton onClick={handleScrollNext} right={true} src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__arrow-light.svg" className="swiper-button-next custom-swiper-button-next mobile-slider__left-arrow" alt="" tabIndex={0} role="button" aria-label="Next slide"/>
        </>:null
        
        }
        <IconsHolder
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
        ref={myDivRef}>
        {
          Icons.map((Icon)=>{
            console.log(Icon.props)
            return<IconHolder>
              {Icon}
              <p>
              {Icon.props.name}
              </p>
            </IconHolder>
          }
          )
      } 
      

        
      </IconsHolder>
        <BannerHolder>
        <Banner/>
        </BannerHolder>

    </Container>
  )
}
const IconHolder = styled.div`
position:relative;
background-color:var(--bg-color-secondary);
border-radius:30%;
margin:3% 2%;
box-sizing:border-box;
box-shadow:rgba(0, 0, 0, 0.05) 0px 1px 10px 0px;

p{
  position:absolute;
  bottom:0;
  width:100%;
  text-align:center
}

`

interface SwiperButtonProps{
  right:boolean
}
const SwiperButton = styled.img<SwiperButtonProps>`
    right:${props=>props.right?"30px":"unset"};
    left:${props=>props.right?"unset":"30px"};
    width: 40px;
    outline: none;
    -webkit-transform:${props=>props.right?"rotate(180deg)":"unset"};
    -ms-transform:${props=>props.right?"rotate(180deg)":"unset"};
    transform:${props=>props.right?"rotate(180deg)":"unset"};

    position: absolute;
    top: 35%;
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

`
