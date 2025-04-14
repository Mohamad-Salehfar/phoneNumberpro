import { useState } from "react";
import SendOtpform from "./SendOtpform";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function AuthConteiner() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    isPending: isSendingOtp,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      console.log(data.message);

      setStep(2);
      toast.success(data.message);
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message);
    }
  };
  const randerStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpform
            isSendingOtp={isSendingOtp}
            onSubmit={sendOtpHandler}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{randerStep()}</div>;
}

export default AuthConteiner;
