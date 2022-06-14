import axios from "axios";

const getJobs = async () => {
 const response = await  axios.get("  http://localhost:8080/jobs     ")
return response.data
};

export default getJobs;
