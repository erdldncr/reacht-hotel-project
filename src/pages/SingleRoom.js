import React, { Component } from 'react'
import Hero from '../components/Hero'
import {RoomContext} from '../context'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'
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
         return  <React.Fragment>
                    <StyledHero image={images[0]}>
                        <Banner title={`${name} room`}>
                            <Link to='/rooms' className='btn-primary' >
                                Back to rooms
                            </Link>
                        </Banner>
                    </StyledHero>
                    <section className="single-room">
                        <div className="single-room-images">
                        {images.slice(1).map((image,index)=> <img src={image} key={index} alt={name}/> )}
                        </div>
                        <div className="single-room-info">
                            <article className="desc">
                                <h3>Details</h3>
                                <p>{description}</p>
                            </article>
                            <article className="info">
                                <h3>info</h3>
                                <h6>price : ${price}</h6>
                                <h6>size : {size}SQFT</h6>
                                <h6>Max Capacity: {capacity} {capacity>1?'people':'person'} </h6>
                                <h6>{pets?'Pets allowed':'No Pets Allowed'}</h6>
                                <h6>{breakfast&&'free breakfast included'}</h6>
                            </article>
                        </div>
                    </section>
                    <section className="room-extras">
                        <h6>Extras</h6>
                        <ul className="extras">
                            {extras.map((extra,index)=> <li key={index}>-{extra} </li> )}
                        </ul>
                    </section>
                </React.Fragment>
        }
    }
}
