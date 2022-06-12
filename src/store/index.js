import { createStore } from 'vuex';
import getJobs from "../../api/getJobs";

export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE JOBS";
export const FETCH_JOBS = "FETCH JOBS";

export const state = () => {
  return {
  isLoggedIn: false,
    jobs:[]
};
};

export const mutations = {
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  }
};

export const actions = {
[FETCH_JOBS]: async (context) => {
 const jobListings = await getJobs();
 context.commit(RECEIVE_JOBS, jobListings);
}
}

const store = createStore({
  state,
  mutations,
  actions,
  strict: true // only in development mode
})

export default store;
