import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-[8%]  bg-accent'>
        <div className='flex justify-between flex-wrap max-md:text-center pt-12'>
            <a href="/" className='footerLinks max-sm:w-full'>GESHWISTER OETKER</a>
            <a href="/about" className='footerLinks'>ABOUT OETKER COLLECTION</a>
            <a href="/careers" className='footerLinks'>CAREERS</a>
            <a href="/press" className='footerLinks'>PRESS</a>
            <a href="/policy" className='footerLinks'>PRIVACY POLICY</a>
            <a href="/cookies" className='footerLinks'>COOKIES</a>
            <a href="/legal" className='footerLinks'>LEGAL</a>
            <a href="/compliance" className='footerLinks'>COMPLIANCE</a>
            <a href="/copyright" className='footerLinks'>COPYRIGHT</a>

        </div>
        {/* <div className='flex justify-center mt-3'>
            <a href="#" className='footerLinks'>COPYRIGHT</a>
        </div> */}
        <div className='flex justify-center mt-8 text-white text-lg font-cardo'>
            <a className='hover:underline hover:decoration-secondary' href="#">#MasterpieceHotels</a>
        </div>
        <div className='flex flex-col justify-center font-inter text-center text-sm max-md:text-[12px] text-secondary mt-4 pb-20'>
            <a className='hover:underline' href="/">www.oetkercollection.com</a>
            <p>Oetker Collection, Schillerstraße 6, 76530 Baden-Baden, Germany</p>
            <p>Oetker Hotel Management Company GmbH</p>

        </div>

    </div>
  )
}

export default Footer