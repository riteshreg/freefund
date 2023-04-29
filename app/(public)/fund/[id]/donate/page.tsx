import Card from "@/libsComponents/Card"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

export default function Donate(){
    return(
        <div>
            <div className="max-w-2xl mx-auto bg-gray-300">
            <Card>
                <div className="w-[90%] mx-auto">

            <div className="border border-gray-400 w-fit flex justify-center items-center rounded-lg px-2 py-1">
                <ChevronLeftIcon className="h-7"/>
                Return to fundraiser
            </div>

                </div>
            </Card>
            </div>

        </div>
    )
}