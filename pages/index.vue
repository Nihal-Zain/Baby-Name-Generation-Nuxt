<script setup lang="ts">
// import { reactive } from 'vue';
import {Gender,Popularity,NameLength ,names} from '../data'
export interface OptionsState {
    gender: string;
    popularity: string;
    nameLength: string;
}
const options = reactive<OptionsState>({
    gender: Gender.UNISEX,
    popularity: Popularity.TRENDY,
    nameLength: NameLength.ALL
});
const optionsArray=[
  {
    title:"1)Choose Gender",
    buttons:[Gender.BOY,Gender.GIRL,Gender.UNISEX],
    category:"gender"
  },
  {
    title:"2)Choose Popularity",
    buttons:[Popularity.TRENDY,Popularity.UNIQUE],
    category:"popularity"
  },
  {
    title:"3)Choose Name Length",
    buttons:[NameLength.SHORT,NameLength.ALL,NameLength.LONG],
    category:"nameLength"
  }
]
const removeName=(index:number)=>{
  const filteredNames=[...selectedNames.value]
  filteredNames.splice(index,1)
  selectedNames.value=filteredNames
}
const computedSelectedNames=()=>{
  const filterNames=names
  .filter((name)=>name.gender===options.gender)
  .filter((name)=>name.popularity===options.popularity)
  .filter((name)=>{
    if(options.nameLength===NameLength.ALL){
      return true
    }
    else{
      return name.length===options.nameLength
    }
  })
  selectedNames.value=filterNames.map((name)=>name.name)
}
const selectedNames=ref<string[]>([
])
</script>

<template>
  <div class="container">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <h1>Baby Name Generation</h1>
    <p>Choose Your Options and Click "Find Names" Button Below</p>
    <div class="options-container">
      <Options v-for="option in optionsArray" :key="option.title" :option="option" :options="options"/>
      <button class="primary" @click="computedSelectedNames">Find Names</button>
    </div>
    <div class="selected-names-card">
      <NameCard v-for="(name,index) of selectedNames" :key="name" :name="name" @remove="()=>removeName(index)" :index="index"/>
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

.primary{
    margin-top: 30px;
    background-color: rgb(24, 24, 54);
    width:100%;
    border-radius: 20px;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2rem;
}
.selected-names-card{
  display: flex;
  margin-top:3rem;
  flex-wrap: wrap;
}
</style>
