import { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Header } from "@/shared/presentation/headerComp";
import MissionVisionComp from "@/shared/presentation/missionVision";
import CoreValuesComp from "@/shared/presentation/coreValues";
import ObjectivesComp from "@/shared/presentation/objectives";
import PartnersComp from "@/shared/container/partners";

class HomePage extends Component {
  render() {
    return (
      <main className="">
        <Header />
        <section>
          <section
            className="relative h-[100vh]"
            style={{ backgroundImage: `url('/assets/landing-pic.png')` }}
          >
            <div className="absolute px-6 pt-11 space-y-8 top-0 w-full left-0 right-0 h-full bg-black/55">
              <h6 className="pr-14 text-xl text-white opacity-100">
                <b><em>Water Pollution Monitoring and Conservation</em></b><span className="span-color"> (WAPMAC)</span> is an agency dedicated to addressing the critical issues of water
                pollution in Ghana and promoting sustainable conservation
                practices.
              </h6>
              <h1 className="agenda text-5xl font-bold">
                Protecting Ghana’s Water Future
              </h1>
              <button className="p-2 rounded-md w-fit opacity-100 text-lg shadow-xl main-bg">
                Learn more
              </button>
            </div>
          </section>
          <section className="h-fit main-bg px-3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl span-color main-bg">
                  Our Targeted Audience
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <ul className="text-md pl-2 section-sec space-y-5 text-white font-bold">
                    <li>
                      Communities and individuals dependent on water resources
                    </li>
                    <li>
                      Industries and organizations with significant water use or
                      discharge
                    </li>
                    <li>Policy-makers and environmental regulators</li>
                    <li>Educational institutions and research bodies</li>
                    <li>Environmental activists and advocacy groups</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl span-color main-bg">
                  Our Key Activities
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <ul className="text-md pl-2 section-sec space-y-5 text-white font-bold">
                    <li>
                      Conducting water quality assessments and pollution audits
                    </li>
                    <li>
                      Organizing workshops, seminars, and campaigns to raise
                      awareness
                    </li>
                    <li>
                      {" "}
                      Establishing partnerships with environmental and
                      governmental organizations
                    </li>
                    <li>
                      Promoting eco-friendly technologies for waste treatment
                      and water reuse
                    </li>
                    <li>
                      {" "}
                      Publishing reports, guides, and research findings to
                      influence policies and practices
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl span-color main-bg">
                  Our Potential Solutions
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <ul className="text-md pl-2 section-sec space-y-5 text-white font-bold">
                    <li>
                      Collaborating with technology providers for cost-effective
                      monitoring systems
                    </li>
                    <li>
                      Building trust and educating communities to foster
                      participation
                    </li>
                    <li>
                      {" "}
                      Seeking funding from environmental grants, corporate
                      social responsibility (CSR) programs, and donations
                    </li>
                    <li>
                      Working closely with governments and NGOs to bridge policy
                      gaps
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          <MissionVisionComp />
          <CoreValuesComp />
          <ObjectivesComp />
          <PartnersComp />
        </section>
        <footer className="main-bg p-2 relative rounded-b-2xl w-full space-y-2">
          <div className="flex items-center justify-center  span-color font-extrabold gap-2">
            <img src="/assets/logo.png" alt="logo" />
            WAPMAC @25
          </div>
          <div className="bg-white/55 w-full h-fit flex p-4 justify-between">
          <div className="flex items-center">
            <img src="/assets/email.png" alt="email" className="w-5" />
            <a href="mailto:kelvingbolo98@gmail.com" className="ml-2 text-blue-500 font-extrabold underline" >
              Email Us
            </a>
          </div>
          <div className="flex items-center">
            <img src="/assets/call.png" alt="call" className="w-5" />
            <a href="tel:+233248814260" className="ml-2 text-orange-500 font-extrabold">
              Place a Phone call
            </a>
          </div>
        </div>
        </footer>
      </main>
    );
  }
}

export default HomePage;
