import React, { useState, useEffect } from "react";
import appwriteService from '../appwrite/config'
import { Container, Postcard } from "../components";

export default function AllPostPage() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {

    }, []);
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div className="p-2 w-1/4" key={post.$id}>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}