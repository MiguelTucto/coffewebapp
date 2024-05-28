"use client";

import FirstChocolateProduct from "../../public/images/firstchocolateproduct.jpg";
import SecondChocolateProduct from "../../public/images/secondchocolateproduct.jpg";
import ThirdChocolateProduct from "../../public/images/thirdchocolateproduct.jpg";
import Image from "next/image";
import {SubmitHandler, useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { createChocolateRequest } from "@/lib/actions";

// Define your schema
const schema = z.object({
    fullName: z.string().min(1, "Nombre Completo es requerido"),
    email: z.string().email("Correo inválido"),
    location: z.string().min(1, "Dirección es requerida"),
    phone: z.string().regex(/^\d{9}$/, "Teléfono inválido"),
    date: z.string().min(1, "Fecha es requerida"),
    time: z.string().min(1, "Hora es requerida"),
    typeOfChocolate: z.string().refine(value => value !== "Seleccionar", "Tipo de Chocolate es requerido"),
    quantityOfChocolate: z.string().refine(value => value !== "Seleccionar", "Cantidad es requerida"),
});

const Form = () => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formValues = watch();

    useEffect(() => {
        const isValid = Object.values(formValues).every(value => value !== "" && value !== "Seleccionar");
        setIsFormValid(isValid);
    }, [formValues]);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setIsLoading(true);
        const formData = new FormData();
        (Object.entries(data) as [keyof FormData, string][]).forEach(([key, value]) => {
            formData.append(key, value);
        });
        try {
            await createChocolateRequest(formData);
            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="grid grid-cols-2 md:px-[200px] px-[50px] md:pt-[200px] pt-6 pb-20 bg-gradient-to-r from-yellow-100 to-yellow-200">
                <div className="hidden md:block">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="col-span-2">
                            <Image src={FirstChocolateProduct} width={1000} height={300} alt="Making Chocolates" className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
                        </div>
                        <div>
                            <Image src={SecondChocolateProduct} width={1000} height={300} alt="Making Chocolates" className="w-full h-[300px] object-cover rounded-lg shadow-lg" />
                        </div>
                        <div>
                            <Image src={ThirdChocolateProduct} width={1000} height={300} alt="Making Chocolates" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>

                <div className="md:ml-20 ml-0 md:col-span-1 col-span-2">
                    <h2 className="md:text-8xl text-5xl font-bold text-amber-900">Compra Chocolates Goyito</h2>
                    <p className="md:text-xl text-xs font-sans md:mt-10 mt-5">
                        Completa el formulario y nos pondremos en contacto contigo en la brevedad.
                    </p>
                    {isSubmitted && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <strong className="font-bold">¡Éxito!</strong>
                        <span className="block sm:inline"> Tu solicitud ha sido enviada correctamente.</span>
                    </div>}
                    <form onSubmit={handleSubmit(onSubmit)} className="p-10 md:mt-10 mt-5 bg-white border border-gray-200 rounded-lg shadow-xl space-y-6">
                        <div className="w-full">
                            <label htmlFor="fullName" className="block text-xl font-medium text-gray-700">Nombre Completo</label>
                            <input type="text" {...register('fullName')} id="fullName" className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border rounded" />
                            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block text-xl font-medium text-gray-700">Correo</label>
                            <input type="email" {...register('email')} id="email" autoComplete="email" className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border rounded" />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="w-full">
                            <label htmlFor="location" className="block text-xl font-medium text-gray-700">Dirección</label>
                            <input type="text" {...register('location')} id="location" autoComplete="location" className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border rounded" />
                            {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full">
                            <div className="w-full">
                                <label htmlFor="phone" className="block text-xl font-medium text-gray-700">Teléfono</label>
                                <input type="tel" placeholder="999-999-999" {...register('phone')} pattern="[0-9]{9}" maxLength={9} id="phone" autoComplete="phone" className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border rounded" />
                                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                            </div>
                            <div className="w-full">
                                <label htmlFor="date" className="block text-xl font-medium text-gray-700">Fecha</label>
                                <input type="date" {...register('date')} id="date" autoComplete="date" className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border rounded" />
                                {errors.date && <p className="text-red-500">{errors.date.message}</p>}
                            </div>
                            <div className="w-full">
                                <label htmlFor="time" className="block text-xl font-medium text-gray-700">Hora</label>
                                <input type="time" {...register('time')} id="time" autoComplete="time" className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border rounded" />
                                {errors.time && <p className="text-red-500">{errors.time.message}</p>}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full">
                            <div className="w-full">
                                <label htmlFor="typeOfChocolate" className="block text-xl font-medium text-gray-700">Tipo de Chocolate</label>
                                <select {...register('typeOfChocolate')} id="typeOfChocolate" autoComplete="typeOfChocolate" className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border rounded">
                                    <option value="Seleccionar">Seleccionar</option>
                                    <option value="Chocolate con Maní">Chocolate con Maní</option>
                                    <option value="Chocolate con Ajonjolí">Chocolate con Ajonjolí</option>
                                    <option value="Chocolate">Chocolate</option>
                                </select>
                                {errors.typeOfChocolate && <p className="text-red-500">{errors.typeOfChocolate.message}</p>}
                            </div>
                            <div className="w-full">
                                <label htmlFor="quantityOfChocolate" className="block text-xl font-medium text-gray-700">Cantidad</label>
                                <select {...register('quantityOfChocolate')} id="quantityOfChocolate" autoComplete="quantityOfChocolate" className="mt-1 focus:ring-amber-600 focus:border-amber-600 block w-full shadow-sm sm:text-sm border-gray-300 border rounded">
                                    <option value="Seleccionar">Seleccionar</option>
                                    <option value="1">1 Chocolate</option>
                                    <option value="2">2 Chocolate</option>
                                    <option value="3">3 Chocolate</option>
                                </select>
                                {errors.quantityOfChocolate && <p className="text-red-500">{errors.quantityOfChocolate.message}</p>}
                            </div>
                        </div>
                        <button type="submit" disabled={!isFormValid || isLoading} className={`w-full mt-10 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${isFormValid ? 'bg-amber-800 hover:bg-amber-900' : 'bg-gray-400 cursor-not-allowed'}`}>
                            {isLoading ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;
