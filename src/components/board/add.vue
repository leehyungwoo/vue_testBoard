<template>
   <div>
       <p><label for="title">title : </label><input type="text" id="title" v-model="board.title"></p>
       <p><label for="description">description : </label><textarea id="description" v-model="board.description"></textarea></p>
        <button @click='addBoard({title:board.title, description:board.description});goList()'>입력</button>
        <button @click="goList()">뒤로</button>
   </div>  
</template>


<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";
export default {
  computed: mapState(["board"]),
 
  methods: _.extend(
    {
      goList() {
        this.$store.dispatch('boardInit')
        this.$router.push({ name: "list" });
      }
    },
    mapActions(["addBoard"])
  )
};
</script>




<style scope>
label {
  width: 100px;
}
label,
input,
textarea {
  float: left;
}
table {
    font-family: arial, sans-serif;
    border-collapse: collapse; 
}
tr{cursor:pointer}
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
 
tr:nth-child(even) {
    background-color: #dddddd;
}
p:after {
  display: block;
  clear: both;
  content: "";
}
</style>