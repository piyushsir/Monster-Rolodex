
import './App.css';
import { useState,useEffect } from 'react';
//import { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/card-list/search-bar/search-bar.component';

const App = ()=>
{
 
  const [mons1,dataa]=useState([]);
  const [filteredmons,setfilteredmons] = useState(mons1);
  useEffect(()=>{
    fetch("http://restapi.adequateshop.com/api/Tourist?page=3").then((val)=>
    {
      return val.json();
    }).then((val2)=>
    {
      dataa(val2.data)
    })
  },[])
    
  
  const [search,setsearch] =useState('');
  console.log(search)
  
   onsearch=(event)=>
  {
   const st = event.target.value.toLowerCase();
   setsearch(st);
  }
useEffect(()=>{

  const filtereddata = mons1.filter((val)=>
  {
   return (val.tourist_name.toLowerCase().includes(search));
  })

  setfilteredmons(filtereddata);
},[mons1,filteredmons,search])

  

  
  return (

    <div className="App">
     <h1 className='title-app'>Monsetr Rolodex</h1> 
      
      <SearchBox  search = {onsearch} placeholder ={"search monster"}/>
      <CardList monster = {filteredmons}/>
    </div>
  )
}

export default App;
/*
class App extends Component
{
  constructor()
  {

    super();
    
    this.state={
      mons1:[],
      searchfield:""
    };
  }

  componentDidMount()
  {
   fetch("http://restapi.adequateshop.com/api/Tourist?page=2").then((val)=>
   {
   return val.json();
   }).then((val2)=>
   {
    this.setState(()=>
    {
      return {mons1:val2.data};

    })
    
   })
  }

  onsearch=(event)=>
  {
       
       const txt = event.target.value.toLowerCase();
       

       this.setState(()=>
       {
        return {searchfield : txt}
       })
   
  }
  render(){
  
    const {mons1 ,searchfield} =this.state
    const {onsearch} = this
    const filtereddata = mons1.filter((val)=>
                 {
                  return (val.tourist_name.toLowerCase().includes(searchfield));
                 })
    return (
        
    <div className="App">
             <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
             <link href="https://fonts.googleapis.com/css2?family=Kablammo&family=Poppins:ital,wght@0,200;0,300;1,200&display=swap" rel="stylesheet"></link>  
             <h1 className='title-app'> DAAKUU HI HU</h1>
             <SearchBox  search = {onsearch} placeholder ={"search monster"}/>
             <CardList monster = {filtereddata}/>
           
             
          
          
    </div>
    
    )

       
   }
}

export default App;
/*
{filtereddata.map((mons11)=>
             {
                 return( <div key={mons11.id} >
                  <h1>{mons11.tourist_name}</h1>
                  </div>)
             })
            }

            
*/