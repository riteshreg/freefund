import PayNow from "@/components/PayNow";
import WordOfSupport from "@/components/WordOfSupport";
import Card from "@/libsComponents/Card";
import HorizontalLine from "@/libsComponents/HorizontalLine";
import {
  TagIcon,
  UserIcon,
  ArrowTrendingUpIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const link =
  "https://images.gofundme.com/yDMz0IUbo4m8NxEB3QBFY5OZepQ=/640x480/https://d2g8igdw686xgo.cloudfront.net/72546271_1682534329737438_r.jpeg";

export default function IndividualFundingPage() {
  return (
    <div className="pb-20">
      <div className="max-w-6xl mt-10 mx-auto ">
        <h1 className="text-3xl font-semibold">Jacob Lewis</h1>
        <div className="flex mt-5 max-w-full relative ">
          <div className="w-[70%]">
            <Image
              className="h-96 w-[95%] rounded-xl border border-gray-400 "
              src={link}
              alt="user"
              height={1024}
              width={1024}
            />
            <div className="flex my-4 px-2 py-1 items-center">
              <UserIcon className="h-7 bg-green-200 text-green-500 rounded-full" />
              <h3 className="ml-7">Gauradaha-7, Jhapa, Koshi, Nepal</h3>
            </div>
            <HorizontalLine limitWidth={true} />
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
            <HorizontalLine limitWidth={true} />
            <div className="py-3">
              <p className="line max-w-[95%]">
                Jacob Lewis As the Pokémon Community of Houston, we are raising
                funds in honor of Jacob Lewis. He is the son of Steve Lewis, a
                prominent leader within the Houston Pokémon scene. Jacob Lewis
                and his sister were returning from Taylor Swift’s Era Tour
                concert in Houston. On the way home, their car had stalled.
                Jacob at once started to push the car when he was tragically hit
                and killed by a drunk driver. News report:
                https://www.click2houston.com/news/local/2023/04/24/suspect-arrested-after-man-leaving-taylor-swift-concert-struck-and-killed-pushing-disabled-vehicle-on-southwest-freeway/
                Jacob Lewis spent many years playing the Pokemon TCG in the
                Houston area. He had completed the World Championships, the
                highest-level event, for many years. Because of this, he has
                inspired many others to strive for more. Steve is one of the
                trusted and knowledgeable people within Houston regarding
                Pokémon. A true leader of the community. It hurts us to see him
                suffer such a loss. We only wish to help him honor the memory of
                his son by raising money for flowers and funeral costs. That his
                Pokémon family is here to help.
              </p>
            </div>
            <div className="flex space-x-1 font-semibold px-2 my-5 max-w-[98%]">
              <button className="bg-[#fdb72f] w-full py-3 px-8 rounded-lg">
                Donate
              </button>
              <button className="bg-white border-2 border-[#fdc75c] outline-2 outline-green-500 w-full py-3 px-8 rounded-lg">
                Share
              </button>
            </div>
            <HorizontalLine limitWidth={true} />
            <div>
              <WordOfSupport />
              <WordOfSupport />
              <WordOfSupport />
              <WordOfSupport />
              <WordOfSupport />
            </div>
          </div>
          <div className="w-[30%]">
            <PayNow />
          </div>
        </div>
      </div>
    </div>
  );
}
