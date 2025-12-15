import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function Mission() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-grow">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Our Mission, Vision & Purpose
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            Building a caring, inclusive community where every individual
                            lives with dignity, purpose, and independence.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold text-lg shadow hover:bg-gray-100 transition"
                        >
                            Talk to Our Care Team
                        </Link>
                    </div>
                </section>

                {/* MISSION & VISION */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold text-teal-700 mb-4">
                                Our Mission
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Holistic Disability & Community Services is committed to creating
                                a proficient, respectful, and supportive home environment for
                                participants within our communities. Through trained and
                                compassionate staff, we build trust and positively influence
                                lives every day.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold text-teal-700 mb-4">
                                Our Vision
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                To continually improve the quality of life of the people we
                                support while creating meaningful career opportunities for our
                                employees.
                            </p>
                            <p className="text-gray-700 italic">
                                “A community where all people live with purpose, belonging, and
                                wellbeing.”
                            </p>
                        </div>

                    </div>
                </section>

                {/* PURPOSE */}
                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Supporting Your Personal Journey
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We are passionate about understanding your personal goals. Our
                            specialised team works alongside you to create a personalised
                            roadmap—supporting, encouraging, and empowering you to turn your
                            dreams into reality.
                        </p>
                    </div>
                </section>

                {/* PEOPLE GALLERY */}
                <section className="py-16 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            People We Support & Care For
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">

                            {/* Card 1 */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative h-64">
                                    <Image
                                        src="/elderly-home.jpg"
                                        alt="Elderly care support"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                        Elderly Home Care
                                    </h3>
                                    <p className="text-gray-700">
                                        Supporting seniors to live safely, comfortably, and
                                        independently in their own homes with dignity and respect.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative h-64">
                                    <Image
                                        src="/elderly-people_withnurse.webp"
                                        alt="Disability support"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                        Disability Support
                                    </h3>
                                    <p className="text-gray-700">
                                        Empowering individuals with disabilities to reach their
                                        goals, participate in the community, and live fulfilling
                                        lives.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative h-64">
                                    <Image
                                        src="/care_ambulance.jpg"
                                        alt="Nurse assisting patient"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                        Compassionate Nursing Care
                                    </h3>
                                    <p className="text-gray-700">
                                        Our qualified nurses provide professional, person-centred
                                        care that builds trust, comfort, and confidence.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-20 bg-teal-700 text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-6">
                            Let’s Build Your Support Journey Together
                        </h2>
                        <p className="text-xl mb-8">
                            Whether you are seeking support for yourself or a loved one, our
                            caring team is here to listen, guide, and support you every step
                            of the way.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block bg-white text-teal-700 px-10 py-4 rounded-xl font-semibold text-lg shadow hover:bg-gray-100 transition"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
