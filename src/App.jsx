import { useState } from 'react';
import SocialPost from "./components/SocialPost";

import './App.css';
import './components/styles/global.css';


function App() {
  return (
  <div className="min-h-screen bg-gray-100 p-4 md:p-10 flex justify-center items-start">
      {/* Just call it like this to use the default props you defined */}
      <SocialPost />
    </div>

  );
}

export default App;



