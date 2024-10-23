import React, { useEffect } from 'react';

function MyNotes() {
  useEffect(() => {
    console.log("Hello from MyNotes.js!");
  }, []);

  // 其他方法和逻辑可以在这里添加

  return (
    <div className="my-notes">
      <h1>My Notes</h1>
      <p>This is the MyNotes component.</p>
    </div>
  );
}

export default MyNotes;