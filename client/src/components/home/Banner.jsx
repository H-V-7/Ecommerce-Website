import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../constants/data';
import { styled } from "@mui/system";

const Img = styled("img")`
    width:125%;
`

export default function Banner(){

    const responsive = {
        
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <Carousel  infinite={true} autoPlay={true} autoPlaySpeed={7000}  swipeable={true} responsive={responsive} dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" >
            {bannerData.map((result,index) => (<Img key={index} src={result.url}/>))}
        </Carousel>
    )
}