import "./Footer.css"
const Footer = () => {
    return (
        <>
            <div className="container-fluid footer-container">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="footer-img-con">
                            <div className="img"></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 footer-text-col">
                        <h1>Dealerz.</h1>
                        <a href="#" className="footer-a">Privacy Policy</a>
                        <a href="#" className="footer-a" style={{ marginBottom: "145px" }}>Terms and Condition</a>
                        <p>@2020 TanahAir Studio. All rights reserved.</p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <span className="circle">Yt</span>
                        <span className="circle">Fb</span>
                        <span className="circle">Tw</span>
                        <span className="circle">Ig</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer