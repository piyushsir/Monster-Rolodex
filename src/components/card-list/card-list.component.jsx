//import {Component} from 'react'
import './card-list.styles.css'

const CardList=({monster})=>
{
    return (


        <div className='card-list'>
                {monster.map((mons11)=>
                {
                     return (
                        <div key={mons11.id} className='card-container'>
                           
                           <img alt={"sorry cant load"} src = {`https://robohash.org/${mons11.id}?set=set2%20size=80x80`}></img>
                        <h2>{mons11.tourist_name}</h2>
                        <p>{mons11.tourist_email}</p>

                        </div>)

                }
                )}
                
    
        
        </div>
    )
}
/*class CardList extends Component
{
    
    render()
    {
        const {monster} = this.props;
        
        return (


            <div className='card-list'>
                    {monster.map((mons11)=>
                    {
                         return (
                            <div key={mons11.id} className='card-container'>
                               
                               <img alt={"sorry cant load"} src = {`https://robohash.org/${mons11.id}?set=set2%20180x180`}></img>
                            <h2>{mons11.tourist_name}</h2>
                            <p>{mons11.tourist_email}</p>

                            </div>)

                    }
                    )}
                    
        
            
            </div>
        )
    }
}
*/
export default CardList;