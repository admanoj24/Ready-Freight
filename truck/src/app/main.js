import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Menu,
  ArrowRight,
  ChevronDown,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Utility Navigation */}
      <div className="bg-gray-100 py-2">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="#"
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
            >
              <Phone className="h-3 w-3" />
              <span>1-800-READY-FR</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600"
            >
              <MapPin className="h-3 w-3" />
              <span>Locations</span>
            </Link>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Careers
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Investors
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Contact Us
            </Link>
            <Link
              href="#"
              className="font-medium text-blue-600 hover:underline"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/truck.jpeg?height=40&width=180"
                alt="Ready-Freight Logo"
                width={280}
                height={50}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-blue-600">
                <span>Shippers</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 bg-white p-2 shadow-lg group-hover:block">
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Get a Quote
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Track a Shipment
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Shipping Services
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Supply Chain Solutions
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Shipper Resources
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-blue-600">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 bg-white p-2 shadow-lg group-hover:block">
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Supply Chain Solutions
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Dedicated Contract Services
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Final Mile Services
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Intermodal
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Truckload
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-blue-600">
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 bg-white p-2 shadow-lg group-hover:block">
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Retail
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Food & Beverage
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Manufacturing
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Healthcare
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Automotive
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-blue-600">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 bg-white p-2 shadow-lg group-hover:block">
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Shipper Resources
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Carrier Resources
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Driver Resources
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Case Studies
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-blue-600">
                <span>About</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 bg-white p-2 shadow-lg group-hover:block">
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Company Overview
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Leadership
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Sustainability
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Diversity & Inclusion
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-sm hover:bg-gray-100"
                >
                  News
                </Link>
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex relative w-full max-w-sm items-center">
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-full border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search className="h-4 w-4 text-gray-500" />
              </button>
            </form>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1" />
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/10 z-10" />
        <div className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="/old.jpg?height=600&width=1920"
            alt="Freight transportation"
            width={1920}
            height={600}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-6">
          <div className="max-w-xl space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Delivering What Matters
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Ready-Freight provides innovative transportation solutions to keep
              your supply chain moving.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-3 rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Track a Shipment</h3>
              <p className="mt-2 text-sm text-gray-500">
                Get real-time updates on your shipments
              </p>
              <Link
                href="#"
                className="mt-3 text-sm font-medium text-blue-600 hover:underline"
              >
                Track Now
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-3 rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M21 7v6h-6" />
                  <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Ship with Us</h3>
              <p className="mt-2 text-sm text-gray-500">
                Request a quote for your shipping needs
              </p>
              <Link
                href="#"
                className="mt-3 text-sm font-medium text-blue-600 hover:underline"
              >
                Get a Quote
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-3 rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <path d="M4 12h16" />
                  <path d="M12 4v16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Become a Carrier</h3>
              <p className="mt-2 text-sm text-gray-500">
                Partner with us to grow your business
              </p>
              <Link
                href="#"
                className="mt-3 text-sm font-medium text-blue-600 hover:underline"
              >
                Apply Now
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-3 rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Driver Opportunities</h3>
              <p className="mt-2 text-sm text-gray-500">
                Join our team of professional drivers
              </p>
              <Link
                href="#"
                className="mt-3 text-sm font-medium text-blue-600 hover:underline"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Ready-Freight offers comprehensive transportation and logistics
                solutions to meet your business needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="border-2 border-blue-100 transition-all hover:border-blue-600">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="16" height="16" x="4" y="4" rx="2" />
                    <path d="M4 12h16" />
                    <path d="M12 4v16" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Truckload</h3>
                <p className="mb-4 text-gray-500">
                  Full truckload services with dedicated capacity and reliable
                  transit times.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 transition-all hover:border-blue-600">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Intermodal</h3>
                <p className="mb-4 text-gray-500">
                  Cost-effective rail and truck transportation for long-haul
                  freight needs.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100 transition-all hover:border-blue-600">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 7v6h-6" />
                    <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Dedicated Services</h3>
                <p className="mb-4 text-gray-500">
                  Customized transportation solutions with dedicated equipment
                  and drivers.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Content
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Explore our latest insights, case studies, and success stories.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/s.jpg?height=200&width=400"
                  alt="Supply chain optimization"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">Case Study</p>
                <h3 className="mb-2 mt-2 text-xl font-bold">
                  Supply Chain Optimization for Major Retailer
                </h3>
                <p className="mb-4 text-gray-500">
                  How Ready-Freight helped a national retailer reduce costs and
                  improve delivery times.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Read more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidde ">
                <Image
                  src="/supply.jpg?height=200&width=400"
                  alt="Sustainability initiatives"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">Article</p>
                <h3 className="mb-2 mt-2 text-xl font-bold">
                  Sustainability in Transportation: Our Commitment
                </h3>
                <p className="mb-4 text-gray-500">
                  Learn about Ready-Freight initiatives to reduce carbon
                  emissions and promote sustainability.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Read more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/c.jpg?height=200&width=400"
                  alt="Technology innovation"
                  width={400}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">White Paper</p>
                <h3 className="mb-2 mt-2 text-xl font-bold">
                  The Future of Freight: Technology and Innovation
                </h3>
                <p className="mb-4 text-gray-500">
                  Exploring how technology is transforming the transportation
                  and logistics industry.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Read more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Industry Solutions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Specialized transportation and logistics solutions for various
                industries.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-4">
            <Card className="group overflow-hidden rounded-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/retail.svg?height=200&width=300"
                  alt="Retail logistics"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Retail</h3>
                <p className="text-sm text-gray-500">
                  Supply chain solutions for retailers of all sizes.
                </p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden rounded-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/manu.svg?height=200&width=300"
                  alt="Manufacturing logistics"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Manufacturing</h3>
                <p className="text-sm text-gray-500">
                  Efficient transportation for manufacturing supply chains.
                </p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden rounded-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/take.svg?height=200&width=300"
                  alt="Food and beverage logistics"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Food & Beverage</h3>
                <p className="text-sm text-gray-500">
                  Temperature-controlled and time-sensitive deliveries.
                </p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden rounded-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/h.svg?height=200&width=300"
                  alt="Healthcare logistics"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Healthcare</h3>
                <p className="text-sm text-gray-500">
                  Specialized logistics for medical supplies and equipment.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Explore Industry Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Latest News
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Stay updated with Ready-Freight latest news and announcements.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">May 10, 2025</p>
                <h3 className="mb-2 mt-2 text-xl font-bold">
                  Ready-Freight Expands Operations to the West Coast
                </h3>
                <p className="mb-4 text-gray-500">
                  Ready-Freight announces the opening of new terminals in
                  California and Washington to better serve customers.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Read more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">April 28, 2025</p>
                <h3 className="mb-2 mt-2 text-xl font-bold">
                  New Technology Platform Enhances Shipment Visibility
                </h3>
                <p className="mb-4 text-gray-500">
                  Ready-Freight launches a new technology platform providing
                  real-time tracking and analytics for customers.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Read more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500">April 15, 2025</p>
                <h3 className="mb-2 mt-2 text-xl font-bold">
                  Ready-Freight Commits to Carbon Neutrality by 2030
                </h3>
                <p className="mb-4 text-gray-500">
                  Ready-Freight announces ambitious sustainability goals
                  including fleet electrification and carbon offsets.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Read more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Contact us today to learn how Ready-Freight can help optimize
                your supply chain.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Contact Sales
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-blue-700"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="mb-4 inline-block">
                <Image
                  src="/truck.jpeg?height=40&width=180"
                  alt="Ready-Freight Logo"
                  width={220}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mt-4 text-gray-400">
                Ready-Freight is a leading provider of transportation and
                logistics services across North America.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Truckload
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Intermodal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Dedicated Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Final Mile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Refrigerated
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Expedited
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Shipper Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Carrier Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Driver Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-gray-400">
                    1-800-READY-FR (1-800-732-3937)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                  <span className="text-gray-400">info@ready-freight.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-400">
                    123 Logistics Way
                    <br />
                    Suite 400
                    <br />
                    Chicago, IL 60601
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-400">
                © 2025 Ready-Freight. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
