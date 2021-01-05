import React from 'react';
import ReactDomServer from 'react-dom/server';

const html = ReactDomServer.renderToString(<div>Hello SSR!</div>);

console.log(html);
