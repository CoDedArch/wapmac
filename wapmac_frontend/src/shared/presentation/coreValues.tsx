import { Component, createRef, RefObject } from "react";
import { motion } from "framer-motion";


const areas = [
  {
    area: "Monitoring Systems",
    desc: "Leveraging technology for effective monitoring and early detection of water quality issues.",
    image: "/assets/monitor.png",
  },
  {
    area: "Water Pollution",
    desc: "Tracking pollutants in water bodies through preventive and corrective measures.",
  },
  
  {
    area: "Conservation Practices",
    desc: "Encouraging practices like afforestation, reduction of water wastage and safe disposal of waste.",
  },
  {
    area: "Community Engagement",
    desc: "Building public awareness and participation through education and advocacy.",
    image: "/assets/community.png",
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


const Variant3 =(index:number) => ({
  hidden: { scale: 0.5 },
  visible: { scale: 1, transition: { duration: 1, delay: index * 0.5 + 0.2, ease: "easeIn" } },
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
        <h1 className="text-center sm:text-left sm:text-5xl  sm:w-[14em] text-white font-bold text-2xl px-20 pt-10 font-koh">
          Our Core Focused Areas
        </h1>
        <ul
          className="pl-6 pr-1 space-y-6 mt-10 lg:flex flex-wrap justify-between gap-1 sm:px-30"
          ref={this.ref}
        >
          {areas.map((area, area_index) => (
            <motion.li
              key={area_index}
              className="flex gap-1 lg:w-1/3 "
              variants={window.innerWidth < 640 ? variantsVariant1(area_index) : Variant3(area_index)}
              initial="hidden"
              animate={controls}
            >
              {area_index === 0 ? (
                <div className="hidden sm:flex gap-2">
                <div>
                  <img
                    src={area.image}
                    alt="community"
                    className="w-[60em] h-full"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="span-color font-bold sm:text-5xl">
                    {area.area}
                  </h1>{" "}
                  <p className="text-white text-md font-itim sm:text-3xl">
                    {area.desc}
                  </p>
                </div>
              </div>
              ) : area_index === 3 ? (
                <div className="hidden sm:flex gap-2">
                  <div>
                    <img
                      src={area.image}
                      alt="community"
                      className="w-[60em] h-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="span-color font-bold sm:text-5xl">
                      {area.area}
                    </h1>{" "}
                    <p className="text-white text-md font-itim sm:text-3xl">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ) : null}

              {
                <>
                <span className="span-color sm:hidden">
                    0{area_index + 1}
                  </span>
                  <span className="w-25 span-bg h-[01px] mt-3 sm:hidden"></span>
                  <div className={`${area_index === 0 ? "sm:hidden" : area_index === 3 ? "sm:hidden" : area_index == 1 ? "flex flex-col justify-center":"sm:block" }`}>
                    <h1 className="span-color font-bold sm:text-5xl ">
                      {area.area}
                    </h1>{" "}
                    <p className="text-white text-md font-itim sm:text-3xl">
                      {area.desc}
                    </p>
                  </div>
                </>
              }
            </motion.li>
          ))}
        </ul>
      </section>
    );
  }
}

export default CoreValuesComp;
