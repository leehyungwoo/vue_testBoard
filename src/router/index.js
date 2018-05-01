import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../components/board/list'
import add from '../components/board/add'
import update from '../components/board/update'
import detail from '../components/board/detail'
 
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
           path:'/',
           name:'home',
           component:list 
        },
        {
           path:'/list',
           name:'list',
           component:list 
        },
        {
           path:'/add',
           name:'add',
           component:add 
        },
        {
           path:'/update/:id',
           name:'update',
           component:update 
        },
        {
            path:'/detail/:id',
            name:'detail',
            component:detail 
        }
    ]
})

export default router