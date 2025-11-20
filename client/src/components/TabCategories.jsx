import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCategories = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData()
    }, [])
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
            <Tab>Graphics design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              .filter((j) => j.category === "web development")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              .filter((j) => j.category === "graphics design")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
         <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs
              .filter((j) => j.category === "digital marketing")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
