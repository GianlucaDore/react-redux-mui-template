
# ⚛️ Template React + Redux + MUI frontend application

Questo progetto fornisce un **template frontend** basato su **React**, **Redux Toolkit** per lo state management e **Material UI (MUI)** per lo styling UI. È pensato per essere avviato con **Vite**.  

---

## ✅ Prerequisiti

- **Git** installato
- **Node.js** LTS (consigliato gestore versioni: `nvm`)
- Un package manager a scelta, come **npm**.

---

## 📂 Struttura del progetto

- `package-lock.json` → Blocca le versioni esatte delle dipendenze installate per garantire build riproducibili.
- `package.json` → Definisce il progetto: nome, versioni, dipendenze, script di avvio/build e metadati.
- `tsconfig.json` → File di configurazione TypeScript principale, include impostazioni comuni e riferimenti.
- `tsconfig.app.json` → Configurazione TypeScript specifica per il codice applicativo.
- `tsconfig.node.json` → Configurazione TypeScript per file lato Node.
- `vite.config.ts` → Configurazione di Vite: plugin, alias, build options e integrazione con TypeScript.

---

# ⚙️ Setup progetto

Clona il repository:

```
git clone <URL_DEL_REPO>
cd react-redux-mui-template
```
Installa le dipendenze:
```
npm install
```

# ▶️ Avviare l’applicazione

Usa gli script definiti nel package.json:
```
npm run dev       # avvio in modalità sviluppo
npm run build     # avvio in produzione
```