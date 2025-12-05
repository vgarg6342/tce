import Image from "next/image";
import veena from '../public/veena.png';
import Pricing from "./component/pricing";
import Contactus from "./component/contactus";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Video } from "./component/video";

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]
export default function Home() {
  return (

    <div className="container mx-auto  px-4">
      <header>
        <section className="h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className=" flex flex-col justify-center items-start space-y-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full w-fit">
              IB Math Specialist
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">IB Mathematics</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Expert guidance for Analysis & Approaches (AA) and Applications & Interpretation (AI). Target a 7 with personalized strategies.
            </p>
            <button className="sm:justify-item-stretch px-8 py-3 text-white font-semibold bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-0.5">
              Start Learning Today
            </button>
          </div>
          <div className="flex  items-center w-full h-full">
            <Image src={veena} alt="veena" className="sm:w-1/1 md:w-3/4 h-auto object-contain" />
          </div>
        </section>
      </header>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg/8 text-gray-700">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
              pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Video />
      <Pricing />
      <Contactus />
    </div>




  )
}
