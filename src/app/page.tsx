import { GetCookies } from "@/components/getCookies";
import { getCookies } from "./actions/cookies";

export default async function Home() {
  const cookies = await getCookies("token"); 
  return (
    <main>
      <h1>Hello NextJS</h1>
      <GetCookies />
      <p>{cookies?.value}</p>
    </main>
  );
}
