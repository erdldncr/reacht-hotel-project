import React, { Component } from 'react'
import {FaBeer, FaCocktail,FaHiking, FaShuttleVan} from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'Free cocktails',
                info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta.'
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta.'
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free shuttle',
                info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta.'
            },
            {
                icon:<FaBeer/>,
                title:'Strongest Beer',
                info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
               <Title title='services'/>
               <div className="services-center">
                   
                       {this.state.services.map((service,index)=>{
                        const{icon,title,info}=service
                        return <article className="service" key={index}>
                            <span>{icon}</span>
                            <h6>{title}</h6>
                            <p>{info}</p>
                        </article>
                        
                        })}
                   
               </div>
            </section>
        )
    }
}
