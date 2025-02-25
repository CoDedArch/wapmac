import { Component } from "react";

import { Header } from "@/shared/presentation/headerComp";

class LearnMorePage extends Component<{}, { currentImageIndex: number }> {
  intervalId: NodeJS.Timeout | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(this.cycleImages, 4000); // Set interval to 2 seconds
  }
  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear interval on unmount
    }
  }
  cycleImages = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % 20, // Cycle through 20 images
    }));
  };
  render() {
    const { currentImageIndex } = this.state;
    return (
      <main className="">
        <Header />
        <section>
          <section
            className="relative"
            style={{ backgroundImage: `url('/assets/landing-pic.png')` }}
          >
            <div className="relative pt-2 space-y-8 top-0 w-full left-0 right-0 h-full bg-black/55 text-white">
              <p className="font-extrabold agenda text-3xl text-center font-koh">
                WAPMAC PROJECTS
              </p>
              <div>
                <p className="font-extrabold span-color text-2xl font-itim pb-2 pl-2">
                  Upcoming
                </p>
                <div className="flex gap-2 flex-wrap justify-center p-3">
                  <img
                    src={`/assets/article/intro${currentImageIndex}.jpg`}
                    alt="image"
                    className="max-w-full max-h-60 rounded-2xl"
                  />
                </div>
                <article className="bg-black/55 space-y-5 font-itim pb-10 px-2">
                  <p className="font-bold text-center text-md font-koh">
                    <span className="span-color italic">WAPMAC</span> Team
                    Engages MP for Tarkwa-Nsuaem on Water Pollution Control
                  </p>
                  <div className="text-lg space-y-5">
                    <p>
                      On Monday, 17th February 2025, the Water Pollution
                      Monitoring and Conservation (WAPMAC) team had a productive
                      engagement with the Member of Parliament for
                      Tarkwa-Nsuaem, Hon. Issah Salifu Taylor. The meeting
                      focused on discussing the urgent need for monitoring and
                      controlling water pollution, particularly in
                      mining-affected areas, and seeking parliamentary support
                      for the initiative.
                    </p>
                    <p>
                      <strong>Hon. Issah Salifu Taylor </strong>
                      expressed keen interest in the project, acknowledging the
                      devastating impact of illegal mining (galamsey) on water
                      bodies, including the Bonsa River. He assured the WAPMAC
                      team of his commitment to advocating for the project in
                      Parliament{" "}
                      <em>
                        and engaging the Minister for Lands and Natural
                        Resources, Hon. Emmanuel Armah-Kofi Buah
                      </em>{" "}
                      , to explore policy backing and funding opportunities.
                    </p>
                  </div>
                  <p className="font-bold text-center font-koh">
                    The
                    <span className="span-color italic">WAPMAC</span>{" "}
                    Presentation
                  </p>
                  <div className="text-lg space-y-5">
                    <p>
                      The meeting featured an insightful presentation by{" "}
                      <strong>Dr Eric Gyimah</strong>, an environmental
                      engineer, ecotoxicologist and the team lead, who outlined:
                      <ul className="my-2">
                        <li>
                          ✅ The vision of WAPMAC—to protect and conserve water
                          bodies through innovative monitoring systems.
                        </li>
                        <li>
                          ✅ The aim—to track and mitigate pollution caused by
                          illegal mining.
                        </li>
                        <li>
                          {" "}
                          ✅ The main focus—deploying real-time surveillance
                          technology to enforce environmental conservation.
                        </li>
                      </ul>
                    </p>
                    <p>
                      <strong>Mr. Benjamin Atta Nyarko </strong>
                      the project Technical lead, provided a technical breakdown
                      of how the project will be implemented. He showcased a
                      video animation demonstrating:
                      <em>
                        The step-by-step installation process of monitoring
                        devices. How the system will provide real-time data on
                        water quality and illegal mining activities. The
                        enforcement measures to be taken based on collected
                        data.
                      </em>
                    </p>
                    <p>
                      <strong>Mr. Enoch Nana Kofi Beenuyie </strong>
                      the Corporate Affairs Lead{" "}
                      <em>
                        also emphasized on WAPMAC using the Bonsa River as a
                        pilot project to clean water pollution through illegal
                        mining activities.
                      </em>
                    </p>
                    <p>
                      <strong>Hon. Issah Salifu Taylor</strong>, in his
                      contribution, emphasized{" "}
                      <em>
                        the importance of proper installation and security of
                        the devices to ensure their efficiency. He stressed the
                        need for strategic deployment to prevent vandalism and
                        unauthorized interference.
                      </em>
                    </p>
                    <p>
                      One of the highlights of the meeting was a video
                      presentation by Raphael Zorve, WAPMAC’s drone pilot. His
                      footage revealed:
                      <ul>
                        <li>
                          📌 The current state of the Bonsa River,showing
                          extreme levels of pollution.
                        </li>
                        <li>
                          📌 Illegal mining activities ongoing around the river,
                          worsening environmental degradation.
                        </li>
                      </ul>
                    </p>
                    <p>
                      The visuals sparked a sense of urgency, reinforcing the
                      need for immediate action to save the region’s water
                      resources.
                    </p>
                    <p>
                      Hon. Issah Salifu Taylor reaffirmed his dedication to
                      championing the cause in Parliament. He pledged to:
                      <ul>
                        <li>
                          🔹 Push for policy discussions on water pollution
                          control.
                        </li>
                        <li>
                          🔹 Engage relevant stakeholders, including the
                          Ministry of Lands and Natural Resources, for support.
                        </li>
                        <li>
                          🔹 Advocate for funding to ensure the successful
                          implementation of the WAPMAC initiative.
                        </li>
                      </ul>
                    </p>
                    <p>
                      The meeting was a major step toward securing legislative
                      and governmental support for WAPMAC. With the MP’s
                      backing, the team is optimistic about further engagements
                      with policymakers, environmental agencies, and community
                      stakeholders to drive lasting solutions.
                    </p>
                    <p>
                      As <span className="span-color">WAPMAC</span> continues
                      its mission, the message remains clear—
                      <em className="span-color font-bold">
                        the time to act is now!
                      </em>
                    </p>
                    <p>
                      Stay connected for updates on the progress of this
                      groundbreaking initiative. Together, we can protect our
                      water bodies for future generations.
                    </p>
                    <p>
                      #WAPMAC #SaveOurWater #EndPollution
                      #GalamseyMustStopInourRivers. #EnvironmentalConservation
                    </p>
                  </div>
                  <p className="font-extrabold span-color font-itim text-2xl pb-2">
                    Technology Solutions
                  </p>
                  <ul className="pb-20 space-y-10">
                    <li className="space-y-5">
                      <p className="font-bold font-itim">
                        WAPMAC MONITORING DEVICE
                      </p>
                      <div className="flex gap-2 flex-wrap justify-center">
                        {
                          Array.from({ length: 3 }, (_, image_index) => (
                            <img
                              key={image_index}
                              src={`/assets/technologies/device${
                                image_index + 3
                              }.jpg`}
                              alt="image"
                              className="w-40 rounded-2xl"
                            />
                          ))
                          /* this is for images */
                        }
                      </div>
                    </li>
                    <li className="space-y-5">
                      <p className="font-bold font-itim">
                        WAPMAC WATER QUALITY SENSOR
                      </p>
                      <div className="bg-gray-200 p-4 m-2 rounded">
                        <video
                          src="/assets/technologies/device1.mp4" // Replace with your actual video URL
                          width="150"
                          height="150"
                          controls
                          autoPlay
                          loop
                          muted
                          className="w-full"
                        />
                      </div>
                    </li>
                    <li className="space-y-5">
                      <p className="font-bold font-itim">
                        WAPMAC WATER QUALITY MONITORING CENTER
                      </p>
                      <img
                        src="/assets/technologies/device2.jpg"
                        alt="monitoring center"
                        className="rounded-2xl"
                      />
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
        </section>
        <footer className="main-bg p-2 rounded-b-2xl w-full space-y-2">
          <div className="flex items-center justify-between span-color font-extrabold gap-2">
            <div className="flex items-center">
              <img src="/assets/logo.png" alt="logo" className="w-[3.5em]" />
              WAPMAC
            </div>
            <span className="text-white">copyright@2025</span>
          </div>
          <div className="bg-white/55 w-full h-fit flex p-4 justify-between">
            <div className="flex items-center">
              <img src="/assets/email.png" alt="email" className="w-5" />
              <a
                href="mailto:kelvingbolo98@gmail.com"
                className="ml-2 text-blue-500 font-extrabold underline"
              >
                Email Us
              </a>
            </div>
            <div className="flex items-center">
              <img src="/assets/call.png" alt="call" className="w-5" />
              <a
                href="tel:+233248814260"
                className="ml-2 text-orange-500 font-extrabold"
              >
                Place a Phone call
              </a>
            </div>
          </div>
        </footer>
      </main>
    );
  }
}

export default LearnMorePage;
