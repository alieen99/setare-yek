import Head from 'next/head'
import { useRouter } from 'next/router'
import { styled } from 'styled-components'
import useWindowSize from '@/hooks/useWindowSize'
import Intro from '@/sections/Intro'
import Navbar from '@/components/Navbar'
import { useDarkModeContext } from '@/components/DarkModeContext'
import Start from '@/sections/Start'
import Application from '@/sections/Application'
import Footer from '@/components/Footer'
import MobileNavbar from '@/components/MobileNavbar'

interface PageProps {
  isdark?: boolean;
  ispersian?:boolean;
}
const Page = styled.div<PageProps>`
    --bg-color:${props => props.isdark?"#333333": "#f9f9fd" };
    --bg-color-secondary:${props => props.isdark?"#222222": "#ffffff" };
    --badge-and-lines:${props => props.isdark?"#222222":"#efefef" };
    --text-color:${props => props.isdark? "#ffffff":"#5439ac"};
    --bg-toggle:${props => props.isdark? "#222222":"#5439ac"};
    --nav-text:${props => props.isdark? "#ffff":"#909090"};
    --footer-bg:${props => props.isdark? "#222222":"#5439ac"};
    --invert:${props => props.isdark? "invert(0);":"invert(1);"};
    background-color:var(--bg-color);

    font-family:"IranYekanWeb";
    color:var(--text-color);
    transition:all 500ms;
    width:100%;
    direction:rtl;
    position:relative;


`
export default function Home() {
  const {locale,locales,} = useRouter()
  const {isDarkMode} = useDarkModeContext();
  const{width}=useWindowSize()
  console.log(isDarkMode)
  return (
    <>
        <Head>
        <title>{locale==="fa"?"ستاره یک":"SetareYek"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page isdark={isDarkMode} ispersian={locale==="fa"}>
      {width>992?<Navbar/>:<MobileNavbar/>}
      <Start/>
      <Intro/>
      <Application/>
      <Footer/>
    </Page>
    </>
  )
}
