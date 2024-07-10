import React from 'react'

const Contect = () => {
  return (
    <section id="contect" className="p-6 my-12 scroll-mt-20">
      <h2 className="text-4xl my-12 font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Number Likh</h2>
      <form action="submit" className='max-w-4xl mx-auto text-2xl sm:text-3xlflex flex-col items-left gap-4'>
      <label htmlFor="subject">Subject:</label>
      <input type="text" id='subject' name='subject' required minLength={3} maxLength={100} placeholder='Your Subject' className='w-full text-balck text-2xl sm:text-3xl p-3 rounded-xl boreder border-solid border-slate-900 dark:border-none'/>
      <label htmlFor="message">Message:</label>
      <textarea name="message" id="message" cols={30} rows={10} placeholder='Your Message' className='w-full text-balck text-2xl sm:text-3xl p-3 rounded-xl boreder border-solid border-slate-900 dark:border-none'></textarea>
      <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-700 text-white p-3 w-48 rounded-xl border order-solid border-slate-900 dark:border-none">Submit</button>
      </form>
    </section>
  )
}

export default Contect
