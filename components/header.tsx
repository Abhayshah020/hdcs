import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Title */}
                <Link href={'/'} className="text-xl md:text-xl font-bold text-teal-700">
                    Holistic Disability & Community Services
                </Link>

                {/* Hidden checkbox for toggle */}
                <input type="checkbox" id="menu-toggle" className="hidden peer" />

                {/* Hamburger button (visible only on mobile) */}
                <label
                    htmlFor="menu-toggle"
                    className="md:hidden cursor-pointer z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                >
                    {/* Hamburger lines */}
                    <span className="w-7 h-0.5 bg-gray-800 transition-all duration-300 peer-checked:rotate-45 peer-checked:translate-y-2" />
                    <span className="w-7 h-0.5 bg-gray-800 transition-all duration-300 peer-checked:opacity-0" />
                    <span className="w-7 h-0.5 bg-gray-800 transition-all duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-2" />
                </label>

                {/* Navigation Menu */}
                <nav
                    className="
        fixed inset-x-0 top-0 bg-white shadow-lg md:shadow-none md:bg-transparent
        md:static md:inset-auto
        flex flex-col md:flex-row
        items-center justify-center
        space-y-8 md:space-y-0 md:space-x-8
        text-lg md:text-base
         md:pt-0
        transition-all duration-300 ease-in-out
        -translate-y-full peer-checked:translate-y-0
        md:translate-y-0
        opacity-0 peer-checked:opacity-100
        md:opacity-100
        pointer-events-none peer-checked:pointer-events-auto
        md:pointer-events-auto
        h-screen md:h-auto
      "
                >
                    <Link href="/about" className="text-gray-700 hover:text-teal-600 transition">
                        About Us
                    </Link>
                    <Link href="/mission" className="text-gray-700 hover:text-teal-600 transition">
                        Mission & Vision
                    </Link>
                    <Link href="/services" className="text-gray-700 hover:text-teal-600 transition">
                        Services
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
}