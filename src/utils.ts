import { API_URL } from "./config";

export function collapseURL(url: string) {
  return url.replaceAll(/(?<!:)\/{2,}/g, "/");
}

export function convertImageURL(url: string): string | null {
  if(url == null) return null;
  const res = API_URL + "/" + url;
  return collapseURL(res);
};

export function convertGalleryURL(url: string): string | null {
  if(url == null) return null;
  const res = API_URL + "/gallery/" + url;
  return collapseURL(res);
};

export function isFileName(url: string, extensions: string[]): boolean {
  for(const e of extensions)
    if(url.match(new RegExp(`.${e}`))?.[0] != null) return true;
  return false;
} 

export function getCurrentIP() {
  return window.location.hostname; // if domain added, must be read from a custom config file
}

export const CURRENT_IP = getCurrentIP();