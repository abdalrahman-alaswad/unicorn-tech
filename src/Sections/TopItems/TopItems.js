
import { Slider } from "../../Components"
import "./TopItems.css"



const TopItems = () => {

    return (
        <>
            <div className='container-fluid top-items-container'>

                <h2>Top Items</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <Slider />


            </div>
        </>
    )
}

export default TopItems