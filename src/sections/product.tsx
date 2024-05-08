import Image from "next/image";
import ChocolateWithFactory from '../../public/images/cacaofactory.jpg'
const  Product = () => {
    return (
        <>
            <Image src={ChocolateWithFactory} alt={'Making Chocolates'} className={'h-[500px] object-cover object-center absolute brightness-50 -z-10' }/>
            <p className={'px-[200px] pt-20 italic font-light text-justify text-white text-4xl'}>&#x22;El chocolate, con su irresistible encanto, es más que un mero indulgente capricho gastronómico; es un viaje sensorial que despierta emociones, evoca recuerdos y desata pasiones. Desde el primer contacto visual con su seductora apariencia hasta el último deleite en el paladar, cada experiencia con el chocolate es un cuento de indulgencia y placer. Sus tonalidades profundas y tentadoras invitan a explorar un universo de sabores complejos y sutiles matices, donde el cacao revela sus secretos más íntimos con cada derretido bocado.&#x22;</p>

        </>
    )
}

export default Product;