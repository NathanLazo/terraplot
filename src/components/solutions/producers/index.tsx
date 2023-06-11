import type { FC } from "react";

// Components

import AnalyticsComponent from "./analytics";
import TraceabilityComponent from "./traceability";
import PricingComponent from "./pricing"; 
import IntegrationsComponent from "./integrations";
import ExploreComponent from "./explore";


const componentsArry = [
  
  { name: "Analytics", component: <AnalyticsComponent /> },
  { name: "Traceability", component: <TraceabilityComponent /> },
  { name: "Integrations", component: <IntegrationsComponent /> },
  { name: "Explore", component: <ExploreComponent /> },
  { name: "Pricing", component: <PricingComponent /> }
];


const index: FC = ({}) => {
  return (
    <>
      {componentsArry.map((component, index) => {
        return (
          <div key={index} className="overflow-x-clip">
            {component.component}
          </div>
        );
      })}
    </>
  );
};
export default index;
