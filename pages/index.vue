<script setup lang="ts">
// import { reactive } from 'vue';
enum Gender {
  BOY = 'boy',
  GIRL = 'girl',
  UNISEX = 'unisex'
}
enum Popularity {
  TRENDY = 'trendy',
  UNIQUE = 'unique'
}
enum NameLength {
  SHORT = 'short',
  ALL = 'all',
  LONG = 'long'
}
  interface OptionsState {
    gender: string;
    popularity: string;
    nameLength: string;
  }
  const options = reactive<OptionsState>({
    gender: Gender.UNISEX,
    popularity: Popularity.TRENDY,
    nameLength: NameLength.ALL
  });

</script>

<template>
  <div class="container">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <h1>Baby Name Generation</h1>
    <p>Choose Your Options and Click "Find Names" Button Below</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1)Choose Gender</h4>
        <button
        :class="options.gender===Gender.BOY?'option-active':''"
        @click="options.gender=Gender.BOY"
        >Boy</button>
        <button
        :class="options.gender===Gender.GIRL?'option-active':''"
        @click="options.gender=Gender.GIRL"
        >Girl</button>
        <button
        :class="options.gender===Gender.UNISEX?'option-active':''"
        @click="options.gender=Gender.UNISEX"
        >Unisex</button>
      </div>
      <div class="option-container">
        <h4>2)Choose Popularity</h4>
        <button
        :class="options.popularity===Popularity.TRENDY?'option-active':''"
        @click="options.popularity=Popularity.TRENDY">Trendy</button>
        <button
        :class="options.popularity===Popularity.UNIQUE?'option-active':''"
        @click="options.popularity=Popularity.UNIQUE">Unique</button>
      </div>
      <div class="option-container">
        <h4>3)Choose Name's Length</h4>
        <button
        :class="options.nameLength===NameLength.SHORT?'option-active':''"
        @click="options.nameLength=NameLength.SHORT">Short</button>
        <button
        :class="options.nameLength===NameLength.ALL?'option-active':''"
        @click="options.nameLength=NameLength.ALL">All</button>
        <button
        :class="options.nameLength===NameLength.LONG?'option-active':''"
        @click="options.nameLength=NameLength.LONG">Long</button>
      </div>
    </div>
      

  </div>
</template>
<style lang="css" scoped>
.container{
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(45, 45, 163);
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  max-width: 50rem;
}
h1{
  font-size: 3rem;
}
.options-container{
  background-color: rgb(255, 238, 236);
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  width: 95%;
}
 button{
  background-color: rgb(190, 219, 251);
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  width: 30%;
  color:rgb(40, 28, 5);
  border: none;
  font-size: 1.2rem;
  border: 2px solid rgb(83, 75, 60);
  margin: 5px;
}
.option-active{
  background-color: rgb(146, 72, 64);
  color: rgb(236, 236, 253);
  border: 2px solid rgb(235, 223, 201);
}
</style>
