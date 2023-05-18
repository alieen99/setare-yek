import Card from '@/components/Card'
import { useDarkModeContext } from '@/components/DarkModeContext'
import { Cirlcle } from '@/components/Icons'
import Slider from '@/components/Slider'
import { styled } from 'styled-components'
import useWindowSize from "@/hooks/useWindowSize";
import { useRouter } from 'next/router'


const Container = styled.div`
   width:100%;
   display:flex;
   flex-direction:column-reverse;
   align-items:center;
   justify-content:center;
   .main-section__desktop-download{
    width:90%;
    padding:5%;
    box-sizing:border-box;
   }
   @media screen and (min-width: 767px) {
    align-items:center;
    flex-direction:row;
   justify-content:center;
   position:relative;
   margin-top:10px;
   height:80vh;
   .main-section__desktop-download{
    width:100%;
    padding:5%;
    box-sizing:border-box;
   }
  }
   @media screen and (min-width: 992px) {
    align-items:center;
    flex-direction:row;
   justify-content:space-between;
   position:relative;
   margin-top:10px;
   height:80vh;
   .main-section__desktop-download{
    width:50%;
    padding:5%;
    box-sizing:border-box;
   }
  }

   .main-section__desktop-download__desc {
    color:var(--text-color);
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(239, 239, 239);
    text-align: justify;
    margin-bottom: 20px !important;
}
.button.jsx-3301219110 {
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
}

.main-section__desktop-download__btn-container button {
    width: 230px;
    height: 45px;
    border-radius: 26px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 18px;
    color: rgb(86, 89, 106);
    margin-bottom: 10px;
    border: 2px solid rgb(86, 89, 106) !important;
    background: rgb(255, 255, 255) !important;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.align-items-center {
    align-items: center!important;
}
[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button {
    border-radius: 0;
}
* {
    /* transition: all 0.2s !important; */
}
*, ::after, ::before {
    box-sizing: border-box;
}
.align-items-center {
    align-items: center!important;
}
.flex-column {
    flex-direction: column!important;
}
.d-flex {
    display: flex!important;
    column-gap:20px;
}
@media (min-width: 992px){
  .flex-lg-row {
    flex-direction: row!important;
}
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
interface Props{
  widhtl:number;
}
const CircleHolder = styled.div<Props>`
    position:absolute;
  @media screen and (min-width: 992px) {
    top: -185px;
    left: -170px;
  }

  
`
const imagesDark = [
  'https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__img__mobile-slider__dark__1.dark.jpg',
  'https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__img__mobile-slider__dark__2.dark.jpg',
  'https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__img__mobile-slider__dark__3.dark.jpg',
  'https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__img__mobile-slider__dark__4.dark.jpg'
];
const images = [
  'https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__img__mobile-slider__1.light.jpg',
  'https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__img__mobile-slider__2.light.jpg',
  'https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__img__mobile-slider__3.light.jpg',
  'https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__img__mobile-slider__4.light.jpg'
];
export default function Start() {
  const {isDarkMode} = useDarkModeContext();
  const {width,height} = useWindowSize();
  const {locale,locales,} = useRouter()

  return (
    <Container>

      <div className="main-section__desktop-download">
        <h1 className="main-section__desktop-download__title">
          {locale==="fa"?"اپلیکیشن ستاره یک":"SetareYek Application"}
          </h1>
          {
          locale==="fa"?
          <div className="main-section__desktop-download__desc">
          <p className="jsx-778066508 ">اپلیکیشن ستاره یک، برنامه ای کاربردی و چند منظوره است که با نصب آن بر روی گوشی خود می توانید بسیاری از کارهای روزمره‌ی خودتان را به سادگی از طریق آن انجام بدهید. در ضمن هر فعالیتی در اپلیکیشن ستاره یک امتیاز ویژه‌ی خود را برای شما به همراه دارد. شما به راحتی میتوانید امتیازهایتان را جمع کنید و در قرعه کشی های متنوع، جایزه هایی مثل خودروی سواری، سکه و … ببرید.</p>
          <p className="jsx-778066508 ">مهمترین امکانات:</p>
          <p className="jsx-778066508 ">• خرید شارژ و بسته های اینترنت همه‌ی اپراتورها</p>
          <p className="jsx-778066508 ">• کارت به کارت به همه‌ی بانک ها</p>
          <p className="jsx-778066508 ">• پرداخت اتوماتیک قبض‌های برق، گاز، آب و …</p>
          <p className="jsx-778066508 ">• خرید بلیط هواپیماهای داخلی و خارجی</p>
          <p className="jsx-778066508 ">• خرید بلیط اتوبوس‌های بین شهری با امکان انتخاب صندلی</p>
          <p className="jsx-778066508 ">امکان نصب اپلیکیشن ستاره یک، بر روی سیستم های عامل اندروید و ios وجود دارد.</p>
          </div>
          :
          <div className="main-section__desktop-download__desc">
          <p className="jsx-778066508 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque explicabo totam labore, eveniet incidunt hic a ex expedita veritatis inventore iusto nisi dolore facere illo quia. Fugiat, iure numquam!
            </p>

          </div>
        }

        <div className="d-flex flex-column align-items-center flex-lg-row main-section__desktop-download__btn-container">
          <button className="jsx-3301219110 button main-section__desktop-download__btn-container__android-btn align-items-center ">دانلود نسخه اندروید<img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__download-android-logo.svg" alt=""/></button>
          <button className="jsx-3301219110 button main-section__desktop-download__btn-container__ios-btn align-items-center">دانلود نسخه iOS<img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__download-ios-logo.svg" alt=""/>
          </button>
          </div>
        </div>
        <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
        <CircleHolder widhtl={width}>
      <Cirlcle/>
      </CircleHolder>
                <Slider images={isDarkMode?imagesDark:images} />
        </div>
    </Container>
  )
}
