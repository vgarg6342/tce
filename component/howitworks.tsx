export default function HowItWorks() {
    return (
        <div className="  md:grid md:grid-cols-2 gap-4 justify-center sm:mx-10 md:py-20 md:mx-auto">
            <div className=" block md:sticky self-start top-0 md:col-span-1 md:mx-20 lg:mx-40 pt-40 ">
                <h2 className="text-6xl font-bold md:mb-4">How It Works</h2>
                <p className="text-gray-700 mb-6">
                    Our tutoring process is designed to help you succeed in IB Mathematics. Here's how it works:
                </p>
            </div>
            <div className="mx-auto md:col-span-1 justify-content ">
                <div className="flex h-1/3 my-6 shadow-lg border rounded-2xl ">
                <a href="#" className=" bg-neutral-primary-soft block max-w-sm p-6  hover:bg-neutral-secondary-medium">
                    <h5 className="container mx-auto mb-3 text-6xl font-semibold text-center tracking-tight text-heading leading-8">Approch</h5>
                    <p className="text-body p-10">Here are the biggest technology acquisitions of 2025 so far, in reverse chronological order.</p>
                </a>
                </div>

                <div className=" flex h-1/3 my-6 shadow-lg border rounded-2xl">
                <a href="#" className="bg-neutral-primary-soft block max-w-sm p-6 text-center  hover:bg-neutral-secondary-medium">
                    <h5 className="container mx-auto mb-3 text-6xl font-semibold tracking-tight text-heading leading-8">Approch</h5>
                    <p className="text-body p-10">Here are the biggest technology acquisitions of 2025 so far, in reverse chronological order.</p>
                </a>
                </div>

                <div className="flex h-1/3 my-6 shadow-lg border rounded-2xl align-between">
                    <a href="#" className="bg-neutral-primary-soft block max-w-sm p-6  text-center hover:bg-neutral-secondary-medium">
                        <h5 className="container mx-auto mb-3 text-6xl font-semibold tracking-tight text-heading leading-8">Approch</h5>
                        <p className="text-body p-10">Here are the biggest technology acquisitions of 2025 so far, in reverse chronological order.</p>
                    </a>
                </div>
            </div>
            
        </div>
    )
}