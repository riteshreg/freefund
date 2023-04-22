import "../globals.css";
import "server-only";

import SupabaseListener from "../../SupaComponents/SupaListener";
import SupabaseProvider from "../../SupaComponents/SupaProvider";
import { createClient } from '../../libs/supaServerClient'
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Fund",
  description: "Fund raiser",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body>
      <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <div>
          <Navbar/>
          {children}
          </div>
        </SupabaseProvider>
        </body>
    </html>
  );
}
