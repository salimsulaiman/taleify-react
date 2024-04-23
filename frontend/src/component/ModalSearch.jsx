import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

function ModalSearch({ show }) {
  //   const inputRef = useRef < HTMLInputElement > null;

  //   useEffect(() => {
  //     // Set focus on the input element when the modal is shown
  //     if (show) {
  //       inputRef.current.focus();
  //     }
  //   }, [show]);

  return (
    <div className="w-full min-h-full bg-black relative">
      {/* Elemen overlay untuk memberikan efek gelap */}
      <div
        className={`bg-black opacity-50 fixed top-0 right-0 bottom-0 left-0 ${show} transition-opacity duration-300`}
      />

      {/* Modal pencarian */}
      <div
        className={`bg-white max-w-screen-md mx-auto rounded-lg shadow-md border-2 border-slate-200 p-5 absolute right-8 left-8 top-20 ${show}`}
      >
        <form action="" className="relative">
          <input
            // ref={inputRef}
            type="text"
            className="w-full min-h-full focus:outline-0 text-slate-500"
            placeholder="Search..."
            autoFocus
          />
          <FaSearch className="text-2xl text-slate-500 absolute right-0 top-0 cursor-pointer" />
        </form>
      </div>
    </div>
  );
}

export default ModalSearch;
