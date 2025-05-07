import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../weblog/postsList';

export default function WeblogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Quant Sports Weblog</h1>
        <p className="text-gray-400 mb-8 text-center">
          Research notes, strategy posts, documentation, charts, and more.
        </p>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">
                <Link to={`/weblog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-400">Click to read the full post</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
