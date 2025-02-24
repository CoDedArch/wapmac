import { Component, createRef } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface HeaderState {
  isMenuOpen: boolean;
}

export class Header extends Component<{}, HeaderState> {
  private accordionRef = createRef<HTMLDivElement>();
  private menuButtonRef = createRef<HTMLImageElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      isMenuOpen: false, // State to track if the menu is open or closed
    };
  }

  // Function to toggle the menu state
  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  // Function to handle clicks outside the accordion
  handleClickOutside = (event: MouseEvent) => {
    if (
      this.accordionRef.current &&
      !this.accordionRef.current.contains(event.target as Node) &&
      this.menuButtonRef.current &&
      !this.menuButtonRef.current.contains(event.target as Node)
    ) {
      this.setState({ isMenuOpen: false });
    }
  };

  componentDidMount() {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    // Remove event listener when the component unmounts
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <>
        <div className="bg-white w-full h-fit flex p-4 justify-between">
          <div className="flex items-center">
            <img src="/assets/email.png" alt="email" className="w-5" />
            <a
              href="mailto:wapmacagency@gmail.com"
              className="ml-2 text-blue-500 font-extrabold underline"
            >
              Email Us
            </a>
          </div>
          <div className="flex items-center">
            <img src="/assets/call.png" alt="call" className="w-5" />
            <a
              href="tel:+233249410209"
              className="ml-2 text-orange-500 font-extrabold"
            >
              Place a Phone call
            </a>
          </div>
        </div>
        <header className="flex items-center justify-between px-5 py-2 pt-4 pb-6 main-bg">
          <Link to="/" className="flex items-center span-color font-extrabold gap-2">
            <img src="/assets/logo.png" alt="logo" />
            <p>
              WAPMAC
              <span className="block text-[10px] text-white">Safeguarding Water for Generations</span>
            </p>
          </Link>
          {/* Toggle between menu.png and close.png based on isMenuOpen state */}
          <img
            ref={this.menuButtonRef}
            src={isMenuOpen ? "/assets/close.png" : "/assets/menu.png"}
            alt="menu"
            className={isMenuOpen ? "" : "w-8 h-5 cursor-pointer"}
            onClick={this.toggleMenu} // Toggle menu on click
          />
        </header>

        {/* Conditionally render the Accordion section based on isMenuOpen state */}
        {isMenuOpen && (
          <div
            ref={this.accordionRef}
            className="absolute main-bg text-white top-25 w-full z-[10000] p-2"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl span-color main-bg  font-itim px-1">
                  Our Long-term Goals
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <ul className="text-md pl-2 section-sec space-y-5 text-white font-bold">
                    <li>
                      Establishing WAPMAC as a leading initiative in water
                      conservation and pollution control
                    </li>
                    <li>
                      Expanding operations to other regions with critical water
                      challenges
                    </li>
                    <li>
                      Building a global network of water conservation advocates
                      and experts
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl span-color main-bg  font-itim px-1">
                  Our Expected Impact
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <ul className="text-md pl-2 section-sec space-y-5 text-white font-bold">
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
                      A measurable decrease in water pollution levels over time
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl span-color main-bg  font-itim px-1">
                  Our Monitoring and Evaluations
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <ul className="text-md pl-2 section-sec space-y-5 text-white font-bold">
                    <li className="text-orange-400 font-bold">
                      WAPMAC will assess its success through:
                    </li>
                    <li>Regular water quality monitoring and reporting</li>
                    <li>
                      Feedback from stakeholders and communities involved in the
                      initiative
                    </li>
                    <li>Evaluation of policy adoption and enforcement rates</li>
                    <li>Periodic reviews of project milestones and outcomes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl span-color main-bg  font-itim px-1">
                  Our Partnership and Collaborations
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <ul className="text-md pl-2 section-sec space-y-5 text-white font-bold">
                    <li className="text-orange-400 font-bold">
                      Government agencies (e.g., Environmental Protection
                      Agency, Ghana Water Company)
                    </li>
                    <li>
                      Minerals Commission, District Assembly, Precious Minerals
                      Marketing Company (PMMC)
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
                <AccordionTrigger className="text-xl span-color-red  main-bg font-koh px-1">
                  Our Anticipated Challenges
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <ul className="text-md pl-2 section-sec space-y-5 text-white font-bold">
                    <li className="">
                      Limited access to advanced water monitoring technology in
                      rural areas
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
        )}
      </>
    );
  }
}
