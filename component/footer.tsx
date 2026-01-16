import React from "react";

const navigation = {
    social: [
        {
            name: "LinkedIn",
            href: "#",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "#",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm0 1.981h.166c-2.444 0-2.753.01-3.726.054-.97.043-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.886-.344 1.857-.044.953-.055 1.248-.055 3.679v.166c0 2.444.01 2.753.054 3.726.043.97.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.886.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.043 1.509-.207 1.857-.344.464-.182.812-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.886.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.043-.976-.207-1.509-.344-1.857a4.916 4.916 0 01-.748-1.15 4.915 4.915 0 01-1.15-.748c-.353-.137-.886-.3-1.857-.344-1.023-.047-1.351-.054-3.808-.054zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.981a3.154 3.154 0 100 6.308 3.154 3.154 0 000-6.308zm5.337-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "YouTube",
            href: "#",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "X",
            href: "#",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            ),
        },
    ],
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 w-full" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-8 text-center">
                    <span className="text-2xl font-bold tracking-tight text-white">
                        The Complete Equation
                    </span>
                    <p className="max-w-md text-sm leading-6 text-slate-400">
                        Holistic math tutoring for high‑school and university students,
                        empowering you to master the language of the universe.
                    </p>
                    <div className="flex space-x-6">
                        {navigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-slate-400 hover:text-white transition-colors duration-300"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center">
                    <p className="text-xs leading-5 text-slate-400">
                        &copy; {new Date().getFullYear()} The Complete Equation. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;