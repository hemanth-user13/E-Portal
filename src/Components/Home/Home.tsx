import Navbar from './Header/Navbar';
import LeftBar from './User/leftBar';
import News from './News/News';
import Main from './Categories/Main/Main';
import Posts from './Categories/Posts/Posts'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const PostSection = styled.div`
  position: absolute;
  /* margin-left: 260px; */
  height: 200px !important;
  top:700px;
  bottom:5px;
  width: 100%;
  
`



const Home = () => {
    
const UserLoginStatus=localStorage.getItem('isLoggedIn')
const navigate=useNavigate()
if(UserLoginStatus){
    navigate('./e-portal')
}
console.log("the user status is",UserLoginStatus)

    return (
        <div>
            <Navbar />
            <News />
            <Main />
            <LeftBar />
            <PostSection>
                <Posts />
            </PostSection>

            {/* <Posts/>  */}
        </div>
    )
}

export default Home
