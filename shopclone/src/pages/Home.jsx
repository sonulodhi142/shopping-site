import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home= () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts , setPosts] = useState([]);

    async function fatchAPIdata() {
        setLoading(true)

        

        try{
            const result = await fetch(API_URL)
            const data = await result.json(); 

            setPosts(data);
        }
        catch(error){
            console.log("error agya jii");
            setPosts([])

        }
        setLoading(false)
        
    }

    useEffect(()=>{
        fatchAPIdata();
    },[])

    return (
        <div>
            {
                loading ? <Spinner/> : 
                posts.length > 0 ? (
                    <div>
                       { 
                        posts.map((post) => (
                           <Product key = {post.id} post={post}/> 
                            ))
                        }
                    </div>
                ) : <div><p>No Post found</p></div>
            }
        </div>
    )
}

export default Home;