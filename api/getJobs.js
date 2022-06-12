import axios from "axios";

const getJobs = async () => {
 const response = await   axios.get("http://localhost/jobs")
return response.data
};

export default getJobs;
