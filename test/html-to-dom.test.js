import htmlToDom from '../src/html-to-dom.js';

const test = QUnit.test;

test('it converts html to DOM', assert => {
  const html = /*html*/ `
    <span>test</span>
  `;

  const dom = htmlToDom(html);

  assert.equal(dom.tagName, 'SPAN');
  assert.equal(dom.textContent, 'test');
});
