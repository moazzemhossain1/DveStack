import { useState, type Dispatch, type SetStateAction } from "react";
import type { TechnologyType } from "../../Type";
import { toast } from "react-toastify";

interface TechnologyCardProps {
    technology: TechnologyType;
    number: number;
    setnumber: Dispatch<SetStateAction<number>>;
}

const TechnologyCard = ({ technology, number, setnumber }: TechnologyCardProps) => {
    const [selected, setselected] = useState(false)
    const handleButtonSelected = () => {
        setselected(true)
        toast.success(`🚀 ${name} added to your stack!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        const InchrageNumber = number + 1;
        setnumber(InchrageNumber)

    }
    const {
        name,
        category,
        description,
        icon,
        rating,
        difficulty,
        badge,
    } = technology;
    return (
        <div>
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">


                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#D81B7E] via-[#EC4899] to-[#7C3AED]" />


                <div className="flex items-start justify-between gap-4">


                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 p-3 transition-transform duration-300 group-hover:scale-110">
                        <img
                            src={icon}
                            alt={name}
                            className="h-full w-full object-contain"
                        />
                    </div>


                    <span className="rounded-full bg-gradient-to-r from-[#D81B7E] to-[#7C3AED] px-3 py-1 text-xs font-semibold text-white">
                        {badge}
                    </span>
                </div>


                <div className="mt-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#0F172A]">
                            {name}
                        </h2>

                        <span className="text-sm font-semibold text-gray-500">
                            ⭐ {rating}
                        </span>
                    </div>

                    {/* Category */}
                    <span className="mt-2 inline-block text-sm font-semibold text-[#D81B7E]">
                        {category}
                    </span>


                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                        {description}
                    </p>
                </div>


                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">


                    <div className="flex gap-2 mb-2 items-center text-center">
                        <p className="text-xs text-gray-400">
                            Difficulty:
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                            {difficulty}
                        </p>
                    </div>





                </div>
                <div>
                    <button
                        onClick={() => handleButtonSelected()}
                        disabled={selected}
                        className={`rounded-lg w-full px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300
                             ${selected
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-[#F97316] to-[#EC4899] hover:scale-105 hover:shadow-lg"
                            }
                            
                            `


                        }
                    >
                        {selected === false ? " Add to Stack" : "Technology Selected"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;