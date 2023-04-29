import React from "react";
import Image from "next/image";
function Page() {
  return (
    <div>
      <div className="overflow-hidden">
        <Image
          src="/images/index.jpg"
          alt="index_image"
          width={2000}
          height={1500}
        />
      </div>
    </div>
  );
}

export default Page;
