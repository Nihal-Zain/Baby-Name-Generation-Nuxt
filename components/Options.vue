<script setup lang="ts">
import { Gender,Popularity,NameLength } from '@/data';
interface optionProps{
    option:{
        title:string,
        category:string,
        buttons:Gender[]|Popularity[]|NameLength[];
    };
    options:{
        gender:Gender,
        popularity:Popularity,
        nameLength:NameLength
    }
}


const props=defineProps<optionProps>()

</script>

<template>
    <div class="option-container">
        <h4>{{ option.title }}</h4>
        <button
        v-for="value in option.buttons"
        :key="value"
        class="option"
        :class="options[option.category]==value?'option-active':''"
        @click="options[option.category]=value"
        >{{ value }}</button>
    </div>
</template>
<style scoped>
 .option{
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