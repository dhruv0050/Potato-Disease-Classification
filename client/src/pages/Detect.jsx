import React, { useState, useEffect } from 'react';

const Detect = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      setData(null);
      return;
    }
    setSelectedFile(e.target.files[0]);
    setData(null);
  };

  const sendFile = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const result = await res.json();
        setData(result);
      } else {
        console.error("Error uploading file");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearData = () => {
    setData(null);
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Potato Disease Detection</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {!preview && (
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-10 hover:bg-gray-50 transition cursor-pointer relative">
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={onSelectFile}
              accept="image/*"
            />
            <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p className="text-gray-500">Click or drag to upload an image</p>
          </div>
        )}

        {preview && (
          <div className="mb-6">
            <img src={preview} alt="Preview" className="w-full h-64 object-cover rounded-lg mb-4" />
            
            {!data && !isLoading && (
              <div className="flex gap-4">
                <button 
                  onClick={sendFile}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition font-semibold"
                >
                  Detect Disease
                </button>
                <button 
                  onClick={clearData}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        )}

        {isLoading && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-700 mx-auto mb-2"></div>
            <p className="text-gray-600">Analyzing image...</p>
          </div>
        )}

        {data && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h2 className="text-xl font-bold text-green-800 mb-2">Result</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Diagnosis:</span>
              <span className="font-bold text-lg">{data.class}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Confidence:</span>
              <span className="font-bold text-lg">{(data.confidence * 100).toFixed(2)}%</span>
            </div>
            <button 
              onClick={clearData}
              className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Test Another Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detect;
