'use server'
import { cookies } from "next/headers";

type CookieOptions = {
  httpOnly?: boolean;
  secure?: boolean;
};

export async function setCookies(key: string, value: string, cookiesOptions?: CookieOptions) {

  cookies().set(key, value, {
    httpOnly: cookiesOptions?.httpOnly ? cookiesOptions.httpOnly : false,
    secure: cookiesOptions?.secure ? cookiesOptions.secure : false
  });
}

export async function getCookies(key : string){
  return cookies().get(key)
}