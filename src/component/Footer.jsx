import React from 'react'

const Footer = () => {
  return (
    <div className='mt-6'>
      <footer id='footer' className="bg-teal-700 text-white text-xl">
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powred Products, Inc.</h2>
          555 Astro Way <br />  
          FairField,New Jersey 12334324 <br />
          Email: <a href="mailto:inquiries@acmerockets.com">inquiries@acmerockets.com</a> <br />
          Phone: <a href="tel:+15555555555">5555555555</a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label='footer'>
          <a href="#rockets" className='hover:opacity-90'>Our Rockets</a>
          <a href="#testimonials" className='hover:opacity-90'>Testimonials</a>
          <a href="#contact" className='hover:opacity-90'>contact</a>
        </nav>

      </section>
      </footer>
    </div>
  )
}

export default Footer
