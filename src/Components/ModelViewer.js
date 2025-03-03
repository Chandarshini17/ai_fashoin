import React from "react";
import "@google/model-viewer";

const ModelViewer = ({ modelSrc }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                <model-viewer
                    src={modelSrc}
                    alt="3D Model"
                    auto-rotate
                    camera-controls
                    ar
                    shadow-intensity="1"
                    style={{ width: '500px', height: '500px' }}
                ></model-viewer>
            </div>
        </div>
    );
};

export default ModelViewer;
