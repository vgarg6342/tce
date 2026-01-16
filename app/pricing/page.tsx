'use client';
import Pricing from "@/component/pricing"

export default function pricing() {
    return (
        <div>
           <Pricing /> 
               <div className="w-full max-w-4xl mx-auto p-4">
            <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold mb-2">Book a Trial Class</h2>
            <p className="text-gray-600">Schedule your free trial class with us today!</p>
        </div>
        <div className="relative w-full overflow-hidden bg-white rounded-xl shadow-lg border border-slate-200">
        <iframe width='100%' height='750px' src='https://thecompleteequation.zohobookings.in/portal-embed#/406614000000041052' ></iframe>
        </div>
        </div>

        </div>
        
    )
}
