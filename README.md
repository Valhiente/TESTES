[forbody_documentacao_estrategica.md](https://github.com/user-attachments/files/24240171/forbody_documentacao_estrategica.md)
# FORBODY ACADEMIA — DOCUMENTAÇÃO OFICIAL

## Visão Geral
O site da **ForBody Academia** foi estruturado para ser **escalável, performático e orientado a conversão**, seguindo boas práticas modernas de Front-end, UX e SEO.  
Este repositório serve como base institucional, comercial e futura expansão digital da marca.

---

## 📂 Estrutura do Projeto

```
/
├─ index.html                # Home (vitrine principal)
├─ pages/
│  ├─ sobre.html             # Branding e autoridade
│  ├─ plano.html             # Conversão (planos)
│  ├─ franquia.html          # Leads de investidores
│  ├─ unidades.html          # Prova física / localização
│  ├─ modalidades.html       # Serviços
│  └─ contato.html           # Relacionamento
│
├─ modules/
│  ├─ base.css               # Design system global
│  ├─ header.css             # Header e navegação
│  ├─ layout.css             # Grid e responsividade
│  ├─ components.css         # Componentes reutilizáveis
│  ├─ forms.css              # Formulários e leads
│  │
│  ├─ script.js              # Inicializador geral
│  ├─ menutoggle.js          # Menu mobile
│  ├─ headerScroll.js        # Header dinâmico
│  ├─ accordion.js           # FAQ
│  └─ formSubmission.js      # Envio de formulários
│
└─ imag/                     # Imagens e identidade visual
```

---

## 🎯 Objetivos do Site
- Fortalecer a marca ForBody
- Converter visitantes em alunos
- Captar investidores para franquias
- Facilitar expansão digital
- Permitir integração futura com IA e automações

---

## ✅ Checklist de Crescimento do Site

### Curto Prazo
- [x] Estrutura modular organizada
- [x] Navegação consistente
- [x] Formulários funcionais
- [x] Responsividade
- [ ] SEO on-page completo
- [ ] Textos estratégicos (copywriting)

### Médio Prazo
- [ ] Página individual por unidade
- [ ] Blog / Conteúdo
- [ ] FAQ estratégico
- [ ] Analytics (GA / Pixel)
- [ ] Otimização de conversão (CTA)

### Longo Prazo
- [ ] Área do aluno
- [ ] Chat inteligente (IA)
- [ ] Sistema de matrícula online
- [ ] CRM de leads
- [ ] Dashboard administrativo

---

## 🗺️ Mapa de Páginas Futuro (Roadmap)

```
Home
├─ Planos
│  ├─ Plano Red
│  ├─ Plano Black
│
├─ Unidades
│  ├─ Unidade Centro
│  ├─ Unidade Zona Sul
│
├─ Modalidades
│  ├─ Musculação
│  ├─ Funcional
│  ├─ Ritmos
│
├─ Franquia
│  ├─ Modelo de Negócio
│  ├─ ROI
│  ├─ Formulário Avançado
│
└─ Conteúdo
   ├─ Blog
   ├─ Dicas
   ├─ Transformações
```

---

## 🎨 Padronização Final — components.css

```css
/* BENEFITS LIST */
.benefits-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin: 40px 0;
}

.benefits-list li {
    background: #fff;
    padding: 20px 25px;
    border-radius: 12px;
    font-weight: 600;
    color: #333;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    position: relative;
}
```

---

## 🧾 Padronização Final — forms.css

```css
.form-default {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 50px 40px;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
}

.form-group label {
    font-weight: 600;
    margin-bottom: 8px;
}

.form-group input,
.form-group select {
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #ddd;
}
```

---

## 🚀 Visão Final
Este projeto foi desenhado para **crescer junto com a ForBody**, permitindo evolução constante sem refatorações pesadas.  
Cada arquivo possui um papel claro, facilitando manutenção, performance e expansão futura.

**ForBody não é só um site. É uma plataforma em evolução.**

