import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../Type";
import YourStackCard from "./YourStackCard";

interface YourStackProps {
    number: number;
    setnumber: Dispatch<SetStateAction<number>>;
    isSelected: TechnologyType[];
    setiselected: Dispatch<SetStateAction<TechnologyType[]>>;
}

const YourStack = ({ number, setnumber, isSelected, setiselected }: YourStackProps) => {
    return (

        <>
            {
                number === 0 ? <div>

                    <div className="h-fit sticky top-24">

                        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">


                            <div className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] p-5">
                                <h3 className="text-2xl font-bold text-white">
                                    Your Stack
                                </h3>

                                
                            </div>


                            <div className="p-5">

                                <div className="border-2 border-dashed border-pink-200 rounded-xl p-8 text-center">

                                    <div className="w-16 h-16 mx-auto rounded-full bg-pink-50 flex items-center justify-center text-3xl">
                                        🚀
                                    </div>

                                    <h4 className="mt-4 text-lg font-semibold text-[#0F172A]">
                                        No Technology Selected
                                    </h4>

                                    <p className="mt-2 text-sm text-gray-500">
                                        Click "Add to Stack" on any technology card.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>






                </div>
                    : <YourStackCard
                        number={number}
                        setnumber={setnumber}
                        isSelected={isSelected}
                        setiselected={setiselected}

                    ></YourStackCard>
            }
        </>


    );

};

export default YourStack;