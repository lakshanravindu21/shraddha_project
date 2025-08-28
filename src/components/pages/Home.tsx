import About from '../About'
import Blog from '../Blog'
import ContactUs from '../ContactUs'
import Feedback from '../Feedback'
import Footer from '../Footer'
import Hero from '../Hero'
import MostPopularTeamples from '../MostPopularTeamples'

export default function Home() {
    return (

        <div className="bg-white m-0 p-0 text-black">
            <Hero />
            <About />
            <MostPopularTeamples />
            <Blog />
            <Feedback />
            <ContactUs />
            <Footer />
        </div>

    )
}
