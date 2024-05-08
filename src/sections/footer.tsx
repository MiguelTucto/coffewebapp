import Link from "next/link";
import GoyoLogo from '../../public/images/goyitologo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <div
                className={'md:px-80 px-10 md:py-0 py-5  h-full flex md:flex-row flex-col justify-between items-center'}>
                <Link href={'#'}>
                    <Image src={GoyoLogo} alt={'Goyo'} />
                </Link>
                <div className={'flex '}>
                    <p className={'text-black font-black'}>© 2024 Goyo Chocolate.</p>
                </div>
                <div className={'flex flex-row gap-10 md:px-0 '}>
                    <Link href={''}>
                        <FontAwesomeIcon icon={faFacebook} className={'text-6xl '}/>
                    </Link>
                    <Link href={''}>
                        <FontAwesomeIcon icon={faYoutube} className={'text-6xl '}/>
                    </Link>
                    <Link href={''}>
                        <FontAwesomeIcon icon={faWhatsapp} className={'text-6xl '}/>
                    </Link>
                    <Link href={''}>
                        <FontAwesomeIcon icon={faInstagram} className={'text-6xl '}/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer;