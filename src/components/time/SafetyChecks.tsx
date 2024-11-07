import { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface SafetyReport {
  id: number;
  type: 'injury' | 'incident' | 'near-miss';
  description: string;
  timestamp: string;
  status: 'reported' | 'reviewing' | 'resolved';
}

function SafetyChecks() {
  const [reports, setReports] = useState<SafetyReport[]>([]);
  const [showReportForm, setShowReportForm] = useState(false);
  const [newReport, setNewReport] = useState({
    type: 'incident',
    description: '',
  });

  const submitReport = () => {
    setReports([
      ...reports,
      {
        id: reports.length + 1,
        ...newReport,
        timestamp: new Date().toLocaleString(),
        status: 'reported',
      } as SafetyReport,
    ]);
    setShowReportForm(false);
    setNewReport({ type: 'incident', description: '' });
  };

  return (
    <div className="space-y-6">
      {/* Hours Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Hours Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Regular Hours</p>
            <p className="text-2xl font-semibold">32.5</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-600">Overtime Hours</p>
            <p className="text-2xl font-semibold">2.5</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-600">Compliance Status</p>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-600" size={20} />
              <span className="font-medium">Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Reporting */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Safety Reports</h2>
          <button
            onClick={() => setShowReportForm(true)}
            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
          >
            Report Issue
          </button>
        </div>

        {showReportForm && (
          <div className="mb-6 p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium mb-4">New Safety Report</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Type</label>
                <select
                  value={newReport.type}
                  onChange={(e) =>
                    setNewReport({ ...newReport, type: e.target.value as SafetyReport['type'] })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                >
                  <option value="injury">Injury</option>
                  <option value="incident">Incident</option>
                  <option value="near-miss">Near Miss</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Description</label>
                <textarea
                  value={newReport.description}
                  onChange={(e) =>
                    setNewReport({ ...newReport, description: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowReportForm(false)}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={submitReport}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-red-50 rounded-lg">
                  <AlertTriangle className="text-red-600" size={20} />
                </div>
                <div>
                  <p className="font-medium">
                    {report.type.charAt(0).toUpperCase() + report.type.slice(1)}
                  </p>
                  <p className="text-sm text-gray-600">{report.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{report.timestamp}</p>
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full ${
                    report.status === 'reported'
                      ? 'bg-yellow-100 text-yellow-800'
                      : report.status === 'reviewing'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
          {reports.length === 0 && (
            <p className="text-center text-gray-600 py-4">No safety reports filed today</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SafetyChecks;