# 🚀 Guide Rapide : Configuration Stripe

## ✅ Ce qui est déjà fait

- ✅ Code Stripe implémenté
- ✅ Tables Supabase créées (à exécuter)
- ✅ Page membre avec accès conditionnel
- ✅ Composant statut adhésion

## 📋 Étapes à suivre

### 1. Exécuter le script SQL dans Supabase

1. Allez sur [supabase.com/dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet
3. **SQL Editor** → **New query**
4. Copiez tout le contenu de `supabase/schema.sql`
5. Collez et cliquez sur **Run**
6. Vérifiez dans **Table Editor** : vous devez voir `profiles` et `memberships`

### 2. Configurer Stripe

#### A. Récupérer les clés API

1. Allez sur [dashboard.stripe.com](https://dashboard.stripe.com)
2. Activez le **mode test** (toggle en haut à droite)
3. **Developers** → **API keys**
4. Copiez :
   - **Publishable key** : `pk_test_...`
   - **Secret key** : `sk_test_...` (cliquez sur "Reveal")

#### B. Mettre à jour `.env.local`

Remplacez les placeholders dans `.env.local` :

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_ICI
STRIPE_SECRET_KEY=sk_test_VOTRE_CLE_ICI
```

#### C. Configurer le webhook (local)

Pour tester en local, installez Stripe CLI :

```bash
brew install stripe/stripe-cli/stripe
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copiez le **webhook signing secret** (`whsec_...`) et ajoutez-le dans `.env.local` :

```bash
STRIPE_WEBHOOK_SECRET=whsec_VOTRE_SECRET_ICI
```

### 3. Ajuster le prix (optionnel)

Par défaut : **50€**

Pour changer, éditez `src/lib/stripe.ts` :

```typescript
membershipPrice: 5000, // 50.00 EUR en centimes
```

- Pour 30€ : `3000`
- Pour 75€ : `7500`

### 4. Démarrer le serveur

```bash
npm run dev
```

Dans un autre terminal :

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### 5. Tester le paiement

1. Allez sur `http://localhost:3000/membre`
2. Créez un compte ou connectez-vous
3. Cliquez sur **"Adhérer maintenant"**
4. Utilisez la carte test : `4242 4242 4242 4242`
   - Expiration : n'importe quelle date future (ex: 12/34)
   - CVC : n'importe quel 3 chiffres (ex: 123)
5. Complétez le paiement
6. Vous devriez être redirigé avec accès complet au dashboard

### 6. Vérifier dans Supabase

1. **Table Editor** → `memberships`
2. Vérifiez qu'une ligne existe avec :
   - `status` : `active`
   - `end_date` : dans 1 an

## 🎯 Déploiement Production

### Vercel

1. **Environment Variables** → Ajoutez :
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_APP_URL=https://bernycat.vercel.app`

2. **Stripe Webhook** :
   - **Developers** → **Webhooks** → **Add endpoint**
   - URL : `https://bernycat.vercel.app/api/webhooks/stripe`
   - Événements : `checkout.session.completed`
   - Copiez le signing secret et ajoutez-le dans Vercel

## ❓ Problèmes courants

**"STRIPE_SECRET_KEY is not defined"**
→ Redémarrez le serveur après avoir modifié `.env.local`

**Webhook ne fonctionne pas**
→ Vérifiez que `stripe listen` tourne en parallèle

**Paiement réussi mais pas d'accès**
→ Vérifiez les logs du webhook dans le terminal Stripe CLI

## 📊 Cartes de test Stripe

- **Succès** : `4242 4242 4242 4242`
- **Échec** : `4000 0000 0000 0002`
- **3D Secure** : `4000 0027 6000 3184`
