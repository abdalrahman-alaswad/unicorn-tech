import "./NewsLetters.css"
import { BsArrowRightCircle } from "react-icons/bs";

const NewsLetters = () => {
    return (
        <>
            <div className="container news-con">
                <div className="white-con">
                    <h2>Join Our News Letters</h2>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.<br /> Iterative approaches to corporate strategy foster </p>
                    <div className="input-group mb-3 input-con">
                        <input type="text" className="form-control" placeholder="Insert your mail here" aria-label="Insert your mail here" aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2" style={{ background: " #F86338", color: "White" }}><BsArrowRightCircle /></span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewsLetters