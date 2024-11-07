import React from 'react';
import { FileText, Download } from 'lucide-react';

interface Document {
  id: number;
  name: string;
  type: string;
}

interface DocumentViewerProps {
  documents: Document[];
}

function DocumentViewer({ documents }: DocumentViewerProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold">Documents</h3>
        </div>
        <button className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
          Upload Document
        </button>
      </div>
      <div className="space-y-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-gray-400" />
              <span>{doc.name}</span>
            </div>
            <button className="p-2 text-gray-500 hover:text-blue-600">
              <Download size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentViewer;