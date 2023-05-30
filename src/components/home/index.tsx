import type { FC } from "react";

// Components
import Hero from "./hero";
import AnalyticsComponent from "./analytics";
import TraceabilityComponent from "./traceability";
import SecurityComponent from "./security";
import IntegrationsComponent from "./integrations";
import ExploreComponent from "./explore";
import PricingComponent from "./pricing";

const componentsArry = [
  { name: "Hero", component: <Hero /> },
  { name: "Analytics", component: <AnalyticsComponent /> },
  { name: "Traceability", component: <TraceabilityComponent /> },
  { name: "Security", component: <SecurityComponent /> },
  { name: "Integrations", component: <IntegrationsComponent /> },
  { name: "Explore", component: <ExploreComponent /> },
  { name: "Pricing", component: <PricingComponent /> },
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
