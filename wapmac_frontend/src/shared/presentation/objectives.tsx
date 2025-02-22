import React, { Component } from "react";

const objectives = [
  "To identify and address the causes and effects of water pollution.",
  "To implement advanced water quality monitoring systems for real-time assessments and data collection.",
  "To educate and engage communities in adopting sustainable water management practices.",
  "To collaborate with government bodies, private organizations and local stakeholders to enforce water conservation policies.",
  "To promote the restoration of polluted water bodies and ecosystems.",
];

class ObjectivesComp extends Component {
  render() {
    return (
      <section className="p-2 space-y-13 section-sec ">
        <h1 className="text-3xl font-semibold text-center h-headers">
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
              <li key={obj_index} className="flex gap-5">
                <span className="w-4 span-bg h-4 rounded-full absolute shadow-md"></span>
                <p className="pl-9 pb-2 h-content font-bold">{obj}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default ObjectivesComp;
