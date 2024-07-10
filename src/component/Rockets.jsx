import React from 'react'

const Rockets = () => {
  return (
    <>
      <section id="rockte" className="p-6 my-12 scroll-mt-20 scroll-smooth">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Rocktes</h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-black py-6 px-2 rounded-3xl shadow-lx">
            <img src="https://img.freepik.com/premium-vector/astronaut-black-white-vector-illustration_801978-13353.jpg" alt="" className="mb-6" />
            <h3 className="text-3xl text-center tect-slate-900 dark:text-white">Explorer</h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-700 dark:text-slate-800">$</p>
            <p className="sm:hidden mt-2 text-2xl text-center text-slate-700 dark:text-slate-800">Affordable Rocket</p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-black py-6 px-2 rounded-3xl shadow-lx">
            <img src="https://img.freepik.com/premium-vector/astronaut-black-white-vector-illustration_801978-13353.jpg" alt="" className="mb-6" />
            <h3 className="text-3xl text-center tect-slate-900 dark:text-white">Explorer</h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-700 dark:text-slate-800">$$</p>
            <p className="sm:hidden mt-2 text-2xl text-center text-slate-700 dark:text-slate-800">Affordable Rocket</p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-black py-6 px-2 rounded-3xl shadow-lx">
            <img src="https://img.freepik.com/premium-vector/astronaut-black-white-vector-illustration_801978-13353.jpg" alt="" className="mb-6" />
            <h3 className="text-3xl text-center tect-slate-900 dark:text-white">Explorer</h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-700 dark:text-slate-800">$$$</p>
            <p className="sm:hidden mt-2 text-2xl text-center text-slate-700 dark:text-slate-800">Affordable Rocket</p>
            </li>
        </ul>
      </section>
      <hr className="mx-auto bg-black dark:be-white w-1/2" />
     
    </>
  )
}

export default Rockets
