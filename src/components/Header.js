import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHomeMenuOpen1, setHomeMenuOpen1] = useState(false);
  const [isHomeMenuOpen2, setHomeMenuOpen2] = useState(false);
  const [isHomeMenuOpen3, setHomeMenuOpen3] = useState(false);
  const [isHomeMenuOpen4, setHomeMenuOpen4] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setHomeMenuOpen1(false);
    setHomeMenuOpen2(false);
    setHomeMenuOpen3(false);
    setHomeMenuOpen4(false);
  };

  const toggleMenu1 = () => {
    setHomeMenuOpen1(!isHomeMenuOpen1);
    setMenuOpen(false);
    setHomeMenuOpen2(false);
    setHomeMenuOpen3(false);
    setHomeMenuOpen4(false);
  };

  const toggleMenu2 = () => {
    setHomeMenuOpen2(!isHomeMenuOpen2);
    setMenuOpen(false);
    setHomeMenuOpen1(false);
    setHomeMenuOpen3(false);
    setHomeMenuOpen4(false);
  };

  const toggleMenu3 = () => {
    setHomeMenuOpen3(!isHomeMenuOpen3);
    setMenuOpen(false);
    setHomeMenuOpen1(false);
    setHomeMenuOpen2(false);
    setHomeMenuOpen4(false);
  };

  const toggleMenu4 = () => {
    setHomeMenuOpen4(!isHomeMenuOpen4);
    setMenuOpen(false);
    setHomeMenuOpen1(false);
    setHomeMenuOpen2(false);
    setHomeMenuOpen3(false);
  };

  return (
    <nav>
      <div className="relative bg-white">
        <div className="conatiner mx-auto p-4">
          <div className="grid lg:grid-cols-5 gap-4">
            <button onClick={toggleMenu} className="text-black text-lg font-bold"><Link to="/">Home</Link> </button>
            <button onClick={toggleMenu1} className="text-black text-lg font-bold">About</button>
            <button onClick={toggleMenu2} className="text-black text-lg font-bold">Standards</button>
            <button onClick={toggleMenu3} className="text-black text-lg font-bold">Training & Events</button>
            <button onClick={toggleMenu4} className="text-black text-lg font-bold">About</button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white text-gray-800">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h2 className="text-lg font-semibold mb-2"> <Link to="/about">About</Link></h2>
                  <ul>
                    <li href="/about">Item 1</li>
                    <li>Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Category 1</h2>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Category 1</h2>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Category 1</h2>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {isHomeMenuOpen1 && (
          <div className="absolute top-full left-0 w-full bg-white text-gray-800">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 1</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 2</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 3</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 4</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {isHomeMenuOpen2 && (
          <div className="absolute top-full left-0 w-full bg-white text-gray-800">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 1</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 1</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 1</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 1</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {isHomeMenuOpen3 && (
          <div className="absolute top-full left-0 w-full bg-white text-gray-800">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 3</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 3</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 3</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 3</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {isHomeMenuOpen4 && (
          <div className="absolute top-full left-0 w-full bg-white text-gray-800">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 4</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 4</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 4</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Home Menu 4</h2>
                  <ul>
                    <li>Home Item 1</li>
                    <li>Home Item 2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>

  );
};

export default MegaMenu;
