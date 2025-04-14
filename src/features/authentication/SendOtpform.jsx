import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOtpform({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label={"شماره موبایل"}
          value={phoneNumber}
          onChange={onChange}
          name="phoneNumber"
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOtpform;
