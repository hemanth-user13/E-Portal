import Navbar from './Header/Navbar';
import LeftBar from './User/leftBar';
import News from './News/News';
import Main from './Categories/Main/Main';
// import Posts from './Categories/Posts/Posts'




const Home = () => {
    return (
            <div>
                <Navbar />
                <News />
                <Main />                                       
                <LeftBar />
                           
            </div>
    )
}

export default Home
