import Image from "next/image";
import FabricWithHuman from "../../public/images/cacaofabricwithhuman.jpg";

const Plus = () => {
    return(
        <>
            <div className={'px-[200px] pt-36 flex flex-row justify-between'}>
                <div>
                    <Image src={'https://i.postimg.cc/Y2V86qQs/cacaofabricwithhuman.jpg'} height={750} width={450} alt={'Photo of Cacao on Fabric'} />
                </div>
                <div className={'w-[650px]'}>
                    <h2 className={' text-8xl font-bold text-amber-900'}>¿Qué nos diferencia?</h2>
                    <p className={'text-xl font-sans  mt-10'}>
                        En cada bocado encontrarás una experiencia incomparable, una fusión perfecta entre calidad, pasión y dedicación. Nuestros chocolates no son solo productos, son obras maestras meticulosamente elaboradas con los mejores granos de cacao, seleccionados de las regiones más prestigiosas del mundo. Cada etapa de nuestro proceso de producción está impregnada de un compromiso inquebrantable con la excelencia, desde la cosecha hasta el empaquetado final.
                        Además, nos enorgullece ofrecer una variedad de presentaciones que satisfacen todos los gustos y ocasiones. ¿Buscas un regalo único para un ser querido? Nuestras elegantes cajas de trufas son la opción perfecta.
                    </p>
                    <button
                        className={' mt-10 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 disabled:bg-blue-100 disabled:cursor-not-allowed '}>
                        Leer más
                    </button>
                </div>

            </div>
        </>
    )
}

export default Plus;