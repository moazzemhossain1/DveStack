import { use } from "react";
import type { TechnologyType } from "../../Type";
import TechnologyCard from "./TechnologyCard";
import YourStack from "../YourStack";

interface TechnologysProps {
    getDataPromise: Promise<TechnologyType[]>;
}

const Technologys = ({ getDataPromise }: TechnologysProps) => {
    const technologys = use(getDataPromise);

    return (
        <div className="container mx-auto px-4 py-10">

            
            <div className="text-center mb-10">
                <h3 className="lg:text-3xl text-left md:text-4xl font-extrabold text-[#0F172A]">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h3>

                <p className="mt-3 lg:text-left text-[#64748B]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

           
            <div className="grid lg:grid-cols-4 gap-6">

               
                <div className="lg:col-span-3">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

                        {technologys.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                            />
                        ))}

                    </div>
                </div>

                <div>
                    <YourStack></YourStack>
                </div>

            </div>

        </div>
    );
};

export default Technologys;