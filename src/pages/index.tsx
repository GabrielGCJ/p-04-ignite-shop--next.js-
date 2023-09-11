import { HomeContainer, Product } from "../styles/pages/home";
import cam1 from '../assets/camisetas/cam1.png'
import cam2 from '../assets/camisetas/cam2.png'
import cam3 from '../assets/camisetas/cam3.png'
import Image from "next/image";

export default function Home() {
  return (
 <HomeContainer>
    <Product>
      <Image src={cam1} width={520} height={480} alt={""} />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product>
      <Image src={cam2} width={520} height={480} alt={""} />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>

    
  
  </HomeContainer>
  )
}
