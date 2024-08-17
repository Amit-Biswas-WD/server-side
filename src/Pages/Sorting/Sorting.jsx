import { useState } from "react";
import { useParams } from "react-router-dom";

const Sorting = () => {
    const Category = [
        "Coffee",
        "Cold Coffee",
        "Hot Coffee",
      ];

      const { category } = useParams();
      const initialsIndex = Category.indexOf(category);
      const [tabIndex, setTabIndex] = useState(initialsIndex);

    const coffee = menu.filter((iten) => iten.category === "Coffee");
    const coldCoffee = menu.filter((iten) => iten.category === "Cold Coffee");
    const hotCoffee = menu.filter((iten) => iten.category === "Hot Coffee");
  
    

  return (
    <div className="my-20">
    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Coffee</Tab>
        <Tab>Cold Coffee"</Tab>
        <Tab>Hot Coffee</Tab>
      </TabList>
      <TabPanel>
        <OrdarTab items={coffee}></OrdarTab>
      </TabPanel>
      <TabPanel>
        <OrdarTab items={coldCoffee}></OrdarTab>
      </TabPanel>
      <TabPanel>
        <OrdarTab items={hotCoffee}></OrdarTab>
      </TabPanel>
    </Tabs>
  </div>
  );
};

export default Sorting;
