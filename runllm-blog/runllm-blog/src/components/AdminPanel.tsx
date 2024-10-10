// src/components/AdminPanel.tsx
import React, { useState } from 'react';
import './Admin.css';

interface AdminPanelProps {
  onPost: (post: { title: string; content: string }) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = () => {
    onPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="admin-panel">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default AdminPanel;