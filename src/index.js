import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Hooks from './pages/Hooks';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import CustomHook from './pages/CustomHook';
import Post from './pages/Post';
import Employee from './pages/Employee';
import AddEmployee from './pages/AddEmployee';
import ReactAddEmp from './pages/ReactAddEmp';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="employee" element={<Employee/>} />
          <Route path="addemp" element={<AddEmployee/>} />
          <Route path="newemp" element={<ReactAddEmp/>} />
          <Route path="hooks" element={<Hooks/>} />
          <Route path="custom" element={<CustomHook/>} />
          <Route path="post/:id" element={<Post/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
