import React from 'react';

export default class Header extends React.Component<any, any>{
    constructor(props:any){
        super(props);
    }
    
    render() {
        const { searchValue, searchOperation, categories, cat } = this.props

        return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {searchOperation(e.target.value, cat);}} />
        {/* <button className="btn btn-outline-success my-2 my-sm-0" >Search</button> */}
        <div className="custom-control custom-checkbox my-1 mr-sm-2 ">
        <input type="checkbox" className="custom-control-input" id="customControlInline" checked={this.props.checked} onChange={this.props.onChangeLang}/>
        <label className="custom-control-label" htmlFor="customControlInline">Hebrew books</label>
        </div>
        </div>

        <select style={{width: "200px"}} className="form-control" value={this.props.cat} onChange={(e) => {searchOperation(searchValue, e.target.value);}}>
            {categories.map((item: any, idx:number) => <option key={idx}> {item} </option>)}
        </select>
        </nav>
        
        )
    }
}