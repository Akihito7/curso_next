'use server'

import { cookies } from "next/headers";

export async function setCookies(key : string, value : string){
  cookies().set(key, value, {
    httpOnly : true,
    secure : true
  });
}