"use client";

import FirstChocolateProduct from "../../public/images/firstchocolateproduct.jpg";
import SecondChocolateProduct from "../../public/images/secondchocolateproduct.jpg";
import ThirdChocolateProduct from "../../public/images/thirdchocolateproduct.jpg";
import Image from "next/image";
import {createChocolateRequest} from "@/lib/actions";

const Form = () => {
    return (
        <>
            <div className={'grid grid-cols-2 md:px-[200px] px-[50px] pt-6 pb-20'}>
                <div className={'md:block hidden'}>
                    <div className="grid grid-cols-3 gap-1   ">
                        <div className="col-span-2 ">
                            <Image src={'https://i.postimg.cc/yYLfDXv0/firstchocolateproduct.jpg'} width={1000} height={300} alt={'Making Chocolates'}
                                   className={'w-full h-[300px] object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={'https://i.postimg.cc/mgGrFCk2/secondchocolateproduct.jpg'} width={1000} height={300} alt={'Making Chocolates'}
                                   className={'w-full h-[300px] object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={'https://i.postimg.cc/43sbwYLX/thirdchocolateproduct.jpg'} width={1000} height={300} alt={'Making Chocolates'}
                                   className={'w-full h-full object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={'https://i.postimg.cc/yYLfDXv0/firstchocolateproduct.jpg'} width={1000} height={300} alt={'Making Chocolates'}
                                   className={'w-full h-full object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={'https://i.postimg.cc/mgGrFCk2/secondchocolateproduct.jpg'} width={1000} height={300} alt={'Making Chocolates'}
                                   className={'w-full h-full object-cover'}/>
                        </div>
                        <div className="col-span-2 ">
                            <Image src={'https://i.postimg.cc/43sbwYLX/thirdchocolateproduct.jpg'} width={1000} height={300} alt={'Making Chocolates'}
                                   className={'w-full h-[300px] object-cover'}/>
                        </div>
                        <div className="">
                            <Image src={'https://i.postimg.cc/yYLfDXv0/firstchocolateproduct.jpg'} width={1000} height={300} alt={'Making Chocolates'}
                                   className={'w-full h-[300px] object-cover'}/>
                        </div>
                    </div>
                </div>

                <div className={'md:ml-20 ml-0 md:col-span-1 col-span-2'}>
                    <h2 className={'md:text-8xl text-5xl font-bold text-amber-900'}>Compra Chocolates Goyito</h2>
                    <p className={'md:text-xl text-xs font-sans  md:mt-10 mt-5'}>
                        Completa el formulario y nos pondremos en contacto contigo en la brevedad.
                    </p>
                    <form action={createChocolateRequest} className={'p-10 md:mt-10 mt-5 bg-white border border-gray-200 rounded-lg shadow w-full'}>
                        <div className={'w-full'}>
                            <label htmlFor="fullName" className="block text-xl font-medium text-gray-700">Nombre Completo</label>
                            <input type="text" name="fullName"
                                   id="fullName"
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
                                <label htmlFor="typeOfChocolate" className="block text-xl font-medium text-gray-700">Tipo de
                                    Chocolate</label>
                                <select id="typeOfChocolate"
                                        name="typeOfChocolate" autoComplete="typeOfChocolate"
                                        className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border   rounded">
                                    <option value="Cumpleaños">Chocolate con Maní</option>
                                    <option value="Matrimonio">Chocolate con Ajonjolí</option>
                                    <option value="Misa">Chocolate</option>
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