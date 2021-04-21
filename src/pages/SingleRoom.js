import React, { Component } from 'react'
import Hero from '../components/Hero'
import {RoomContext} from '../context'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
export default class SingleRoom extends Component {
    static contextType=RoomContext
    state={room:null}
    componentDidMount() {
        const{slug}=this.props.match.params
        this.setState({room:this.context.getRoom(slug)})
        
    }

    
    render() {
        if(!this.state.room){
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to='/' className="btn-primary">
                back to rooms
                </Link>
            </div>
        }
        if(this.state.room){
         const{name,description,capacity,size,price,extras,breakfast,pets,images}=this.state.room
         return  <Hero hero='roomsHero'>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary' >
                        Back to rooms
                    </Link>
                </Banner>
                </Hero>
        }
    }
}
