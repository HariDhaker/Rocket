import React from 'react'

const Articles = () => {
  return (
    <>
      <main id='article' className='max-w-4xl mx-auto'>
      <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12">
      <article className="sm:w-1/2">
      <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white"> We Boldy Go <span className="text-indigo-700 dark:text-indigo-400">Where No Rocket </span>Has Gone Before...</h2>
      <p className="max-w-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
        Wr're building rockets for the next century today.From the moon to Mars.jupiter and Beyond...
      </p>
      <p className="max-w-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">Think Acme Rockets.</p>
      <p className="max-w-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"></p>
      </article>
        <img className='w-1/2' src="https://th.bing.com/th/id/R.8fbc97732f43a547ee10aea8198a78d7?rik=BV%2fLXdWTwvuwng&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f9%2fV%2fN%2fF%2fC%2fQ%2frocket-hi.png&ehk=f9hQVxP3bjFXpnfzGgs7iUeoi40wT3e4hWLdHoNTwC0%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </section>
        <hr className="mx-auto bg-black dark:be-white w-1/2" />
      </main>
    </>
  )
}

export default Articles
