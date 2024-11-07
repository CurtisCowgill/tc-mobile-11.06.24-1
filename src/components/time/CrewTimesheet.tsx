import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface CrewMember {
  id: number;
  name: string;
  role: string;
  isPresent: boolean;
  clockedIn: boolean;
  clockInTime?: string;
  clockOutTime?: string;
  currentWorkOrder?: {
    id: string;
    project: string;
    type: string;
  };
}

function CrewTimesheet() {
  const [crewMembers, setCrewMembers] = useState<CrewMember[]>([
    { id: 1, name: 'John Smith', role: 'Foreman', isPresent: true, clockedIn: true, clockInTime: '7:00 AM' },
    { id: 2, name: 'Mike Johnson', role: 'Assistant Foreman', isPresent: true, clockedIn: true, clockInTime: '7:05 AM' },
    { id: 3, name: 'Dave Wilson', role: 'Crew Member', isPresent: false, clockedIn: false },
    { id: 4, name: 'Steve Brown', role: 'Crew Member', isPresent: true, clockedIn: false },
  ]);

  const toggleAllPresence = (present: boolean) => {
    setCrewMembers(members =>
      members.map(member => ({ ...member, isPresent: present }))
    );
  };

  const toggleAllClockStatus = (clockedIn: boolean) => {
    setCrewMembers(members =>
      members.map(member => {
        if (member.isPresent) {
          if (clockedIn) {
            return {
              ...member,
              clockedIn: true,
              clockInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
          } else {
            return {
              ...member,
              clockedIn: false,
              clockOutTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
          }
        }
        return member;
      })
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Quick Actions */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => toggleAllPresence(true)}
          className="flex-1 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 text-lg font-bold"
        >
          All Present
        </button>
        <button
          onClick={() => toggleAllClockStatus(true)}
          className="flex-1 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-lg font-bold"
        >
          Clock All In
        </button>
        <button
          onClick={() => toggleAllClockStatus(false)}
          className="flex-1 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 text-lg font-bold"
        >
          Clock All Out
        </button>
      </div>

      {/* Crew List */}
      <div className="space-y-4">
        {crewMembers.map((member) => (
          <div
            key={member.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              member.isPresent ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={member.isPresent}
                onChange={() => {
                  setCrewMembers(members =>
                    members.map(m =>
                      m.id === member.id ? { ...m, isPresent: !m.isPresent } : m
                    )
                  );
                }}
                className="h-6 w-6 text-blue-600 rounded border-gray-300"
              />
              <div>
                <p className="text-lg font-bold">{member.name}</p>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {member.clockInTime && (
                <span className="text-gray-600">
                  In: {member.clockInTime}
                </span>
              )}
              {member.clockOutTime && (
                <span className="text-gray-600">
                  Out: {member.clockOutTime}
                </span>
              )}
              {member.isPresent && (
                <button
                  onClick={() => {
                    setCrewMembers(members =>
                      members.map(m =>
                        m.id === member.id
                          ? {
                              ...m,
                              clockedIn: !m.clockedIn,
                              clockInTime: !m.clockedIn
                                ? new Date().toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })
                                : m.clockInTime,
                              clockOutTime: m.clockedIn
                                ? new Date().toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })
                                : m.clockOutTime,
                            }
                          : m
                      )
                    );
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-lg ${
                    member.clockedIn
                      ? 'bg-red-50 text-red-600 hover:bg-red-100'
                      : 'bg-green-50 text-green-600 hover:bg-green-100'
                  }`}
                >
                  {member.clockedIn ? (
                    <>
                      <XCircle size={24} />
                      <span>Clock Out</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle size={24} />
                      <span>Clock In</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrewTimesheet;