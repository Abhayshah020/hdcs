import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
      <section
        className="relative text-white py-20 md:py-32 bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,148,136,0.75), rgba(29,78,216,0.75)), url('/elderlyPeopleAndNurse.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Care at Home – Because Your Life Matters
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
            We put you, your goals and aspirations at the centre of everything we do –
            in partnership with your support network and community.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-teal-700 px-10 py-4 rounded-xl font-semibold text-lg shadow hover:bg-gray-100 transition"
          >
            Get in Touch Today
          </a>
        </div>
      </section>


      {/* Care Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Compassionate Care in Action
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "/elderly-people_withnurse.webp",
              "/care_ambulance.jpg",
              "/food.jpg",
            ].map((src, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt="Disability and elderly care support"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Us */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Holistic Disability & Community Services is a value-based company that puts you, your goals and aspirations at the centre of what we do. We do this in partnership with your support network, and the wider community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are designed to provide individuals and their families with services in their best interest by becoming their voice and working with them to achieve their goals. At HDCS, the focus is on meeting individual needs and tailoring a support plan to suit each person.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow">
                <Image
                  src="/people2.jpg"
                  alt="Caregiver supporting elderly woman"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-48 rounded-lg overflow-hidden shadow">
                <Image
                  src="/people1.jpg"
                  alt="Nurse assisting disabled person"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Images integrated here */}
          </div>
        </div>
      </section>

      {/* <grok-card data-id="6ad448" data-type="image_card"></grok-card>



<grok-card data-id="27379e" data-type="image_card"></grok-card>



<grok-card data-id="bd2f48" data-type="image_card"></grok-card> */}


      {/* Mission & Vision */}
      <section id="mission" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To create a proficient and courtly home and strong support network for participants within our communities, using trained, qualified staff who build trust and make positive influence on the lives of others through our services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To always strive to improve the quality of life of the people that we support and creating career improvement opportunities for our employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach / Values */}
      <section id="values" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Compassion", "Diversity & Inclusion", "Integrity", "Respect", "Connection", "Improvement"].map((value) => (
              <div key={value} className="bg-teal-50 p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold text-teal-700 mb-4">{value}</h3>
                <p className="text-gray-700">
                  {value === "Compassion" && "The courage to go above and beyond in selfless service."}
                  {value === "Diversity & Inclusion" && "Building a community where everyone matters and has a voice."}
                  {value === "Integrity" && "A service delivery model you can always count on."}
                  {value === "Respect" && "The foundation of trust and valuing independence."}
                  {value === "Connection" && "Together we can be the change."}
                  {value === "Improvement" && "Optimism to inspire and motivate for tomorrow."}
                </p>
              </div>
            ))}
          </div>
          {/* 
<grok-card data-id="5ffdb1" data-type="image_card"></grok-card>



<grok-card data-id="ebf738" data-type="image_card"></grok-card> */}


        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
          <ul className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Supported Independent Living (SIL)", "In-Home Support", "Injury and Post Surgery Care", "Travel and Transport Assistance", "Group Centred Activities", "Disability Support Services", "Rehabilitation Care", "Household Task Assistance", "Life Stage Transition Assistance", "Complex/Special Care", "Attendant Care", "In-Home Respite Care", "Personal Care & Daily Tasks", "Short Term & Emergency Accommodation"].map((service) => (
              <li key={service} className="bg-white p-6 rounded-lg shadow text-gray-800 font-medium">
                {service}
              </li>
            ))}
          </ul>
          <p className="text-center text-lg text-gray-700 mt-10">
            Service Areas: Western Sydney • Northern Sydney • Sydney South • Northern Beaches
          </p>
        </div>
      </section>

      {/* Supported Independent Living */}
      <section id="sil" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">A Place to Call Home – Supported Independent Living</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-8">
            We understand that a home is so much more than just a house. Our support solutions create places where you will be supported to achieve your goals and enjoy increased independence.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Options include wheelchair accessible housing, behaviour support, high intensity support, short term stays, and full packages with meal preparation, laundry, and self-care assistance.
          </p>
        </div>
      </section>

      {/* In-Home Support */}
      <section id="inhome" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">In-Home Support – Supporting Your Independence</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-8">
            Everyone’s journey towards independence is unique. Our tailored services help you stay well, safe, and connected in your own home.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We help with personal care, domestic tasks, shopping, travel, recovery from injury/surgery, and empowering you to reach your goals – one step at a time.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}