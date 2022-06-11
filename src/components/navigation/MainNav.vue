<template>
  <header :class="['w-full', 'test-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 max-auto border-b border-solid border-brand-grey-1">
        <router-link :to="{name: 'Home'}" class="flex items-center h-full text-xl" >New Careers</router-link>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="h-full ml-9 first:ml-0" data-test="main-nav-list-item">
              <router-link :to="menuItem.url" class="flex items-center h-full py-2.5" href="" >{{ menuItem.text }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <base-button v-else data-test="login-button" @click="LOGIN_USER" text="Sign in" type="primary"/>
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>
<script>
import {mapMutations, mapState} from "vuex";
import BaseButton from '../shared/BaseButton'
import ProfileImage from "./ProfileImage";
import SubNav from "./SubNav";

export default {
  components: { BaseButton, ProfileImage, SubNav },
  name: "MainNav",
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/" },
        { text: "Locations", url: "/" },
        { text: "Life at New Careers", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" }
      ],
    }
  },
  methods: {
...mapMutations(["LOGIN_USER"])
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn
      }
    },
    ...mapState(["isLoggedIn"]),
  },
}
</script>
