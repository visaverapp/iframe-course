export type authResponseTypes = {
  access: string;
  refresh: string;
  email: string;
};
export interface DecodedToken {
  exp: number;
  iat: number;
  jti: string;
  token_type: 'access' | 'refresh';
  user_id: number;
}
export type OnBoardingType = 'passed' | 'watch' | null;

export interface UserStateType {
  isAuth: boolean;
  isCommercial: boolean;
  user_id: string;
  username: string;
  email: string;
  avatar?: string | null;
  onBoarding: OnBoardingType;
}

export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse extends Omit<RegisterUser, 'password'> {
  publicId: string;
}

export type LoginUser = Omit<RegisterUser, 'username'>;

export interface LoginUserResponse {
  access: string;
  refresh: string;
}

export type Access = Pick<LoginUserResponse, 'access'>;
export type Refresh = Pick<LoginUserResponse, 'refresh'>;

export interface ChangePassword {
  newPassword: string;
  currentPassword: string;
}

export interface Confirm {
  uid: string;
  token: string;
}

export type PasswordConfirm = Confirm & Pick<ChangePassword, 'newPassword'>;

export interface AuthError {
  detail: string
  code?: 'token_not_valid';
  data: string | string[];
}
