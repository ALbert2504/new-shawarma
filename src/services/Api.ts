import { requestErrorMessages } from '../constants';


class Api {
  static catchError(e: any) {
    console.log(e);

    if (e.message.includes(requestErrorMessages.authEmailAlreadyInUse)) {
      this.catchSignUpError();
    } else if (e.message.includes(requestErrorMessages.authUserNotFound)) {
      this.catchUserNotFoundError();
    } else {
      console.log(e);
      throw new Error(e.message);
    }
  }

  static catchSignUpError() {
    throw new Error('User with that email already exists.');
  }

  static catchUserNotFoundError() {
    throw new Error('Wrong email or password.');
  }
}

export default Api;
