import { MdOutlineDeleteForever } from "react-icons/md";
import type { TechnologyType } from "../Type";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface SelectedStackCardProps {
    selecteds: TechnologyType;
    isSelected: TechnologyType[];
    setiselected: Dispatch<SetStateAction<TechnologyType[]>>;
    number: number;
    setnumber: Dispatch<SetStateAction<number>>;
}

const SelectedStackCard = ({ selecteds, isSelected, setiselected, number, setnumber }: SelectedStackCardProps) => {

    const handleRemoveSelectedTechonolgy = () => {
        const RemoveFilter = isSelected.filter((isSelected) => isSelected.name != selecteds.name)
        setiselected(RemoveFilter);
        toast.success(`🚀 ${selecteds.name} Removed to your stack!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        const discrijeNumber = number - 1;
        setnumber(discrijeNumber)
    }
    return (
        <div className="h-fit sticky top-24">
            <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                            <img
                                src={selecteds.icon}
                                alt={selecteds.name}
                                className="w-6 h-6"
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold text-sm text-gray-800">
                                {selecteds.name}
                            </h3>

                            <p className="text-xs text-gray-500">
                                {selecteds.category}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => handleRemoveSelectedTechonolgy()}
                        className="text-red-500 hover:text-red-700 transition-colors">
                        <MdOutlineDeleteForever size={20} />
                    </button>

                </div>

            </div>
            
        </div>
    );
};

export default SelectedStackCard;