import React from 'react'
import {useGlobalContext} from '../context'
import Title from '../components/Title'
export default function RoomFilter() {
    const{handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets,rooms}=useGlobalContext()
   
    const getUnique=(items,value)=>{
        return [...new Set(items.map(item=>item[value]))]
    }
    const types=[...getUnique(rooms,'type'),'all']
            .map((type,index)=> <option key={index} value={type}>{type}</option> )
    const guests=getUnique(rooms,'capacity')
                .map((item,index)=> <option key={index} value={item}>{item}</option> )
             
    return <section className="filter-container">
        <Title title='search rooms'/>
        <form  className="filter-form">
            {/* select type */}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" className='form-control' onChange={handleChange} value={type}>
                    {types}
                </select>
            </div>
            {/* end of select  guests*/}
                        {/* select type */}
                        <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select name="capacity" id='capacity' className='form-control' onChange={handleChange} value={capacity}>
                    {guests}
                </select>
            </div>
            {/* end of select guests */}
            {/* range of price */}
            <div className="form-group">
                <label htmlFor="price">Room Price ${price} </label>
                <input type="range" name="price" id="price" min={minPrice} max={maxPrice} onChange={handleChange} value={price} className='form-control'/>
            </div>
            {/* end of range of price */}
        </form>
    </section>
}
