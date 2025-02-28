import { Component, createRef, RefObject } from "react";
import { motion } from "framer-motion";
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
import { Link } from "react-router-dom";
import { Variant1 } from "@/shared/constants/variants";
import { Variant2 } from "@/shared/constants/variants";

interface HomeProp {}

class HomePage extends Component<HomeProp, { inView: boolean }> {
  ref: RefObject<HTMLDivElement | null>;
  observer!: IntersectionObserver;
  hasAnimated: boolean = false;

  constructor(props: HomeProp) {
    super(props);
    this.state = {
      inView: false,
    };
    this.ref = createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.setState({ inView: true });
          this.hasAnimated = true;
        }
      },
      { threshold: 0.1 }
    );
    if (this.ref.current) {
      this.observer.observe(this.ref.current);
    }
  }

  componentWillUnmount() {
    if (this.observer && this.ref.current) {
      this.observer.unobserve(this.ref.current);
    }
  }
  render() {
    const { inView } = this.state;
    const controls = inView ? "visible" : "hidden";
    return (
      <main className="">
        <Header />
        <section>
          <section
            className="relative h-[100vh]"
            style={{ backgroundImage: `url('/assets/landing-pic.png')` }}
          >
            <div
              className="absolute pt-11 space-y-8 top-0 w-full left-0 right-0 h-full bg-black/55 sm:pt-30"
              ref={this.ref}
            >
              <div className="pl-6 space-y-4">
                <motion.h6
                  variants={Variant1}
                  initial="hidden"
                  animate={controls}
                  className="pr-10 text-xl text-white opacity-100 font-itim sm:text-center md:text-5xl lg:px-54"
                >
                  <b>
                    <em>Water Pollution Monitoring and Conservation</em>
                  </b>
                  <span className="span-color"> (WAPMAC)</span> is an agency
                  dedicated to addressing the critical issues of water pollution
                  in Ghana and promoting sustainable conservation practices.
                </motion.h6>
              </div>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={Variant2}
                className="m-4 rounded space-y-5 sm:flex sm:flex-col items-center"
              >
                <h1 className="agenda text-4xl font-koh pr-2 sm:text-center sm:text-8xl">
                  Protecting Ghana’s Water Future
                </h1>
                <video
                  src="/assets/technologies/device.mp4" // Replace with your actual video URL
                  width="150"
                  height="150"
                  controls
                  className="w-full rounded-2xl sm:w-[20em] sm:fixed bottom-0 z-1000 right-10"
                />
                <Link
                  to="/learn-more"
                  className="p-2 sm:p-4 rounded-md w-fit opacity-100 text-lg sm:text-4xl shadow-xl main-bg font-itim text-white"
                >
                  Learn more
                </Link>
              </motion.div>
            </div>
          </section>
          <section className="h-fit main-bg px-3 sm:flex justify-between gap-1">
            <div className="sm:w-1/2">
              {" "}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl sm:text-3xl span-color main-bg font-itim px-1 sm:rounded-2xl">
                    Our Targeted Audience
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <ul className="text-md sm:text-2xl pl-2 section-sec space-y-5 text-white font-bold">
                      <li>
                        Communities and individuals dependent on water resources
                      </li>
                      <li>
                        Industries and organizations with significant water use
                        or discharge
                      </li>
                      <li>Policy-makers and environmental regulators</li>
                      <li>Educational institutions and research bodies</li>
                      <li>Environmental activists and advocacy groups</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl sm:text-3xl span-color main-bg font-itim px-1">
                    Our Key Activities
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <ul className="text-md sm:text-2xl pl-2 section-sec space-y-5 text-white font-bold">
                      <li>
                        Conducting water quality assessments and pollution
                        audits
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
                  <AccordionTrigger className="text-xl sm:text-3xl span-color main-bg font-itim px-1">
                    Our Potential Solutions
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <ul className="text-md sm:text-2xl pl-2 section-sec space-y-5 text-white font-bold">
                      <li>
                        Collaborating with technology providers for
                        cost-effective monitoring systems
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
                        Working closely with governments and NGOs to bridge
                        policy gaps
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl sm:text-3xl span-color main-bg  font-itim px-1 hidden sm:block">
                    Our Expected Impact
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <ul className="text-md sm:text-2xl pl-2 section-sec space-y-5 text-white font-bold">
                      <li>Improved water quality in targeted areas</li>
                      <li>
                        Increased awareness and community participation in water
                        conservation
                      </li>
                      <li>
                        Reduction in water-related diseases and ecological
                        degradation
                      </li>
                      <li>
                        Development of sustainable policies for long-term water
                        resource management
                      </li>
                      <li>
                        A measurable decrease in water pollution levels over
                        time
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="w-1/2 hidden sm:block">
              {" "}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl sm:text-3xl span-color main-bg  font-itim px-1">
                    Our Long-term Goals
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <ul className="text-md sm:text-2xl pl-2 section-sec space-y-5 text-white font-bold">
                      <li>
                        Establishing WAPMAC as a leading initiative in water
                        conservation and pollution control
                      </li>
                      <li>
                        Expanding operations to other regions with critical
                        water challenges
                      </li>
                      <li>
                        Building a global network of water conservation
                        advocates and experts
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl sm:text-3xl span-color main-bg  font-itim px-1">
                    Our Monitoring and Evaluations
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <ul className="text-md sm:text-2xl pl-2 section-sec space-y-5 text-white font-bold">
                      <li className="text-orange-400 font-bold">
                        WAPMAC will assess its success through:
                      </li>
                      <li>Regular water quality monitoring and reporting</li>
                      <li>
                        Feedback from stakeholders and communities involved in
                        the initiative
                      </li>
                      <li>
                        Evaluation of policy adoption and enforcement rates
                      </li>
                      <li>
                        Periodic reviews of project milestones and outcomes
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl sm:text-3xl span-color main-bg  font-itim px-1">
                    Our Partnership and Collaborations
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <ul className="text-md sm:text-2xl pl-2 section-sec space-y-5 text-white font-bold">
                      <li className="text-orange-400 font-bold">
                        Government agencies (e.g., Environmental Protection
                        Agency, Ghana Water Company)
                      </li>
                      <li>
                        Minerals Commission, District Assembly, Precious
                        Minerals Marketing Company (PMMC)
                      </li>
                      <li>
                        Non-Governmental Organizations (NGOs) focused on
                        environmental sustainability
                      </li>
                      <li>
                        Universities and research institutions for technical
                        expertise
                      </li>
                      <li>
                        Corporate organizations for financial and technical
                        support
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-xl sm:text-3xl span-color-red  main-bg font-koh px-1">
                    Our Anticipated Challenges
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <ul className="text-md sm:text-2xl pl-2 section-sec space-y-5 text-white font-bold">
                      <li className="">
                        Limited access to advanced water monitoring technology
                        in rural areas
                      </li>
                      <li>
                        Resistance from industries or communities to adopt
                        sustainable practices
                      </li>
                      <li>
                        Insufficient funding or resources for large-scale
                        initiatives
                      </li>
                      <li>
                        Gaps in governmental enforcement of water conservation
                        policies
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
          <MissionVisionComp />
          <CoreValuesComp />
          <ObjectivesComp />
          <PartnersComp />
        </section>
        <footer className="main-bg p-2 relative rounded-b-2xl w-full space-y-2">
          <div className="flex items-center justify-between span-color font-extrabold gap-2">
            <div className="flex items-center">
              <img src="/assets/logo.png" alt="logo" className="w-[3.5em]" />
              WAPMAC
            </div>
            <span className="text-white">copyright@2025</span>
          </div>
          <div className="bg-white/55 w-full h-fit flex p-4 justify-between">
            <div className="flex items-center">
              <img src="/assets/email.png" alt="email" className="w-5" />
              <a
                href="mailto:kelvingbolo98@gmail.com"
                className="ml-2 text-blue-500 font-extrabold underline"
              >
                Email Us
              </a>
            </div>
            <div className="flex items-center">
              <img src="/assets/call.png" alt="call" className="w-5" />
              <a
                href="tel:+233248814260"
                className="ml-2 text-orange-500 font-extrabold"
              >
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
