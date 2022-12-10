import styles from "./styles/app.css";
import style from "./styles/index.css";
import s from "./styles/skills.module.css";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import NavBar from './components/navbar';
import Footer from './components/footer';
import ScrollObserver from './utils/scroll-observer';
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Motives",
  viewport: "width=device-width,initial-scale=1",
});


export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: style },
    { rel: "stylesheet", href: s },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Exo+2:200i" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Questrial&display=swap"},
    {href:"https://fonts.googleapis.com/css2?family=Russo+One&display=swap", rel:"stylesheet"}
  ]
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
        <Meta />
        <Links />
      </head>
      <body className="screenio ">
        <div className="">
          <NavBar />
          <ScrollObserver>
            <Outlet />
          </ScrollObserver>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
        <Footer />
      </body>
    </html>
  );
}
