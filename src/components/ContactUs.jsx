import Button from './Button'

const ContactUs = () => {
  return (
    <section className="bg-secondary">
        <div className="primary-container py-16">
            <div className="bg-[#D3D7E5] p-8 md:p-16 rounded-lg flex flex-col md:flex-row items-center 
            gap-16">
                <div className='w-full md:w-1/4'>
                    <img 
                        src="src/assets/Logo2.png" 
                        alt="logo" 
                        className='w-full'
                    />
                </div>
                <div className='w-full md:w-3/4 space-y-4'>
                    <h3 className='font-bold text-3xl'>Experience you can trust</h3>
                    <p className='text-sm'>
                        We are a team of professionals that have over 40 years experience in the real
                         estate industry in South Florida and we look forward to servicing your community's 
                         needs.
                    </p>
                    <Button 
                        label='Contact Us'
                        className='bg-chevron text-white px-6 py-2 rounded-md'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs