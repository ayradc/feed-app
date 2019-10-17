import React from 'react';

function Footer() {
  return (
    <footer class='py-4 px-8 mt-4 w-full h-24 bg-indigo-600 text-white border border-indigo-700 rounded flex items-center'>
      <div class='mx-auto max-w-xl overflow-hidden flex justify-between items-center'>
        <ul class='text-sm text-indigo-700 list-none p-0 flex items-center'>
          <li>
            <a
              href='https://github.com/ayradc/feed-app'
              target='_blank'
              rel='noopener noreferrer'
              class='inline-block py-2 px-3 text-indigo-200 hover:text-indigo-100 no-underline'
            >
              Git repository link
            </a>
          </li>
        </ul>
        <p class='inline-block py-2 px-3 text-blue-100 text-xs'>
          © 2019 | AyradC.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
