# ux-heuristics-checklist

[![CI](https://github.com/lari-pellini/ux-heuristics-checklist/actions/workflows/ci.yml/badge.svg)](https://github.com/lari-pellini/ux-heuristics-checklist/actions/workflows/ci.yml)
![HTML](https://img.shields.io/badge/HTML%2FCSS%2FJS-no%20build-e34f26)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

Checklist interativo para fazer uma **avaliação heurística** (as 10 heurísticas de usabilidade de Jakob Nielsen) em landing pages e lojas virtuais — com perguntas práticas, escala de severidade de 0 a 4, notas e exportação em Markdown. Bilíngue: **português e inglês**.

🔗 **Use online:** https://lari-pellini.github.io/ux-heuristics-checklist/

> 🇺🇸 [English below](#-english)

## Como usar

1. Escolha o contexto (e-commerce, SaaS, site institucional ou aplicativo) e informe a página que está sendo avaliada.
2. Para cada heurística, responda às perguntas-guia navegando pelo site.
3. Dê uma nota de severidade:
   - **0** não é problema · **1** cosmético · **2** pequeno · **3** grave · **4** catastrófico
4. Anote evidências (print, URL, passo do fluxo).
5. Clique em **Copiar Markdown** ou **Baixar .md** para colar o relatório no Notion, Jira, GitHub ou Google Docs.

A pontuação vai de 100 (nenhum problema) a 0 (tudo catastrófico). Os dados ficam **somente no seu navegador** (`localStorage`) — nada é enviado para servidor nenhum.

O contexto seleciona as perguntas-guia sem apagar notas ou avaliações. Ele fica salvo no navegador e aparece no relatório Markdown; avaliações antigas usam e-commerce como padrão.

Dica: a avaliação heurística funciona melhor com **3 a 5 avaliadores independentes**, consolidando as notas depois. Ela não substitui testes com usuários reais, mas encontra muitos problemas rápido e barato.

## Rodar localmente

Sem build. Como usa módulos ES, precisa de um servidor estático:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
npm test   # testes da lógica (Node 18+)
```

## Contribuindo

As perguntas-guia ficam em [`heuristics.js`](heuristics.js) — sugestões para melhorar os quatro contextos e traduções para outros idiomas são muito bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 🇺🇸 English

An interactive checklist to run a **heuristic evaluation** (Jakob Nielsen's 10 usability heuristics) on landing pages and online stores: practical guiding questions, a 0–4 severity scale, notes, and Markdown export. The interface is available in **Portuguese and English**, and everything is stored only in your browser.

Choose e-commerce, SaaS, institutional site or mobile app to see context-specific questions. Switching context preserves ratings and notes. The selection survives reloads and is included in Markdown exports; older saved evaluations default to e-commerce.

## License

MIT © Larissa Pellini
