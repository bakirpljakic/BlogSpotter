import React from "react";

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum",
            desc: "lorem ipsum",
            img: "https://strongauto.ba/wp-content/uploads/2022/04/2-1-e1678287046158.png"
        },
        {
            id: 2,
            title: "Lorem ipsum",
            desc: "lorem ipsum",
            img: "https://strongauto.ba/wp-content/uploads/2022/04/2-1-e1678287046158.png"
        },
        {
            id: 3,
            title: "Lorem ipsum",
            desc: "lorem ipsum",
            img: "https://wallpapercave.com/wp/wp6557305.jpg"
        },
        {
            id: 4,
            title: "Lorem ipsum",
            desc: "lorem ipsum",
            img: "https://strongauto.ba/wp-content/uploads/2022/04/2-1-e1678287046158.png"
        }
    ];
    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2> {post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu