import type { Metadata } from "next";
import React from "react";
import '../styles/globals.css';
export const metadata: Metadata  = {
    title: 'Chocolate Goyito',
    description: 'Prueba los mejores chocolates de todo el mundo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <main>
                    { children }
                </main>
            </body>
        </html>
    )
}