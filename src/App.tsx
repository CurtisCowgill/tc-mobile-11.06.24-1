import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Sidebar from './components/Sidebar';
import Today from './pages/Today';
import Schedule from './pages/Schedule';
import CrewManagement from './pages/CrewManagement';
import Time from './pages/Time';
import Safety from './pages/Safety';
import WorkOrderDetail from './pages/WorkOrderDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Today />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/crew" element={<CrewManagement />} />
              <Route path="/time" element={<Time />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/work-orders/:id" element={<WorkOrderDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;