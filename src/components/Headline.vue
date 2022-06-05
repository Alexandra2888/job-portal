<template>
  <section>
    <h1 class="font-bold tracking-tighter text-8xl mb-14" data-test="action-phrase">
      <span :class="actionClasses">{{ action }}</span>
      <br>
      for everyone</h1>
    <h2 class="text-3xl font-light">Find your next job at New Careers</h2>
  </section>
</template>
<script>
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null
    }
  },
  methods: {
    changeTitle() {
     this.interval =  setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1 ) % 4;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 3000);
    }
  },
  computed: {
    actionClasses() {
      return {
       [this.action.toLowerCase()]: true
      }
    }
  },
  created() {
this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>
<style scoped>
.build{
  color: #1a73eB;
}

.create{
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
