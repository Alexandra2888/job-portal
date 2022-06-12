<template>
  <div class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
       <h3 class="my-4 text-base font-semi-bold"> What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <base-button text="Clear filters" type="secondary"></base-button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "JobFiltersSidebar",
  components: {}

};
</script>
