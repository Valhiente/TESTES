
# FORBODY ACADEMIA
Este repositório contém o site institucional da FORBODY ACADEMIA, desenvolvido com foco em performance, escalabilidade e fácil manutenção.

O projeto utiliza HTML, CSS modularizado e JavaScript ES Modules, sem frameworks(projeto em andamento), garantindo controle total do código e compatibilidade com GitHub Pages.

---

## 📂 Estrutura do Projeto

### 📁 Raiz
- `index.html`  
  Página inicial (Home). Apresenta a marca, chamadas comerciais e direcionamento para planos, unidades e franquias.

---

### 📁 pages/
Páginas internas do site:

- `sobre.html`  
  História, missão, valores e diferenciais da FORBODY.

- `plano.html`  
  Apresentação dos planos disponíveis.

- `franquia.html`  
  Landing page estratégica para captação de leads de franquia.

- `unidades.html`  
  Listagem das unidades físicas com mapa e WhatsApp por unidade.

- `contato.html`  
  Página de contato com grid de unidades e acesso direto ao WhatsApp correto.

- `modalidades.html`  
  Modalidades oferecidas pela academia.

---

### 📁 modules/
Arquivos responsáveis por estilo e comportamento.

#### 🎨 CSS

- `base.css`  
  Arquivo central. Contém:
  - Reset CSS
  - Variáveis de cores
  - Tipografia
  - Estilos globais

- `header.css`  
  Estilo do cabeçalho, navegação e comportamento ao scroll.

- `layout.css`  
  Grid, containers, seções e responsividade.

- `components.css`  
  Componentes reutilizáveis:
  - Cards
  - Botões
  - Accordion (FAQ)
  - Units Grid
  - WhatsApp flutuante

- `forms.css`  
  Estilo dos formulários (inputs, labels, botões).

---

#### ⚙️ JavaScript (ES Modules)

- `script.js`  
  Arquivo principal que inicializa todos os módulos.

- `headerScroll.js`  
  Controla a transparência do header conforme o scroll.

- `menutoggle.js`  
  Abre e fecha o menu mobile.

- `accordion.js`  
  Comportamento do FAQ.

- `formSubmission.js`  
  Validação e envio de formulários.

---

###  imag/
- Logos
- Favicon
- Imagens otimizadas do site

---

##  Padrões de Desenvolvimento

- Código sem frameworks
- CSS modularizado
- JavaScript desacoplado
- Estrutura preparada para crescimento
- Compatível com GitHub Pages
- Fácil integração com IA auxiliar
Projeto de Demonstração Next.js
Este é um projeto simples da Next.js criado para demonstrar o recurso "Fast Refresh".

Visão Geral

Primeiros Passos
Para executar este projeto localmente, siga estas etapas:

Clone o repositório:

git clone <url-do-repositorio>
Instale as dependências:

npm install
Inicie o servidor de desenvolvimento:

npm run dev
Abra http://localhost:3000 em seu navegador para ver a aplicação.

Funcionalidades
A aplicação inclui os seguintes exemplos para demonstrar o Fast Refresh:

Contador de Incremento Automático: Um contador que incrementa a cada segundo. O valor do contador não será redefinido quando você editar o código.
Componente com Estado: Um componente de botão que mantém seu próprio estado (contagem de cliques). O estado é preservado mesmo após a edição do componente.
Botão de Ação: Um botão que registra informações no console do navegador.
Tecnologias Utilizadas
Next.js
React
---
##  Evoluções Planejadas

- SEO técnico
- Microdados
- Performance Lighthouse
- Integração com CRM
- Selector inteligente de WhatsApp por unidade
- Internacionalização
- 

---

##  Observação Final

Este projeto foi arquitetado para ser simples de entender, manter e evoluir, permitindo que humanos e sistemas de IA compreendam facilmente sua estrutura e lógica.



 DIAGRAMA DA ESTRUTURA (IMAGEM)

Criei um diagrama visual da arquitetura atual do site, ideal pra consulta rápida.



Use esse arquivo como:

referência visual

base para onboarding de alguém no futuro

guia mental antes de criar qualquer coisa nova



# FORBODY ACADEMIA – Website Oficial

Site institucional da ForBody Academia, desenvolvido com foco em performance,
escalabilidade e clareza de navegação.

##  Estrutura do Projeto



index.html # Página inicial
pages/ # Páginas internas
modules/ # CSS e JavaScript modular
imag/ # Imagens e identidade visual


##  CSS
- `base.css` → arquivo principal
- `header.css` → header e navegação
- `layout.css` → grid e responsividade
- `components.css` → cards, accordion, blocos
- `forms.css` → formulários

##  JavaScript
- `script.js` → inicializador geral
- `menutoggle.js` → menu mobile
- `headerScroll.js` → header ao rolar
- `accordion.js` → FAQ
- `formSubmission.js` → formulários

##  Tecnologias
- HTML5
- CSS3 (modular)
- JavaScript ES Modules
-node.js (futuro)
- GitHub Pages

##  Padrões
- Um CSS principal (`base.css`)
- Um JS inicializador (`script.js`)
- Caminhos relativos padronizados
- Header e footer reutilizáveis

##  Status
Projeto em evolução contínua.

 CHECKLIST DE CRESCIMENTO DO SITE

Use isso como bússola de evolução.

 Base (já feita)

 Estrutura modular

 Navegação consistente

 Mobile menu

 Páginas internas

 Formulários funcionais

- Próximo nível

 Padronizar variáveis CSS

 Criar componentes reutilizáveis (cards, hero)

 SEO on-page por página

 Performance (lazy loading, imagens)

 Avançado

 Landing page franquia

 Integração WhatsApp

 Eventos Google Analytics

 Blog / Conteúdo

 Versão multi-unidade

 MAPA DE PÁGINAS FUTURO (VISÃO ESTRATÉGICA)
Home
 ├─ Sobre a ForBody
 ├─ Unidades
 │   └─ Unidade Individual
 ├─ Modalidades
 │   └─ Modalidade Individual
 ├─ Planos
 ├─ Franquia
 │   ├─ Seja um Franqueado
 │   └─ Materiais / Contato
 ├─ Blog (futuro)
 │   └─ Artigo
 └─ Contato


👉 Isso te permite crescer sem refazer nada.

🧠 VEREDITO FINAL

Você agora tem:

📐 Arquitetura clara

🧭 Direção de crescimento

📘 Documentação profissional

🗺️ Mapa de futuro

