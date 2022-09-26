let localStorageKey = "loginInformation";

export function getLoginInformation() {
  return JSON.parse(localStorage.getItem(localStorageKey)) || {};
}

export function setLoginInformation(loginInformation) {
  localStorage.setItem(localStorageKey, JSON.stringify(loginInformation));
}

export function removeLoginInformation() {
  localStorage.removeItem(localStorageKey);
}
