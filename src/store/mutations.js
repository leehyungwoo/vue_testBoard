const mutations = {
    boardInit(store) {
        store.board.title = "";
        store.board.description = "";
    },
    addBoard(store, payload) {
        var len = store.boardlist.length;
        store.boardlist.push({ index: len, title: payload.title, description: payload.description, date:{y: payload.y, m: payload.m, d: payload.d} })
        alert('등록되었습니다')
    },
    updateBoard(store,payload){
        store.boardlist[payload.id].title=payload.title;
        store.boardlist[payload.id].description=payload.description;
        alert('수정되었습니다')
    },
    deleteBoard(store,payload){
        store.boardlist.splice(payload.id,1)
        alert('삭제되었습니다')
    }
}

export default mutations