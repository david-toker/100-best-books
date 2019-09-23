import React from 'react';
import Book from '../book/book';


export default class BookList extends React.Component<any, any>{
    // constructor(props:any){
    //     super(props);
    //     this.state ={
    //         books: BestBooks
    //     }
    // }

    render() {
        

        return (
            <div className="row">
                {this.props.books.sort((b:any, a:any)=>(a.year-b.year)).map((b:any, idx:number)=><Book key={idx} image={b.imageLink} {...b} checkHeb={this.props.checkHeb}/>)}
                
            </div>
            
        )
    }
}