import {
  Links,
  LiveReload,
  MetaFunction,
  LinksFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import styles from "./tailwind.css";

/* meta & SEO lives here */
export const meta: MetaFunction = () => {
  return {
    title: "Sonr Name Registration",
    description:
      "Sonr Name Registration is a decentralized name registration service that allows you to register your own name.",
    keywords: "sonr, decentralized, blockchain",
  };
};

/* links to our tailwind utilities / stylesheets live here */
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Layout>
          <Outlet />
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <ChakraProvider>
        <Layout>
          <div>
            <h1>There was an error</h1>
            <p>{error.message}</p>
            <hr />
            <p>
              Hey, developer, you should replace this with what you want your
              users to see.
            </p>
          </div>
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider>
        <Layout>
          <h1>
            {caught.status}: {caught.statusText}
          </h1>
          {message}
        </Layout>
      </ChakraProvider>
    </Document>
  );
}
