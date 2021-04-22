import React from 'react'
import {useGlobalContext} from '../context'
import Room from '../components/Room'
export default function RoomsList() {
    const{sortedRooms}=useGlobalContext()
    
    return (
        <>
        {sortedRooms.length===0&& <div className="empty-search">
        <h3>Unfortunately No Rooms Matched Your Searched Parameters</h3>
        </div> }
           <section className="roomlist">
            <div className="roomslist-center">
            {sortedRooms.map((room,index)=>{
               return  <Room {...room} key={index}/>
           } )} 
            </div>
           </section>
        </>
    )
}
