import { styled } from 'styled-components'

const Container = styled.div`
    background: var(--bg-color-secondary);
    padding: 20px 10px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 10px 0px;
    max-width: 796px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight:400;
    text-align:justify;
    line-height:1.5;
    flex-direction:column;
    margin-top:30px;
    img{
        border-radius:20px;
        width:100%;
        height:auto;
        border-radius:20px;
      }
    @media screen and (min-width:767px) {
    img{
        position:relative;
        left:53px;
      }
    p{
      position: relative;
      left:26px;
    }  
    flex-direction:row;

        }
`
export default function Card() {

  return (
    <Container>
              <img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__Skeleton.light.svg"></img>

        <p>
        اپلیکیشن ستاره یک با کمک دانش بومی نخبگان ایرانی، تمرکز زیادی بر امنیت ۱۰۰ درصدی تراکنش ها و فعالیت های کاربران خود دارد. در کنار عهده داری این امنیت که حق مسلم هر کاربر است به منظور ارج نهادن به اعتماد کاربران، جشنواره ای دائمی با جوایزی متنوع و نفیس از طریق اپلیکشن برگزار می شود که شما با انجام کامل هر عملیات خرید یا پرداخت قبض در اپلیکیشن ستاره یک امتیازی متناسب با آن دریافت خواهید کرد که شانس شما را برای برنده شدن جوایزی از جمله خودروی سواری و سکه های طلا افزایش خواهد داد.
        </p>
    </Container>
  )
}
