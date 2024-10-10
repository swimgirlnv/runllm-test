// src/components/AdminPanel.tsx
import './Admin.css';
// src/components/AdminPanel.tsx
import React, { useState } from 'react';
import RichTextEditor from './RichTextEditor';

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
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <RichTextEditor onUpdate={setContent} /> {/* Use TipTap editor for content */}
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default AdminPanel;