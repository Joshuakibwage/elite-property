 

const Elite = () => {
  return (
    <section className="bg-gray-100">
        <div className="primary-container py-16 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="font-bold text-2xl">
                    Reliable Property Management with Transparent Reporting and Consistent Communication
                </h2>
                <div className="space-y-4">
                    <p className="text-sm text-gray-800">
                        Elite Property Management (EPM) was created with the vision of:
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <img 
                                src="src/assets/Vector.svg" 
                                alt="vector" 
                            />
                            <p className="text-sm text-gray-800">Reliable property management</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <img 
                                src="src/assets/Files.svg" 
                                alt="files" 
                            />
                            <p className="text-sm text-gray-800">Transparent reporting</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <img 
                                src="src/assets/Megaphone.svg" 
                                alt="megaphone" 
                            />
                            <p className="text-sm text-gray-800">Consistent communication.</p>
                        </li>
                    </ul>
                    <p className="text-sm text-gray-800">
                        The founders of EPM saw that most Property Management Companies do not provide 
                        these simple, yet essential responsibilities to the Property Owners and Associations 
                        they were hired to manage.  
                    </p>
                </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
                <img 
                    src="src/assets/image 3.png" 
                    alt="" 
                />

                <div>
                    <p className="text-sm text-gray-800">
                        The founders started this company to change this perception and look forward to 
                        showing you how much better your Property or Association can be managed.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Elite