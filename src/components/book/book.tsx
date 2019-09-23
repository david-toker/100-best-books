import React from 'react';
import BookCover from '../book-cover/book-cover';


export default class Book extends React.Component<any, any>{
    constructor(props:any){
        super(props);
    }

    render() {
       
        
        const {image, title, author, year, language, checkHeb, link} = this.props;
        
        
        const imgStyle = {height: "400px"}
        return (
            <div className="col-sm-3">

            
            <div className="card ">
            <BookCover imgStyle={imgStyle} myimg={image} alt={title} language={language} checkHeb={checkHeb}/>
            
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                <span>{author} -</span>
                <span> ({year})</span>
                <br/>
                <span>{language}</span>
            </p>
            <a href={link} className="btn btn-primary">Go to Wiki</a>
            </div>
            </div>

            </div>
        )
    }
}