<template>
   <div>
      <p><label for="title">title : </label><input type="text" id="title" v-model="board.title"></p>
      <p><label for="description">description : </label><textarea id="description" v-model="board.description"></textarea></p>
     <button @click="updateBoard({id:id,title:board.title,description:board.description}); goList()">수정하기</button>
     <button @click="goDetail()">뒤로</button>
     <button @click="goList()">목록으로</button>
    </div>  
</template>


<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";
export default {
  name: "update",
  created() {
    this.id = this.$route.params.id;
  },
  computed: mapState(["board"]),
  methods: _.extend(
    {
      goDetail() {
        this.$store.dispatch("boardInit");
        this.$router.push({ name: "detail", params: { id: this.id } });
      },
      goList() {
        this.$store.dispatch("boardInit");
        this.$router.push({ name: "list" });
      }
    },
    mapActions(["updateBoard"])
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
p:after {
  display: block;
  clear: both;
  content: "";
}
</style>