import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/style.css";
// import "node_modules/video-react/dist/video-react.css";
import "../node_modules/video-react/dist/video-react.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="beny_tm_all_wrap">
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="245,162,1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <AllRoutes />
    </div>
  );
};

export default App;
