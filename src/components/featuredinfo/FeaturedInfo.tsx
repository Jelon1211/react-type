import "./featuredinfo.css";
import {
  ArrowDownward,
  ArrowUpward,
  TrendingUpTwoTone,
} from "@mui/icons-material";

//commnet 1

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
        <div className="featuredSubContainer">
          <span className="yearly">yearly</span>
        </div>
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
        <div className="featuredSubContainer">
          <span className="weekly">last week</span>
        </div>
      </div>
      <div className="generalItem">
        <div className="featuredItem">
          <span className="featuredTitle">General</span>
          <div className="featuredInfoContainer">
            <span className="featuredInfo">Total 48.5% growth 😎</span>
            <span className="featuredInfoMonth"> this month</span>
          </div>
          <div className="featuredPositionsContainer">
            <div className="featuredEmployees">
              <div></div>
            </div>
            <div className="featuredCandidates"></div>
            <div className="featuredInterviews"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
