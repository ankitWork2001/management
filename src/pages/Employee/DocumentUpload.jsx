import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const fields = [
  { label: "Resume", key: "resume" },
  { label: "ID Card", key: "idCard" },
  { label: "Offer Letter", key: "offerLetter" },
  { label: "Certificate", key: "certificate" },
];

function DocumentUploade() {
  const [files, setFiles] = useState({
    resume: null,
    idCard: null,
    offerLetter: null,
    certificate: null,
  });

  const handleChange = (e, key) => {
    setFiles((prev) => ({ ...prev, [key]: e.target.files[0] }));
  };

  const handleUpload = () => {
    console.log("Uploading files:", files);
    // Add actual upload logic here
  };

  return (
    <div className="bg-[#0A0A23] text-white p-6 rounded-xl w-full max-w-md space-y-6 my-5 flex flex-col  items-center md:items-start">
      {fields.map(({ label, key }) => (
        <div key={key} className="space-y-1">
          <label className="block text-xl font-medium">{label}</label>
          <div className="flex items-center">
          <FaRegFileAlt className="w-5 h-5"/>
          <input
            type="file"
            onChange={(e) => handleChange(e, key)}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#1A1F38] file:text-white hover:file:bg-[#2A2F48]"
            />
          </div>
          <p className="text-xs text-gray-400">
            {files[key] ? files[key].name : "No File Chosen"}
          </p>
          {!files[key] && (
            <p className="text-xs text-red-500">Please Upload a file</p>
          )}
        </div>
      ))}

      <button
        onClick={handleUpload}
        className="w-full bg-[#0075FF] hover:bg-[#005FCC] text-white py-2 rounded-md font-semibold transition"
      >
        Upload
      </button>
    </div>
  );
}

export default DocumentUploade;
