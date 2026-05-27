// client/src/cloverClient.js
const CLOVER_PUBLIC_TOKEN = "5227e9efdc3a490daa2a5b6199f3db63";
const CLOVER_SDK_URL = "https://checkout.clover.com/sdk.js";

let _sdkPromise = null;

export function loadCloverSDK() {
  if (_sdkPromise) return _sdkPromise;
  _sdkPromise = new Promise((resolve, reject) => {
    if (window.Clover) {
      resolve(window.Clover);
      return;
    }
    const script = document.createElement("script");
    script.src = CLOVER_SDK_URL;
    script.async = true;
    script.onload = () => {
      let attempts = 0;
      const check = () => {
        if (window.Clover) { resolve(window.Clover); return; }
        if (++attempts < 50) { setTimeout(check, 100); return; }
        _sdkPromise = null;
        reject(new Error("Clover SDK failed to initialize"));
      };
      check();
    };
    script.onerror = () => {
      _sdkPromise = null;
      reject(new Error("Failed to load Clover SDK"));
    };
    document.head.appendChild(script);
  });
  return _sdkPromise;
}

export function createCloverInstance() {
  return new window.Clover(CLOVER_PUBLIC_TOKEN);
}

export { CLOVER_PUBLIC_TOKEN };
