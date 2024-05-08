import FirstChocolateProduct from "../../public/images/firstchocolateproduct.jpg";
import SecondChocolateProduct from "../../public/images/secondchocolateproduct.jpg";
import ThirdChocolateProduct from "../../public/images/thirdchocolateproduct.jpg";
import Image from "next/image";

const Form = () => {
    return (
        <>
            <div className={'grid grid-cols-2 px-[200px] pt-36 pb-20'}>
                <div className={''}>
                    <div className="grid grid-cols-3 gap-1   ">
                        <div className="col-span-2 ">
                            <Image src={FirstChocolateProduct} alt={'Making Chocolates'}
                                   className={'w-full h-[300px] object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={SecondChocolateProduct} alt={'Making Chocolates'}
                                   className={'w-full h-[300px] object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={ThirdChocolateProduct} alt={'Making Chocolates'}
                                   className={'w-full h-full object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={FirstChocolateProduct} alt={'Making Chocolates'}
                                   className={'w-full h-full object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={SecondChocolateProduct} alt={'Making Chocolates'}
                                   className={'w-full h-full object-cover'}/>
                        </div>
                        <div className="col-span-2 ">
                            <Image src={ThirdChocolateProduct} alt={'Making Chocolates'}
                                   className={'w-full h-[300px] object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={FirstChocolateProduct} alt={'Making Chocolates'}
                                   className={'w-full h-[300px] object-cover'}/>
                        </div>
                    </div>
                </div>

                <div className={'ml-20'}>
                    <h2 className={' text-8xl font-bold text-amber-900'}>Compra Chocolates Goyito</h2>
                    <p className={'text-xl font-sans  mt-10'}>
                        Completa el formulario y nos pondremos en contacto contigo en la brevedad.
                    </p>
                    <form className={'p-10 mt-10 bg-white border border-gray-200 rounded-lg shadow'}>
                        <div className={'w-full'}>
                            <label htmlFor="name" className="block text-xl font-medium text-gray-700">Nombre</label>
                            <input type="text" name="name"
                                   id="name" autoComplete="given-name"
                                   className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border   rounded"/>

                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="email" className="block text-xl font-medium text-gray-700">Correo</label>
                            <input type="email"
                                   name="email" id="email" autoComplete="email"
                                   className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border   rounded"/>
                        </div>

                        <div className={'mt-6 w-full'}>
                            <label htmlFor="location"
                                   className="block text-xl font-medium text-gray-700">Dirección</label>
                            <input type="text"
                                   name="location" id="location" autoComplete="location"
                                   className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border   rounded"/>

                        </div>
                        <div className={'md:mt-6 mt-3  flex md:flex-row flex-col justify-between w-full '}>
                            <div className="">
                                <label htmlFor="phone"
                                       className="block text-xl font-medium text-gray-700">Telefono</label>
                                <input type="tel"
                                       placeholder="999-999-999" pattern="[0-9]{9}" maxLength={9} name="phone"
                                       id="phone"
                                       autoComplete="phone"
                                       className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border   rounded"/>
                            </div>
                            <div className={''}>
                                <label htmlFor="date" className="block text-xl font-medium text-gray-700">Fecha</label>
                                <input type="date"
                                       name="date" id="date" autoComplete="date"
                                       className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border   rounded"/>
                            </div>
                            <div className={'md:mt-0 mt-6'}>
                                <label htmlFor="typeOfShows" className="block text-xl font-medium text-gray-700">Tipo de
                                    Evento</label>
                                <select id="typeOfShows"
                                        name="typeOfShows" autoComplete="typeOfShows"
                                        className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border   rounded">
                                    <option value="Cumpleaños">Cumpleaños</option>
                                    <option value="Matrimonio">Matrimonio</option>
                                    <option value="Misa">Misa</option>
                                    <option value="Sorpresas">Sorpresas</option>
                                    <option value="Serenata">Serenata</option>
                                    <option value="Otros">Otros</option>
                                </select>

                            </div>
                            <div className={'md:mt-0 mt-6'}>
                                <label htmlFor="time" className="block text-xl font-medium text-gray-700">Hora</label>
                                <input type="time"
                                       name="time" id="time" autoComplete="time"
                                       className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border   rounded"/>
                            </div>

                        </div>
                        <button
                            className={'w-full mt-10 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 disabled:bg-blue-100 disabled:cursor-not-allowed '}>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Form;