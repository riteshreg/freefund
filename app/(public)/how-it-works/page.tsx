import Image from "next/image";
export default function WorkingPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 m text-center mt-20 ">
        <div className="p-5">
          <h1 className="text-4xl font-bold mb-6">How GoFundMe Works</h1>
          <p className=" text-slate-400 font-bold text-xl">
            GoFundMe is the best place to fundraise,whether you are an
            individual,group, or organixation
          </p>
        </div>
        <div className="h-[20rem] bg-[#fbf8f6] min-w-full ">h</div>
      </div>

      <div className="grid lg:grid-cols-3 md:gird-cols-2 grid-col-1 gap-6 py-10 px-6  my-20 place-content-center">
        <div>
          <div className="flex gap-8 justify-center">
            <div>
              <Image
                src="https://www.gofundme.com/c/wp-content/themes/sage-8.5.4/assets/svg/info-icons/add-people.svg"
                alt="add people"
                width={50}
                height={50}
              />
            </div>
            <div>
              <ol className="text-xl" style={{ listStyleType: "circle" }}>
                <span className="font-bold text-6l">
                  1.Start your fundraiser
                </span>

                <li>rbvwr</li>
                <li>rbvwr</li>
                <li>dbwd</li>
                <li>f bser </li>
                <li>breb</li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-10 justify-center">
            <div>
              {" "}
              <Image
                src="https://www.gofundme.com/c/wp-content/themes/sage-8.5.4/assets/svg/info-icons/handout.svg"
                alt="hands out"
                width={50}
                height={50}
              />
            </div>
            <div>
              <span className="font-bold text-xl">2.Share with friends</span>
              <ol className="text-xl" style={{ listStyleType: "circle" }}>
                <li>rbvwr</li>
                <li>rbvwr</li>
                <li>dbwd</li>
                <li>f bser </li>
                <li>breb</li>
              </ol>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-10 justify-center">
            <div>
              {" "}
              <Image
                src="https://www.gofundme.com/c/wp-content/themes/sage-8.5.4/assets/svg/info-icons/dashboard.svg"
                alt="dashboard"
                width={50}
                height={50}
              />
            </div>
            <div>
              <span className="font-bold text-xl">3.Manage donations</span>
              <ol className="text-xl" style={{ listStyleType: "circle" }}>
                <li>rbvwr</li>
                <li>rbvwr</li>
                <li>dbwd</li>
                <li>f bser </li>
                <li>breb</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen bg-[#fbf8f6] ">h</div>
    </>
  );
}
