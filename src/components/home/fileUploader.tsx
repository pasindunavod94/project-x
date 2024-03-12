// @ts-nocheck
import React from "react";

export const FileUploader = ({ handleFileUpload, getPresignedUrl }) => {
  return (
    <>
      <form onSubmit={handleFileUpload}>
        {/* <label
          htmlFor="uploadFile1"
          className="bg-white text-center rounded w-full sm:w-[360px] min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto font-[sans-serif] m-4"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#4CAF50"
              d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"
            />
            <path
              fill="#FFF"
              d="M32 15H39V18H32zM32 25H39V28H32zM32 30H39V33H32zM32 20H39V23H32zM25 15H30V18H25zM25 25H30V28H25zM25 30H30V33H25zM25 20H30V23H25z"
            />
            <path fill="#2E7D32" d="M27 42L6 38 6 10 27 6z" />
            <path
              fill="#FFF"
              d="M19.129,31l-2.411-4.561c-0.092-0.171-0.186-0.483-0.284-0.938h-0.037c-0.046,0.215-0.154,0.541-0.324,0.979L13.652,31H9.895l4.462-7.001L10.274,17h3.837l2.001,4.196c0.156,0.331,0.296,0.725,0.42,1.179h0.04c0.078-0.271,0.224-0.68,0.439-1.22L19.237,17h3.515l-4.199,6.939l4.316,7.059h-3.74V31z"
            />
          </svg>

          {fileName ? (
            <p className="text-xs text-gray-400 mt-2">{fileName}</p>
          ) : (
            <>
              <p className="text-gray-400 font-semibold text-sm">
                <span className="text-[#007bff]">Choose file</span> to upload
              </p>

              <p className="text-xs text-gray-400 mt-2">
                XLSX, XLS, XLSM, XLSB are Allowed.
              </p>
            </>
          )}

          <input
            className="bg-white hidden"
            type="file"
            name="file"
            id="uploadFile1"
            onChange={onChangeInput}
            onClick={getPresignedUrl}
          />
        </label> */}
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-3 ml-6">
            <input
              className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              type="file"
              name="file"
              onClick={getPresignedUrl}
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
          <div>
            <button
              className="font-medium bg-rhinoThemeColor px-8 py-1.5 rounded-lg"
              type="submit"
            >
              Upload
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center">
          <button
            className="mt-4 font-medium bg-rhinoThemeColor px-8 py-3 rounded-lg"
            type="submit"
          >
            Upload
          </button>
        </div> */}
      </form>
    </>
  );
};
