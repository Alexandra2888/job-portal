<template>
  <form @submit.prevent="searchForJobs" class="flex items-center w-full h-12 mt-14 border border-solid border-brand-grey-3 rounded-3xl">
    <svg class="ml-4 mr-3" height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32"
         width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(576 192)"><path d="M-544.88-165.121l-7.342-7.342c-1.095,1.701-2.541,3.148-4.242,4.242l7.343,7.342c1.172,1.172,3.071,1.172,4.241,0   C-543.707-162.048-543.707-163.947-544.88-165.121z"/><path
        d="M-552-180c0-6.627-5.373-12-12-12s-12,5.373-12,12s5.373,12,12,12S-552-173.373-552-180z M-564-171c-4.964,0-9-4.036-9-9   c0-4.963,4.036-9,9-9c4.963,0,9,4.037,9,9C-555-175.036-559.037-171-564-171z"/><path
        d="M-571-180h2c0-2.757,2.242-5,5-5v-2C-567.86-187-571-183.858-571-180z"/></g></svg>
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10"></label>
        <text-input type="text"  v-model="role" placeholder="Software engineer" class="w-full text-lg font-normal focus:outline-none"/>
      </div>


      <span class="flex items-center h-full px-3 border-l border-r border-brand-grey-3">in</span>

      <div class="relative flex items-center flex-1 h-full pl-3">
<label class="absolute left-0 -top-10">Where?</label>
        <text-input type="text" v-model="location" placeholder="Los Angeles" class="w-full text-lg font-normal focus:outline-none" />
      </div>
    </div>
    <base-button text="Search" type="secondary" class="ml-4 mr-3"></base-button>
  </form>
</template>
<script>
import {ref} from "vue";
import BaseButton from "@/components/shared/BaseButton";
import TextInput from "@/components/shared/TextInput";
import { useRouter } from "vue-router";
export default {
  name: "JobSearchForm",
  components: {BaseButton, TextInput},

  setup(){
   const router = useRouter();

const role = ref("");
  const location = ref("");

  const searchForJobs = () => {
    router.push({
      name: "JobResults",
      query: { role: role.value, location: location.value}
    })
    }

 return {
   role,
   location,
   searchForJobs
 }
 }
}
</script>
