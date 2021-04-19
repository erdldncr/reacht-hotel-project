import React from 'react'

export default function Hero({childdren,hero}) {
    return (
        <header className={hero} >
            {childdren}
        </header>
    )
}
Hero.defaultProps={
    hero:'defaultHero'


}
