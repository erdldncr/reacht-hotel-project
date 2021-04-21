import React from 'react'
import RoomFilter from './RoomFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'


 function RoomsContainer({context}) {

const {loading}=context

return (
    <>
        {loading&&<Loading/>}
        <RoomFilter/>
        <RoomsList/>
    </>
)
}
export default withRoomConsumer(RoomsContainer)