import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <section className="bg-gray-100">
        <div className="primary-container border-t border-gray-300 py-16 flex flex-col md:flex-row items-center gap-16">
            <div className="">
                <div className="relative">
                    <img 
                        src="src/assets/Image6.png" 
                        alt="image" 
                        className="w-[100%] "
                    />
                    <Link  to='#'
                        className="p-4 rounded-full bg-chevron absolute right-1 bottom-2 hover:translate-x-1
                        transition-transform duration-300 ease-in-out cursor-pointer"
                    >
                        <GoChevronRight className="text-white w-5 h-5 " />
                    </Link>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-lg leading-none text-gray-950">
                        Rental Property <br /> Management
                    </p>
                </div>
            </div>
            <div className="">
                <div className="relative">
                    <img 
                        src="src/assets/Image5.png" 
                        alt="image" 
                        className="w-[100%] "
                    />
                    <Link  to='#'
                        className="p-4 rounded-full bg-chevron absolute right-1 bottom-2 hover:translate-x-1
                        transition-transform duration-300 ease-in-out cursor-pointer"
                    >
                        <GoChevronRight className="text-white w-5 h-5 " />
                    </Link>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-lg leading-none text-gray-950">
                        Homeowner <br /> Associations
                    </p>
                </div>
            </div>
            <div className="">
                <div className="relative">
                    <img 
                        src="src/assets/Image7.png" 
                        alt="image" 
                        className="w-[100%] "
                    />
                    <Link  to='#'
                        className="p-4 rounded-full bg-chevron absolute right-1 bottom-2 hover:translate-x-1
                        transition-transform duration-300 ease-in-out cursor-pointer"
                    >
                        <GoChevronRight className="text-white w-5 h-5 " />
                    </Link>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-lg leading-none text-gray-950">
                        Condominium <br /> Associations
                    </p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Cards