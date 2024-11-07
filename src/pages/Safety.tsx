import { useState } from 'react';
import { ShieldCheck, AlertTriangle, FileText, Camera, CheckCircle } from 'lucide-react';

function Safety() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Safety</h1>

      {/* Daily Safety Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Daily Safety Checklist</h2>
          <div className="space-y-4">
            {[
              'PPE Inspection',
              'Equipment Check',
              'Site Hazard Assessment',
              'Crew Safety Briefing',
              'Emergency Procedures Review'
            ].map((item) => (
              <div key={item} className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                />
                <span className="ml-3">{item}</span>
              </div>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Submit Checklist
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
              <AlertTriangle size={20} />
              <span>Report Incident</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
              <Camera size={20} />
              <span>Safety Photo</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
              <CheckCircle size={20} />
              <span>Safety Meeting</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100">
              <FileText size={20} />
              <span>View Reports</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Safety Reports */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Safety Reports</h2>
        <div className="space-y-4">
          {[
            {
              date: 'Nov 5, 2024',
              type: 'Daily Inspection',
              status: 'Completed',
              location: '10626 Glengate Cir'
            },
            {
              date: 'Nov 4, 2024',
              type: 'Incident Report',
              status: 'Reviewed',
              location: '12755 E Canongate'
            }
          ].map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div>
                <p className="font-medium">{report.type}</p>
                <p className="text-sm text-gray-600">{report.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{report.date}</p>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  report.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {report.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Safety;