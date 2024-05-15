'use client'
import React, { useState } from 'react';

export default function Order() {
  const [boxStatus, setBoxStatus] = useState([
    { id: 1, color: '#B65151', selected: false },
    { id: 2, color: '#FFFFFF', selected: false },
    { id: 3, color: '#FFFFFF', selected: false },
    { id: 4, color: '#B65151', selected: false },
    { id: 5, color: '#B65151', selected: false },
    { id: 6, color: '#FFFFFF', selected: false },
    { id: 7, color: '#B65151', selected: false },
    { id: 8, color: '#FFFFFF', selected: false },
    { id: 9, color: '#B65151', selected: false },
    { id: 10, color: '#FFFFFF', selected: false },
    { id: 11, color: '#B65151', selected: false },
    { id: 12, color: '#FFFFFF', selected: false },
  ]);
  const [selected, setSelected] = useState(-1)

  const handleClick = (id) => {
    const updatedBoxes = boxStatus.map((box) => (
      {
            ...box,
            color: box.color !== '#B65151' ? box.id !== id ? '#FFFFFF' : '#27374D' : box.color,
            selected: box.id === id,
          }
        ));
    setBoxStatus(updatedBoxes);
    setSelected(id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center p-8">
        <img src="/logo_text.png" alt="SpotPark Logo" className="h-10 w-auto" />
      </header>

      <main className="flex flex-col items-center w-full p-4 mt-8">
        <div className="w-full max-w-md mt-6 grid grid-cols-2 gap-x-12">
          {boxStatus.map((box) => (
            <div
              key={box.id}
              className="p-8 border border-black border-2 shadow-md cursor-pointer"
              style={{ backgroundColor: box.color }}
              onClick={() => box.color !== 
                '#B65151' && handleClick(box.id)}
            ></div>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <button type="submit" className="mt-4 bg-[#27374D] text-white px-12 py-1 rounded-full">
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

