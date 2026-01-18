import Contactus from "@/component/contactus"
import Pricing from "@/component/pricing"

export default function pricing() {
    return (
        <div>
           <Pricing /> 
           <p className="text-center   "> Not in Any of the above category? contact us for custom quote</p>
               <div className="w-full max-w-4xl mx-auto p-4">
            <div className="text-center">
            <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-600">Have questions about our pricing plans? Contact us for more information!</p>
            </div>
            <div id="contact" className="relative w-full overflow-hidden bg-white rounded-xl shadow-lg border border-slate-200 mt-8">
            <Contactus />
        </div>
        </div>
           
        </div>
        
    )
}
