<template>
   <div>
       <table>
           <thead>
               <tr>
                   <th>제목</th>
                   <th>내용</th>
                   <th>등록일</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="c in boardlist" :key="c.no" @click="goDetail(c.index)">
                   <td>{{c.title}}</td>
                   <td>{{c.description}}</td>
                   <td>{{c.date.y}}-{{c.date.m}}-{{c.date.d}}</td>
               </tr>
           </tbody>
       </table>
       <button @click="goAddList">입력하러가기</button>
    </div>  
</template>


<script>
import {mapState} from 'vuex'

    export default{
        name:'list',
        computed:mapState(['boardlist']),
        methods:{
            goAddList(){
                this.$router.push({name:'add'})
            },
            goDetail(i){
                this.$router.push({ name: 'detail', params: {id:i}})
            }
        }

    }
</script>