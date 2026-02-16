import React, { useState, useMemo } from 'react';

function App() {
  const [activePin, setActivePin] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const locations = [
    {
      id: 1,
      top: '15%',
      left: '25%',
      label: 'Singapore HQ',
      type: 'headquarters',
      color: 'bg-red-500',
      staff: 245,
      revenue: '$2.4M',
      status: 'Active',
      description: 'Global headquarters with state-of-the-art facilities',
      established: '2015',
      phone: '+65 6234 5678',
      email: 'sg-hq@company.com'
    },
    {
      id: 2,
      top: '45%',
      left: '55%',
      label: 'Tokyo Distribution',
      type: 'distribution',
      color: 'bg-blue-500',
      staff: 180,
      revenue: '$1.8M',
      status: 'Active',
      description: 'Major distribution hub for Asia-Pacific region',
      established: '2018',
      phone: '+81 3-1234-5678',
      email: 'tokyo@company.com'
    },
    {
      id: 3,
      top: '65%',
      left: '15%',
      label: 'Sydney Retail',
      type: 'retail',
      color: 'bg-emerald-500',
      staff: 42,
      revenue: '$680K',
      status: 'Active',
      description: 'Premium retail outlet in Sydney CBD',
      established: '2019',
      phone: '+61 2-9876-5432',
      email: 'sydney@company.com'
    },
    {
      id: 4,
      top: '35%',
      left: '72%',
      label: 'Bangkok Retail',
      type: 'retail',
      color: 'bg-emerald-500',
      staff: 38,
      revenue: '$620K',
      status: 'Active',
      description: 'Flagship store in Bangkok shopping district',
      established: '2020',
      phone: '+66 2-9876-5432',
      email: 'bangkok@company.com'
    },
    {
      id: 5,
      top: '55%',
      left: '35%',
      label: 'Manila Branch',
      type: 'branch',
      color: 'bg-violet-500',
      staff: 95,
      revenue: '$920K',
      status: 'Active',
      description: 'Regional operations and customer support center',
      established: '2017',
      phone: '+63 2-8876-5432',
      email: 'manila@company.com'
    },
    {
      id: 6,
      top: '25%',
      left: '42%',
      label: 'Ho Chi Minh Warehouse',
      type: 'distribution',
      color: 'bg-blue-500',
      staff: 120,
      revenue: '$1.2M',
      status: 'Operational',
      description: 'Warehouse and logistics facility',
      established: '2021',
      phone: '+84 8-7654-3210',
      email: 'hcm@company.com'
    }
  ];

  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      const matchesSearch = loc.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           loc.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || loc.type === filterType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, filterType]);

  const stats = {
    totalLocations: locations.length,
    totalStaff: locations.reduce((sum, loc) => sum + loc.staff, 0),
    totalRevenue: `$${locations.reduce((sum, loc) => sum + parseFloat(loc.revenue.slice(1)), 0).toFixed(1)}M`,
    activeLocations: locations.filter(l => l.status === 'Active').length
  };

  const getTypeColor = (type) => {
    const colors = {
      headquarters: 'bg-red-100 text-red-800',
      distribution: 'bg-blue-100 text-blue-800',
      retail: 'bg-emerald-100 text-emerald-800',
      branch: 'bg-violet-100 text-violet-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getTypeBadgeColor = (type) => {
    const colors = {
      headquarters: 'bg-red-500',
      distribution: 'bg-blue-500',
      retail: 'bg-emerald-500',
      branch: 'bg-violet-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const activeLocation = locations.find(l => l.id === activePin);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex overflow-hidden">
      {/* SIDEBAR */}
      <div className={`${sidebarOpen ? 'w-96' : 'w-0'} bg-slate-800 border-r border-slate-700 transition-all duration-300 flex flex-col overflow-hidden`}>
        {/* Stats Cards */}
        <div className="p-6 border-b border-slate-700 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-700 rounded-lg p-4">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Locations</div>
              <div className="text-2xl font-bold text-white mt-1">{stats.totalLocations}</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Staff</div>
              <div className="text-2xl font-bold text-white mt-1">{stats.totalStaff}</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Revenue</div>
              <div className="text-xl font-bold text-white mt-1">{stats.totalRevenue}</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Active</div>
              <div className="text-2xl font-bold text-green-400 mt-1">{stats.activeLocations}</div>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="p-6 border-b border-slate-700 space-y-4">
          <input
            type="text"
            placeholder="Search locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="space-y-2">
            <label className="text-xs text-slate-400 font-semibold uppercase tracking-wide block">Filter by Type</label>
            <div className="grid grid-cols-2 gap-2">
              {['all', 'headquarters', 'distribution', 'retail', 'branch'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    filterType === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Locations List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {filteredLocations.map(location => (
            <button
              key={location.id}
              onClick={() => setActivePin(location.id)}
              className={`w-full text-left p-4 rounded-lg transition-all border-2 ${
                activePin === location.id
                  ? 'bg-slate-700 border-blue-500 shadow-lg shadow-blue-500/20'
                  : 'bg-slate-700 border-transparent hover:bg-slate-600'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-white text-sm">{location.label}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getTypeColor(location.type)}`}>
                  {location.type}
                </span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Staff:</span>
                  <span className="text-white font-semibold">{location.staff}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Revenue:</span>
                  <span className="text-white font-semibold">{location.revenue}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <div className="bg-slate-800 border-b border-slate-700 px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Global Operations</h1>
            <p className="text-slate-400 text-sm mt-1">Interactive network map with real-time insights</p>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* MAP & DETAILS CONTAINER */}
        <div className="flex-1 flex gap-6 p-8 overflow-hidden">
          {/* MAP CONTAINER */}
          <div className="flex-1 flex flex-col">
            <div className="relative w-full flex-1 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
              
              {/* Map Background Grid */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10 pointer-events-none">
                {[...Array(72)].map((_, i) => (
                  <div key={i} className="border border-slate-500"></div>
                ))}
              </div>

              {/* Map Background Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-6xl text-slate-600 opacity-30 font-bold mb-4">🗺️</div>
                  <div className="text-slate-500 font-semibold text-lg opacity-50">Asia-Pacific Operations Network</div>
                </div>
              </div>

              {/* LOCATION PINS */}
              {filteredLocations.map((location) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ top: location.top, left: location.left }}
                  onClick={() => setActivePin(location.id)}
                >
                  {/* Animated Ring */}
                  {activePin === location.id && (
                    <div className="absolute w-16 h-16 border-2 border-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-pulse opacity-30"></div>
                  )}
                  
                  {/* Pin Point */}
                  <div className={`w-8 h-8 ${location.color} rounded-full border-4 border-white shadow-lg hover:scale-150 transition-all duration-200 ${
                    activePin === location.id ? 'scale-130 shadow-2xl' : ''
                  }`}></div>

                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 whitespace-nowrap bg-slate-900 text-white text-sm py-2 px-3 rounded-lg border border-slate-700 shadow-xl pointer-events-none transition-all duration-200 ${
                    activePin === location.id ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                  }`}>
                    <div className="font-bold">{location.label}</div>
                    <div className="text-xs text-slate-300">{location.type}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900 -mt-1"></div>
                  </div>
                </div>
              ))}

              {filteredLocations.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <div className="text-4xl mb-3">🔍</div>
                    <div className="font-semibold">No locations found</div>
                    <div className="text-sm">Try adjusting your filters</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* DETAILS PANEL */}
          {activeLocation && (
            <div className="w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
              {/* Header */}
              <div className={`${getTypeBadgeColor(activeLocation.type)} p-6 text-white`}>
                <h2 className="text-2xl font-bold mb-2">{activeLocation.label}</h2>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  {activeLocation.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div>
                  <h3 className="text-xs text-slate-400 font-bold uppercase tracking-wide mb-2">Description</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{activeLocation.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wide">Staff</div>
                    <div className="text-2xl font-bold text-white mt-2">{activeLocation.staff}</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wide">Revenue</div>
                    <div className="text-2xl font-bold text-green-400 mt-2">{activeLocation.revenue}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs text-slate-400 font-bold uppercase tracking-wide mb-3">Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">📅</span>
                      <div>
                        <div className="text-xs text-slate-400">Established</div>
                        <div className="text-white font-semibold">{activeLocation.established}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">📞</span>
                      <div>
                        <div className="text-xs text-slate-400">Phone</div>
                        <div className="text-white font-semibold">{activeLocation.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">✉️</span>
                      <div>
                        <div className="text-xs text-slate-400">Email</div>
                        <div className="text-white font-semibold text-sm">{activeLocation.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-700 p-4">
                <button
                  onClick={() => setActivePin(null)}
                  className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-semibold text-sm"
                >
                  Close Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
