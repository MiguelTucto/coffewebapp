import Image from "next/image";
import CacaoAndFruits from '../../public/images/cacaoandfruits.jpg';
const About = () => {
    return (
        <>
            <div className={'px-[200px] pt-36 flex flex-row justify-between '}>
                <div className={''}>
                    <h2 className={' text-8xl font-bold text-amber-900'}>Acerca de nosotros</h2>
                    <p className={'text-xl font-sans w-[800px] mt-10'}>
                        En nuestra búsqueda incansable por los placeres del cacao, nos hemos convertido en verdaderos
                        aficionados del chocolate. Con una pasión desbordante, hemos explorado cada faceta de este
                        exquisito manjar, desde su origen hasta su elaboración. Nos enorgullece presentar una selección
                        excepcional de chocolates elaborados con un 100% de cacao, donde cada bocado es una experiencia
                        sublime. Nuestra misión es compartir nuestra devoción por el chocolate puro y ofrecer diversas
                        presentaciones que deleiten los paladares más exigentes. Desde tabletas artesanales hasta trufas
                        delicadamente elaboradas, cada creación es un tributo al cacao en su forma más pura. Únete a
                        nosotros en este viaje sensorial y descubre el verdadero sabor del placer chocolatero.
                    </p>
                    <button
                        className={' mt-10 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 disabled:bg-blue-100 disabled:cursor-not-allowed '}>
                        Leer más
                    </button>
                </div>
                <div>
                    <Image src={CacaoAndFruits} alt={'Photo of Cacao and Fruits'}/>
                </div>

            </div>
        </>
    )
}

export default About;