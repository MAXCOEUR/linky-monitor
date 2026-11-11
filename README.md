# Linky Monitor

Monorepo de Linky Monitor. L'API actuelle est un unique Cloudflare Worker TypeScript. Les autres dossiers réservent la place aux composants futurs, sans service supplémentaire pour le moment.

## Structure

```text
apps/
  api/src/index.ts       Worker HTTP actuel
  web/                   Futur frontend
firmware/esp32/          Futur firmware PlatformIO
database/migrations/     Futures migrations D1
docs/                    Documentation
```

Les fichiers npm, TypeScript et Wrangler restent à la racine. Le futur frontend pourra être servi par le même Worker que l'API.

## Prérequis

- Node.js LTS
- npm

## Installation et vérification

```sh
npm ci
npm run typecheck
npm run deploy -- --dry-run
```

## Développement local

```sh
npm run dev
```

Routes disponibles :

- `GET /` : `Linky Monitor API OK`
- `GET /health` : `{ "status": "ok" }`
- Toute autre route ou méthode : HTTP 404

## Déploiement depuis GitHub

Dans le tableau de bord Cloudflare, connecter le dépôt GitHub `MAXCOEUR/linky-monitor` à Workers Builds. Choisir `main` comme branche de production, `npm ci` comme commande d'installation et `npm run deploy` comme commande de déploiement. Aucun identifiant de compte Cloudflare n'est stocké dans le dépôt.

La configuration Cloudflare du dépôt ne contient ni identifiant de compte ni ressource D1. Le projet peut ainsi être relié plus tard à un autre compte Cloudflare.
