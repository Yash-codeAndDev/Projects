import React  from 'react' ;
import {Button} from 'react-bootstrap'
import {Trash} from 'react-bootstrap-icons'
import '../css/newsItem.css' ;
import { useDispatch } from 'react-redux';
import { removeFromBookmark } from '../services/action/action';

const BookmarkItem = (props) => {

    const dispatch = useDispatch();
    let {  title, description, imageUrl, newsUrl, author, date, source } = props;
    return(
            <div className={props.theme?"card bg-light text-dark mt-2":"card bg-dark text-white mt-5"}>
                    <div id="source-container"> 
                        <span id = "source" className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img className="news-image card-img-top" src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl}  alt="..." />
                    <div className="news-body card-body" >
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" ><Button variant='dark' size='sm'>Read More</Button></a>
                        <Trash size={25} id="bookmark-trash" onClick={ ()=> dispatch(removeFromBookmark(newsUrl)) }/>
                    </div>
            </div>
           
    )
}

export default BookmarkItem ;