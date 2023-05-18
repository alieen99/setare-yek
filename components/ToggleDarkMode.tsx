import React, { useState } from 'react';
import { styled } from 'styled-components'
import { BsMoon,BsSun} from './Icons';
import { useDarkModeContext } from './DarkModeContext';



const Container = styled.div`

    --sell-menuactivebg: linear-gradient(45deg, #489dd7 0%, #1d71b8 50%);

    --bg-svg-containers:var(--bg-color);
    --color-svg-containers:var(--black-and-white);
    --bg-toggle-wrapper:var(--bg-color-inside);

.toggle-item:before,
.toggle:before,
.transparent:before,
.toggle-wrapper:before {
    content: '';
    position: absolute;
}
.input-toggle {
    
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    box-sizing: border-box;
}
.toggle {
    position: relative;
    display: inline-block;
}
label{
    position:relative
}
label.toggle-item {
    width: 4em;
    background: #2e394d;
    height: 1em;
    border-radius: 30px 10px 10px 30px;
    margin: 0;
    position: relative;
    transition: all 0.3s ease;
    transform-origin: 20% center;
    cursor: pointer;
}
label.toggle-item:before {
    display: block;
    transition: all 0.2s ease;
    width: 2.3em;
    height: 2em;
    top: 0.5em;
    left: 0.25em;
    border-radius: 2em;
    transition: 0.3s ease;
}
.transparent label {
    background: var(--bg-toggle-wrapper);
    border: 1px solid var(--bg-toggle-wrapper);
    width:6.5rem;
    height: 2.5rem;
    z-index: 10;
}
.transparent label:before {
    box-sizing:border-box;
    border: 1px solid white;
    width: 30px;
    height:30px;
    top: 5px;
    left:19.5px;
    z-index: 10;
    background:var(--bg-toggle);
    
}
 #transparent:checked+label:before {
    transform: translateX(36px);
}
.toggle-item{
    display:flex;
    align-items:center;
    justify-content:center;
}
#transparent:checked+label {
  border-radius: 10px 30px 30px 10px;}
  .moon-sun-container{
    background:var(--bg-toggle);
    font-size:1.2rem;
    display:flex;
    align-items: center;
    justify-content: space-around;
    width :55px;
    height:16px;
    border-radius:1rem;
    border:solid 1px white;
  }
`
interface SvgContainerProps{
    isDarkMode:boolean
}
const SvgContainer = styled.div<SvgContainerProps>`
    position:absolute;
    width:53px;
    display:flex;
    justify-content:space-between;
    z-index:10;
    svg.sun{
            transition: all 0.2s ease 0s;
            transform:${props=>props.isDarkMode?"scale(0.5)":"scale(1)"};
            opacity:${props=>props.isDarkMode?"0":"1"};
    }
    svg.moon {
        transition: all 0.2s ease 0s;

            transform:${props=>props.isDarkMode?"scale(1)":"scale(0.5)"};
            opacity:${props=>props.isDarkMode?"1":"0"};
    }
`
function ToggleDarkMode() {
    const {isDarkMode,toggleDarkMode} = useDarkModeContext();

  return (
    <Container>
          <div className="toggle-wrapper">
    <div className="toggle transparent">
        <input defaultChecked={isDarkMode} className='input-toggle' id="transparent" type="checkbox" />
        <label onClick={toggleDarkMode} className="toggle-item" htmlFor="transparent">
            <SvgContainer isDarkMode={isDarkMode}>
            <BsMoon className='moon'/>
            <BsSun  className='sun'/>
            </SvgContainer>
            <div className='moon-sun-container'/>
        </label>
    </div>
</div>
    </Container>

  );
}
export default ToggleDarkMode;