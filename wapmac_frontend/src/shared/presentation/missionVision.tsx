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
        className="text-center p-2 space-y-13 section-sec pb-10 "
        style={{ backgroundImage: `url('/assets/cleaning.png')` }}
      >
        <motion.div
          variants={Variant3}
          initial="hidden"
          animate={controls}
          className="space-y-3 mt-6"
        >
          <h1 className="text-2xl font-semibold h-headers font-koh">
            Our Vision
          </h1>
          <p className="px-4 text-lg h-content font-semibold font-itim">
            To create a world where water resources are clean, conserved, and
            sustainably managed to ensure environmental health and the
            well-being of future generations
          </p>
        </motion.div>
        <motion.div
          variants={Variant1}
          initial="hidden"
          animate={controls}
          className="space-y-3"
        >
          <h1 className="text-2xl font-semibold h-headers font-koh">
            Our Mission
          </h1>
          <p className="px-4 text-lg h-content font-semibold font-itim">
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
