import React from 'react' ;
import { useSelector } from 'react-redux';
import BookmarkItem from './BookmarkItems'; 

function Bookmark(props){

    const data = useSelector( (state) => { return state.bookmark_items });
    const keys = Object.keys(data);
    const values = Object.values(data);

    return(
            <div className={props.theme?'container my-5 bg-light border border-light border-1 min-vh-100' : 'container mt-5 bg-dark border border-dark border-1 min-vh-100'} >
                <h1 className={props.theme?'text-center text-black mt-3':'text-center text-light mt-3'}>Bookmark</h1>
                <div className='row'>
                    { 
                        keys.map( (element,index)=> {
                            
                        return(
                            <div className="col-md-4" key={element}>
                                <BookmarkItem  title={values[index].title ? values[index].title : ""} description={values[index].description ? values[index].description : ""} imageUrl={values[index].imageUrl} newsUrl={element} author={values[index].author} date={values[index].publishedAt} source={values[index].source} theme={props.theme}   />
                            </div> )
                                
                        })
                    }
                </div>
            </div>
        )
}

export default Bookmark ;