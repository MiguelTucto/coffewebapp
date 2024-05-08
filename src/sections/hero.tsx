import Image from "next/image";
import CacaoHeroImage from '../../public/images/cacaofull.jpg';
import GoyoLogo from '../../public/images/goyitologo.png'
import Link from "next/link";
const Hero = () => {
    return (
        <>
            <Image src={CacaoHeroImage} alt={'Cacao Hero Image'} className={'w-full h-full object-cover object-center absolute' }/>
            <div className={'absolute px-[200px]'}>
                <nav className={'w-full flex justify-between items-center  '}>
                    <Link href={'#'}>
                        <Image src={GoyoLogo} alt={'Logo of Chocolate Goyito'} className={'w-auto h-auto'}/>
                    </Link>
                    <div className={`flex gap-5`}>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Nosotros</Link>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Contratar</Link>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Características</Link>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Ubícanos</Link>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Videoclips</Link>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Cotización</Link>
                    </div>
                </nav>
                <div className={'mt-28 '}>
                    <h1 className={'text-9xl font-bold text-white '}>
                        Disfruta de los mejores chocolates del Perú
                    </h1>
                    <p className={'text-3xl font-light text-white mt-5'}>Los mejores chocolates jamas antes producidos en el Perú y en el mundo. Prueba todas nuestras fabulosas presentaciones.</p>
                    <button className={' mt-10 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 disabled:bg-blue-100 disabled:cursor-not-allowed '}>
                        Ver Video
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero