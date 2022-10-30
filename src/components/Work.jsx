import WorkCard from "./WorkCard";
import workData from "./workData";
import "./workCardStyles.css";

export default function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {workData.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
