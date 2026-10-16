// Jakob Nielsen's 10 usability heuristics, with guiding questions written for marketing sites,
// landing pages and online stores. Descriptions are our own short paraphrases.
export const HEURISTICS = [
  {
    id: 'status',
    title: { en: 'Visibility of system status', pt: 'Visibilidade do status do sistema' },
    summary: {
      en: 'People always know what is happening, through quick and clear feedback.',
      pt: 'A pessoa sempre sabe o que está acontecendo, com feedback rápido e claro.',
    },
    questions: {
      en: ['Do buttons react when clicked (loading state, disabled while sending)?', 'Does checkout show which step you are on?', 'Is the cart count updated right after adding a product?'],
      pt: ['Os botões reagem ao clique (estado de carregamento, desabilitado enquanto envia)?', 'O checkout mostra em qual etapa a pessoa está?', 'O contador do carrinho atualiza logo após adicionar um produto?'],
    },
  },
  {
    id: 'real-world',
    title: { en: 'Match between system and the real world', pt: 'Correspondência entre o sistema e o mundo real' },
    summary: {
      en: 'Use the words, concepts and order your audience already knows — not internal jargon.',
      pt: 'Use palavras, conceitos e a ordem que o seu público já conhece — não o jargão interno.',
    },
    questions: {
      en: ['Are menu labels written the way customers search for them?', 'Are prices, dates and sizes in local formats?', 'Do icons mean what people expect?'],
      pt: ['Os itens do menu usam as palavras que o cliente usa ao buscar?', 'Preços, datas e tamanhos seguem o formato local (R$, dd/mm)?', 'Os ícones significam o que as pessoas esperam?'],
    },
  },
  {
    id: 'control',
    title: { en: 'User control and freedom', pt: 'Controle e liberdade do usuário' },
    summary: {
      en: 'Easy ways out: undo, go back, close, cancel — without losing what was done.',
      pt: 'Saídas fáceis: desfazer, voltar, fechar, cancelar — sem perder o que já foi feito.',
    },
    questions: {
      en: ['Can pop-ups be closed easily (visible X, Esc, click outside)?', 'Does the back button work as expected?', 'Can you remove an item from the cart in one step?'],
      pt: ['Pop-ups fecham com facilidade (X visível, Esc, clique fora)?', 'O botão voltar do navegador funciona como esperado?', 'Dá para remover um item do carrinho em um passo?'],
    },
  },
  {
    id: 'consistency',
    title: { en: 'Consistency and standards', pt: 'Consistência e padrões' },
    summary: {
      en: 'The same thing looks and behaves the same everywhere, following web conventions.',
      pt: 'A mesma coisa tem a mesma aparência e comportamento em todo lugar, seguindo convenções da web.',
    },
    questions: {
      en: ['Do primary buttons share one style and color?', 'Is the logo linked to the home page?', 'Are the same terms used for the same actions?'],
      pt: ['Os botões principais têm o mesmo estilo e cor?', 'O logo leva para a página inicial?', 'Os mesmos termos são usados para as mesmas ações?'],
    },
  },
  {
    id: 'error-prevention',
    title: { en: 'Error prevention', pt: 'Prevenção de erros' },
    summary: {
      en: 'Better than a good error message is a design that avoids the mistake in the first place.',
      pt: 'Melhor que uma boa mensagem de erro é um design que evita o erro desde o início.',
    },
    questions: {
      en: ['Do forms use the right input types (email, tel, numeric keyboard on mobile)?', 'Is there a confirmation before destructive actions?', 'Are required fields marked before submitting?'],
      pt: ['Os formulários usam os tipos de campo certos (e-mail, telefone, teclado numérico no celular)?', 'Há confirmação antes de ações destrutivas?', 'Os campos obrigatórios estão sinalizados antes do envio?'],
    },
  },
  {
    id: 'recognition',
    title: { en: 'Recognition rather than recall', pt: 'Reconhecer em vez de lembrar' },
    summary: {
      en: 'Keep options and information visible so people do not have to memorise them.',
      pt: 'Mantenha opções e informações visíveis para que a pessoa não precise memorizá-las.',
    },
    questions: {
      en: ['Are selected filters shown and easy to clear?', 'Do form labels stay visible while typing (not placeholder-only)?', 'Are recently viewed products easy to find again?'],
      pt: ['Os filtros selecionados aparecem e são fáceis de limpar?', 'Os rótulos dos campos continuam visíveis ao digitar (não só placeholder)?', 'Produtos vistos recentemente são fáceis de reencontrar?'],
    },
  },
  {
    id: 'flexibility',
    title: { en: 'Flexibility and efficiency of use', pt: 'Flexibilidade e eficiência de uso' },
    summary: {
      en: 'Shortcuts for frequent visitors without getting in the way of first-timers.',
      pt: 'Atalhos para quem volta sempre, sem atrapalhar quem chega pela primeira vez.',
    },
    questions: {
      en: ['Is guest checkout available?', 'Does autofill work on address and payment fields?', 'Does search tolerate typos and synonyms?'],
      pt: ['Existe compra sem cadastro?', 'O preenchimento automático funciona em endereço e pagamento (inclui busca por CEP)?', 'A busca tolera erros de digitação e sinônimos?'],
    },
  },
  {
    id: 'minimalist',
    title: { en: 'Aesthetic and minimalist design', pt: 'Design estético e minimalista' },
    summary: {
      en: 'Every extra element competes with the ones that matter. Keep what supports the goal.',
      pt: 'Cada elemento extra compete com o que importa. Mantenha só o que apoia o objetivo.',
    },
    questions: {
      en: ['Is there one clear primary call to action per page?', 'Is the value proposition visible without scrolling?', 'Are banners and pop-ups competing for attention?'],
      pt: ['Há uma chamada para ação principal clara por página?', 'A proposta de valor aparece sem rolar a página?', 'Banners e pop-ups estão disputando atenção?'],
    },
  },
  {
    id: 'errors',
    title: { en: 'Help users recognise, diagnose and recover from errors', pt: 'Ajudar a reconhecer, diagnosticar e se recuperar de erros' },
    summary: {
      en: 'Error messages in plain language that say what went wrong and how to fix it.',
      pt: 'Mensagens de erro em linguagem simples, dizendo o que deu errado e como resolver.',
    },
    questions: {
      en: ['Do error messages appear next to the field that caused them?', 'Is the typed data kept after an error?', 'Does the 404 page help people find what they wanted?'],
      pt: ['As mensagens de erro aparecem ao lado do campo com problema?', 'Os dados digitados são mantidos após um erro?', 'A página 404 ajuda a pessoa a encontrar o que procurava?'],
    },
  },
  {
    id: 'help',
    title: { en: 'Help and documentation', pt: 'Ajuda e documentação' },
    summary: {
      en: 'Help is easy to find, focused on the task and in context.',
      pt: 'A ajuda é fácil de encontrar, focada na tarefa e no contexto certo.',
    },
    questions: {
      en: ['Are shipping costs and return policy easy to find before checkout?', 'Is there an FAQ or contact option in the footer?', 'Are there size guides or tooltips where people hesitate?'],
      pt: ['Frete e política de troca são fáceis de achar antes do checkout?', 'Há FAQ ou contato (WhatsApp, e-mail) no rodapé?', 'Há guia de tamanhos ou dicas onde as pessoas hesitam?'],
    },
  },
];

