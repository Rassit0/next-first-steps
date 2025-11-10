import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['About Page', 'Mauricio', 'información', '...'], // Arreglo de palabras clave para SEO, es decir para los motores de busqueda
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">
                About Page
            </span>
        </>
    );
}