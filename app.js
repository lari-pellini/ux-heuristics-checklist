import { CONTEXTS, HEURISTICS, SEVERITIES, healthScore, questionsFor, toMarkdown } from './heuristics.js';

const STORAGE_KEY = 'ux-heuristics-checklist:v1';

const STRINGS = {
  pt: {
    title: 'Checklist de Heurísticas de UX',
    lede: 'Avalie uma loja, SaaS, site institucional ou aplicativo com as 10 heurísticas de Nielsen. Tudo fica salvo só no seu navegador.',
    contextLabel: 'Contexto da avaliação',
    siteLabel: 'Site ou página avaliada',
    copy: 'Copiar Markdown',
    download: 'Baixar .md',
    reset: 'Limpar',
    copied: 'Copiado!',
    confirmReset: 'Apagar todas as notas e avaliações?',
    severity: 'Severidade',
    notEvaluated: 'Não avaliado',
    notes: 'Notas e evidências',
    notesPlaceholder: 'O que você observou? Onde? (print, URL, passo)',
    progress: (done, total) => `${done} de ${total} heurísticas avaliadas`,
    footer: 'Escala de severidade de 0 a 4 · código aberto, licença MIT ·',
  },
  en: {
    title: 'UX Heuristics Checklist',
    lede: "Review an online store, SaaS, institutional site or mobile app against Nielsen's 10 usability heuristics. Everything is saved only in your browser.",
    contextLabel: 'Evaluation context',
    siteLabel: 'Site or page under review',
    copy: 'Copy Markdown',
    download: 'Download .md',
    reset: 'Reset',
    copied: 'Copied!',
    confirmReset: 'Clear all ratings and notes?',
    severity: 'Severity',
    notEvaluated: 'Not evaluated',
    notes: 'Notes and evidence',
    notesPlaceholder: 'What did you see? Where? (screenshot, URL, step)',
    progress: (done, total) => `${done} of ${total} heuristics rated`,
    footer: '0–4 severity scale · open source, MIT license ·',
  },
};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && typeof saved === 'object') return { lang: 'pt', context: 'ecommerce', site: '', ratings: {}, notes: {}, ...saved };
  } catch {
    // storage unavailable (private mode) — start fresh
  }
  const lang = navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  return { lang, context: 'ecommerce', site: '', ratings: {}, notes: {} };
}

const state = load();
if (!CONTEXTS.some((context) => context.id === state.context)) state.context = 'ecommerce';

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

const $ = (sel) => document.querySelector(sel);

function el(tag, props = {}, children = []) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

function renderList() {
  const s = STRINGS[state.lang];
  const items = HEURISTICS.map((h, i) => {
    const select = el('select', { id: `sev-${h.id}` }, [
      el('option', { value: '', textContent: s.notEvaluated }),
      ...SEVERITIES.map((sev) => el('option', { value: String(sev.value), textContent: sev[state.lang] })),
    ]);
    select.value = Number.isInteger(state.ratings[h.id]) ? String(state.ratings[h.id]) : '';
    select.addEventListener('change', () => {
      if (select.value === '') delete state.ratings[h.id];
      else state.ratings[h.id] = Number(select.value);
      li.dataset.severity = select.value;
      save();
      renderSummary();
    });

    const notes = el('textarea', { id: `notes-${h.id}`, rows: 2, placeholder: s.notesPlaceholder, value: state.notes[h.id] || '' });
    notes.addEventListener('input', () => {
      state.notes[h.id] = notes.value;
      save();
    });

    const li = el('li', { className: 'card' }, [
      el('h2', { textContent: `${i + 1}. ${h.title[state.lang]}` }),
      el('p', { className: 'summary-text', textContent: h.summary[state.lang] }),
      el('ul', { className: 'questions' }, questionsFor(h, state.context, state.lang).map((q) => el('li', { textContent: q }))),
      el('div', { className: 'fields' }, [
        el('label', { htmlFor: select.id, textContent: s.severity }),
        select,
        el('label', { htmlFor: notes.id, textContent: s.notes }),
        notes,
      ]),
    ]);
    li.dataset.severity = select.value;
    return li;
  });
  $('#list').replaceChildren(...items);
}

function renderSummary() {
  const s = STRINGS[state.lang];
  const score = healthScore(state.ratings);
  $('#score').textContent = score === null ? '—' : String(score);
  const done = Object.keys(state.ratings).length;
  $('#progress').textContent = s.progress(done, HEURISTICS.length);
}

function renderStatic() {
  const s = STRINGS[state.lang];
  document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : 'en';
  document.title = s.title;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = s[node.dataset.i18n];
  });
  document.querySelectorAll('[data-lang]').forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.lang === state.lang)));
  $('#context').replaceChildren(...CONTEXTS.map((context) => el('option', { value: context.id, textContent: context[state.lang] })));
  $('#context').value = state.context;
}

function render() {
  renderStatic();
  renderList();
  renderSummary();
}

document.querySelectorAll('[data-lang]').forEach((btn) =>
  btn.addEventListener('click', () => {
    state.lang = btn.dataset.lang;
    save();
    render();
  }),
);

$('#site').value = state.site;
$('#context').addEventListener('change', (event) => {
  state.context = event.target.value;
  save();
  renderList();
});
$('#site').addEventListener('input', (e) => {
  state.site = e.target.value;
  save();
});

$('#copy').addEventListener('click', async (e) => {
  const button = e.currentTarget;
  await navigator.clipboard.writeText(toMarkdown(state, state.lang));
  button.textContent = STRINGS[state.lang].copied;
  setTimeout(() => (button.textContent = STRINGS[state.lang].copy), 1500);
});

$('#download').addEventListener('click', () => {
  const blob = new Blob([toMarkdown(state, state.lang)], { type: 'text/markdown' });
  const link = el('a', { href: URL.createObjectURL(blob), download: 'heuristic-evaluation.md' });
  link.click();
  URL.revokeObjectURL(link.href);
});

$('#reset').addEventListener('click', () => {
  if (!confirm(STRINGS[state.lang].confirmReset)) return;
  Object.assign(state, { site: '', ratings: {}, notes: {} });
  $('#site').value = '';
  save();
  render();
});

render();
