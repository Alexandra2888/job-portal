<template>
  <input type="text" :placeholder="placeholder" @input="handleInput" :value="value" class="w-full text-lg font-normal focus:outline-none"/>
</template>
<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
  },
    data() {
      return {
        value: '',
      };
    },
  methods: {
    handleInput($event) {
      $event.target.value;
    }
  }
  };
</script>
