import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import './ImageSlider.css'

export function ImageSlider(){

    const images = [image1, image2]
    const [index, setIndex] = useState(0)

    function clickLeft() {
        if (index == 0){
            setIndex(images.length-1)
        }
        else {
            setIndex(index - 1)
        }
    }

    function clickRight() {
        if (index == images.length - 1){
            setIndex(0)
        }
        else {
            setIndex(index + 1)
        }
    }

    return (
        <div className="panel">

            <div className="images">
                {images.map(image => (
                    <img key={image} 
                         src={image} 
                         className="image" 
                         style={{translate: `${-100 *index}%`}}
                    />
                ))}
            </div>

            <button onClick={clickLeft} className="buttons" style={{ left: 0 }}><ArrowBigLeft/></button>
            <button onClick={clickRight} className="buttons"style={{ right: 0 }}><ArrowBigRight/></button>   

        </div>
    )
}