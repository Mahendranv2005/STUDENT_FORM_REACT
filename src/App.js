import './App.css';
import EmployeeFeedbackForm from './components/EmployeeFeedbackForm';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/student'>Student Registration</Link>
        <Link to='/employee'>Employee Feedback</Link>
      </div>

      <Routes>
        <Route path='/' element={<Navigate to='/student' />} />
        <Route path='/student' element={<StudentRegistrationForm />} />
        <Route path='/employee' element={<EmployeeFeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
