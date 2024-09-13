import React from 'react'
import Navbar from '../../Header/Navbar'
import { BackButtonStyle } from '../../Categories/Posts/PostForm'
import BackButton from '../../../Helpers/BackButton'
import styled from 'styled-components';
import DeveloperImage from '../../../../assets/icons8-developer-64.png'

const AccountMainContainer = styled.div`
  position: absolute;
  top: 180px;
  left: 150px;
`

const Container2 = styled.div`
  position: absolute;
  top: 36px;
  left: 500px;

`

const LargeScreenSetting=styled.div`
  @media screen and (min-width: 1700px) {
   position: absolute;
   left: 160px;
   top: -20px;
   /* margin: 50px 0px; */
  }
`

const FirtName=localStorage.getItem("firstName")
const LastName=localStorage.getItem("lastName")
const Email=localStorage.getItem("email")
const Mobile=localStorage.getItem("mobile")
const FilterMobile=Mobile?.slice(1)
// console.log(FilterMobile)


const UserAccount = () => {
  return (
    <div>
      <Navbar
        pageName='Accounts'
      />
      <BackButtonStyle>
        <BackButton />
      </BackButtonStyle>
      <LargeScreenSetting>
      <AccountMainContainer>
        <p className='text-3xl font-semibold'>Profile</p>
        <div className='w-[480px] h-[500px] mt-10 bg-stone-100 shadow-xl rounded-md p-6'>
          <div className='ml-4'>
            <img className="w-20 h-20 my-6 rounded" src={DeveloperImage} alt="Large avatar" />
            <p className='text-2xl font-bold my-5'>{FirtName} {LastName}</p>
            <p className=''>Front-end Developer</p>
            <p className=''>Hyderabad, INDIA</p>
            <div className='my-2'>
              <p className='text-gray-600'>Email Address</p>
              <p className='text-black'>{Email}</p>
            </div>
            <div className='my-2'>
              <p className='text-gray-600'>Home Address</p>
              <p className='text-black'>Nandi Hills,Hyderbad,Telangana,India</p>
            </div>
            <div className='my-2'>
              <p className='text-gray-600'>Phone Number</p>
              <p className='text-black'>+91 {FilterMobile}</p>
            </div>
            <div className='my-2'>
              <p className='text-gray-00'>Software Skills</p>
              <p className='text-black'></p>
            </div>
          </div>

        </div>
        <Container2>
          <div className='w-[680px] h-[1280px] my-5 mt-10 bg-stone-100 shadow-xl rounded-md p-6'>
            <div>
              <p className='text-2xl font-semibold'>General Information</p>
            </div>
            <div>
              <p className='my-4 text-xl'>About me</p>
              <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed.
                Cursus risus congue arcu aenean posuere aliquam.
              </p><br></br>
              <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet.
                Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis
                dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus.
                Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
            </div>
            <div className='my-10'>
              <div className='my-6'>
                <p className='text-gray-600'>Education</p>
                <p className='text-black'>ABC University</p>
              </div>
              <div className='my-6'>
                <p className='text-gray-600'>Join Date</p>
                <p className='text-black'>12-09-2021</p>
              </div>
              <div className='my-6'>
                <p className='text-gray-600'>Organization</p>
                <p className='text-black'>ABC</p>
              </div>
              <div className='my-6'>
                <p className='text-gray-600'>Department</p>
                <p className='text-black'>Software </p>
              </div>
            </div>
            <div className='absolute right-24 top-[340px] '>
              <div className='my-6'>
                <p className='text-gray-600'>Work History</p>
                <p className='text-black'>ABC, DEF,GHI</p>
              </div>
              <div className='my-6'>
                <p className='text-gray-600'>Languages</p>
                <p className='text-black'>English, German, Italian, Spanish</p>
              </div>
              <div className='my-6'>
                <p className='text-gray-600'>Role</p>
                <p className='text-black'>Frontend Developer</p>
              </div>
              <div className='my-6'>
                <p className='text-gray-600'>Birthday</p>
                <p className='text-black'>15-08-1990</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              

              <div>
                <div className="mb-1 text-base font-medium">Django</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-gray-600 h-2.5 rounded-full dark:bg-blue-300" style={{ width: "65%" }}></div>
                </div>

                <div className="mb-1 text-base font-medium">MySql</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-gray-600 h-2.5 rounded-full dark:bg-blue-300" style={{ width: "55%" }}></div>
                </div>

                <div className="mb-1 text-base font-medium">NoSql</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-gray-600 h-2.5 rounded-full dark:bg-blue-300" style={{ width: "50%" }}></div>
                </div>

                <div className="mb-1 text-base font-medium">Database</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-gray-600 h-2.5 rounded-full dark:bg-blue-300" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 text-base font-medium">Data Structures</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-gray-600 h-2.5 rounded-full dark:bg-blue-300" style={{ width: "45%" }}></div>
                </div>

                <div className="mb-1 text-base font-medium">Python</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-gray-600 h-2.5 rounded-full dark:bg-blue-300" style={{ width: "75%" }}></div>
                </div>

                <div className="mb-1 text-base font-medium">React</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-gray-600 h-2.5 rounded-full dark:bg-blue-300" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>


          </div>
        </Container2>
        <div className='w-[480px] h-[400px] mt-10 bg-stone-100 shadow-xl rounded-md p-6'>
          <div>
            <p className='text-2xl font-semibold'>Skills</p>
          </div>
          <div className='flex flex-wrap gap-2 mt-4'>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">Data Structures</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">Python</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">React</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">Django</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">MySql</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">NoSql</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">Database</span>
          </div>
        </div>

        <div className='w-[480px] h-[300px] mt-10 bg-stone-100 shadow-xl rounded-md p-6'>
          <div>
            <p className='text-2xl font-semibold'>Hobbies</p>
          </div>
          <div className='flex flex-wrap gap-2 mt-4'>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">Foot Ball</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">Gaming</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">Movies</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">Surf</span>
            <span className="bg-blue-100 text-black text-xs font-medium px-6 py-3 rounded-full dark:bg-blue-400 ">Travelling</span>
          </div>
        </div>
      </AccountMainContainer>
      </LargeScreenSetting>

    </div>
  )
}

export default UserAccount
