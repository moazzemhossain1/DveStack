import { use } from "react";
import type { TechnologyType } from "../../Type";
import TechnologyCard from "./TechnologyCard";

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

            {/* Main Layout */}
            <div className="grid lg:grid-cols-4 gap-6">

                {/* Technology Cards */}
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

                {/* Your Stack */}
                <div className="h-fit sticky top-24">

                    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] p-5">
                            <h3 className="text-2xl font-bold text-white">
                                Your Stack
                            </h3>

                            <p className="text-sm text-white/80 mt-1">
                                Selected technologies
                            </p>
                        </div>

                        {/* Content */}
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

        </div>
    );
};

export default Technologys;