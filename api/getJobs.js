import axios from "axios";

const getJobs = () => {
    axios.get("http://localhost/jobs")
.then(console.log("getJobs"))
};

export default getJobs;
