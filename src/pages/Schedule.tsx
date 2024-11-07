import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

function Schedule() {
  const [view, setView] = useState<'calendar' | 'list'>('calendar');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Schedule</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setView('calendar')}
            className={`px-4 py-2 rounded-lg ${
              view === 'calendar'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Calendar
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded-lg ${
              view === 'list'
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            List
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">November 2024</h2>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {view === 'calendar' ? (
              <div className="grid grid-cols-7 gap-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm text-gray-600">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square border border-gray-200 rounded-lg p-2"
                  >
                    <span className="text-sm">{i + 1}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  {
                    date: 'Nov 6',
                    events: [
                      {
                        time: '9:00 AM',
                        title: 'Footings Pour',
                        location: '10626 Glengate Cir',
                        crew: 'Foundation Team Alpha'
                      },
                      {
                        time: '2:00 PM',
                        title: 'Wall Forms',
                        location: '12755 E Canongate',
                        crew: 'Foundation Team Beta'
                      }
                    ]
                  }
                ].map((day) => (
                  <div key={day.date}>
                    <h3 className="font-medium mb-2">{day.date}</h3>
                    <div className="space-y-2">
                      {day.events.map((event, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg p-4"
                        >
                          <div className="flex items-center text-gray-600 mb-2">
                            <Clock size={16} className="mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <p className="font-medium mb-2">{event.title}</p>
                          <div className="flex items-center text-gray-600">
                            <MapPin size={16} className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mt-1">
                            <Users size={16} className="mr-2" />
                            <span>{event.crew}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
            <div className="space-y-4">
              {[
                {
                  time: '9:00 AM',
                  title: 'Footings Pour',
                  location: '10626 Glengate Cir'
                },
                {
                  time: '2:00 PM',
                  title: 'Wall Forms',
                  location: '12755 E Canongate'
                }
              ].map((event, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg space-y-2"
                >
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <p className="font-medium">{event.title}</p>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;