
import { styled } from 'styled-components'


const Container = styled.footer`
    background: var(--footer-bg);
    margin-top: 200px;
    width: 100%;
    .custom-container.jsx-3916231582 {
    max-width: 1366px;
    padding: 0 15px;
    margin: 0 auto;
}
p.jsx-778066508 {
    font-style: normal;
    font-stretch: normal;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: justify;
    margin: 0;
}
.footer__receive-app__title {
    font-size: 12px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    text-align: center;
    margin-top: 30px !important;
    margin-bottom: 10px !important;
}
.footer__receive-app {
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 30px;
    padding-top: 30px;
}
.footer__receive-app__input-wrapper {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 23px;
    padding: 5px;
    height: 40px;
    max-width: 300px;
    align-items:center;
    box-sizing: border-box;
}
.footer__social__btn:last-child {
    margin-top: 20px;
}
.button.jsx-3301219110 {
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.footer__social__btn1 {
    margin-bottom: 16px;
}
.footer__social__btn {
    font-size: 14px;
    width: 200px;
    height: 40px;
    border-radius: 25px;
    background: transparent;
    padding: 0px 15px;
    color: white;
    border: 2px solid rgb(255, 255, 255) !important;
}
.justify-content-between {
    justify-content: space-between!important;
}
.d-flex {
    display: flex!important;
}
.footer__receive-app__input-wrapper__input {
    background: transparent;
    border: none;
    outline: none;
    border-radius: 25px;
    color: rgb(255, 255, 255);
    padding: 5px;
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
.button.jsx-3301219110 {
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.footer__receive-app__input-wrapper__button {
    width: 120px;
    height: 30px;
    font-size: 8px;
    color: rgb(86, 89, 106);
    font-weight: 700;
    background: rgb(255, 255, 255) !important;
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
.footer__divider {
    width: 100%;
    height: 1px;
    background-color: white;
    opacity: 0.2;
    margin-top: 30px;
}
.footer__mid {
    width: 100%;
    height: 98%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 40px;
}
.align-items-center {
    align-items: center!important;
}

.flex-column {
    flex-direction: column!important;
}
.d-flex {
    display: flex!important;
}
.footer__enamad {
    width: auto;
    height: auto;
    background-color: white;
    border-radius: 20px;
}
a {
    margin: 0 !important;
}
a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
}
img {
    vertical-align: middle;
    border-style: none;
}
.footer-copy-right__p {
    direction: ltr;
    font-size: 12px;
    font-weight: 300;
    color: rgb(255, 255, 255);
    margin-top: 32px !important;
    text-align: center !important;
}
`
export default function Footer() {

  return (
    <Container>
<div className="jsx-3916231582 custom-container undefined">
    <div className="jsx-412938537 footer__receive-app">
        <p className="jsx-778066508 footer__receive-app__title" color="textColorTwo">برای دریافت لینک دانلود اپلیکیشن شماره خود را وارد کنید</p>
        <div className="jsx-412938537 footer__receive-app__input-wrapper d-flex justify-content-between justify-content-sm-center">
          <input type="text" placeholder="شماره تماس مانند ۰۹۱۲۳۴۵۶۷۸۹" name="mobile" className="jsx-412938537 footer__receive-app__input-wrapper__input" value="" style={{border:"0px solid red"}}/>
          <button className="jsx-3301219110 button footer__receive-app__input-wrapper__button">دریافت اپلیکیشن</button>
        </div>
    </div>
    <div className="jsx-412938537 footer__divider"></div>
    <div className="jsx-412938537 footer__mid">
        <div className="jsx-412938537 footer__social d-flex flex-column align-items-center justify-content-sm-center"><a href="https://www.instagram.com/setare_yek/" className="jsx-412938537"><button className="jsx-3301219110 button footer__social__btn footer__social__btn1 d-flex justify-content-between align-items-center">اینستاگرام ستاره یک
        <img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__instagram-icon.svg" alt="" className="jsx-412938537"/>
        </button></a>
            <a
                href="https://t.me/setare_yek" className="jsx-412938537"><button className="jsx-3301219110 button footer__social__btn d-flex justify-content-between align-items-center">تلگرام ستاره یک
                <img src="https://setareyekweb.s3.ir-thr-at1.arvanstorage.com/static__svg__telegram-icon.svg" alt="" className="jsx-412938537"/>
                </button></a>
        </div>
        <div className="jsx-412938537 footer__enamad">
            <a target="_blank" href="https://trustseal.enamad.ir/?id=115871&amp;Code=s2cB6TWMXCw80xjimu6h" className="jsx-412938537"><img src="https://Trustseal.eNamad.ir/logo.aspx?id=115871&amp;Code=s2cB6TWMXCw80xjimu6h" alt="" id="s2cB6TWMXCw80xjimu6h" className="jsx-412938537" style={{cursor: "pointer"}}/></a>
        </div>
    </div>
    <div className="jsx-412938537 footer-copy-right">
        <p className="jsx-778066508 footer-copy-right__p">© 2021 All rights reserved Setareaval</p>
    </div>
</div>
    </Container>
  )
}
