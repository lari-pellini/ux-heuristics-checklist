
 // Jakob Nielsen's 10 usability heuristics, with guiding questions written for marketing sites,
// landing pages and online stores. Descriptions are our own short paraphrases.
export const HEURISTICS = [
  {
    id: 'status',
    title: { en: 'Visibility of system status', pt: 'Visibilidade do status do sistema', es: 'Visibilidad del estado del sistema' },
    summary: {
      en: 'People always know what is happening, through quick and clear feedback.',
      pt: 'A pessoa sempre sabe o que está acontecendo, com feedback rápido e claro.',
      es: 'El usuario siempre sabe lo qué está ocurriendo, con un feedback rápido y claro.',
    },
    questions: {
      en: ['Do buttons react when clicked (loading state, disabled while sending)?', 'Does checkout show which step you are on?', 'Is the cart count updated right after adding a product?'],
      pt: ['Os botões reagem ao clique (estado de carregamento, desabilitado enquanto envia)?', 'O checkout mostra em qual etapa a pessoa está?', 'O contador do carrinho atualiza logo após adicionar um produto?'],
      es: ['¿Los botones responden al hacer clic (estado de carga, desactivación mientras se envía)?', '¿El proceso de compra indica en qué etapa está el usuario?', '¿El contador del carrito se actualiza justo después de añadir un producto?'],
    },
  },
  {
    id: 'real-world',
    title: { en: 'Match between system and the real world', pt: 'Correspondência entre o sistema e o mundo real', es: 'Correspondencia entre el sistema y el mundo real' },
    summary: {
      en: 'Use the words, concepts and order your audience already knows — not internal jargon.',
      pt: 'Use palavras, conceitos e a ordem que o seu público já conhece — não o jargão interno.',
      es: 'Usa las palabras, conceptos y el orden que el público conoce — no recurrir a la jerga interna.',
    },
    questions: {
      en: ['Are menu labels written the way customers search for them?', 'Are prices, dates and sizes in local formats?', 'Do icons mean what people expect?'],
      pt: ['Os itens do menu usam as palavras que o cliente usa ao buscar?', 'Preços, datas e tamanhos seguem o formato local (R$, dd/mm)?', 'Os ícones significam o que as pessoas esperam?'],
      es: ['¿Las etiquetas del menú usan las palabras que buscan los clientes?', '¿Los precios, las fechas y las tallas utilizan los formatos locales?', '¿Los iconos representan lo que los usuarios esperan?'],
    },
  },
  {
    id: 'control',
    title: { en: 'User control and freedom', pt: 'Controle e liberdade do usuário', es: 'Control y libertad del usuario' },
    summary: {
      en: 'Easy ways out: undo, go back, close, cancel — without losing what was done.',
      pt: 'Saídas fáceis: desfazer, voltar, fechar, cancelar — sem perder o que já foi feito.',
      es: 'Salidas fáciles: deshacer, volver, cerrar, cancelar — sin perder los cambios hechos.',
    },
    questions: {
      en: ['Can pop-ups be closed easily (visible X, Esc, click outside)?', 'Does the back button work as expected?', 'Can you remove an item from the cart in one step?'],
      pt: ['Pop-ups fecham com facilidade (X visível, Esc, clique fora)?', 'O botão voltar do navegador funciona como esperado?', 'Dá para remover um item do carrinho em um passo?'],
      es: ['¿Se pueden cerrar fácilmente las ventanas emergentes (botón X visible, tecla Esc o clic fuera)?', '¿El botón Atrás funciona como se espera?', '¿Puede eliminar un producto del carrito en un solo paso?'],
    },
  },
  {
    id: 'consistency',
    title: { en: 'Consistency and standards', pt: 'Consistência e padrões', es: 'Coherencia y estándares' },
    summary: {
      en: 'The same thing looks and behaves the same everywhere, following web conventions.',
      pt: 'A mesma coisa tem a mesma aparência e comportamento em todo lugar, seguindo convenções da web.',
      es: 'Los mismos elementos mantienen una apariencia y un comportamiento coherentes, siguiendo las convenciones web.',
    },
    questions: {
      en: ['Do primary buttons share one style and color?', 'Is the logo linked to the home page?', 'Are the same terms used for the same actions?'],
      pt: ['Os botões principais têm o mesmo estilo e cor?', 'O logo leva para a página inicial?', 'Os mesmos termos são usados para as mesmas ações?'],
      es: ['¿Los botones principales comparten estilo y color?', '¿El logotipo lleva a la página de inicio?', '¿Se usan los mismos términos para las mismas acciones?'],
    },
  },
  {
    id: 'error-prevention',
    title: { en: 'Error prevention', pt: 'Prevenção de erros', es: 'Prevención de errores' },
    summary: {
      en: 'Better than a good error message is a design that avoids the mistake in the first place.',
      pt: 'Melhor que uma boa mensagem de erro é um design que evita o erro desde o início.',
      es: 'Mejor que un buen mensaje de error es un diseño que evite los errores desde un inicio.',
    },
    questions: {
      en: ['Do forms use the right input types (email, tel, numeric keyboard on mobile)?', 'Is there a confirmation before destructive actions?', 'Are required fields marked before submitting?'],
      pt: ['Os formulários usam os tipos de campo certos (e-mail, telefone, teclado numérico no celular)?', 'Há confirmação antes de ações destrutivas?', 'Os campos obrigatórios estão sinalizados antes do envio?'],
      es: ['¿Los formularios usan los tipos de campo adecuados (email, teléfono, teclado numérico en móviles)?', '¿Hay confirmación antes de hacer acciones irreversibles?', '¿Se indican los campos obligatorios antes de enviar?'],
    },
  },
  {
    id: 'recognition',
    title: { en: 'Recognition rather than recall', pt: 'Reconhecer em vez de lembrar', es: 'Reconocer antes que recordar' },
    summary: {
      en: 'Keep options and information visible so people do not have to memorise them.',
      pt: 'Mantenha opções e informações visíveis para que a pessoa não precise memorizá-las.',
      es: 'Mantén opciones e información visibles para que los usuarios no tengan que recordarlas de memoria.',
    },
    questions: {
      en: ['Are selected filters shown and easy to clear?', 'Do form labels stay visible while typing (not placeholder-only)?', 'Are recently viewed products easy to find again?'],
      pt: ['Os filtros selecionados aparecem e são fáceis de limpar?', 'Os rótulos dos campos continuam visíveis ao digitar (não só placeholder)?', 'Produtos vistos recentemente são fáceis de reencontrar?'],
      es: ['¿Se muestran los filtros seleccionados y es fácil eliminarlos?', '¿Las etiquetas de los campos siguen visibles al escribir (no solo placeholder)', '¿Es fácil volver a encontrar los productos vistos recientemente?'],
    },
  },
  {
    id: 'flexibility',
    title: { en: 'Flexibility and efficiency of use', pt: 'Flexibilidade e eficiência de uso', es: 'Flexibilidad y eficiencia de uso' },
    summary: {
      en: 'Shortcuts for frequent visitors without getting in the way of first-timers.',
      pt: 'Atalhos para quem volta sempre, sem atrapalhar quem chega pela primeira vez.',
      es: 'Atajos para los usuarios habituales sin dificultar el uso a quienes la visitan por primera vez.',
    },
    questions: {
      en: ['Is guest checkout available?', 'Does autofill work on address and payment fields?', 'Does search tolerate typos and synonyms?'],
      pt: ['Existe compra sem cadastro?', 'O preenchimento automático funciona em endereço e pagamento (inclui busca por CEP)?', 'A busca tolera erros de digitação e sinônimos?'],
      es: ['¿Se puede comprar sin crear una cuenta?', '¿Funciona el autocompletado en los campos de dirección y pago?', '¿El buscador admite errores tipográficos y sinónimos?'],
    },
  },
  {
    id: 'minimalist',
    title: { en: 'Aesthetic and minimalist design', pt: 'Design estético e minimalista', es: 'Diseño estético y minimalista' },
    summary: {
      en: 'Every extra element competes with the ones that matter. Keep what supports the goal.',
      pt: 'Cada elemento extra compete com o que importa. Mantenha só o que apoia o objetivo.',
      es: 'Cada elemento adicional compite con lo que realmente importa. Conserva solo lo que contribuya al objetivo.',
    },
    questions: {
      en: ['Is there one clear primary call to action per page?', 'Is the value proposition visible without scrolling?', 'Are banners and pop-ups competing for attention?'],
      pt: ['Há uma chamada para ação principal clara por página?', 'A proposta de valor aparece sem rolar a página?', 'Banners e pop-ups estão disputando atenção?'],
      es: ['¿Hay una llamada a la acción principal y clara en cada página?', '¿Se ve la propuesta de valor sin tener que desplazarse por la página?', '¿Los banners y las ventanas emergentes compiten por atención?'],
    },
  },
  {
    id: 'errors',
    title: { en: 'Help users recognise, diagnose and recover from errors', pt: 'Ajudar a reconhecer, diagnosticar e se recuperar de erros', es: 'Ayuda para reconocer, diagnosticar y corregir errores' },
    summary: {
      en: 'Error messages in plain language that say what went wrong and how to fix it.',
      pt: 'Mensagens de erro em linguagem simples, dizendo o que deu errado e como resolver.',
      es: 'Los mensajes de error deben explicar con claridad qué ha fallado y cómo solucionarlo.',
    },
    questions: {
      en: ['Do error messages appear next to the field that caused them?', 'Is the typed data kept after an error?', 'Does the 404 page help people find what they wanted?'],
      pt: ['As mensagens de erro aparecem ao lado do campo com problema?', 'Os dados digitados são mantidos após um erro?', 'A página 404 ajuda a pessoa a encontrar o que procurava?'],
      es: ['¿Aparecen los mensajes de error junto al campo que los ha provocado?', '¿Se conservan los datos introducidos después de un error?', '¿La página 404 ayuda al usuario a encontrar lo que buscaba?'],
    },
  },
  {
    id: 'help',
    title: { en: 'Help and documentation', pt: 'Ajuda e documentação', es: 'Ayuda y documentación' },
    summary: {
      en: 'Help is easy to find, focused on the task and in context.',
      pt: 'A ajuda é fácil de encontrar, focada na tarefa e no contexto certo.',
      es: 'La ayuda es fácil de encontrar, centrada en la tarea y en el contexto adecuado.',
    },
    questions: {
      en: ['Are shipping costs and return policy easy to find before checkout?', 'Is there an FAQ or contact option in the footer?', 'Are there size guides or tooltips where people hesitate?'],
      pt: ['Frete e política de troca são fáceis de achar antes do checkout?', 'Há FAQ ou contato (WhatsApp, e-mail) no rodapé?', 'Há guia de tamanhos ou dicas onde as pessoas hesitam?'],
      es: ['¿Es fácil consultar los gastos de envío y la política de devoluciones antes de comprar?', '¿Hay FAQ o datos de contacto en el pie de página?', '¿Hay guías de tallas o consejos donde el usuario puede tener dudas?'],
    },
  },
];

