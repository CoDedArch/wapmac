import { Component } from "react";

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
  
class CoreValuesComp extends Component {
  render() {
    return (
        <section className="relative main-bg pb-20">
        <h1 className="text-center text-white font-bold text-2xl px-20 pt-10 font-koh">
          Our Core Focused Areas
        </h1>
        <ul className="pl-6 pr-1 space-y-6 mt-10">
          {areas.map((area, area_index) => (
            <li key={area_index} className="flex gap-1">
              <span className="span-color">0{area_index + 1}</span>
              <span className="w-25 span-bg h-[01px] mt-3"></span>
              <div>
                <h1 className="span-color font-bold">{area.area}</h1>{" "}
                <p className="text-white text-md font-itim">{area.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default CoreValuesComp;
