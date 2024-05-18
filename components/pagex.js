/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YPCZ14znbaU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Pagex() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="container space-y-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Industrial Training
                </div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Master the Skills. Shape your Future.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Gain hands-on experience and practical knowledge with our industry-focused training programs. Prepare
                  yourself for the future of work.
                </p>
              </div>
              <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Register Now
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Automation and Robotics</h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Learn the principles of automation and robotics. Acquire skills in PLC programming, robotic arm
                  operation, and industrial automation systems.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/Automation_and_Robotics.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Data Analytics and Machine Learning
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Master data analytics and machine learning. Learn to analyze big data, build predictive models, and
                  implement machine learning algorithms.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/Data_Analytics_and_Machine_Learning.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Cybersecurity and Ethical Hacking
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Dive into cybersecurity and ethical hacking. Understand cyber threats, secure networks, and master the
                  tools of ethical hackers.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/Cybersecurity_and_Ethical_Hacking.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Internet of Things (IoT) and Embedded Systems
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore the world of IoT and embedded systems. Learn to design IoT devices, connect them to the cloud,
                  and build smart applications.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/Internet_of_Things_(IoT)_and_Embedded Systems.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Renewable Energy and Sustainable Technologies
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Embrace renewable energy and sustainable technologies. Study solar power, wind energy, and green
                  innovations for a sustainable future.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/RenewableEnergyandSustainableTechnologies.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Advanced Manufacturing and 3D Printing
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Enter the world of advanced manufacturing and 3D printing. Learn modern production techniques,
                  additive manufacturing, and digital fabrication.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/image_fx_advanced_manufacturing_and_3d_printing.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Business Analytics and Financial Technology
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore the intersection of business analytics and financial technology. Gain insights into
                  data-driven decision-making and fintech innovations.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/image_fx_business_analytics_and_financial_technology.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Health Informatics and Digital Healthcare
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Enter the world of health informatics and digital healthcare. Learn about electronic health records,
                  telemedicine, and healthcare analytics.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/image_fx_health_informatics_and_digital_healthcare.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Creative Design and Multimedia Production
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Unleash your creativity with our creative design and multimedia production courses. Learn graphic
                  design, video editing, and digital storytelling.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="image_fx_creative_design_and_multimedia_production.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Leadership and Soft Skills Development
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Enhance your leadership and soft skills with our professional development programs. Learn
                  communication, teamwork, and emotional intelligence.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/image_fx_leadership_and_soft_skills_development.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Entrepreneurship and Innovation
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Embrace the spirit of entrepreneurship and innovation. Learn to develop business ideas, launch
                  startups, and drive innovation.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/image_fx_entrepreneurship_and_innovation.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Communication and Media Studies
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore the world of communication and media studies. Learn journalism, public relations, and digital
                  media.
                </p>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/image_fx_tourism_and_hospitality_management.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Tourism and Hospitality Management
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Enter the world of tourism and hospitality. Learn customer service, hotel management, and tour
                  operations.
                </p>
              </div>
              <div className="grid gap-4" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
