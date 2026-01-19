# 🚀 Déploiement Vercel - Guide Rapide

## ✅ Code déjà poussé sur GitHub

Le code est à jour sur la branche `main`.

## 📋 Configuration Vercel (URGENT - Pour votre réunion)

### 1. Variables d'environnement à ajouter dans Vercel

Allez sur [vercel.com](https://vercel.com) → Votre projet → **Settings** → **Environment Variables**

Ajoutez ces variables (pour **Production, Preview, Development**) :

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://gdbisrabrfumiljdfzix.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkYmlzcmFicmZ1bWlsamRmeml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzU1MzMsImV4cCI6MjA4MzYxMTUzM30.-9Ic0iMZxJnCQ4ISr3pkAxWDCUTpu4UTEeMdVtBDCIk

# Supabase Service Role (ALLEZ CHERCHER DANS SUPABASE → SETTINGS → API)
SUPABASE_SERVICE_ROLE_KEY=VOTRE_CLE_SERVICE_ROLE_ICI

# Stripe (mode test - RÉCUPÉREZ VOS VRAIES CLÉS DANS .env.local)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_PUBLISHABLE
STRIPE_SECRET_KEY=sk_test_VOTRE_CLE_SECRET

# Stripe Webhook (SERA DIFFÉRENT EN PRODUCTION - voir étape 3)
STRIPE_WEBHOOK_SECRET=whsec_TEMPORAIRE

# App URL
NEXT_PUBLIC_APP_URL=https://bernycat.vercel.app
```

### 2. Récupérer la clé Service Role

1. Allez sur [supabase.com/dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet
3. **Settings** → **API**
4. Copiez la clé **service_role** (⚠️ PAS la clé anon)
5. Remplacez `VOTRE_CLE_SERVICE_ROLE_ICI` dans Vercel

### 3. Configurer le webhook Stripe (APRÈS le déploiement)

**⚠️ À faire APRÈS que Vercel ait déployé le site :**

1. Allez sur [dashboard.stripe.com](https://dashboard.stripe.com)
2. **Developers** → **Webhooks** → **Add endpoint**
3. URL : `https://bernycat.vercel.app/api/webhooks/stripe`
4. Événements : Sélectionnez `checkout.session.completed`
5. Cliquez sur **Add endpoint**
6. Copiez le **Signing secret** (commence par `whsec_...`)
7. Retournez dans Vercel → **Environment Variables**
8. Modifiez `STRIPE_WEBHOOK_SECRET` avec la vraie valeur
9. **Redéployez** (Vercel → Deployments → ... → Redeploy)

### 4. Redéployer

Une fois toutes les variables ajoutées :
- Allez dans **Deployments**
- Cliquez sur les **...** du dernier déploiement
- Cliquez sur **Redeploy**

## ✅ Checklist avant la réunion

- [ ] Variables d'environnement ajoutées dans Vercel
- [ ] Clé service_role configurée
- [ ] Site déployé et accessible
- [ ] Webhook Stripe configuré (optionnel pour démo)
- [ ] Test rapide : connexion fonctionne

## 🎯 Pour la démo

**Ce qui fonctionne :**
- ✅ Toutes les pages du site
- ✅ Authentification (login/signup)
- ✅ Espace membre avec profil
- ✅ Paiement Stripe (en mode test)

**Pour tester le paiement en démo :**
- Carte : `4242 4242 4242 4242`
- Expiration : n'importe quelle date future
- CVC : n'importe quel 3 chiffres
