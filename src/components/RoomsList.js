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
           {sortedRooms.map((room,index)=> <Room {...room} key={index}/> )} 
        </>
    )
}
