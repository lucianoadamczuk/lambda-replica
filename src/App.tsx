import { Suspense } from "react";
import About from "./layouts/About/About";
import Faqs from "./layouts/Faqs/Faqs";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Navbar from "./layouts/Navbar/Navbar";
import Values from "./layouts/Values/Values";
import WhatWeDo from "./layouts/WhatWeDo/WhatWeDo";
import WorkWithUs from "./layouts/WorkWithUs/WorkWithUs";
import Loading from "./layouts/Loading/Loading";
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Header />
      <main>
        <About />
        <WhatWeDo />
        <Values />
        <WorkWithUs />
        <Faqs />
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
