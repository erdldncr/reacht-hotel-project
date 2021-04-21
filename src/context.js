import React, { Component } from 'react';
import items from './data'
const RoomContext=React.createContext()
class RoomProvider extends Component {
    
    state={
        rooms:[],
        sorteedRooms:[],
        featuredRooms:[],
        loading:true
    }
    //getData
    componentDidMount(){
        let rooms=this.formatData(items)
       
        let featuredRooms=rooms.filter(room=>room.featured)
        this.setState({sorteedRooms:rooms,loading:false,rooms,featuredRooms})
    }
 

    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=>image.fields.file.url)
            let room={...item.fields,id,images}

            return room;
        })
        return tempItems
    }
    getRoom=(slug)=>{
        return this.state.rooms.find(room=>room.slug===slug)
    }

    render() {
        
        return  <RoomContext.Provider 
            value={{...this.state
                ,getRoom:this.getRoom
            }}
        >
                {this.props.children}
        </RoomContext.Provider>
    }
}
const RoomConsumer=RoomContext.Consumer

export  {RoomProvider,RoomContext,RoomConsumer}



