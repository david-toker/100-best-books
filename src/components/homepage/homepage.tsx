import React from 'react';

import {BestBooks} from '../../images/imageLoader';
import Header from '../header/header';
import BookList from '../booklist/booklist';
import AddForm from '../add-book/add-book';

export default class Homepage extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state ={
            cat: "all",
            searchValue: "",
            books: BestBooks,
            filteredBook: BestBooks,
            checked: false
        }
    }
    onChange=(e:any)=>{
        const filtereDara = this.state.books.filter((book:any)=>{return book.title.toLowerCase().includes(e.target.value)});
        this.setState({filteredBook:filtereDara}) 
    }

    searchOperation = (searchText: string, cat?: string): void => {
        // if (!searchText || !onSale) return;

        const { books } = this.state
        const filteredData = books.filter((book: any) => {
            
            const isCat = cat !== "all" ? book.language === cat : true
            return book.title.toLowerCase().includes(searchText) && isCat
        })
        this.setState({ cat, filteredBook: filteredData, searchValue: searchText })

    }
    
      
    checkHebrewBook=(e:any)=>{
        this.setState({
            checked: !this.state.checked
        })
    }

    onBookAdded = (book:any) => {
        const newData = [...this.state.books, { ...book}];
        this.setState({ filteredBook: newData, books: newData })
      };

    render() {
       const {books, filteredBook, checked, searchValue} = this.state;
       const searchProps = { cat: this.state.cat, categories: getCategories(books), searchOperation: this.searchOperation, searchValue }

    return (
      <div>
          
        {/* <Header books={books} onChange={this.onChange} onChangeLang={this.checkHebrewBook} checked={checked}/> */}
        <Header books={books} {...searchProps} onChangeLang={this.checkHebrewBook} checked={checked}/>
        <div className="container">
        <div className="row">
            <div className="col-sm-2">
            <AddForm onBookAdded={this.onBookAdded}/>
            </div>
            <div  className="col-sm-10">
            <BookList checkHeb={checked} books={filteredBook}/>
            </div>
        </div>
        </div>

      </div>
        )
    }
    
}

function getCategories(books: Array<any>) {
    return Object.keys(books.reduce((allCats, b: any) => {
        return { ...allCats, [b.language]: true }
    }, { "all": true }))

}