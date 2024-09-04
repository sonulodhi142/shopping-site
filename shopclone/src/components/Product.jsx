import React from "react";


const Product= ({post}) => {
    


    return (
        <div>
            <div>
            <h2>{post.title}</h2>
            </div>
            <div>
                {post.description}
            </div>
            <div>
                <img src={post.image} alt="" />
            </div>
            <div>
                <p>${post.price}</p>
            </div>
            <div>
                <button>
                    {
                        selected ? <p>Remove from Cart</p> : <p>Add to Cart</p>
                    }
                </button>
            </div>

        </div>
    )
}

export default Product;