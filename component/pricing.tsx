import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
    {
        name: 'Primary ',
        id: 'tier-primary',
        href: '#contact',
        priceMonthly: '$25',
        description: "Perfect for young learners building a strong foundation in math.",
        features: ['60 minutes Lesson', 'Material and Support', 'Progress Check every Month', 'Cancel Anytime'],
    },
    {
        name: 'Middel School',
        id: 'tier-enterprise',
        href: '#contact',
        priceMonthly: '$30',
        description: 'Perfect for budding students aiming to improve their math skills.',
        features: ['60 minutes Lesson', 'Material and Support', 'Progress Check every Month', 'Cancel Anytime'],
    },
    {
        name: 'High School',
        id: 'tier-HighSchool',
        href: '#contact',
        priceMonthly: '$35',
        description: 'For serious students aiming for top grades and exam success.',
        features: ['60 minutes Lesson', 'Material and Support', 'Progress Check every Month', 'Cancel Anytime'],
    },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            {/* Background Decoration */}
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>

            {/* Header */}
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                    Choose the right plan for you
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                Education is an investment in your future. Our pricing plans are designed to provide flexible options that cater to different learning needs and budgets. Whether you're looking for occasional tutoring or a comprehensive learning experience, we have a plan that's right for you.
            </p>

            {/* Grid Layout */}
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 sm:mt-20">
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                    >
                        <div>
                            <h3 id={tier.id} className="text-base/7 font-semibold text-indigo-600">
                                {tier.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
                                <span className="text-5xl font-semibold tracking-tight text-gray-900">
                                    {tier.priceMonthly}
                                </span>
                                <span className="text-base text-gray-500">/Lesson</span>
                            </p>
                            <p className="mt-6 text-base/7 text-gray-600">
                                {tier.description}
                            </p>
                            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-indigo-600"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={'/contactus'}
                            aria-describedby={tier.id}
                            className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
                        >
                            Contact Us today
                        </a>
                    </div>
                ))}
            </div>
            <p className="text-center mt-20   "> Not in Any of the above category? contact us for custom quote</p>
        </div>
    )
}