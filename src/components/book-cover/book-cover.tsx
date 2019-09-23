import React from 'react';

export default class BookCover extends React.Component<any, any>{
    constructor(props:any){
        super(props);
    }

    render() {
        
        const {myimg, alt, imgStyle, checkHeb, language} = this.props;
        
        return (
            
        <img style={checkHeb && language!=="Hebrew" ? {opacity: 0.2, height: "300px"}:{opacity: 1, height: "300px"}} className="card-img-top" src={myimg} alt={alt}/>)
    }
}