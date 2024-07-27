import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import "./Timeline.css"


const Timeline = () => {
  return (
    <div className="Timeline">
      <div className="timeline-heading">My Timeline</div>
      <div className="verticalcompo">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Aspiring Software and Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Self Employed
            </h4>
            <p>Worked with-React NodeJS Express MongoDB</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors of Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Indian Institute Of Technology ,Guwahati,India
            </h4>
            <p>Major in Chemical Engineering</p>
            <p>Minor in ECE</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              CBSE Senior Secondary
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Jamshedpur, Jharkhand
            </h4>
            <p>Percentage: 96.4%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              CBSE Secondary
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Jamshedpur, Jharkhand
            </h4>
            <p>Percentage: 97.6%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
