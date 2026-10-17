
import { HEURISTICS, SEVERITIES, healthScore, toMarkdown } from './heuristics.js';

const STORAGE_KEY = 'ux-heuristics-checklist:v1';

const STRINGS = {
  pt: {
    title: 'Checklist de Heurísticas de UX',
    lede: 'Avalie uma landing page ou loja virtual com as 10 heurísticas de Nielsen. Tudo fica salvo só no seu navegador.',
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
    lede: "Review a landing page or online store against Nielsen's 10 usability heuristics. Everything is saved only in your browser.",
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

  es: {
    title: 'Lista de comprobación de Heurísticas de UX',
    lede: 'Evalúa una landing page o una tienda online según las 10 heurísticas de usabilidad de Nielsen. Todo se guarda solo en tu navegador.',
    siteLabel: 'Sitio web o página evaluada',
    copy: 'Copiar Markdown',
    download: 'Descargar .md',
    reset: 'Restablecer',
    copied: '¡Copiado!',
    confirmReset: '¿Borrar todas las valoraciones y notas?',
    severity: 'Gravedad',
    notEvaluated: 'Sin evaluar',
    notes: 'Notas y evidencias',
    notesPlaceholder: '¿Qué has observado? ¿Dónde? (captura, URL, paso)',
    progress: (done, total) => `${done} de ${total} heurísticas evaluadas`,
    footer: 'Escala de gravedad de 0 a 4 · código abierto, licencia MIT ·',
  },
};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');

    if (saved && typeof saved === 'object') {
      return {
        lang: 'pt',
        site: '',
        ratings: {},
        notes: {},
        ...saved,
        lang: ['en', 'pt', 'es'].includes(saved.lang) ? saved.lang : 'pt',
      };
    }
  } catch {
    // Storage unavailable — start fresh.
  }

  const browserLang = navigator.language?.toLowerCase() || 'en';
  const lang = browserLang.startsWith('es')
    ? 'es'
    : browserLang.startsWith('pt')
      ? 'pt'
      : 'en';

  return { lang, site: '', ratings: {}, notes: {} };
}

const state = load();

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage errors.
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
      el('option', {
        value: '',
        textContent: s.notEvaluated,
      }),
      ...SEVERITIES.map((sev) =>
        el('option', {
          value: String(sev.value),
          textContent: sev[state.lang],
        }),
      ),
    ]);

    select.value = Number.isInteger(state.ratings[h.id])
      ? String(state.ratings[h.id])
      : '';

    select.addEventListener('change', () => {
      if (select.value === '') {
        delete state.ratings[h.id];
      } else {
        state.ratings[h.id] = Number(select.value);
      }

      li.dataset.severity = select.value;
      save();
      renderSummary();
    });

    const notes = el('textarea', {
      id: `notes-${h.id}`,
      rows: 2,
      placeholder: s.notesPlaceholder,
      value: state.notes[h.id] || '',
    });

    notes.addEventListener('input', () => {
      state.notes[h.id] = notes.value;
      save();
    });

    const li = el('li', { className: 'card' }, [
      el('h2', { textContent: `${i + 1}. ${h.title[state.lang]}` }),
      el('p', {
        className: 'summary-text',
        textContent: h.summary[state.lang],
      }),
      el(
        'ul',
        { className: 'questions' },
        h.questions[state.lang].map((q) =>
          el('li', { textContent: q }),
        ),
      ),
      el('div', { className: 'fields' }, [
        el('label', {
          htmlFor: select.id,
          textContent: s.severity,
        }),
        select,
        el('label', {
          htmlFor: notes.id,
          textContent: s.notes,
        }),
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

  document.documentElement.lang = {
    en: 'en',
    pt: 'pt-BR',
    es: 'es-ES',
  }[state.lang];

  document.title = s.title;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = s[node.dataset.i18n];
    if (value !== undefined) node.textContent = value;
  });

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute(
      'aria-pressed',
      String(btn.dataset.lang === state.lang),
    );
  });
}

function render() {
  renderStatic();
  renderList();
  renderSummary();
}

document.querySelectorAll('[data-lang]').forEach((btn) =>
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;

    if (!STRINGS[lang]) return;

    state.lang = lang;
    save();
    render();
  }),
);

$('#site').value = state.site;

$('#site').addEventListener('input', (e) => {
  state.site = e.target.value;
  save();
});

$('#copy').addEventListener('click', async (e) => {
  const button = e.currentTarget;

  await navigator.clipboard.writeText(toMarkdown(state, state.lang));

  button.textContent = STRINGS[state.lang].copied;

  setTimeout(() => {
    button.textContent = STRINGS[state.lang].copy;
  }, 1500);
});

$('#download').addEventListener('click', () => {
  const blob = new Blob(
    [toMarkdown(state, state.lang)],
    { type: 'text/markdown;charset=utf-8' },
  );

  const link = el('a', {
    href: URL.createObjectURL(blob),
    download: state.lang === 'es'
      ? 'evaluacion-heuristica.md'
      : 'heuristic-evaluation.md',
  });

  link.click();
  URL.revokeObjectURL(link.href);
});

$('#reset').addEventListener('click', () => {
  if (!confirm(STRINGS[state.lang].confirmReset)) return;

  Object.assign(state, {
    site: '',
    ratings: {},
    notes: {},
  });

  $('#site').value = '';
  save();
  render();
});

render();
