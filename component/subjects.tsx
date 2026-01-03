import Image from "next/image"
import sat from "../public/sat.png"
import ap from "../public/ap.png"
import gcse from "../public/gcse.png"
import ib from "../public/Ib.png"
import alevel from "../public/alevel.jpg"


export default function Subjects() {
  return (
    <div className=" pt-16 align-center sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image src={sat} alt="SAT"
            width={600}
            height={150}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image src={ap} alt="AP"
            width={600}
            height={150}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image src={gcse} alt="GCSE"
            width={600}
            height={150}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image src={ib} alt="IB"
            width={600}
            height={150}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image src={alevel} alt="A-Level"
            width={600}
            height={150}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}
