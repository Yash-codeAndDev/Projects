import React, { useState } from 'react' ;
import '../css/newsItem.css' ;
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BookmarkStarFill, BookmarkStar } from 'react-bootstrap-icons'
import { addToBookmark , removeFromBookmark } from '../services/action/action.js';
const NewsItem = (props)=> {

        const dispatch1 = useDispatch();
        const dispatch2 = useDispatch();
        const [ bookmark , setBookmark] = useState(0) ;
        let {  title, description, imageUrl, newsUrl, author, date, source } = props;
        const data = { title, description, imageUrl, author, date, source  } ;
        const add_bookmark = () => {
            
            dispatch1( addToBookmark( newsUrl , data ) );
            setBookmark(!bookmark) ;
        }
        const remove_bookmark = () => {
            setBookmark(!bookmark) ;
            dispatch2( removeFromBookmark(newsUrl) ) ;
        }
        return (
            <div className="my-3">

                <div className={props.theme?"card bg-light text-dark":"card bg-dark text-white"}>
                    <div id="source-container"> 
                        <span id = "source" className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img className="news-image card-img-top" src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl}  alt="..." />
                    <div className="news-body card-body" >
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" ><Button variant='dark' size='sm'>Read More</Button></a>
                        { bookmark == 0 ? <BookmarkStar size={30} className="bookmark-icon" onClick={ add_bookmark }/>:<BookmarkStarFill size={30} className="bookmark-icon" onClick={ remove_bookmark }/> }
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
