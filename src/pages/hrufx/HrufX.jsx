import Table from "./Table";
import bluePrint from "../../assets/hurufx/blueprint.png";
import icon1 from "../../assets/hurufx-icons/Data-Analytics-&-Insights.png";
import icon2 from "../../assets/hurufx-icons/Marketing-Intelligence.png";
import icon3 from "../../assets/hurufx-icons/Strategic-Growth-Planning.png";

const HrufX = () => {
  return (
    <div className="min-h-screen px-5 max-sm:mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="h-[100vh] flex flex-col justify-center">
          <div className="strokeme">
            <h1 className="text-black  text-center text-4xl md:text-6xl font-thin">
              HURUFx
            </h1>
          </div>
          <QAA
            className="text-center md:w-1/2 mx-auto"
            title={"What is Business Intelligence?"}
            description={
              "Business Intelligence is the process of using technology to analyze data, transforming it into meaningful information that can inform business decisions. It involves collecting data from various sources, analyzing it, and presenting it in a way that is easy to understand, often through reports, dashboards, and visualizations."
            }
          />
        </div>
        <div className="flex flex-col md:w-2/3 h-[100vh] md:mx-auto gap-10">
          <QAA2
            aos="fade-right"
            image={icon1}
            title={"Data Analytics & Insights"}
            style={{
              borderTop: "1px solid white",
            }}
            description={
              "We analyze your data to reveal crucial insights about your business operations, customer behavior, and market trends. Our goal is to provide you with a clear understanding of where you stand and where you can go."
            }
          />
          <QAA2
            aos="fade-up"
            image={icon2}
            title={"Marketing Intelligence"}
            style={{
              borderTop: "1px solid white",
              borderBottom: "1px solid white",
            }}
            description={
              "Utilizing BI tools, we refine your marketing efforts to ensure they are as effective as possible. Whether through Above the Line (ATL), Below the Line (BTL), or Through the Line (TTL) marketing strategies, we help you reach your target audience with precision and creativity"
            }
          />
          <QAA2
            aos="fade-left"
            image={icon3}
            title={"Strategic Growth Planning"}
            style={{
              borderBottom: "1px solid white",
            }}
            description={
              "With our insights, your business can plan for the future more confidently. We identify opportunities for growth and areas for improvement, guiding you towards strategic decisions that enhance your competitive edge. "
            }
          />
        </div>

        <img src={bluePrint} alt="blueprint" className="w-1/2 mx-auto my-5" />
        <Table />
      </div>
    </div>
  );
};

export default HrufX;

const QAA = ({ title, description, className }) => {
  return (
    <div data-aos="fade-left" className={`text-white my-5 ${className}`}>
      <h2 className="text-white font-medium text-xl md:text-2xl">{title}</h2>
      <p className="md:text-xl my-5 leading-8">{description}</p>
    </div>
  );
};

const QAA2 = ({ image, title, description, ...props }) => {
  return (
    <div
      // data-aos={aos}

      className="flex-1 flex text-white my-5 gap-5 md:gap-20 items-center"
    >
      <img className="w-24" src={image} alt={image} />
      <div {...props} className="flex-1 py-6">
        <h2 className="text-white font-medium text-xl md:text-2xl">{title}</h2>
        <p className="md:text-lg text-white/80 leading-8 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};
