import React from 'react'
import { Link } from 'react-router-dom';
 const Navbar=()=>{
    return(
        <>
        <nav className="bg-teal-700 text-white sticky top-0 z-10">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center"><a href='#article' className='text-3xl font-medium scroll-mt-40'>🚀 Acme Rockets</a>
            <div>
                <button id="mob-open" className="text-3xl md:hidden cursor:pointer">&#9776;</button>
                <nav className="hidden md:block space-x-8 text-xl gap-1.5" aria-label='main'>
                     <a href='#rockte' className="hover:opecity-90">Our Rocket </a>
                     <a href='#testimonials' className="hover:opecity-90">Testimonials </a>
                     <a href='#contect' className="hover:opecity-90">Contect</a>
                     
                </nav>
            </div>
            </section>
            <section id="mob-menu" className="md:hidden absolute top-0 bg-black w-full text-5xl flex flex-col justify-content-center">
                <button className="text-8xl sefl-end px-6">&times;</button>
                <div className="flex flex-col min-h-screen items-center py-8" aria-label='mobile'>
                    <a href="#article" className='w-full tect-center py-6 hover:opacity-90'>Home</a>
                    <a href="#rockte" className='w-full tect-center py-6 hover:opacity-90'>Our Rockets</a>
                    <a href="#testimonials" className='w-full tect-center py-6 hover:opacity-90'>testomonial</a>
                    <a href="#contect" className='w-full tect-center py-6 hover:opacity-90'>Contect</a>
                </div>
            </section>
        </nav>
        </>
    )
 }
 export default Navbar;