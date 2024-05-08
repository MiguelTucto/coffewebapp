'use client'

import Image from "next/image";
import CacaoHeroImage from '../../public/images/cacaofull.jpg';
import GoyoLogo from '../../public/images/goyitologo.png'
import Link from "next/link";
import {useState} from "react";
const Hero = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <>
            <Image src={'https://i.postimg.cc/Jh4B8D2p/cacaofull.jpg'} width={1000} height={10000} alt={'Cacao Hero Image'} className={'w-full h-full object-cover object-center absolute' }/>
            <div className={'absolute md:px-[200px] px-[50px]'}>
                <nav className={'w-full flex justify-between items-center  '}>
                    <Link href={'#'} className={'content-center'}>
                        <Image src={'https://i.postimg.cc/tJQV6rBg/goyitologo.png'} width={100} height={100}
                               alt={'Logo of Chocolate Goyito'} className={'w-auto h-auto'}/>
                    </Link>
                    <div className={` gap-5 md:flex hidden ` }>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Nosotros</Link>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Comprar</Link>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Características</Link>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Ubícanos</Link>
                        <Link href={'#'}
                              className={`font-satoshi font-bold text-xl text-white`}>Cotización</Link>
                    </div>
                    <i className={'md:hidden visible'} onClick={() => { setMenuOpen(true) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6 text-yellow-200">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </i>
                    {
                        menuOpen ? (
                            <div
                                className={`fixed top-0 left-0 w-full h-full bg-amber-700 bg-opacity-90 flex justify-center items-center z-50`}>
                                <div className={`flex flex-col gap-5 text-center`}>
                                    <Link href={'#about'}
                                          className={`font-satoshi font-bold text-xl text-[#F5B83B]`}>Nosotros</Link>
                                    <Link href={'#takeservice'}
                                          className={`font-satoshi font-bold text-xl text-[#F5B83B]`}>Comprar</Link>
                                    <Link href={'#feature'}
                                          className={`font-satoshi font-bold text-xl text-[#F5B83B]`}>Características</Link>
                                    <Link href={'#contact'}
                                          className={`font-satoshi font-bold text-xl text-[#F5B83B]`}>Ubícanos</Link>
                                    <Link href={'#form'}
                                          className={`font-satoshi font-bold text-xl text-[#F5B83B]`}>Cotización</Link>
                                </div>
                                <i className={`absolute top-0 right-0 mt-5 mr-5`} onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         className={`w-6 h-6 text-yellow-200`}>
                                        <path fillRule="evenodd"
                                              d="M10 11.414l4.95 4.95 1.414-1.414L11.414 10l4.95-4.95L14.95 3.636 10 8.586 5.05 3.636 3.636 5.05 8.586 10l-4.95 4.95L5.05 16.364 10 11.414z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </i>
                            </div>
                        ) : null
                    }
                </nav>
                <div className={'mt-28  '}>
                    <h1 className={'md:text-9xl text-5xl font-bold text-white '}>
                        Disfruta de los mejores chocolates del Perú
                    </h1>
                    <p className={'md:text-3xl text-xl   font-light text-white mt-5'}>Los mejores chocolates jamas antes producidos
                        en el Perú y en el mundo. Prueba todas nuestras fabulosas presentaciones.</p>
                    <button
                        className={' mt-10 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 disabled:bg-blue-100 disabled:cursor-not-allowed '}>
                        Ver Video
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero