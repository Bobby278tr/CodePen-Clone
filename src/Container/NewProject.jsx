import React from "react";
import SplitPane from 'react-split-pane';
import '../index.css';
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa6";
import { FcSettings } from "react-icons/fc";

const NewProject = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">
      {/* alert section */}

      {/* heading section */}

      {/* Editor Section */}
      <div>
        {/* Horizontal pane */}
        <SplitPane
          split="horizontal"
          minSize={100}
          maxSize={-100}
          defaultSize={"50%"}
        >
          {/* Top coding section */}
          <SplitPane split="vertical" minSize={500}>
            {/* HTML code */}
            <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-secondary px-4 py2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                  <FaHtml5 className=" text-xl text-red-500"/>
                  <p className="text-primaryText font-semibold">HTML</p>
                </div>

                {/* Icon section */}
                <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                  <FcSettings className="text-xl"/>
                  <FaChevronDown className="text-xl text-primaryText"/>
                </div>
              </div>
              <div>Code Mirror</div>
            </div>

            <SplitPane split="vertical" minSize={500}>
              {/* CSS code */}

              <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-secondary px-4 py2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                  <FaCss3 className=" text-xl text-sky-500"/>
                  <p className="text-primaryText font-semibold">CSS</p>
                </div>

                {/* Icon section */}
                <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                  <FcSettings className="text-xl"/>
                  <FaChevronDown className="text-xl text-primaryText"/>
                </div>
              </div>
              <div>Code Mirror</div>
            </div>

              {/* JS code */}

              <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-secondary px-4 py2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                  <FaJs className=" text-xl text-yellow-500"/>
                  <p className="text-primaryText font-semibold">JS</p>
                </div>

                {/* Icon section */}
                <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                  <FcSettings className="text-xl"/>
                  <FaChevronDown className="text-xl text-primaryText"/>
                </div>
              </div>
              <div>Code Mirror</div>
            </div>

            </SplitPane>
          </SplitPane>

          {/* Bottom result section */}
          <div></div>
        </SplitPane>
      </div>
    </div>
  )
};

export default NewProject;
