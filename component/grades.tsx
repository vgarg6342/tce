import primary from '../public/primary.svg';
import Image from 'next/image';
import middle from '../public/middle.svg';
import secondary from '../public/secondary.svg';
import advance from '../public/advance.svg';
import proffesional from '../public/proffesional.svg';

export default function Example() {
  return (
   <div className="py-24 sm:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg/8 font-semibold">Math tutoring for</h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      
      {/* Primary */}
      <div className="flex flex-col items-center col-span-2 lg:col-span-1">
        <Image
          alt="Transistor"
          src={primary}
          width={158}
          height={48}
          className="max-h-12 w-full object-contain"
        />
        <p className="mt-2 text-xl text-gray-500 text-center">Primary (1 to 5)</p>
      </div>

      {/* Middle */}
      <div className="flex flex-col items-center col-span-2 lg:col-span-1">
        <Image
          alt="Reform"
          src={middle}
          width={158}
          height={48}
          className="max-h-12 w-full object-contain"
        />
        <p className="mt-2 text-xl text-gray-500 text-center">Middle (6 to 8)</p>
      </div>

      {/* Secondary */}
      <div className="flex flex-col items-center col-span-2 lg:col-span-1">
        <Image
          alt="Tuple"
          src={secondary}
          width={158}
          height={48}
          className="max-h-12 w-full object-contain"
        />
        <p className="mt-2 text-xl text-gray-500 text-center">Secondary (9 to 12)</p>
      </div>

      {/* Advance */}
      <div className="flex flex-col items-center col-span-2 sm:col-start-2 lg:col-span-1">
        <Image
          alt="SavvyCal"
          src={advance}
          width={158}
          height={48}
          className="max-h-12 w-full object-contain"
        />
        <p className="mt-2 text-xl text-gray-500 text-center">College Studnets</p>
      </div>

      {/* Professional */}
      <div className="flex flex-col items-center col-span-2 sm:col-start-2 lg:col-span-1">
        <Image
          alt="Statamic"
          src={proffesional}
          width={158}
          height={48}
          className="max-h-12 w-full object-contain"
        />
        <p className="mt-2 text-xl text-gray-500 text-center">For working Professionals</p>
      </div>
      
    </div>
  </div>
</div>

  )
}
