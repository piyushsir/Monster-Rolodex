//import {Component} from 'react'
import './search-bar.style.css'



const SearchBox=({placeholder,search})=>
{
   return (
      <div>
                   <input  className = "search-box" type = "search" placeholder = {placeholder} onChange={search}/>
      </div>
      )
}
// class SearchBox extends Component
// {
//     render()
//     {
//        return (
//          <div>
//             <input  className = "search-box" type = "search" placeholder = {this.props.placeholder} onChange={this.props.search}/>
//          </div>

//        )


//     }
// }

export default SearchBox;