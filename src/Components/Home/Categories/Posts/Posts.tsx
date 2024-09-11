import axios from "axios"
import { useEffect, useState } from "react";
import { PostProps } from "./type";
import PostCard from "../../../Helpers/PostCard";
import { useParams } from "react-router-dom";

const Posts = () => {
  const {route}=useParams()
  console.log("the route is ",route)


  console.log("hello")

  const [data,setData]=useState<PostProps[]>([])

  const USERPOSTURL="http://localhost:8001/userpost"
  const UserPostData=async()=>{
  try {
    const response=await axios.get(USERPOSTURL);
    console.log(response.data)
    setData(response.data)
  } catch (error) {
    console.log(error,"there is an error in the api")
    
  }
  }
  useEffect(()=>{
    UserPostData()
  },[])
  return (
    <div className="px-5 w-full h-full flex justify-center items-center mt-64 ">
      <div className="w-full md:w-3/4 lg:w-2/3 bg-gray-300 p-4 h-[625px]">
        <p className="text-xl md:text-2xl lg:text-3xl">Post section</p>
        <div className="flex flex-col gap-4 mt-11">
          {data.map((items,index)=>(
            <PostCard
            key={index}
            postTitle={items.postTitle}
            createdDate={items.createdDate}
            description={items.description}
            firstName={items.firstName}
            files={items.files}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
