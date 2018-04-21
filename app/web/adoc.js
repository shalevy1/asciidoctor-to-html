import * as Asciidoctor from 'asciidoctor.js';

const asciidoctor = Asciidoctor({
  runtime: {
    platform: 'browser',
    engine: 'v8',
    framework: 'webextensions',
    ioModule: 'xmlhttprequest',
  },
});

const config = {
  safe: 'safe',
  attributes: {
    showtitle: true,
    icons: 'fonts',
  },
};

export const html = (content) => asciidoctor.convert(content, config);
