/* eslint-disable @typescript-eslint/no-unused-expressions */
// src/components/BlogPost.tsx
import React, { useState } from 'react';
import './BlogPost.css';

interface BlogPostProps {
  title: string;
  content: string;
  id: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, updatedContent: { title: string; content: string }) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, id, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  const handleSaveEdit = () => {
    onEdit && onEdit(id, { title: editTitle, content: editContent });
    setIsEditing(false);
  };

  return (
    <div className="blog-post">
      {isEditing ? (
        <>
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h2 className='neon-flicker'>{title}</h2>
          <p>{content}</p>
          {onDelete && <button onClick={() => onDelete(id)}>Delete</button>}
          {onEdit && <button onClick={() => setIsEditing(true)}>Edit</button>}
        </>
      )}
    </div>
  );
};

export default BlogPost;