export const addToBookmark = (key , data) => {
     
    return{
        type : 'ADD_TO_BOOKMARK' ,
        payload : { key , data }
    }
}
export const removeFromBookmark = (key) => {
 
    return{
        type: 'REMOVE_FROM_BOOKMARK' ,
        payload : key 
    }
}
