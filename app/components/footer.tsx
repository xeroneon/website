import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-black text-white min-h-20 p-4">
      <ul className="container">
        <li className="underline">
          <a
            href="https://github.com/xeroneon/dotfiles"
            target="_blank"
            rel="noreferrer"
          >
            dotfiles
          </a>
        </li>
      </ul>
    </div>
  );
}
