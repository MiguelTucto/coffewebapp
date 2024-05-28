import type { Metadata } from "next";
import React from "react";
import '../styles/globals.css';
import {Josefin_Sans} from "next/font/google";

export const metadata: Metadata  = {
    title: 'Chocolate Goyito',
    description: 'Prueba los mejores chocolates de todo el mundo.'
}

const sansita = Josefin_Sans({ weight: '400', subsets: ['latin']})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <main className={sansita.className}>
                    { children }
                </main>
            </body>
        </html>
    )
}