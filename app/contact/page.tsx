import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-grow">

                {/* HERO */}
                <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Get in Touch With Us
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            We’re here to listen, support, and guide you every step of the way.
                        </p>
                    </div>
                </section>

                {/* CONTACT DETAILS */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                        {/* Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-teal-700 mb-6">
                                Let’s Start the Conversation
                            </h2>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Whether you’re exploring support options for yourself or a loved
                                one, our friendly planning team is ready to help you design the
                                right support journey.
                            </p>

                            <div className="space-y-4 text-gray-800">
                                <p>
                                    📍 <strong>Suite 6</strong>, 247 Church Street Parramatta NSW 2150
                                </p>
                                <p>
                                    📞{" "}
                                    <a
                                        href="tel:0413173504"
                                        className="text-teal-700 font-semibold hover:underline"
                                    >
                                        0413 173 504
                                    </a>
                                </p>
                                <p>
                                    ✉️{" "}
                                    <a
                                        href="mailto:jai@hdcs.com.au"
                                        className="text-teal-700 font-semibold hover:underline"
                                    >
                                        jai@hdcs.com.au
                                    </a>
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mt-8">
                                <Link
                                    href="mailto:jai@hdcs.com.au"
                                    className="inline-block bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold shadow hover:bg-teal-800 transition"
                                >
                                    Share Your Ideas With Us
                                </Link>
                            </div>

                            <p className="mt-6 text-gray-600 italic">
                                “Every journey begins with a conversation — let’s begin yours today.”
                            </p>
                        </div>

                        {/* MAP */}
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                            <iframe
                                src="https://www.google.com/maps?q=3%20Railway%20Parade%20Burwood%20NSW%202134&output=embed"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="border-0"
                            ></iframe>
                        </div>

                    </div>
                </section>

                {/* CHEERFUL CTA STRIP */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            We’re Just a Call Away
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Let us help you feel supported, confident, and in control of your
                            care choices.
                        </p>

                        <Link
                            href="tel:0413173504"
                            className="inline-block bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold shadow hover:bg-blue-800 transition"
                        >
                            Call Us Today
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
