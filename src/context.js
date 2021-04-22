import React, { Component,useContext } from 'react';
import items from './data'
const RoomContext=React.createContext()
class RoomProvider extends Component {
    
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }
    //getData
    componentDidMount(){
        let rooms=this.formatData(items)
        let featuredRooms=rooms.filter(room=>room.featured)
       
        let maxPrice=Math.max(...rooms.map(item=>item.price))
        let maxSize=Math.max(...rooms.map(item=>item.size))
        this.setState({
            sortedRooms:rooms,
            loading:false,
            rooms,
            featuredRooms,
            price:maxPrice,
            maxPrice,
            maxSize
            })
        
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
    
    handlechange=(e)=>{
        e.preventDefault()
        const target=e.target
        const value=e.type==='checkbox'?target.checked:target.value
        const name=e.target.name
       this.setState
       ({[name]:
        value},this.filterRooms)
    }
    filterRooms=()=>{
       let{
           rooms,breakfast,type,capacity,price,minSize,maxSize,pets}=this.state
        let temprooms=[...rooms]
        
        capacity=parseInt(capacity)
        price=parseInt(price)
        ///filter by capacity
        if(capacity!==1){
            temprooms= temprooms.filter(room=>room.capacity>=capacity)
            
        }


        if(type!=='all'){
         temprooms= temprooms.filter(room=>room.type===type)
        }
        //filter by price
           
            temprooms= temprooms.filter(room=>room.price>=price)

       
       this.setState({sortedRooms:temprooms})
    }

    render() {
        
        return  <RoomContext.Provider 
            value={{...this.state
                ,getRoom:this.getRoom
                ,handleChange:this.handlechange
            }}
        >
                {this.props.children}
        </RoomContext.Provider>
    }
}
const RoomConsumer=RoomContext.Consumer

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
     return   <RoomConsumer>
                {value=><Component {...props} context={value}/>}
            </RoomConsumer>
    }
}
export  {RoomProvider,RoomContext,RoomConsumer}

export function useGlobalContext(){
    return useContext(RoomContext)
}