export const SEVERITIES = [
  { value: 0, en: '0 · Not a problem', pt: '0 · Não é problema' },
  { value: 1, en: '1 · Cosmetic', pt: '1 · Cosmético' },
  { value: 2, en: '2 · Minor', pt: '2 · Pequeno' },
  { value: 3, en: '3 · Major', pt: '3 · Grave' },
  { value: 4, en: '4 · Catastrophe', pt: '4 · Catastrófico' },
];

/** 100 = no problems found, 0 = every evaluated heuristic is a catastrophe. */
export function healthScore(ratings) {
  const values = Object.values(ratings).filter((v) => Number.isInteger(v));
  if (!values.length) return null;
  const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
  return Math.round(100 - avg * 25);
}

export function toMarkdown({ site, ratings, notes }, lang = 'en') {
  const t = (obj) => obj[lang];
  const label = (v) => (Number.isInteger(v) ? t(SEVERITIES[v]) : lang === 'pt' ? 'Não avaliado' : 'Not evaluated');
  const score = healthScore(ratings);
  const lines = [
    `# ${lang === 'pt' ? 'Avaliação heurística' : 'Heuristic evaluation'}${site ? ` — ${site}` : ''}`,
    '',
    `${lang === 'pt' ? 'Pontuação' : 'Score'}: ${score === null ? '—' : `${score}/100`}`,
    '',
    `| # | ${lang === 'pt' ? 'Heurística' : 'Heuristic'} | ${lang === 'pt' ? 'Severidade' : 'Severity'} | ${lang === 'pt' ? 'Notas' : 'Notes'} |`,
    '| --- | --- | --- | --- |',
  ];
  HEURISTICS.forEach((h, i) => {
    const note = (notes[h.id] || '').replace(/\|/g, '\\|').replace(/\n+/g, ' ');
    lines.push(`| ${i + 1} | ${t(h.title)} | ${label(ratings[h.id])} | ${note} |`);
  });
  return lines.join('\n') + '\n';
}
