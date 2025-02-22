import UserBasicInfo from "./individual/basic-info";
import UserLoginDetails from "./individual/login-details";
import UserOTPVerification from "./individual/otp-verification";
import CorpBasicInfo from "./corporate/basic-info";
import CorpLoginDetails from "./corporate/login-details";
import CorpOTPVerification from "./corporate/otp-verification";
import AuthSuccess from "./shared/auth-success";

const UserAuth = {
  BasicInfo: UserBasicInfo,
  LoginDetails: UserLoginDetails,
  OTP: UserOTPVerification,
  Success: AuthSuccess,
};

const CorpAuth = {
  BasicInfo: CorpBasicInfo,
  LoginDetails: CorpLoginDetails,
  OTP: CorpOTPVerification,
  Success: AuthSuccess,
};

export { UserAuth, CorpAuth };
