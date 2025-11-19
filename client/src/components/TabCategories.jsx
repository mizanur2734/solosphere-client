import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const TabCategories = () => {
  return (
    <Tabs>
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl capitalize">
          Browse Jobs By categories
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quae sint numquam odio quod blanditiis laborum reprehenderit, unde
          itaque incidunt!{" "}
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <JobCard/>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
