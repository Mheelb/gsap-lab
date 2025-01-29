"use client";
import { pageIn } from "./utils/animations";
import { useEffect, useRef } from "react";

export default function Template({ children }) {

    useEffect(() => {
        pageIn();
    }, []);
  return (
    <div>
        <div id="banner-1" className="min-h-screen transition-banner z-10 fixed top-0 left-0 w-1/3"/>
        <div id="banner-2" className="min-h-screen transition-banner z-10 fixed top-0 left-1/3 w-1/3">
            <img className="transition-logo" src="src/assets/logo.svg"/>
        </div>
        <div id="banner-3" className="min-h-screen transition-banner z-10 fixed top-0 left-2/3 w-1/3"/>
        {children}
    </div>
  );
}