import React, { useState } from 'react';

function App() {
  const [activePin, setActivePin] = useState(null);

  const pins = [
    { id: 1, top: '20%', left: '30%', label: 'Headquarters', color: 'bg-red-500' },
    { id: 2, top: '50%', left: '60%', label: 'Distribution Center', color: 'bg-blue-500' },
    { id: 3, top: '70%', left: '20%', label: 'Retail Store A', color: 'bg-green-500' },
    { id: 4, top: '40%', left: '80%', label: 'Retail Store B', color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8 font-sans">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Global Locations</h2>
        
        {/* MAP CONTAINER */}
        {/* FUTURE BUG: Remove 'relative' to make absolute pins positioning fail */}
        <div className="relative w-full h-[500px] bg-slate-200 rounded-xl overflow-hidden border border-slate-300">
          
          {/* Mock Map Background Grid */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20 pointer-events-none">
            {[...Array(72)].map((_, i) => (
              <div key={i} className="border border-slate-400"></div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-4xl opacity-20">
            [ INTERACTIVE MAP IMAGE ]
          </div>

          {/* PINS */}
          {pins.map((pin) => (
            <div 
              key={pin.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ top: pin.top, left: pin.left }}
              onClick={() => setActivePin(pin.id)}
            >
              {/* Pin Point */}
              <div className={`w-6 h-6 ${pin.color} rounded-full border-4 border-white shadow-md hover:scale-125 transition-transform`}></div>
              
              {/* Tooltip (Visible on Hover/Active) */}
              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-slate-800 text-white text-xs py-1 px-2 rounded text-center transition-opacity duration-200

                ${activePin === pin.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 pointer-events-none'}`}>
                {pin.label}
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
              </div>
            </div>
          ))}

        </div>

        <div className="mt-6 flex space-x-4">
            <button onClick={() => setActivePin(null)} className="px-4 py-2 text-sm text-slate-500 hover:text-slate-800 border border-slate-300 rounded-lg">Reset View</button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">Add Location</button>
        </div>
      </div>
    </div>
  );
}

export default App;
