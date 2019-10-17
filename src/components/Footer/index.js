import React from 'react';

function Footer() {
  return (
    <footer class='font-sans bg-blue-700 border border-blue-600 text-white py-4 px-4 mt-8'>
      <div class='mx-auto max-w-xl overflow-hidden flex justify-between items-center'>
        <ul class='text-sm text-gray-700 list-none p-0 flex items-center'>
          <li>
            <a
              href='https://github.com/ayradc/feed-app'
              target='_blank'
              rel='noopener noreferrer'
              class='inline-block py-2 px-3 text-blue-200 hover:text-blue-100 no-underline'
            >
              Git repository link
            </a>
          </li>
        </ul>
        <p class='inline-block py-2 px-3 text-blue-100 text-xs'>
          ©2019 AyradC.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
