<template>
  <header class="w-full test-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 max-auto border-b border-solid border-brand-grey-1">
        <a class="flex items-center h-full text-xl" href="/">{{ company }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="h-full ml-9 first:ml-0">
              <a class="flex items-center h-full py-2.5" href="">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <base-button v-else data-test="login-button" @click="loginUser" text="Sign in" type="primary"/>
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>
<script>
import BaseButton from '../components/BaseButton'
import ProfileImage from "../components/ProfileImage";
import SubNav from "../components/SubNav";

export default {
  components: { BaseButton, ProfileImage, SubNav },
  name: "MainNav",
  data() {
    return {
      company: "New Careers",
      menuItems: ["Teams", "Locations", "Life at New Careers", "How we hire", "Students", "Jobs"],
      isLoggedIn: false
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    }
  }
}
</script>
