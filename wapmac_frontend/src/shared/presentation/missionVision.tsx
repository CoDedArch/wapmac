import React, { Component } from "react";

class MissionVisionComp extends Component {
  render() {
    return (
      <section
        className="text-center p-2 space-y-13 section-sec pb-10 "
        style={{ backgroundImage: `url('/assets/cleaning.png')` }}
      >
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold h-headers">Our Vision</h1>
          <p className="px-4 text-lg h-content font-semibold">
            To create a world where water resources are clean, conserved, and
            sustainably managed to ensure environmental health and the
            well-being of future generations
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold h-headers">Our Mission</h1>
          <p className="px-3 text-lg h-content font-semibold">
            Is committed to combating water pollution through innovative
            monitoring systems, community education, and collaborative
            conservation practices. The agency seeks to drive sustainable
            actions that protect water resources while promoting ecological
            balance
          </p>
        </div>
      </section>
    );
  }
}

export default MissionVisionComp;
