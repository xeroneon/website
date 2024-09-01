import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "~/tailwind.css";
import { LoaderFunctionArgs } from "@remix-run/node";
import { themeSessionResolver } from "./sessions.server";
import { Theme, ThemeProvider, useTheme } from "remix-themes";
import clsx from "clsx";
import Footer from "./components/footer";
import Header from "./components/header";

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme() || ("dark" as Theme),
  };
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <Document>
        <Outlet />
      </Document>
    </ThemeProvider>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-900 text-slate-50">
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
