// src/components/NavBar.js
import React from 'react';

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Site Informativo</h1>
      <ul className="flex gap-4">
      <li><a href="#home" className="hover:text-gray-200 animate-spin">Home</a></li>
        <li><a href="#about" className="hover:text-gray-200">Sobre</a></li>
        <li><a href="#contact" className="hover:text-gray-200">Contato</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
