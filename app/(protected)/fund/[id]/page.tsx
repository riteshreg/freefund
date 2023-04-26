import Card from "@/libsComponents/Card";
import HorizontalLine from "@/libsComponents/HorizontalLine";
import { TagIcon, UserIcon,ArrowTrendingUpIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const link =
  "https://images.gofundme.com/1lymaHvJQbGDItja18xJEZJ9V5g=/720x405/https://d2g8igdw686xgo.cloudfront.net/72477863_1682268262801439_r.jpeg";

export default function IndividualFundingPage() {
  return (
    <div className="pb-20">
      <div className="max-w-6xl mt-10 mx-auto ">
        <h1 className="text-3xl font-semibold">Jacob Lewis</h1>
        <div className="flex  mt-5 ">
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
              <p className="line max-w-[95%]">
                Jacob Lewis
                As the Pokémon Community of Houston, we are raising funds in honor of Jacob Lewis. He is the son of Steve Lewis, a prominent leader within the Houston Pokémon scene.

                Jacob Lewis and his sister were returning from Taylor Swift’s Era Tour concert in Houston. On the way home, their car had stalled. Jacob at once started to push the car when he was tragically hit and killed by a drunk driver.
                News report: https://www.click2houston.com/news/local/2023/04/24/suspect-arrested-after-man-leaving-taylor-swift-concert-struck-and-killed-pushing-disabled-vehicle-on-southwest-freeway/

                Jacob Lewis spent many years playing the Pokemon TCG in the Houston area. He had completed the World Championships, the highest-level event, for many years. Because of this, he has inspired many others to strive for more.

                Steve is one of the trusted and knowledgeable people within Houston regarding Pokémon. A true leader of the community. It hurts us to see him suffer such a loss. We only wish to help him honor the memory of his son by raising money for flowers and funeral costs. That his Pokémon family is here to help.
              </p>
            </div>
            <div className="flex space-x-6 font-semibold px-2 my-5">
              <button className="bg-[#fdb72f] w-full py-3 px-8 rounded-lg">
                Donate
              </button>
              <button className="bg-white border-2 border-[#fdc75c] outline-2 outline-green-500 w-full py-3 px-8 rounded-lg">
                Share
              </button>
            </div>
            <HorizontalLine />
          </div>
          <div className="w-[30%]">
            <Card>
              <div>
                <div className="flex items-center ">
                  <h1 className="text-2xl ">$123,587</h1>
                  <p className="text-sm ml-1">USD raised of $75,000 goal</p>
                </div>
                <div className="px-2 space-y-3 mt-5">
                  <button className="bg-[#fdb72f] w-full py-3 px-8 rounded-lg">
                    Donate
                  </button>
                  <button className=" bg-[#faa232] outline-2 outline-green-500 w-full py-3 px-8 rounded-lg">
                    Share
                  </button>
                </div>
                <div className="flex items-center my-4 space-x-2 mx-4">
                  <div className="w-fit p-2 rounded-full bg-[#f0eaf4]">
                <ArrowTrendingUpIcon className="h-7 text-[#7a409b]"/>
                  </div>
                  <h1>
                7,613 people just donated
                  </h1>
                </div>
                <HorizontalLine/>
                <div className="flex space-x-4 py-3 ">
                  <div className="bg-[#f1f1f1] rounded-full min-w-[3rem] flex justify-center items-center ">
                  <UserIcon className="h-6"/>
                  </div>
                  <div className="flex flex-col">
                    <h1>Ritesh Khadka</h1>
                    <div className="flex  items-center space-x-2">
                      <h1 className="font-semibold text-sm">$1000</h1>
                      <p>•</p>
                      <Link href={'#'} className="underline text-sm">Top Donation</Link>
                    </div>
                  </div>
                </div>
                
                  <HorizontalLine/>
                <div className="flex space-x-4 py-3 ">
                  <div className="bg-[#f1f1f1] rounded-full min-w-[3rem] flex justify-center items-center ">
                  <UserIcon className="h-6"/>
                  </div>
                  <div className="flex flex-col">
                    <h1>Ritesh Khadka</h1>
                    <div className="flex  items-center space-x-2">
                      <h1 className="font-semibold text-sm">$1000</h1>
                      <p>•</p>
                      <Link href={'#'} className="underline text-sm">Top Donation</Link>
                    </div>
                  </div>
                </div>


                <HorizontalLine/>
                <div className="flex space-x-4 py-3 ">
                  <div className="bg-[#f1f1f1] rounded-full min-w-[3rem] flex justify-center items-center ">
                  <UserIcon className="h-6"/>
                  </div>
                  <div className="flex flex-col">
                    <h1>Ritesh Khadka</h1>
                    <div className="flex  items-center space-x-2">
                      <h1 className="font-semibold text-sm">$1000</h1>
                      <p>•</p>
                      <Link href={'#'} className="underline text-sm">Top Donation</Link>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-4">
                  <button className="border-2 border-[#20b36f] rounded-md px-4 w-[30%] py-1">see all</button>
                  <button className="border-2 flex items-center justify-around border-[#525252]  rounded-md w-[70%] px-4 py-1">
                    <StarIcon className="h-7 text-gray-600"/>
                    See top donations
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
