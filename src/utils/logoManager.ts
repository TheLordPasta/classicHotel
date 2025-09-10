// utils/logoManager.ts
import WhiteLogo from "../resources/logo-white.png";
import BlackLogo from "../resources/logo-black.png";

let currentLogo: string = WhiteLogo;
let listeners: ((logo: string) => void)[] = [];

export const setLogo = (newLogo: string) => {
  currentLogo = newLogo;
  listeners.forEach((fn) => fn(newLogo));
};

export const subscribeLogo = (fn: (logo: string) => void) => {
  listeners.push(fn);
  fn(currentLogo); // send immediately
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
};

// Export ready-to-use logos
export { WhiteLogo, BlackLogo };
