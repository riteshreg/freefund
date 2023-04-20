import "./globals.css";
import "server-only";

import SupabaseListener from "../components/SupabaseListner";
import SupabaseProvider from "../components/SupaProvider";
import { createClient } from "../libs/supaServerClient";


export const metadata = {
  title: "Free Fund",
  description: "Free fund",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <div className="flex">
          
                {children}
              </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}