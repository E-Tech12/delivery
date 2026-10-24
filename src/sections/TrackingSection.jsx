import React, { useState } from 'react';

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('34547');
  const [hasSearched, setHasSearched] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <section id="pricing" className="py-[60px] md:py-[110px] bg-white">
      <div className="max-w-[867px] mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="font-tahoma text-[28px] sm:text-[34px] font-extralight text-[#120F0F] tracking-[-1.4px] leading-[1.1] mb-8">
          Track your package
        </h2>

        {/* WPCargo Track Form Container */}
        <div className="w-full max-w-[700px] mx-auto bg-white border border-gray-100 shadow-xs rounded p-4 sm:p-6 text-left">
          <form onSubmit={handleSubmit} className="w-full">
            <table id="wpcargo-track-table" className="w-full border-collapse">
              <thead>
                <tr>
                  <th colSpan="2" className="text-left pb-3">
                    <h4 className="text-[17px] font-semibold text-gray-800 m-0">
                      Enter the Consignment No.
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-full sm:w-[70%] pr-0 sm:pr-3 py-2">
                    <input
                      type="text"
                      name="wpcargo_tracking_number"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="Enter Tracking Number"
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-[15px] text-gray-700 focus:outline-none focus:border-[#00a924] transition-colors"
                      required
                    />
                  </td>
                  <td className="w-full sm:w-[30%] py-2 submit-track">
                    <button
                      type="submit"
                      className="w-full bg-[#00a924] hover:bg-[#777777] text-white font-bold text-[14px] uppercase tracking-wider py-2.5 px-4 rounded transition-colors duration-200 cursor-pointer shadow-xs"
                    >
                      TRACK RESULT
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="pt-2 text-gray-500">
                    <h4 className="text-[13px] font-normal text-gray-500 m-0">
                      Ex: 12345
                    </h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          {/* Results State */}
          {hasSearched && (
            <div id="wpcargo-result-wrapper" className="mt-6 border-t border-gray-100 pt-4">
              <div className="bg-red-50/50 rounded py-3">
                <h3 className="text-red-600 text-center font-semibold text-[18px] sm:text-[20px] m-0">
                  No results found!
                </h3>
              </div>
              <p className="text-[11px] text-gray-400 text-center mt-2">
                Demonstration interface — real-time carrier API lookup is disabled.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
