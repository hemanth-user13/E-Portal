import Navbar from './Header/Navbar';
import LeftBar from './User/leftBar';
import News from './News/News';
import Main from './Categories/Main/Main';
import Posts from './Categories/Posts/Posts';
import styled from "styled-components";
import LeftBar2 from './User/LeftBar2';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


const ParentStyle = styled.div`
  position: fixed;
`

const PostSection = styled.div`
  position: absolute;
  /* margin-left: 260px; */
  /* margin: 0px 30px ; */
  height: 200px !important;
  top: 500px;
  bottom: 5px;
  width: 100%;
`;

const UserPage=styled.div`
  margin-bottom: 60px;
`

const Home = () => {
  const UserLoginStatus = localStorage.getItem('isLoggedIn');
  console.log("the user status is", UserLoginStatus);


  /// back button logic
  useEffect(() => {
    sessionStorage.setItem('previousTab', window.location.href);
  }, []); 

  return (
    <div>
      <Navbar
        pageName='Dashboard'
      />
      <ParentStyle>
        <News />
      </ParentStyle>

      <div className='lg:ml-14'>
        <Main />
      </div>
     <UserPage>
     {!UserLoginStatus ? <LeftBar />:<LeftBar2/>}
     </UserPage>
      <PostSection>
        <Posts />
      </PostSection>
    </div>
  );
}

export default Home;
