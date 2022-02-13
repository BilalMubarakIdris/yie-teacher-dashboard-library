import Library from './components/Library'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import ViewUploadedContent from './components/ViewUploadedContent'
import CreateNewContent from './components/CreateNewContent'
import ViewPreviousContent from './components/ViewPreviousContent'

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />}/>
        <Route path="/view_uploaded_content" element={<ViewUploadedContent />}/>
        <Route path="/view_previous_content" element={<ViewPreviousContent />}/>
        <Route path="/create_new_content" element={<CreateNewContent />}/>
      </Routes>
    </div>
  );
}

export default App;