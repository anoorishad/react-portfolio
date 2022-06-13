import React, { useState } from "react";
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import resume from "../../assets/Noorishad Coding Resume draft.pdf"
// import "../style/style.css"

export default function Resume() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const [pdfFile, setPdfFile] = useState(resume);



    return (
        <div className="container bodyStyle">
            <h2 className="resume">Resume</h2>
            <div className="viewer">

                {pdfFile && (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                        <Viewer fileUrl={pdfFile}
                            plugins={[defaultLayoutPluginInstance]}></Viewer>
                    </Worker>
                )}

            </div>
        </div>

    );
}