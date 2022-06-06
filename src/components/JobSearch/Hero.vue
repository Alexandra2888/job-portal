<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 ">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>


        <div class="col-start-2 col-span-5">
          <Headline />
          <job-search-form />
        </div>


        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img src="https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png"  alt="" class="w-80 h-80 object-contain"/>
        </div>


        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>
<script>
import Headline from "@/components/JobSearch/Headline";
import JobSearchForm from "@/components/JobSearch/JobSearchForm";
export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm
  }
}
</script>
