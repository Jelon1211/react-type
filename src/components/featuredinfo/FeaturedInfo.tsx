import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Open positions</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">156</span>
          <span className="featuredMoneyRate">
            +38% <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">yearly</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Candidates</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">24,5K</span>
          <span className="featuredMoneyRate">
            -22%
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Last week</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">General</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
