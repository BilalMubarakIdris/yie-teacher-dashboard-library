import Library from './components/Library'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import ViewUploadedContent from './components/ViewUploadedContent'
import CreateNewContent from './components/CreateNewContent'
import ViewPreviousContent from './components/ViewPreviousContent'
import Calendar from './components/Calendar'
import CreateEvent from './components/CreateEvent'
import GenerateSchedule from "./components/studentCalendar/GenerateSchedule"
import StudentCalendar from './components/studentCalendar/StudentCalendar'
import AdminEvent from './components/adminCalendar/AdminEvent'
import AdminCalendar from './components/adminCalendar/AdminCalendar'

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />}/>
        <Route path="/view_uploaded_content" element={<ViewUploadedContent />}/>
        <Route path="/view_previous_content" element={<ViewPreviousContent />}/>
        <Route path="/create_new_content" element={<CreateNewContent />}/>
        <Route path="/calendar" element={<Calendar />}>
          <Route path="create-event" element={<CreateEvent />}/>
        </Route>
        <Route path="/calendar1" element={<StudentCalendar />}>
          <Route path="student-calendar" element={<GenerateSchedule />}/>
        </Route>
        <Route path="/calendar2" element={<AdminCalendar />}>
          <Route path="admin-calendar" element={<AdminEvent/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;