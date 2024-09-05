<template>
  <div class="htmlClass">
    <h1>{{ head }}</h1>
    <form>
      <input type="text" id="firstName" v-model="firstName" />
      <input type="text" id="secondName" v-model="secondName" />
      <input type="text" id="studentID" v-model="studentID" />
      <input type="text" id="nickname" v-model="nickname" />
      <button @click="submitForm()" class="submitForm">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputPage",
  data() {
    return {
      head: "เช็คข้อมูลนักศึกษา",
      firstName: "พรพิพัฒน์",
      secondName: "พรมเสพสัก",
      studentID: "6604101356",
      nickname: "เวฟ"
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit form");
    },
  },
};
</script>

<style scoped></style>