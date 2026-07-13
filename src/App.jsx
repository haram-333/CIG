import React from "react";
import { ReactLenis } from 'lenis/react';
import { Navbar9 } from "./components/Navbar9";
import { Header15 } from "./components/Header15";
import { Header65 } from "./components/Header65";
import { Stats43 } from "./components/Stats43";
import { Layout465 } from "./components/Layout465";
import { Layout213 } from "./components/Layout213";
import { Layout241 } from "./components/Layout241";
import { Layout398 } from "./components/Layout398";
import { Header62 } from "./components/Header62";
import { Layout360 } from "./components/Layout360";
import { Layout491 } from "./components/Layout491";
import { Layout356 } from "./components/Layout356";
import { Layout508 } from "./components/Layout508";
import { Faq6 } from "./components/Faq6";
import { Layout109 } from "./components/Layout109";
import { Layout375 } from "./components/Layout375";
import { Layout414 } from "./components/Layout414";
import { Layout491_1 } from "./components/Layout491_1";
import { Layout491_2 } from "./components/Layout491_2";
import { Layout245 } from "./components/Layout245";
import { Layout395 } from "./components/Layout395";
import { Timeline21 } from "./components/Timeline21";
import { Layout149 } from "./components/Layout149";
import { Layout491_3 } from "./components/Layout491_3";
import { Layout419 } from "./components/Layout419";
import { Cta57 } from "./components/Cta57";
import { Contact7 } from "./components/Contact7";
import { Footer2 } from "./components/Footer2";

export default function Page() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="bg-background min-h-screen text-slate-800">
        <Navbar9 />
        <Header15 />
        <Header65 />
        <Stats43 />
        <Layout465 />
        <Layout213 />
        <Layout241 />
        <Layout398 />
        <Header62 />
        <Layout360 />
        <Layout491 />
        <Layout356 />
        <Layout508 />
        <Faq6 />
        <Layout109 />
        <Layout375 />
        <Layout414 />
        <Layout491_1 />
        <Layout491_2 />
        <Layout245 />
        <Layout395 />
        <Timeline21 />
        <Layout149 />
        <Layout491_3 />
        <Layout419 />
        <Cta57 />
        <Contact7 />
        <Footer2 />
      </div>
    </ReactLenis>
  );
}
