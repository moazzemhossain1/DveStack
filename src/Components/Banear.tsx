import LogoBange from "../assets/banner-stack.png";

const Banear = () => {
    return (
        <div className="container mx-auto px-4 py-12 flex flex-col-reverse lg:flex-row justify-between items-center gap-10">

           
            <div className="space-y-5 text-center lg:text-left">

                <h3 className="text-[#0F172A] font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight">
                    Build Your Ideal
                    <br />
                    <span className="bg-gradient-to-r from-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h3>

                <p className="max-w-xl text-gray-600 text-base md:text-lg">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits
                    your next project.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

                    <button className="btn border-0 bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white rounded-lg">
                        Explore Technologies
                    </button>

                    <button className="btn btn-outline border-[#D81B7E] text-[#D81B7E] hover:bg-[#D81B7E] hover:text-white">
                        Learn More
                    </button>

                </div>
            </div>

         
            <div className="flex justify-center">
                <img
                    src={LogoBange}
                    alt="Stack Logo Banner"
                    className="w-full max-w-sm md:max-w-md lg:max-w-xl"
                />
            </div>

        </div>
    );
};

export default Banear;