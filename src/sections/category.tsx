import FirstChocolateProduct from "../../public/images/firstchocolateproduct.jpg";
import SecondChocolateProduct from "../../public/images/secondchocolateproduct.jpg";
import ThirdChocolateProduct from "../../public/images/thirdchocolateproduct.jpg";
import Image from "next/image";

const Category = () => {
    return (
        <>
            <div className={'text-center'}>
                <h2 className={' text-8xl font-bold text-amber-900 '}>Nuestro Chocolates</h2>
                <div className={'flex flex-row w-full justify-between px-[200px] mt-20'}>
                    <div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                        <a href="#">
                            <Image src={'https://i.postimg.cc/yYLfDXv0/firstchocolateproduct.jpg'} height={750} width={450} alt={'Photo of Cacao and Fruits'}/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight">Noteworthy
                                    technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal ">Here are the biggest enterprise
                                technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <button
                                className={'py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 disabled:bg-blue-100 disabled:cursor-not-allowed '}>
                                Leer más
                            </button>
                        </div>
                    </div>
                    <div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex justify-between flex-col">
                        <a href="#">
                            <Image src={'https://i.postimg.cc/mgGrFCk2/secondchocolateproduct.jpg'} alt={'Photo of Cacao and Fruits'} height={750} width={450}/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight">Noteworthy
                                    technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal ">Here are the biggest enterprise
                                technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <button
                                className={'py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 disabled:bg-blue-100 disabled:cursor-not-allowed '}>
                                Leer más
                            </button>
                        </div>
                    </div>
                    <div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                        <a href="#">
                            <Image src={'https://i.postimg.cc/43sbwYLX/thirdchocolateproduct.jpg'} alt={'Photo of Cacao and Fruits'} height={750} width={450}/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight">Noteworthy
                                    technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal ">Here are the biggest enterprise
                                technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <button
                                className={'py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800 disabled:bg-blue-100 disabled:cursor-not-allowed '}>
                                Leer más
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category