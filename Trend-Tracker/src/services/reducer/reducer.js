const storedDataString = localStorage.getItem('TrendTracker_Bookmark');
var storedData = {} ;
if( storedDataString != null )
{
    storedData = JSON.parse(storedDataString);
}
const initialstate = {
        ...storedData
}

export const bookmark_items = (state=initialstate , action) => {
    switch(action.type){

        case 'ADD_TO_BOOKMARK' :
            const temp = {  ...state , [action.payload.key]: action.payload.data } 
            const dataString = JSON.stringify(temp);
            localStorage.setItem('TrendTracker_Bookmark', dataString);
            return{ 
                ...state,
                [action.payload.key]: action.payload.data 
            };
        
        case 'REMOVE_FROM_BOOKMARK' :
            delete state[action.payload] 
            if (localStorage.getItem('TrendTracker_Bookmark')) 
            {
                localStorage.clear();
                const temp = JSON.stringify(state)
                localStorage.setItem('TrendTracker_Bookmark',temp);
            }
            return{
                ...state ,
            }
             
        default : 
            return state ;
    }

}
