import styled from 'styled-components'
import defaultImage from '../images/room-1.jpeg'

const StyledHero =styled.header`
min-height: calc(60vh);
background: url(${props=>props.image?props.image:defaultImage
}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;
export default StyledHero