export const SEVERITIES = [
  { value: 0, en: '0 · Not a problem', pt: '0 · Não é problema', es: '0 · No es un problema' },
  { value: 1, en: '1 · Cosmetic', pt: '1 · Cosmético', es: '1 · Cosmético' },
  { value: 2, en: '2 · Minor', pt: '2 · Pequeno', es: '2 · Leve' },
  { value: 3, en: '3 · Major', pt: '3 · Grave', es: '3 · Grave' },
  { value: 4, en: '4 · Catastrophe', pt: '4 · Catastrófico', es: '4 · Catástrofe' },
];

/** 100 = no problems found, 0 = every evaluated heuristic is a catastrophe. */
export function healthScore(ratings) {
  const values = Object.values(ratings).filter((v) => Number.isInteger(v));
  if (!values.length) return null;
  const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
  return Math.round(100 - avg * 25);
}

export function toMarkdown({ site, ratings, notes }, lang = 'en') {
  const t = (obj) => obj[lang] ?? obj.en;
  const isPt = lang === 'pt';
  const isEs = lang === 'es';

  const label = (v) =>
    Number.isInteger(v)
      ? t(SEVERITIES[v])
      : isPt
        ? 'Não avaliado'
        : isEs
          ? 'Sin evaluar'
          : 'Not evaluated';

  const score = healthScore(ratings);
  const lines = [
    `# ${isPt ? 'Avaliação heurística' : isEs ? 'Evaluación heurística' : 'Heuristic evaluation'}${site ? ` — ${site}` : ''}`,
    '',
    `${isPt ? 'Pontuação' : isEs ? 'Puntuación' : 'Score'}: ${score === null ? '—' : `${score}/100`}`,
    '',
    `| # | ${isPt ? 'Heurística' : isEs ? 'Heurística' : 'Heuristic'} | ${isPt ? 'Severidade' : isEs ? 'Gravedad' : 'Severity'} | ${isPt ? 'Notas' : isEs ? 'Notas' : 'Notes'} |`,
    '| --- | --- | --- | --- |',
  ];

  HEURISTICS.forEach((h, i) => {
    const note = (notes[h.id] || '').replace(/\|/g, '\\|').replace(/\n+/g, ' ');
    lines.push(`| ${i + 1} | ${t(h.title)} | ${label(ratings[h.id])} | ${note} |`);
  });

  return lines.join('\n') + '\n';
}
