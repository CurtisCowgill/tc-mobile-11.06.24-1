import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  FileText, 
  Camera, 
  Wrench 
} from 'lucide-react';
import TimeTracker from "../components/TimeTracker";
import MaterialQuantities from "../components/MaterialQuantities";
import PhotoGallery from "../components/PhotoGallery";
import DocumentViewer from "../components/DocumentViewer";
import WorkOrderScheduler from "../components/WorkOrderScheduler";
import ManHourComparison from "../components/ManHourComparison";
import { cn } from '../utils/cn';

function WorkOrderDetail() {
  const { id } = useParams();
  const [status, setStatus] = useState('in-progress');

  // Mock data - replace with actual data fetching
  const workOrder = {
    id,
    title: "Foundation Pour - 123 Main St",
    type: "Foundation",
    status: "in-progress",
    scheduledDate: "2024-03-15",
    estimatedHours: 24,
    actualHours: 26,
    crewSize: 4,
    location: "123 Main St, Springfield, IL",
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1590496793929-36417d3117ee", caption: "Pre-pour setup" },
      { id: 2, url: "https://images.unsplash.com/photo-1583865112830-5bc5a0dee3c3", caption: "Forms installed" }
    ],
    documents: [
      { id: 1, name: "Foundation Plans.pdf", type: "pdf" },
      { id: 2, name: "Site Survey.pdf", type: "pdf" }
    ]
  };

  const tabs = [
    { name: 'Overview', icon: FileText },
    { name: 'Time & Materials', icon: Clock },
    { name: 'Photos', icon: Camera },
    { name: 'Documents', icon: FileText },
    { name: 'Equipment', icon: Wrench },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold">{workOrder.title}</h1>
            <p className="text-gray-600 mt-1">{workOrder.location}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TimeTracker workOrderId={id} />
          <ManHourComparison 
            estimatedHours={workOrder.estimatedHours}
            actualHours={workOrder.actualHours}
            crewSize={workOrder.crewSize}
          />
          <MaterialQuantities workOrderId={id} />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Tab.Group>
          <Tab.List className="flex space-x-1 border-b border-gray-200 px-4">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  cn(
                    'flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 focus:outline-none',
                    selected
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  )
                }
              >
                <tab.icon size={16} />
                <span>{tab.name}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="p-6">
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <WorkOrderScheduler workOrderId={id} />
                <div className="space-y-6">
                  <ManHourComparison 
                    estimatedHours={workOrder.estimatedHours}
                    actualHours={workOrder.actualHours}
                    crewSize={workOrder.crewSize}
                  />
                  <MaterialQuantities workOrderId={id} />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TimeTracker workOrderId={id} />
                <MaterialQuantities workOrderId={id} />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <PhotoGallery photos={workOrder.photos} />
            </Tab.Panel>
            <Tab.Panel>
              <DocumentViewer documents={workOrder.documents} />
            </Tab.Panel>
            <Tab.Panel>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Assigned Equipment</h3>
                <p className="text-gray-600">No equipment assigned to this work order.</p>
                <button className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                  Assign Equipment
                </button>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className="flex justify-end space-x-4">
        <button 
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          onClick={() => setStatus('completed')}
        >
          Mark Complete
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default WorkOrderDetail;