import 'babel-polyfill';

import './styles.css';
import 'asciidoctor.js/dist/css/asciidoctor.css';

import adoc from '../adoc/test.adoc';

(function main() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function bootstrap() {

    import('./adoc').then(({ html }) => {

      const innerHtml = html(adoc);

      document.body.innerHTML = `<div>
        ${innerHtml}
      </div>`;

      console.log(adoc);
      console.log(innerHtml);

    });

  }, false);

})();
