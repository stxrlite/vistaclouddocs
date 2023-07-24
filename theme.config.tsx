import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  project: {
    link: 'https://vistacloud.org',
  },
  chat: {
    link: 'https://discord.gg/SCv2pbeHCX',
  },
  docsRepositoryBase: 'https://github.com/stxrlite/etheralbot',
  footer: {
    text: 'The Etheral Bot Github',
  },
  primaryHue: {
    dark: 263,
    light: 263,
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'VistaCloud 💻 | %s ',
    };
  },
  logo: (
    <>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 4.6v4.8c0 .9.5 1.6 1.2 1.6h17.7c.6 0 1.2-.7 1.2-1.6V4.6C22 3.7 21.5 3 20.8 3H3.2C2.5 3 2 3.7 2 4.6M10 8V6H9v2h1M5 8h2V6H5v2m15 1H4V5h16v4M2 14.6v4.8c0 .9.5 1.6 1.2 1.6h17.7c.6 0 1.2-.7 1.2-1.6v-4.8c0-.9-.5-1.6-1.2-1.6H3.2c-.7 0-1.2.7-1.2 1.6m8 3.4v-2H9v2h1m-5 0h2v-2H5v2m15 1H4v-4h16v4Z"/></svg>

      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      VistaCloud 
      </span>
    </>
  ),
  head: (
    <>
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </>
  ),
};

export default config;
