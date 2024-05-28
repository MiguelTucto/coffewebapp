import Hero from "@/sections/hero";
import About from "@/sections/about";
import Plus from "@/sections/plus";
import Product from "@/sections/product";
import Category from "@/sections/category";
import Form from "@/sections/form";
import Footer from "@/sections/footer";

export default function Home() {
    return(
        <>
            <section className={'min-h-screen relative'}>
                <Hero/>
            </section>
            <section className={'md:h-[500px] h-[200px]'}>
                <Product/>
            </section>
            <section className={'min-h-screen'}>
                <About/>
            </section>
            <section className={'min-h-screen'}>
                <Plus/>
            </section>
            <section className={'min-h-screen'}>
                <Category/>
            </section>
            <section className={'min-h-screen'}>
                <Form/>
            </section>
            <section className={'h-[300px] bg-gradient-to-l from-amber-700 to-amber-200'} id={'footer'}>
                <Footer/>
            </section>

        </>
    )
}