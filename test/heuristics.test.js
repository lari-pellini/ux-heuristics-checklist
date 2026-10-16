import assert from 'node:assert/strict';
import { test } from 'node:test';
import { HEURISTICS, SEVERITIES, healthScore, toMarkdown } from '../heuristics.js';

test('there are exactly 10 heuristics, each translated', () => {
  assert.equal(HEURISTICS.length, 10);
  assert.equal(new Set(HEURISTICS.map((h) => h.id)).size, 10);
  for (const h of HEURISTICS) {
    for (const lang of ['en', 'pt']) {
      assert.ok(h.title[lang] && h.summary[lang], `${h.id} missing ${lang} text`);
      assert.equal(h.questions[lang].length, h.questions.en.length, `${h.id} ${lang} question count`);
    }
  }
  assert.deepEqual(SEVERITIES.map((s) => s.value), [0, 1, 2, 3, 4]);
});

test('healthScore', () => {
  assert.equal(healthScore({}), null);
  assert.equal(healthScore({ status: 0, help: 0 }), 100);
  assert.equal(healthScore({ status: 4 }), 0);
  assert.equal(healthScore({ status: 1, help: 2 }), 63);
});

test('toMarkdown builds a table and escapes pipes', () => {
  const md = toMarkdown({ site: 'loja.example', ratings: { status: 3 }, notes: { status: 'Sem loading | no botão\nComprar' } }, 'pt');
  assert.match(md, /^# Avaliação heurística — loja\.example/);
  assert.match(md, /\| 1 \| Visibilidade do status do sistema \| 3 · Grave \| Sem loading \\\| no botão Comprar \|/);
  assert.match(md, /\| 10 \| Ajuda e documentação \| Não avaliado \|/);
});
