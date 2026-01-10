# Site Web Berny 🚤

Application Next.js moderne pour le dériveur Berny avec authentification Supabase et design épuré en bleu marine et blanc.

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Configuration

1. Copiez le fichier `.env.local.example` en `.env.local`
2. Créez un projet sur [Supabase](https://supabase.com)
3. Ajoutez vos clés API Supabase dans `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=votre-url-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anon
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build Production

```bash
npm run build
npm start
```

## 📄 Pages

- **Accueil** (`/`) - Hero section et caractéristiques techniques
- **Communauté** (`/communaute`) - Actualités, événements et adhésion
- **Acheter** (`/acheter`) - Bateaux neufs et occasions
- **Adhésion** (`/adhesion`) - Avantages et tarif 20€
- **Documents** (`/documents`) - Documentation technique
- **Espace Membre** (`/membre`) - Login et dashboard personnel

## 🎨 Design

- **Charte graphique**: Bleu Marine (#0A2463) et Blanc
- **Framework CSS**: Tailwind CSS
- **Icônes**: Lucide React
- **Effets**: Glassmorphism, animations modernes

## 🛠️ Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase Auth
- Lucide React

## 📦 Déploiement sur Vercel

1. Connectez votre repository GitHub à Vercel
2. Ajoutez les variables d'environnement dans les paramètres Vercel
3. Déployez !

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Configuration Supabase

Pour activer l'authentification:

1. Créez un projet Supabase
2. Activez l'authentification par email
3. Configurez les URLs de redirection dans les paramètres Supabase
4. Ajoutez vos clés API dans `.env.local`

## 🤝 Contribution

Ce projet est maintenu par l'Association des Propriétaires de Berny.

## 📧 Contact

- Email: contact@berny.fr
- Site: [berny.fr](https://berny.fr)