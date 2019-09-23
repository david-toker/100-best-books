import React from 'react';


export default class AddForm extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state={
            title:'',
            language:'',
            imageLink: '',
            year: ''
        }
    }

    onChangeField = (field:any, value:any) => {
        this.setState({
            [field]:value
        })
    }

    addBook = () => {
        this.props.onBookAdded(this.state);
        this.setState({
            title:'',
            language:'',
            imageLink: '',
            year: ''
        })
    }

    render() {
       const {title, language, imageLink, year} = this.state;
        
        return (
            <div  style={{position:"sticky", top: "50px"}}>
            <h3>Add new book</h3>
            <div className="form-group">
                <label htmlFor="nameOfBook">Name of book</label>
                <input type="text" value={title} onChange={(event)=>this.onChangeField('title', event.target.value)} className="form-control" id="nameOfBook"  placeholder="Name of book"/>
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
                <label htmlFor="languageOfBook">Language</label>
                <input type="text" value={language} onChange={(event)=>this.onChangeField('language', event.target.value)} className="form-control" id="languageOfBook" placeholder="Language"/>
            </div>
            <div className="form-group">
                <label htmlFor="imageOfBook">Image</label>
                <input type="text" value={imageLink} onChange={(event)=>this.onChangeField('imageLink', event.target.value)} className="form-control" id="imageOfBook" placeholder="Image"/>
            </div>
            <div className="form-group">
                <label htmlFor="yearOfBook">Year</label>
                <input type="number" value={year} onChange={(event)=>this.onChangeField('year', event.target.value)} className="form-control" id="yearOfBook" placeholder="Year"/>
            </div>
            <button type="button" className="btn btn-primary" onClick={()=>this.addBook()}>Add</button>
            </div>
        )
    }
}