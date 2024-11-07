import React from 'react';
import { Package } from 'lucide-react';

interface MaterialQuantitiesProps {
  workOrderId: string | undefined;
}

function MaterialQuantities({ workOrderId }: MaterialQuantitiesProps) {
  const materials = [
    { name: 'Concrete', estimated: '45 CY', actual: '42 CY' },
    { name: 'Rebar', estimated: '2.5 tons', actual: '2.3 tons' },
    { name: 'Forms', estimated: '180 LF', actual: '175 LF' }
  ];

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <Package className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Material Quantities</h3>
      </div>
      <div className="space-y-3">
        {materials.map((material) => (
          <div key={material.name} className="flex justify-between items-center">
            <span className="text-gray-600">{material.name}</span>
            <div className="text-sm">
              <span className="text-gray-500">Est: {material.estimated}</span>
              <span className="mx-2">|</span>
              <span className="text-blue-600">Act: {material.actual}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialQuantities;