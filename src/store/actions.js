const actions ={
    boardInit(state){
        state.commit('boardInit')
    },    
    addBoard(state,payload){
        var d =new Date();
        payload.y=d.getFullYear()
        payload.m=d.getMonth()+1
        payload.d=d.getDate();
        state.commit('addBoard',payload)   
    },
    updateBoard(state,payload){
        state.commit('updateBoard',payload)
        state.commit('boardInit')  
    },
    deleteBoard(state,payload){
        state.commit('deleteBoard',payload)
    }
}

export default actions