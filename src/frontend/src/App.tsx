import {
  Award,
  Building2,
  ChevronRight,
  Clock,
  FileText,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Store,
  Users,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const FEATURES = [
  {
    icon: Award,
    title: "Expert Guidance",
    desc: "Professional advice for all real estate & legal documentation needs.",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    desc: "Over a decade of trusted service in Kalyan and surrounding areas.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "Streamlined processes to get your licences and agreements done quickly.",
  },
  {
    icon: Users,
    title: "Trusted by 500+ Clients",
    desc: "Hundreds of satisfied clients across Maharashtra trust Shekar Consultant.",
  },
];

const SERVICES = [
  {
    icon: UtensilsCrossed,
    title: "Food Licence",
    desc: "Complete assistance in obtaining FSSAI Food Licence for restaurants, food businesses, cloud kitchens, and home kitchens. We handle documentation, filing, and follow-up.",
  },
  {
    icon: FileText,
    title: "Leave and Licence Agreement (Manually)",
    desc: "Expert drafting and manual registration of Leave & Licence agreements for residential and commercial property rentals. Legally compliant and tenant-friendly.",
  },
  {
    icon: Store,
    title: "Shop Licence / Gumasta Licence",
    desc: "End-to-end assistance in obtaining Shop & Establishment (Gumasta) Licence for all types of businesses in Maharashtra. Quick turnaround time.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Restaurant Owner, Kalyan",
    text: "Shekar Sir helped me get my FSSAI licence in just 10 days! The process was smooth and professional. Highly recommended for all food business owners.",
  },
  {
    name: "Rajesh Patil",
    role: "Property Owner, Dombivli",
    text: "Got my Leave & Licence agreement drafted and registered without any hassle. Very knowledgeable team and excellent customer service.",
  },
  {
    name: "Sunita Mehta",
    role: "Shop Owner, Lokgram",
    text: "Obtained Gumasta Licence for my boutique quickly through Shekar Consultant. Very affordable and reliable service in Kalyan.",
  },
];

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: [
      "17, Nilgiri CHS, Atmaram Nagar,",
      "Lokgram, Kalyan,",
      "Maharashtra 421306",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      "09820335516",
      "Mon \u2013 Sat: 10am \u2013 7pm",
      "Walk-ins Welcome",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["shekar@consultant.in", "We reply within 24 hours"],
  },
];

