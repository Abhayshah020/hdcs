// File: components/Footer.js
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

                {/* Brand / About */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Holistic Disability & Community Services
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Providing compassionate, person-centred disability and community
                        support services. We are committed to dignity, independence, and
                        improving quality of life.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/about" className="hover:text-teal-400 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/mission" className="hover:text-teal-400 transition">
                                Mission & Vision
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-teal-400 transition">
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-teal-400 transition">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Contact Information
                    </h4>
                    <p className="text-sm mb-2">
                        📍 Suite 106, 3 Railway Parade,<br />
                        Burwood NSW 2134
                    </p>
                    <p className="text-sm mb-2">
                        📍 Suite 6, 132 Burwood Road,<br />
                        Burwood NSW 2134
                    </p>
                    <p className="text-sm mb-2">
                        📞 <a href="tel:0413173504" className="hover:text-teal-400 transition">0413 173 504</a>
                    </p>
                    <p className="text-sm">
                        ✉️ <a href="mailto:jai@hdcs.com.au" className="hover:text-teal-400 transition">jai@hdcs.com.au</a>
                    </p>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Holistic Disability & Community Services. All rights reserved.
                </div>
            </div>

        </footer>
    );
}
