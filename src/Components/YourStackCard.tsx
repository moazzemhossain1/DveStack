import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../Type";
import SelectedStackCard from "./SelectedStackCard";


interface stacCardPropas {
    number: number;
    setnumber: Dispatch<SetStateAction<number>>;
    isSelected: TechnologyType[];
    setiselected: Dispatch<SetStateAction<TechnologyType[]>>;
}
const YourStackCard = ({ number,setnumber,isSelected,setiselected}: stacCardPropas) => {
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

                        <div className="border-2 border-dashed border-pink-200 rounded-xl p-8 text-center flex flex-col gap-3">

                         

                            {
                                isSelected.map((selecteds) => <SelectedStackCard
                                selecteds={selecteds}
                                 ></SelectedStackCard> )
                                
                            }
                            
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default YourStackCard;