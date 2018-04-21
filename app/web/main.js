import adoc from '../adoc/test.adoc';

(function main() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function bootstrap() {

    const innerHtml = asciidoctor.convert(adoc);

    document.body.innerHTML = `<div>
      ${innerHtml}
    </div>`;

    console.log(adoc);
    console.log(innerHtml);

  }, false);

})();
