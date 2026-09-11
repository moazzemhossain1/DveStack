import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../Type";
import SelectedStackCard from "./SelectedStackCard";
import { toast } from "react-toastify";


interface stacCardPropas {
    number: number;
    setnumber: Dispatch<SetStateAction<number>>;
    isSelected: TechnologyType[];
    setiselected: Dispatch<SetStateAction<TechnologyType[]>>;
}
const YourStackCard = ({ number, setnumber, isSelected, setiselected }: stacCardPropas) => {
    const handleRemoveAll = () => {
        setiselected([]);
        setnumber(0);

        toast.success("🚀 All technologies removed!", {
            position: "top-center",
            autoClose: 2000,
        });
    };
    return (
        <div>
            <div className="h-fit sticky top-24">

                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">


                    <div className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] p-5">
                        <h3 className="text-2xl font-bold text-white">
                            Your Stack
                        </h3>

                        <p className="text-sm text-white/80 mt-1">
                            {number} Selected technologies
                        </p>
                    </div>


                    <div >

                        <div className="border-2 border-dashed border-pink-200 rounded-xl p-2 text-center flex flex-col gap-3">



                            {
                                isSelected.map((selecteds) => <SelectedStackCard
                                    selecteds={selecteds}
                                    isSelected={isSelected}
                                    setiselected={setiselected}
                                    number={number}
                                    setnumber={setnumber}
                                ></SelectedStackCard>)

                            }
                            <div>
                                <button
                                onClick={()=> handleRemoveAll()}

                                 className={`rounded-lg w-full px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 bg-gradient-to-r from-[#F97316] to-[#EC4899] hover:scale-105 hover:shadow-lg`}>
                                    Remove All

                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default YourStackCard;