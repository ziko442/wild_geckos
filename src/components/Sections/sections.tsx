import React from "react";
import About from "./About/about";
import Ecosystems from "./Ecosystems/ecosystems";
import HowToBuy from "./HowToBuy/howToBuy";
import Roadmap from "./Roadmap/roadmap";
import Team from "./Team/team";
import Advisors from "./Advisors/advisors";
import TokenSale from "./TokenSale/tokenSale";
import Faqs from "./Faqs/faqs";
import Contact from "./Contact/contact";

const Sections = () => {
    return 	(


        <main className="nk-pages tc-light">
        
            <About />
            <Ecosystems />
            <HowToBuy />
            <TokenSale />
            <Roadmap />
            <Team />
            <Advisors />
            <Faqs />
            <Contact />

        </main>  
);
};

export default Sections;