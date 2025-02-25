import { Component, createRef, RefObject } from "react";
import { motion } from "framer-motion";

const areas = [
  {
    area: "Water Pollution",
    desc: "Tracking pollutants in water bodies through preventive and corrective measures.",
  },
  {
    area: "Monitoring Systems",
    desc: "Leveraging technology for effective monitoring and early detection of water quality issues.",
  },
  {
    area: "Conservation Practices",
    desc: "Encouraging practices like afforestation, reduction of water wastage and safe disposal of waste.",
  },
  {
    area: "Community Engagement",
    desc: "Building public awareness and participation through education and advocacy.",
  },
  {
    area: "Policy Advocacy",
    desc: "Collaborating with policymakers to develop and enforce sustainable water management regulations",
  },
];

const variantsVariant1 = (index: number) => ({
  hidden: { x: -700 },
  visible: {
    x: 0,
    transition: { duration: 1.5, delay: index * 2 + 0.2, ease: "easeOut" },
  },
});

class CoreValuesComp extends Component<{}, { inView: boolean }> {
  ref: RefObject<HTMLUListElement | null>;
  observer!: IntersectionObserver;
  hasAnimated: boolean = false;

  constructor(props: {}) {
    super(props);
    this.state = {
      inView: false,
    };
    this.ref = createRef<HTMLUListElement>();
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
      <section className="relative main-bg pb-20">
        <h1 className="text-center text-white font-bold text-2xl px-20 pt-10 font-koh">
          Our Core Focused Areas
        </h1>
        <ul className="pl-6 pr-1 space-y-6 mt-10" ref={this.ref}>
          {areas.map((area, area_index) => (
            <motion.li
              key={area_index}
              className="flex gap-1"
              variants={variantsVariant1(area_index)}
              initial="hidden"
              animate={controls}
            >
              <span className="span-color">0{area_index + 1}</span>
              <span className="w-25 span-bg h-[01px] mt-3"></span>
              <div>
                <h1 className="span-color font-bold">{area.area}</h1>{" "}
                <p className="text-white text-md font-itim">{area.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
    );
  }
}

export default CoreValuesComp;
