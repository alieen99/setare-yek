import Card from '@/components/Card'
import { styled } from 'styled-components'


const Container = styled.div`
   width:100%;
   height:90vh;
   display:flex;
   align-items:center;
   justify-content:center;
   border-top: 2px solid var(--badge-and-lines);
   position:relative;
   margin-top:10px;
   padding:10%;
   box-sizing:border-box;
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
export default function Intro() {

  return (
    <Container>
        <Label>
            اپلیکیشن ستاره یک
        </Label>
        <Card/>
    </Container>
  )
}
