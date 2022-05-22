import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import HomeView from "./components/home/HomeView";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <HomeView />
      </div>
    </div>
  );
}

export default App;
