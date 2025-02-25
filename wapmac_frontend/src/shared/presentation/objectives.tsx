import { Component, createRef, RefObject } from "react";
import { motion } from "framer-motion";

const objectives = [
  "To identify and address the causes and effects of water pollution.",
  "To implement advanced water quality monitoring systems for real-time assessments and data collection.",
  "To educate and engage communities in adopting sustainable water management practices.",
  "To collaborate with government bodies, private organizations and local stakeholders to enforce water conservation policies.",
  "To promote the restoration of polluted water bodies and ecosystems.",
];

const variants = (index:number) => ({
  hidden: { x: -700 },
  visible: {
    x: 0,
    transition: { duration: 1.5, delay: index * 2 + 0.2, ease: "easeOut" },
  },
});

class ObjectivesComp extends Component <{}, {inView:boolean}> {
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
      <section className="p-2 space-y-13 section-sec " ref = {this.ref}>
        <h1 className="text-2xl font-semibold text-center h-headers font-koh mt-6">
          Our Objectives
        </h1>
        <div className="flex justify-center gap-6">
          <img src="/assets/img1.png" alt="image 1" />
          <img src="/assets/img2.png" alt="image 2" />
        </div>
        <div className="relative pl-8">
          <img src="/assets/line.png" alt="line" className="w-40 h-[40em]" />
          <ul className="absolute w-full top-0 left-0 right-0 pl-6 space-y-6">
            {objectives.map((obj, obj_index) => (
              <motion.li
                key={obj_index}
                className="flex gap-5"
                variants={variants(obj_index)}
                initial="hidden"
                animate={controls}
              >
                <span className="w-4 span-bg h-4 rounded-full absolute shadow-md"></span>
                <p className="pl-9 pb-2 h-content font-bold font-itim">{obj}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default ObjectivesComp;
