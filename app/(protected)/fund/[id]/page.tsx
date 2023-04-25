import HorizontalLine from "@/libsComponents/HorizontalLine";
import { TagIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const link =
  "https://images.gofundme.com/1lymaHvJQbGDItja18xJEZJ9V5g=/720x405/https://d2g8igdw686xgo.cloudfront.net/72477863_1682268262801439_r.jpeg";

export default function IndividualFundingPage() {
  return (
    <div>
      <div className="max-w-6xl mt-10 mx-auto">
        <h1 className="text-3xl font-semibold">Jacob Lewis</h1>
        <div className="flex">
          <div className="w-[70%] mt-5 ">
            <Image
              className="h-96 w-[90%] rounded-xl border border-gray-400 "
              src={link}
              alt="user"
              height={1024}
              width={1024}
            />
            <div className="flex my-4 px-2 py-1 items-center">
              <UserIcon className="h-7 bg-green-200 text-green-500 rounded-full" />
              <h3 className="ml-7">Gauradaha-7, Jhapa, Koshi, Nepal</h3>
            </div>
            <HorizontalLine />
            <div className="flex space-x-5 py-3 items-center">
              <h4>Created 1 day ago</h4>
              <h3 className="text-2xl">•</h3>
              <div className="flex space-x-2">
                <TagIcon className="h-6 text-gray-600" />
                <Link className="underline" href={"#"}>
                  Funerals & Memorials
                </Link>
              </div>
            </div>
              <HorizontalLine />
              <div className="py-3">
                <p>
                Jacob Lewis
As the Pokémon Community of Houston, we are raising funds in honor of Jacob Lewis. He is the son of Steve Lewis, a prominent leader within the Houston Pokémon scene.

Jacob Lewis and his sister were returning from Taylor Swift’s Era Tour concert in Houston. On the way home, their car had stalled. Jacob at once started to push the car when he was tragically hit and killed by a drunk driver.
News report
                </p>
              </div>
          </div>
          <div className="w-[30%]"></div>
        </div>
      </div>
    </div>
  );
}
