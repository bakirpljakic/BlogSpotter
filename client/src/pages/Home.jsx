import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
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
    ]
    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home