# Dra. Eliz Leal — Cardiologia Veterinária

Site institucional (one-page) da Dra. Eliz Leal, desenvolvido em HTML, CSS e JavaScript puros — sem build, sem dependências.

## Como visualizar

Basta abrir o arquivo `index.html` no navegador (duplo clique).

## Estrutura

```
index.html            todas as seções do site
css/styles.css        design system e estilos
js/config.js          dados de contato (edite aqui)
js/main.js            menu mobile, animações e links
assets/favicon.svg    ícone do site
assets/img/           fotos do site
```

## 1. Atualizar os contatos

Abra `js/config.js` e altere:

```js
window.SITE_CONFIG = {
  whatsapp: "5511987654321",   // só números, com DDI + DDD
  whatsappMensagem: "Olá, Dra. Eliz! ...",
  telefone: "(11) 98765-4321",
  telefoneLink: "+5511987654321",
  email: "contato@vetcardio.com.br",
};
```

Pronto: todos os botões e textos de contato do site são atualizados automaticamente.

## 2. Colocar as fotos reais

Salve as fotos na pasta `assets/img/` com estes nomes exatos:

| Arquivo     | Onde aparece                | Sugestão                                     |
| ----------- | --------------------------- | -------------------------------------------- |
| `hero.jpg`  | Topo do site (Hero)         | Exame de ecocardiograma em cão/gato          |
| `sobre.jpg` | Seção Perfil Profissional   | Retrato profissional da Dra. Eliz            |

Enquanto os arquivos não existirem, aparecem placeholders elegantes no lugar — assim que forem adicionados, entram no ar sozinhos.

## 3. Publicar (opcional)

O site é estático e pode ser hospedado gratuitamente:

- **Netlify**: acesse app.netlify.com/drop e arraste a pasta do projeto.
- **Vercel**: `vercel` na pasta do projeto (ou importe pelo site).
- **GitHub Pages**: suba a pasta em um repositório e ative o Pages.

## Personalizações futuras já preparadas

- **Endereço/clínica**: adicionar um novo item na lista `contact-list` em `index.html` (seção Contato) e no rodapé.
- **Instagram**: adicionar link no rodapé e/ou na seção Contato.
- **Cores**: todas centralizadas em variáveis CSS no topo de `css/styles.css` (`:root`).
