<template>
   <div>
     <h2>{{boardlist[id].title}}</h2>
     <p>{{boardlist[id].description}}</p>
     <button @click="updateBoard">수정하러가기</button>
     <button @click="deleteBoard({id:id});goList()">삭제하기</button>
     <button @click="goList()">뒤로</button>
   </div>  
</template>


<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";

export default {
  name: "detail",
  created() {
    this.id = this.$route.params.id;
 
  },
  computed: mapState(["boardlist"]),
  methods: _.extend(
    {
      goList() {
        this.$router.push({ name: "list" });
      },
      updateBoard() {
        this.$router.push({ name: "update", id: this.id });
      }
    },
    mapActions(["deleteBoard"])
  )
};
</script>