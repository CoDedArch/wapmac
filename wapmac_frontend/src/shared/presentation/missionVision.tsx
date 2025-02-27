import { Component, createRef, RefObject } from "react";
import { motion } from "framer-motion";
import { Variant1, Variant3 } from "../constants/variants";

class MissionVisionComp extends Component<{}, { inView: boolean }> {
  ref: RefObject<HTMLElement | null>;
  observer!: IntersectionObserver;
  hasAnimated: boolean = false;

  constructor(props: {}) {
    super(props);
    this.state = {
      inView: false,
    };
    this.ref = createRef<HTMLElement>();
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
      <section
        ref={this.ref}
        className="text-center sm:text-left p-2 space-y-13 section-sec pb-10 sm:flex "
        style={{ backgroundImage: `url('/assets/cleaning.png')` }}
      >
        <motion.div
          variants={Variant3}
          initial="hidden"
          animate={controls}
          className="space-y-3 mt-20 sm:w-1/2 sm:px-14 flex flex-col items-center sm:block"
        >
          <img
            src="/assets/vision.png"
            alt="vision logo"
            className="w-20 sm:w-min"
          />
          <h1 className="text-2xl font-semibold h-headers font-koh sm:text-5xl">
            Our Vision
          </h1>
          <p className="px-4 sm:p-0 text-lg sm:text-3xl h-content font-semibold font-itim">
            To create a world where water resources are clean, conserved, and
            sustainably managed to ensure environmental health and the
            well-being of future generations
          </p>
        </motion.div>
        <motion.div
          variants={Variant1}
          initial="hidden"
          animate={controls}
          className="space-y-3 flex flex-col items-center sm:block sm:w-1/2 sm:mt-20 sm:px-14"
        >
          <img
            src="/assets/mission.png"
            alt="vision logo"
            className="w-20 sm:w-min"
          />
          <h1 className="text-2xl sm:-mt-5 font-semibold h-headers font-koh sm:text-5xl">
            Our Mission
          </h1>
          <p className="px-4 sm:p-0 text-lg sm:text-3xl h-content font-semibold font-itim">
            Is committed to combating water pollution through innovative
            monitoring systems, community education, and collaborative
            conservation practices. The agency seeks to drive sustainable
            actions that protect water resources while promoting ecological
            balance
          </p>
        </motion.div>
      </section>
    );
  }
}

export default MissionVisionComp;
