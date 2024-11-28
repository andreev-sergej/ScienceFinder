import React from "react";

export const FileItem = ({ fileName, fileSize, iconSrc }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
      <img src={iconSrc} alt={fileName} className="w-12 h-12 object-contain" />
      <div className="flex flex-col">
        <span className="text-lg font-medium text-black">{fileName}</span>
        {fileSize && <span className="text-sm text-gray-500">{fileSize}</span>}
      </div>
    </div>
  );
};
