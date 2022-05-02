import React from "react";
import Navbar from './component/Navbar'
import Postlist from './component/Postlist'
function App() {
  return (
    <>
        <Navbar />
        <div className="mt-5">    
          <Postlist />
        </div>
    </>
  );
}
export default App;
