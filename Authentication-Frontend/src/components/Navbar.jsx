import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const Home = () => navigate('/');
  const Login = () => navigate('/login');   
  const Register = () => navigate('/register');

  return (
    <div className="w-full flex justify-center gap-8 items-center bg-gray-800 text-white p-4">
      <button
      onClick={Home}
      className="hover:text-gray-400">Home</button>
      <button
      onClick={Login}
      className="hover:text-gray-400">Login</button>
      <button
      onClick={Register}
      className="hover:text-gray-400">Register</button>
    </div>
  );
};

export default Navbar;
