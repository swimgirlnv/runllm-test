// src/components/Blog.tsx
import './Blog.css';// src/components/Blog.tsx
import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import AdminPanel from './AdminPanel'; // Separate Admin Panel Component
import { db } from '../firebase';
import { collection, addDoc, deleteDoc, onSnapshot, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

interface Post {
  title: string;
  content: string;
  id: string;
  timestamp?: unknown;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAdmin] = useState(false); // Set to true for admin, false for reader view

  useEffect(() => {
    const postsQuery = query(collection(db, 'posts'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Post));
      setPosts(postsData);
    });
    return unsubscribe;
  }, []);

  const handleNewPost = async (post: Omit<Post, 'id' | 'timestamp'>) => {
    try {
      await addDoc(collection(db, 'posts'), {
        ...post,
        timestamp: serverTimestamp(), // Add server timestamp
      });
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handleDeletePost = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'posts', id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleEditPost = async (id: string, updatedContent: Partial<Post>) => {
    try {
      await updateDoc(doc(db, 'posts', id), updatedContent);
    } catch (error) {
      console.error("Error editing document:", error);
    }
  };

  return (
    <div className="blog">
      <div className="blog-title">Beyond the Loop</div>
      {isAdmin && <AdminPanel onPost={handleNewPost} />} {/* Admin can add posts */}
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          {...post}
          onDelete={isAdmin ? handleDeletePost : undefined} // Only show delete for Admin
          onEdit={isAdmin ? handleEditPost : undefined} // Only show edit for Admin
        />
      ))}
    </div>
  );
};

export default Blog;