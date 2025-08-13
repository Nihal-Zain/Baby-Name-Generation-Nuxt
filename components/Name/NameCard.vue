<script setup lang="ts">
interface NameProps{
    name:string;
    index:number
}
const props=defineProps<NameProps>();
const emit=defineEmits(['remove'])
const removeName=()=>emit('remove',props.index)
</script>

<template>
      <div class="selected-names-container">
        {{name}}
        <p @click="removeName">X</p>
      </div>
</template>
<style scoped>
.selected-names-container{
  background-color: rgb(12, 30, 71);
  width: 28%;
  color:white;
  border-radius:1rem;
  padding:0.5rem;
  margin-right: 0.5rem;
  margin-bottom:1rem ;
  position: relative;
}
.selected-names-container p{
  position: absolute;
  top: -12px;
  right: 10px;
  color: rgba(255,255,255,0.178);
  cursor: pointer;
}
</style>