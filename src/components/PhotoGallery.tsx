import React from 'react';
import { Camera } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  caption: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Camera className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold">Photos</h3>
        </div>
        <button className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
          Upload Photo
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="group relative">
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
              <p className="text-sm">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;