"use client"
import { useState } from "react";
import { PhotoIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Gallerymanagement(){
    const [files, setFiles] = useState<File[]>([])
    
    const handleUpload =(event: React.ChangeEvent<HTMLInputElement>) =>{
        if(event.target.files){
        const uploadFiles = Array.from(event.target.files);
        setFiles([...files, ...uploadFiles])
    }
}
    const handleDelete = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

    return(
        <>
        
        <div>
            <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2"> 
                <PhotoIcon className="h-8 w-8 text-blue-900" />
                    Gallery Management
            </h2>
            {/* upload section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                 <label className="block mb-2 font-semibold">Upload Book Assets</label>
                  <input
          type="file"
          multiple
          onChange={handleUpload}
          className="border p-2 rounded-md w-full"
        />
            </div>
            {/* Gallery list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {files.map((file, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <p className="text-sm font-medium">{file.name}</p>
            <button
              onClick={() => handleDelete(index)}
              className="mt-2 flex items-center gap-1 text-red-600 hover:text-red-800"
            >
              <TrashIcon className="h-5 w-5" />
              Delete
            </button>
          </div>
        ))}
            </div>
        </div>
        </>
    )
}