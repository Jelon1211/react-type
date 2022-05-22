import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Open positions</span>
        <div className="featuredPositionsContainer">
          <span className="featuredNumber">156</span>
          <span className="featuredNumberRate bull">
            +38% <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">yearly</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Candidates</span>
        <div className="featuredPositionsContainer">
          <span className="featuredNumber">24,5K</span>
          <span className="featuredNumberRate bear">
            -22%
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Last week</span>
      </div>
      <div className="general">
        <div className="featuredItem">
          <span className="featuredTitle">General</span>
          <div className="featuredInfoContainer">
            <span className="featuredInfo">Total 48.5% growth</span>
            <span className="featuredInfoMonth"> this month</span>
          </div>
          <div className="featuredPositionsContainer">
            <span className="featuredNumber">$2,225</span>
            <span className="featuredNumberRate bear">
              +2.4 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
