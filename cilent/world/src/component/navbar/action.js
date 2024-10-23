import { LOG_IN,LOG_OUT } from "./actiontype";

export function login(user) {
  return {
    type: LOG_IN,
    payload: user,
  };
}

export function logout() {
  return {
    type: LOG_OUT,
  };
}
