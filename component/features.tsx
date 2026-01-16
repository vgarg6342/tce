import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
    {
        name: 'Diagnostic and goal setting',
        description:
            'Start with a short call and an optional diagnostic to understand current level, curriculum (IB, AP, SAT, ACT, university), and target outcomes.',
        icon: CloudArrowUpIcon,
        bg: 'bg-cyan-100',
        image: 'diagnostic.png',
    },
    {
        name: 'Personalized plan and schedule',
        description:
            'A structured weekly plan is created, including topics, practice, and milestone check-ins, with flexible time zones for global students.',
        icon: LockClosedIcon,
        bg: 'bg-violet-100',
        image: 'schedule.png',
    },
    {
        name: 'Live, interactive lessons',
        description:
            'Sessions use clear explanations, step-by-step worked examples, and collaborative problem solving so students can ask questions in real time.',
        icon: ArrowPathIcon,
        bg: 'bg-green-100',
        image: 'class.png',
    },
    {
        name: 'Practice, feedback, and tracking',
        description:
            'Students receive targeted practice and feedback, with regular reviews before tests and exams to track progress and close gaps.',
        icon: FingerPrintIcon,
        bg: 'bg-lime-100',
        image: 'review.png',
    },
]

export default function Features() {
    return (
        <div className="bg-neutral-100 sm:py-18">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        4 Step Formula to achieve Maths Excellence
                    </p>
                    <p className="mt-6 text-lg/8 text-purple-700">
                        Everything you need to boost your maths skills and confidence, tailored to your goals.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className={`relative ${feature.bg} border-2 border-black p-6 rounded-lg  shadow-sm hover:shadow-lg transition-shadow duration-300`}>
                                <dt className="text-base/7 font-semibold text-gray-900 ">
                                    <div className="relative flex  items-center justify-center rounded-lg ">
                                        <Image src={`/${feature.image}`} alt={feature.name} width={400} height={400} className='mx-auto border-2 border-black rounded-lg' />
                                    </div>
                                    <h2 className='text-2xl '>{feature.name}</h2>
                                    
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
