import { HomeContainer, Product } from "../styles/pages/home";
import cam1 from '../assets/camisetas/cam1.png'
import cam2 from '../assets/camisetas/cam2.png'
import cam3 from '../assets/camisetas/cam3.png'
import cam4 from '../assets/camisetas/cam4.png'
import Image from "next/image";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from "react";
import { resolve } from "path";

export default function Home(props) {

  // const [list, setList] = useState<number[]>([])

  const [sliderRef] = useKeenSlider({
      slides: {
        perView: 3,
        spacing: 48
      }
    }
  )

  // useEffect(() => {
  //   setTimeout(() => {
  //     setList([1, 2, 3])
  //   }, 2000)
  // } ,[])

  return (
 <HomeContainer ref={sliderRef} className="keen-slider">
  <pre>{JSON.stringify(props.list)}</pre>
  <Product className="keen-slider__slide">
      <Image src={cam1} width={520} height={480} alt={""} />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product className="keen-slider__slide">
      <Image src={cam2} width={520} height={480} alt={""} />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product className="keen-slider__slide">
      <Image src={cam3} width={520} height={480} alt={""} />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product className="keen-slider__slide">
      <Image src={cam4} width={520} height={480} alt={""} />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>  
  </HomeContainer>
  )
}

export const getServerSideProps = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log('rodou')

return {
    props: {
      list: [1, 2, 3]
    }
  }
}