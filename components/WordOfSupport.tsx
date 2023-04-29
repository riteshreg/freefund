import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function WordOfSupport(){
    return(
        <div className="my-5">
            <div className="flex gap-1">
                <div className="bg-green-100 text-green-700 rounded-full h-10 w-10 p-1 flex justify-center items-center">
                <UserCircleIcon className="h-24"/>
                </div>
                <div>
                    <h1>Usman Shah</h1>
                    <div>$1250 • 2 hrs</div>
                    <div className="max-w-[80%] my-2 line-clamp-3">
                    The donation was given by the members of Madison Avenue Church of Christ, Wichita, Kansas. Our thoughts and prayers are with you and your family.
                    </div>
                </div>
            </div>
        </div>
    )
}