const OFFICE_PHOTOS = [
  "/assets/uploads/download-019d2c06-a0d0-74fe-8ff7-6783fc7893d9-1.jpeg",
  "/assets/uploads/unnamed_2-019d2c06-a16b-70c9-b567-479db505f4ac-2.jpg",
  "/assets/uploads/unnamed_1-019d2c06-a2f2-73da-a3d9-c5dfecbddfbc-3.jpg",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  function handleMobileCtaClick() {
    setMenuOpen(false);
    window.location.hash = "contact";
  }

  return (
    <div className="font-poppins min-h-screen bg-white text-shekar-text">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              data-ocid="nav.home.link"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-shekar-navy rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-shekar-orange" />
              </div>
              <div>
                <div className="font-bold text-xl text-shekar-navy tracking-wide leading-tight">
                  SHEKAR
                </div>
                <div className="text-[10px] text-shekar-muted leading-tight">
                  Real Estate Consultant
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                  className="text-shekar-text font-medium hover:text-shekar-blue transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <span className="text-sm font-medium text-shekar-text">
                <Phone className="inline w-4 h-4 mr-1 text-shekar-orange" />
                Call: 09820335516
              </span>
              <a
                href="#contact"
                data-ocid="nav.cta.button"
                className="bg-shekar-orange text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-amber-500 transition-colors shadow-sm"
              >
                Get Free Consultation
              </a>
            </div>

            {/* Hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              data-ocid="nav.menu.toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 py-2 text-shekar-text font-medium hover:text-shekar-blue transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-shekar-orange" />
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={handleMobileCtaClick}
                  data-ocid="nav.mobile_cta.button"
                  className="block w-full text-center bg-shekar-orange text-white font-semibold text-sm px-5 py-3 rounded-full hover:bg-amber-500 transition-colors mt-2"
                >
                  Get Free Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16 lg:pt-20"
        style={{
          backgroundImage:
            "url('/assets/generated/india-hero.dim_1400x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-shekar-orange/20 border border-shekar-orange/40 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-4 h-4 text-shekar-orange" />
              <span className="text-shekar-orange text-sm font-medium">
                Kalyan, Maharashtra
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Trusted Partner for{" "}
              <span className="text-shekar-orange">Real Estate</span> &amp;
              Legal Services in Kalyan.
            </h1>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Expert assistance with Food Licences, Leave &amp; Licence
              Agreements, and Shop/Gumasta Licences. Fast, reliable, and
              professional service since over a decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                data-ocid="hero.explore_services.button"
                className="inline-flex items-center justify-center gap-2 bg-shekar-blue text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors text-base shadow-lg"
              >
                Explore Services
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                data-ocid="hero.request_callback.button"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors text-base backdrop-blur-sm"
              >
                Request Call Back
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-shekar-navy mb-4">
              Why Choose Shekar Consultant?
            </h2>
            <p className="text-shekar-muted max-w-xl mx-auto">
              We combine local expertise with professional service to deliver
              the best results for our clients.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center mx-auto mb-5 group-hover:bg-shekar-orange group-hover:border-shekar-orange transition-colors">
                  <f.icon className="w-7 h-7 text-shekar-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-shekar-navy text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-shekar-muted text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-shekar-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-shekar-navy mb-4">
              Our Key Services
            </h2>
            <p className="text-shekar-muted max-w-xl mx-auto">
              Comprehensive legal and documentation services tailored for
              businesses and property owners in Maharashtra.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="h-1.5 bg-gradient-to-r from-shekar-orange to-amber-300" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:bg-shekar-orange transition-colors">
                    <s.icon className="w-7 h-7 text-shekar-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-shekar-navy text-xl mb-3 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-shekar-muted text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <a
                    href="#contact"
                    data-ocid={`services.enquire.button.${i + 1}`}
                    className="inline-flex items-center gap-2 bg-shekar-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-shekar-blue transition-colors"
                  >
                    Enquire Now
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + TESTIMONIALS */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-amber-50 text-shekar-orange font-semibold text-xs px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
                About Us
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-shekar-navy mb-6 leading-tight">
                About Shekar Real Estate Consultant
              </h2>
              <p className="text-shekar-muted leading-relaxed mb-5">
                Shekar Real Estate Consultant is a trusted name in Kalyan for
                over a decade, helping individuals and businesses navigate the
                complex landscape of real estate transactions and legal
                documentation in Maharashtra.
              </p>
              <p className="text-shekar-muted leading-relaxed mb-5">
                We specialize in obtaining Food Licences (FSSAI), drafting Leave
                &amp; Licence Agreements, and securing Shop/Gumasta Licences for
                clients across Kalyan, Dombivli, and surrounding areas. Our
                in-depth knowledge of local regulations ensures a hassle-free
                experience.
              </p>
              <p className="text-shekar-muted leading-relaxed mb-8">
                With over 500 satisfied clients, we pride ourselves on
                delivering fast, accurate, and personalized service every time.
              </p>
              <div className="bg-shekar-gray rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-shekar-navy rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-shekar-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-shekar-navy mb-1">
                      Our Office
                    </div>
                    <address className="not-italic text-shekar-muted text-sm leading-relaxed">
                      17, Nilgiri CHS, Atmaram Nagar,
                      <br />
                      Lokgram, Kalyan,
                      <br />
                      Maharashtra 421306
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-blue-50 text-shekar-blue font-semibold text-xs px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
                Client Testimonials
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-shekar-navy mb-8 leading-tight">
                What Our Clients Say
              </h2>
              <div className="space-y-6">
                {TESTIMONIALS.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    data-ocid={`testimonials.item.${i + 1}`}
                    className="bg-shekar-gray rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="flex gap-1 mb-3">
                      <Star className="w-4 h-4 fill-shekar-orange text-shekar-orange" />
                      <Star className="w-4 h-4 fill-shekar-orange text-shekar-orange" />
                      <Star className="w-4 h-4 fill-shekar-orange text-shekar-orange" />
                      <Star className="w-4 h-4 fill-shekar-orange text-shekar-orange" />
                      <Star className="w-4 h-4 fill-shekar-orange text-shekar-orange" />
                    </div>
                    <p className="text-shekar-text text-sm leading-relaxed mb-4 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-shekar-navy text-sm">
                        {t.name}
                      </div>
                      <div className="text-shekar-muted text-xs">{t.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFICE PHOTOS */}
      <section className="bg-shekar-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-shekar-navy mb-4">
              Our Office
            </h2>
            <p className="text-shekar-muted max-w-xl mx-auto">
              Visit us at our office in Kalyan — a welcoming space where our
              team is ready to assist you.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICE_PHOTOS.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                data-ocid={`office.item.${i + 1}`}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={src}
                  alt={`Shekar office view ${i + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-shekar-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Walk in or call us during business hours. We&apos;re happy to
              assist you with all your real estate and licensing needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {CONTACT_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`contact.item.${i + 1}`}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors"
              >
                <div className="w-14 h-14 bg-shekar-orange rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.lines.map((line) => (
                    <p key={line} className="text-white/70 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-shekar-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-shekar-orange rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-lg">SHEKAR</div>
                  <div className="text-white/50 text-xs">
                    Real Estate Consultant
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Your trusted partner for real estate and legal services in
                Kalyan, Maharashtra.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                      className="text-white/60 text-sm hover:text-shekar-orange transition-colors flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <a
                      href="#services"
                      className="text-white/60 text-sm hover:text-shekar-orange transition-colors flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} Shekar Real Estate Consultant. All Rights
              Reserved.
            </p>
            <p className="text-white/40 text-xs">
              Built with <span className="text-red-400">\u2665</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-shekar-orange hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
