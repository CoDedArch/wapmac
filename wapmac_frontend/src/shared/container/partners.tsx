import { Component, createRef, RefObject } from "react";
import { motion } from "framer-motion";
import { Variant3 } from "../constants/variants";

interface PartnerProps {}

interface Expert {
  img: string;
  name: string;
  role: string;
  responsibilities: string[];
}

interface PartnerCompState {
  currentExpert: Expert;
  leftExperts: Expert[];
  rightExperts: Expert[];
  inView: boolean;
}

const experts: Expert[] = [
  {
    img: "assets/gyimah.jpg",
    name: "Dr Eric Gyimah",
    role: "Environmental Engineer and Ecotoxicologist",
    responsibilities: [
      "He is responsible for laboratory testing of water particles and other pollution parameters",
      "He is responsible for environmental reclamation and air pollution monitoring",
      "⁠Advice the team on environmental impact assessment",
    ],
  },
  {
    img: "assets/feld.jpg",
    name: "Feld Yelfaanibe",
    role: "Product Lead and Software Engineer",
    responsibilities: [
      "He is responsible for designing, manufacturing and testing of the monitoring devices",
      "⁠He is responsible for Software Development and ensure successful Hardware integration",
    ],
  },
  {
    img: "assets/Raph.jpg",
    name: "Raphael Zorve",
    role: "Drone Pilot and Publicity Lead",
    responsibilities: [
      " He seeks to it that mining sites are well captured for accessing",
      "He is responsible for identifying river tributes",
      "He is responsible for publishing WAPMAC projects for public use",
    ],
  },
  {
    img: "assets/enoch.jpg",
    name: "Enock Beenuyie",
    role: "Community Affairs Officer",
    responsibilities: [
      "He leads in community engagement for smooth project implementation",
      "He is responsible for public sensitization",
      "⁠He serves as Public Relations for the project",
      "He leads in project funding",
    ],
  },
  {
    img: "assets/ben.jpg",
    name: "Benjamin Atta Nyarko",
    role: "Geomatic Engineer & Project Manager",
    responsibilities: [
      "Develops strategic business models for the project",
      "Coordinate the team for successful project execution",
      "Responsible of mapping rivers and mining sites along the rivers for buffering",
      "⁠Responsible for identifying monitoring points for setting out",
      "Draws implementation strategies depending on location and terrain of project implementation",
      "Coordinates various stakeholders for successful project execution",
    ],
  },
  {
    img: "assets/catherine.jpg",
    name: "Mrs Catherine Atta Nyarko",
    role: "Project Administrator",
    responsibilities: [
      "Responsible for project documentations",
      "Responsible for community engagements",
    ],
  },
];

class PartnersComp extends Component<PartnerProps, PartnerCompState> {
  ref: RefObject<HTMLDivElement | null>;
  observer!: IntersectionObserver;
  hasAnimated: boolean = false;

  constructor(props: PartnerProps) {
    super(props);
    this.state = {
      currentExpert: experts[0],
      leftExperts: experts.slice(1, Math.ceil(experts.length / 2) + 1),
      rightExperts: experts.slice(Math.ceil(experts.length / 2) + 1),
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
  handleLeftClick = () => {
    const { leftExperts, currentExpert, rightExperts } = this.state;

    if (leftExperts.length > 0) {
      const newRightExperts = [currentExpert, ...rightExperts];
      const newCurrentExpert = leftExperts[leftExperts.length - 1];
      const newLeftExperts = leftExperts.slice(0, -1);

      this.setState({
        currentExpert: newCurrentExpert,
        leftExperts: newLeftExperts,
        rightExperts: newRightExperts,
      });
    }
  };

  handleRightClick = () => {
    const { leftExperts, currentExpert, rightExperts } = this.state;

    if (rightExperts.length > 0) {
      const newLeftExperts = [...leftExperts, currentExpert];
      const newCurrentExpert = rightExperts[0];
      const newRightExperts = rightExperts.slice(1);

      this.setState({
        currentExpert: newCurrentExpert,
        leftExperts: newLeftExperts,
        rightExperts: newRightExperts,
      });
    }
  };
  render() {
    const { currentExpert, leftExperts, rightExperts } = this.state;
    const { inView } = this.state;
    const controls = inView ? "visible" : "hidden";
    return (
      <section
        ref={this.ref}
        className="main-bg relative -top-20 space-y-40 overflow-hidden"
        style={{ backgroundImage: `url('/assets/partners.png')` }}
      >
        <h1 className="text-center text-white font-bold text-2xl sm:text-5xl px-24 pt-10 font-koh">
          Our Team of Experts
        </h1>
        <section className="relative flex xl:justify-center sm:mt-20">
          {/* Left Indicator */}
          {leftExperts.length > 0 && (
            <div className="bg-white/50 absolute sm:w-60 -left-5 sm:-left-40 h-[80%] w-10 rounded-full sm:rounded-2xl"></div>
          )}

          <div className="flex flex-col justify-center items-center space-y-6 pb-10 px-5">
            <motion.div
              variants={Variant3}
              initial="hidden"
              animate={controls}
              className="relative bg-white p-2 text-center pt-20  h-content rounded-3xl mx-4 shadow-2xl flex flex-col items-center space-y-1"
            >
              <div
                className="absolute w-[9em] h-[9em] -top-20 rounded-full left-[27%] xl:left-[45%]  bg-cover"
                style={{ backgroundImage: `url(${currentExpert.img})` }}
              ></div>
              <h1 className="text-2xl font-bold sm:text-3xl">
                {currentExpert.name}
              </h1>
              <h2 className="font-semibold mb-4 font-itim sm:text-2xl">
                {currentExpert.role}
              </h2>
              {currentExpert.responsibilities.map(
                (responsibility, res_index) => (
                  <p
                    className="font-semibold font-itim sm:text-center  sm:w-1/2 sm:text-2xl"
                    key={res_index}
                  >
                    - {responsibility}
                  </p>
                )
              )}
            </motion.div>
            <div className="flex gap-50">
              <button
                className="w-20 flex justify-center main-bg sm:shadow shadow-2xl  sm:w-40 sm:p-2 rounded-2xl hover:cursor-pointer"
                onClick={this.handleLeftClick}
              >
                <img
                  src="/assets/left.png"
                  alt="right arrow"
                  className="sm:w-10"
                />
              </button>
              <button
                className="w-10 flex justify-center main-bg  sm:w-40 sm:p-2 rounded-2xl hover:cursor-pointer"
                onClick={this.handleRightClick}
              >
                <img
                  src="/assets/right.png"
                  alt="right arrow"
                  className="sm:w-10"
                />
              </button>
            </div>
          </div>

          {/* Right Indicator */}
          {rightExperts.length > 0 && (
            <div className="bg-white/50 absolute -right-5 sm:-right-40 sm:w-60 h-[80%] w-10 rounded-full sm:rounded-2xl"></div>
          )}
        </section>
      </section>
    );
  }
}

export default PartnersComp;
