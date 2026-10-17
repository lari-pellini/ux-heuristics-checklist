import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as checklist from '../heuristics.js';

test('every context has translated, contextual guidance for all ten heuristics', () => {
  assert.deepEqual(checklist.CONTEXTS.map((context) => context.id), ['ecommerce', 'saas', 'institutional', 'app']);
  for (const context of checklist.CONTEXTS) {
    assert.ok(context.en && context.pt);
    for (const heuristic of checklist.HEURISTICS) {
      const en = checklist.questionsFor(heuristic, context.id, 'en');
      const pt = checklist.questionsFor(heuristic, context.id, 'pt');
      assert.ok(en.length > 0, `${context.id}/${heuristic.id}`);
      assert.equal(en.length, pt.length);
      assert.ok(en.every((question) => typeof question === 'string' && question.trim()));
      assert.ok(pt.every((question) => typeof question === 'string' && question.trim()));
      if (context.id !== 'ecommerce') {
        assert.notDeepEqual(en, heuristic.questions.en);
        assert.notDeepEqual(pt, heuristic.questions.pt);
      }
    }
  }
});

test('context changes guide questions without mutating the default checklist', () => {
  const status = checklist.HEURISTICS.find((heuristic) => heuristic.id === 'status');
  const original = [...status.questions.en];
  assert.deepEqual(checklist.questionsFor(status, 'ecommerce', 'en'), original);
  assert.notDeepEqual(checklist.questionsFor(status, 'saas', 'en'), original);
  assert.notDeepEqual(checklist.questionsFor(status, 'app', 'en'), original);
  assert.deepEqual(checklist.questionsFor(status, 'unknown', 'en'), original);
  assert.deepEqual(status.questions.en, original);
});

test('export identifies the context in both languages and supports old saved evaluations', () => {
  const state = { site: 'example.com', ratings: { status: 2 }, notes: { status: 'Progress is unclear.' }, context: 'saas' };
  assert.match(checklist.toMarkdown(state, 'en'), /Context: SaaS/);
  assert.match(checklist.toMarkdown({ ...state, context: 'app' }, 'pt'), /Contexto: Aplicativo/);
  assert.match(checklist.toMarkdown({ site: '', ratings: {}, notes: {} }, 'en'), /Context: E-commerce/);
});
