import {getChocolates} from "@/lib/actions";

const Administrative = async () => {
    const chocolates =  await getChocolates();
    let chocoValues = Object.values(chocolates);
    let chocoKeys = Object.keys(chocolates);

    return (
        <>
            <div className={'bg-amber-700 min-h-screen w-full relative overflow-x-auto flex justify-center'}>
                <table className={"w-[500px] my-28 text-sm text-left text-gray-500 "} >
                    <thead className={"text-xs text-gray-700 uppercase bg-gray-50"}>
                        <tr>
                            <th scope={'col'} className={'px-6 py-3'}>Nombre</th>
                            <th scope={'col'} className={'px-6 py-3'}>Correo Electrónico</th>
                            <th scope={'col'} className={'px-6 py-3'}>Ubicación</th>
                            <th scope={'col'} className={'px-6 py-3'}>Celular</th>
                            <th scope={'col'} className={'px-6 py-3'}>Fecha</th>
                            <th scope={'col'} className={'px-6 py-3'}>Tipo de Chocolate</th>
                            <th scope={'col'} className={'px-6 py-3'}>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        chocoValues.map(chocoValue => (
                            <tr className={"bg-white border-b border-gray-200 hover:bg-gray-50"} key={chocoValue._id}>
                                <td className={'px-6 py-4'}>{chocoValue.fullName}</td>
                                <td className={'px-6 py-4'}>{chocoValue.email}</td>
                                <td className={'px-6 py-4'}>{chocoValue.location}</td>
                                <td className={'px-6 py-4'}>{chocoValue.phone}</td>
                                <td className={'px-6 py-4'}>{chocoValue.date}</td>
                                <td className={'px-6 py-4'}>{chocoValue.typeOfChocolate}</td>
                                <td className={'px-6 py-4'}>{chocoValue.time}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Administrative;