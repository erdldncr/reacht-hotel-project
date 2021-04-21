import React, { Component } from 'react';
import {RoomContext} from '../context'
import Loading from '../components/Loading'
import Room from './Room'
import Title from './Title'
class FeaturedRooms extends Component {
    static contextType=RoomContext
    render() {
        const {featuredRooms:rooms,Loading}=this.context
        
        return (
            <section className='featured-rooms'>
                <Title title='featured rooms'/>
                <div className="featured-rooms-center">
                    {Loading&&<Loading/>}
              {rooms.map(room=> <Room key={room.id} {...room} /> )}
                </div>
                
               
              
            </section>
        );
    }
}

export default FeaturedRooms;