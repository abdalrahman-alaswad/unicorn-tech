import "./Home.css"
import { Container } from '../../Components';
import { About, Achievement, Collection, GoodSeller, Hero, Insights, NewsLetters, TopItems } from '../../Sections';
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
    return (
        <>
            <Container>
                <Hero />
                <Collection />
                <TopItems />
                <About />
                <Achievement />
                <GoodSeller />
                <Insights />
                <NewsLetters />
            </Container>


        </>
    )
}

export default Home