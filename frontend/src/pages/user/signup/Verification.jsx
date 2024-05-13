import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../../../redux/action/userAction";
import { useLocation, useNavigate } from "react-router-dom";
import { compareVerificationCode, resendVerifyCode } from "../../../redux/action/verificationAction";

function Verification() {
  const [codes, setCodes] = useState(["", "", "", ""]);
  const inputRefs = useRef([...Array(4)].map(() => React.createRef()));

  const [countdown, setCountdown] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email"); // dapatkan nilai dari parameter "email"

  const { loading, error, message, messageResend } = useSelector((state) => state.verifyCode);

  const { dataByEmail } = useSelector((state) => state.user);

  useEffect(() => {
    email && dispatch(getUserByEmail(email));
  }, []);

  const handleInputChange = (index, value) => {
    setCodes((prevCodes) => {
      const newCodes = [...prevCodes];
      newCodes[index] = value;
      return newCodes;
    });

    if (value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (value !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && !codes[index] && codes[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      inputRefs.current.forEach((ref, index) => handleKeyDown(index, event));
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [codes]);

  useEffect(() => {
    setCodes(["", "", "", ""]); // Reset codes when component mounts
  }, [email]);

  const handleVerif = (e) => {
    e.preventDefault();
    const userId = dataByEmail && dataByEmail._id;
    const verificationCode = codes.join("");
    dispatch(compareVerificationCode(userId, verificationCode)).then((response) => {
      if (response.status == "VERIFIED") {
        alert("Veirifikasi berhasil");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/user/signin");
      }
    });

    setCodes(["", "", "", ""]);
  };

  const resendCode = (e) => {
    e.preventDefault();
    const userId = dataByEmail && dataByEmail._id;
    dispatch(resendVerifyCode(userId, email));
    setCountdown(30);
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear interval after countdown finishes
    setTimeout(() => {
      clearInterval(interval);
      setCountdown(0);
    }, 30000);
  };
  return (
    <div
      className="w-full min-h-screen bg-white-100 bg-cover flex justify-center items-center font-poppins"
      style={{ backgroundImage: 'url("/buble.png")' }}
    >
      <div className="w-[673px] min-h-[360px] bg-white rounded-xl p-5 flex shadow-xl mx-4 relative items-center flex-col">
        <div className="w-[104px] h-[104px] bg-purple-semi-dark absolute left-1/2 -translate-x-1/2 -top-12 rounded-full flex justify-center items-center">
          <h2 className="text-xl font-bold text-white">Taleify</h2>
        </div>
        <h4 className="text-base text-slate-500 mt-16 text-center">
          Silahkan cek email terdaftar untuk mendapatkan kode verifikasi
        </h4>
        <div className="w-[254px] mt-6">
          <div className="grid grid-cols-4 gap-3">
            {codes.map((code, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={code}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-full h-[76px] px-4 text-center border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-purple-light font-bold text-lg"
              />
            ))}
          </div>
        </div>
        {countdown > 0 ? (
          <h4 className="text-purple-light mt-6 mb-6">{countdown}s</h4>
        ) : (
          <h4 className="text-purple-light mt-6 cursor-pointer mb-6" onClick={resendCode}>
            Kirim Ulang
          </h4>
        )}
        <button
          type="button"
          onClick={handleVerif}
          className="w-full sm:w-[402px] bg-gradient-to-r from-purple-light to-purple-dark text-white py-1.5 px-3 rounded-full hover:bg-gradient-to-l hover:from-purple-light hover:to-purple-dark focus:outline-none focus:shadow-outline-blue transition ease-in-out duration-300"
        >
          Konfirmasi
        </button>
        {error && <p className="text-sm text-slate-500 mt-6 text-center">{error}</p>}
        {message && <p className="text-sm text-red-700 mt-6 text-center">{message}</p>}
        {typeof messageResend === "string" && <p className="text-sm text-red-700 mt-6 text-center">{messageResend}</p>}
      </div>
    </div>
  );
}

export default Verification;
