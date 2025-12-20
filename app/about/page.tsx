import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-grow">



                {/* HERO */}
                <section className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                            About Holistic Disability & Community Services
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            A compassionate, people-first organisation supporting independence,
                            dignity, and meaningful lives.
                        </p>
                    </div>
                </section>

                {/* ABOUT CONTENT */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                        <div>
                            <h2 className="text-3xl font-bold text-teal-700 mb-6">
                                Who We Are
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Holistic Disability & Community Services is a value-based company
                                that puts you, your goals, and aspirations at the centre of
                                everything we do. We work closely with your support network and
                                the wider community to deliver care that truly matters.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We are committed to acting in the best interest of individuals
                                and their families—becoming their voice and working alongside
                                them to achieve meaningful personal goals.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Every person is unique. That’s why we tailor our home care and
                                community support plans to suit individual needs, lifestyles,
                                and ambitions.
                            </p>
                        </div>

                        <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/elderly-home.jpg"
                                alt="Nurse supporting elderly client"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </section>

                <section className="bg-gradient-to-r from-teal-600 to-blue-700 w-full py-16 md:py-24 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left Column - Profile Image */}
                            <div className="flex justify-center md:justify-start">
                                <div className="relative w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-2 border-[#aaa] bg-white dark:bg-slate-800">
                                    <Image
                                        src="/director-profile.jpg"
                                        alt="Jaikiran Reddy Seelam"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Right Column - Text Content */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 text-balance">
                                        Jaikiran Reddy Seelam
                                    </h1>
                                    <p className="text-xl text-slate-600 dark:text-slate-300 font-semibold">
                                        Director, Holistic Disability & Community Services
                                    </p>
                                </div>

                                <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                                    Meet the visionary leader behind Holistic Disability & Community Services, dedicated to advancing workforce and service solutions within the healthcare and education industries.
                                </p>

                                <div className="flex gap-4">
                                    <Link href={"/contact"} className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors font-semibold">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-teal-500 to-blue-700 w-full py-16 md:py-24 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="flex justify-center md:justify-start">
                                <div className="relative w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-2 border-[#aaa] bg-white dark:bg-slate-800">
                                    <Image
                                        src="/manishKumarShah.jpg"
                                        alt="Manish Kumar Shah"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 text-balance">
                                        Manish Kumar Shah
                                    </h1>
                                    <p className="text-xl text-slate-600 dark:text-slate-300 font-semibold">
                                        Care Manager, Holistic Disability & Community Services
                                    </p>
                                </div>

                                <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                                    Meet the dedicated Care Manager at Holistic Disability & Community Services, bringing nearly a decade of hands-on experience across nursing, aged care, and disability support. Since beginning his healthcare journey in 2016, Manish has been deeply committed to enhancing quality of life, dignity, and independence for individuals and families.
                                </p>
                                {/* <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                                    With a strong foundation in person-centred care, he leads with empathy, integrity, and professionalism—coordinating tailored support services, guiding multidisciplinary teams, and designing meaningful care pathways aligned with individual strengths and aspirations. Passionate about inclusive communities and best-practice care solutions, Manish continues to champion choice, empowerment, and holistic wellbeing in every aspect of his work.
                                </p> */}

                                <div className="flex gap-4">
                                    <Link href={"/contact"} className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors font-semibold">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PEOPLE GALLERY */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            Care That Makes a Difference
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">

                            {/* Person 1 */}
                            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative h-60">
                                    <Image
                                        src="/food.jpg"
                                        alt="Disability support care"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                        Empowering Independence
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Supporting individuals with disabilities to build confidence,
                                        independence, and active participation within their community.
                                    </p>
                                </div>
                            </div>

                            {/* Person 2 */}
                            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative h-60">
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
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Our trained nurses deliver respectful, professional care,
                                        ensuring comfort, safety, and trust at every stage.
                                    </p>
                                </div>
                            </div>

                            {/* Person 3 */}
                            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
                                <div className="relative h-60">
                                    <Image
                                        src="/elderly-people_withnurse.webp"
                                        alt="Elderly home care"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                        Respectful Elderly Support
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Helping seniors live safely and comfortably in their own
                                        homes while maintaining dignity and independence.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* OUR APPROACH */}
                <section className="py-16 bg-gray-100">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                            Our Approach
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                ["Compassion", "Going above and beyond in selfless service."],
                                ["Diversity & Inclusion", "A community where everyone matters and has a voice."],
                                ["Integrity", "A service model you can always rely on."],
                                ["Respect", "The foundation of trust and independence."],
                                ["Connection", "Together, we can be the change."],
                                ["Improvement", "Optimism that inspires growth and progress."],
                            ].map(([title, desc]) => (
                                <div
                                    key={title}
                                    className="bg-white p-6 rounded-2xl shadow-md"
                                >
                                    <h3 className="text-xl font-semibold text-teal-700 mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SERVICE AREAS */}
                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Service Areas
                        </h2>
                        <p className="text-gray-700">
                            Western Sydney • Northern Sydney • Sydney South • Northern Beaches
                        </p>
                    </div>
                </section>

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
