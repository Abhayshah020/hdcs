import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Services() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-grow">

                {/* HERO */}
                <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Personalised disability and community support services designed
                            to empower independence, dignity, and wellbeing.
                        </p>
                    </div>
                </section>

                {/* SERVICES GRID */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            How We Support You
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">

                            {[
                                {
                                    title: "Supported Independent Living (SIL)",
                                    desc: "24/7 support in shared or individual homes, tailored to your lifestyle, preferences, and independence goals.",
                                },
                                {
                                    title: "In-Home Support",
                                    desc: "Personal care, domestic assistance, and life skills support to help you live comfortably at home.",
                                },
                                {
                                    title: "Short-Term Accommodation & Respite",
                                    desc: "Flexible short stays and in-home respite to support both participants and families.",
                                },
                                {
                                    title: "Disability & Complex Care",
                                    desc: "Specialised support including high-intensity care, behaviour support, and complex needs assistance.",
                                },
                                {
                                    title: "Community & Social Participation",
                                    desc: "Support to engage in social, recreational, and community activities that matter to you.",
                                },
                                {
                                    title: "Support Coordination",
                                    desc: "Helping you understand, manage, and maximise your NDIS plan with confidence.",
                                },
                                {
                                    title: "Travel & Transport Assistance",
                                    desc: "Helping you attend appointments, work, education, and social activities safely.",
                                },
                                {
                                    title: "Injury & Post-Surgery Care",
                                    desc: "Professional recovery support in the comfort of your own home.",
                                },
                                {
                                    title: "Accommodation & Housing Support",
                                    desc: "Quality housing and tenancy management services for people with disability.",
                                },
                            ].map((service) => (
                                <div
                                    key={service.title}
                                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
                                >
                                    <h3 className="text-xl font-semibold text-teal-700 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* GALLERY */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            Care in Everyday Moments
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    img: "/elderly-home.jpg",
                                    title: "Home-Based Care",
                                    desc: "Comfortable, respectful care delivered in your own home.",
                                },
                                {
                                    img: "/care_ambulance.jpg",
                                    title: "Professional Nursing Support",
                                    desc: "Qualified nurses providing trusted, compassionate care.",
                                },
                                {
                                    img: "/food.jpg",
                                    title: "Community Participation",
                                    desc: "Encouraging social connection and active community life.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
                                >
                                    <div className="relative h-64">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-teal-700 text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-6">
                            Let’s Plan Your Support Together
                        </h2>
                        <p className="text-xl mb-8">
                            Share your goals with our planning team and let us help design a
                            support plan that truly fits your life.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block bg-white text-teal-700 px-10 py-4 rounded-xl font-semibold text-lg shadow hover:bg-gray-100 transition"
                        >
                            Talk to Our Planning Officer
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
