import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(async (response) => {
        const postsData = response.data;

        const postsWithCommentsAndPhotos = await Promise.all(
          postsData.map(async (post) => {
            const [commentsResponse, photosResponse] = await Promise.all([
              axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`),
              axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${post.id}`),
            ]);

            const comments = commentsResponse.data || [];
            const photos = photosResponse.data || [];

            return { ...post, comments, photos };
          })
        );

        setPosts(postsWithCommentsAndPhotos);
      })
      .catch((error) => {
        console.error('Error al obtener publicaciones: ', error);
      });
  }, []);

  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-4">Lista de Publicaciones</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 my-4 shadow">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.body}</p>
          <h3 className="text-lg font-semibold mt-4">Comentarios:</h3>
          <ul>
            {post.comments.map((comment) => (
              <li key={comment.id}>{comment.body}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4">Fotos:</h3>
          <div className="flex flex-wrap">
            {post.photos.map((photo) => (
              <div key={photo.id} className="w-1/4 p-2">
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;