# Guide de Configuration Stripe

## Étape 1 : Créer un compte Stripe

1. Allez sur [stripe.com](https://stripe.com)
2. Cliquez sur **"Start now"** ou **"Sign in"**
3. Créez votre compte (email + mot de passe)
4. Activez le **mode test** (toggle en haut à droite)

## Étape 2 : Créer un produit

1. Dans le dashboard Stripe, allez dans **Products**
2. Cliquez sur **"Add product"**
3. Remplissez :
   - **Name** : `Adhésion Annuelle Berny Cat`
   - **Description** : `Accès complet à l'espace membre pour 1 an`
   - **Pricing** : 
     - One-time payment
     - Prix : `50.00 EUR` (ou le montant souhaité)
4. Cliquez sur **"Save product"**

## Étape 3 : Récupérer les clés API

1. Allez dans **Developers** → **API keys**
2. Vous verrez deux clés :
   - **Publishable key** (commence par `pk_test_...`)
   - **Secret key** (commence par `sk_test_...`, cliquez sur "Reveal")
3. Copiez ces deux clés

## Étape 4 : Configurer .env.local

Remplacez les placeholders dans `.env.local` :

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_ICI
STRIPE_SECRET_KEY=sk_test_VOTRE_CLE_ICI
```

## Étape 5 : Configurer le webhook (après déploiement)

### En local (pour tester)

1. Installez Stripe CLI :
   ```bash
   brew install stripe/stripe-cli/stripe
   ```

2. Connectez-vous :
   ```bash
   stripe login
   ```

3. Lancez le webhook en local :
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. Copiez le **webhook signing secret** (commence par `whsec_...`)
5. Ajoutez-le dans `.env.local` :
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_VOTRE_SECRET_ICI
   ```

### En production (Vercel)

1. Dans Stripe dashboard, allez dans **Developers** → **Webhooks**
2. Cliquez sur **"Add endpoint"**
3. URL : `https://bernycat.vercel.app/api/webhooks/stripe`
4. Sélectionnez les événements :
   - `checkout.session.completed`
   - `customer.subscription.deleted`
5. Cliquez sur **"Add endpoint"**
6. Copiez le **Signing secret**
7. Ajoutez-le dans Vercel :
   - **Settings** → **Environment Variables**
   - Nom : `STRIPE_WEBHOOK_SECRET`
   - Valeur : `whsec_...`

## Étape 6 : Tester le paiement

### Cartes de test Stripe

- **Succès** : `4242 4242 4242 4242`
- **Échec** : `4000 0000 0000 0002`
- **3D Secure** : `4000 0027 6000 3184`

Pour toutes les cartes :
- **Expiration** : n'importe quelle date future (ex: 12/34)
- **CVC** : n'importe quel 3 chiffres (ex: 123)
- **Code postal** : n'importe quel code

### Scénario de test

1. Créez un compte sur votre site
2. Allez dans l'espace membre
3. Cliquez sur **"Adhérer maintenant"**
4. Vous serez redirigé vers Stripe Checkout
5. Utilisez la carte `4242 4242 4242 4242`
6. Complétez le paiement
7. Vous serez redirigé vers votre dashboard
8. Vérifiez que vous avez maintenant accès à tout le contenu

## Étape 7 : Vérifier dans Supabase

1. Allez dans votre dashboard Supabase
2. **Table Editor** → `memberships`
3. Vérifiez qu'une nouvelle ligne a été créée avec :
   - `status` : `active`
   - `end_date` : dans 1 an
   - `helloasso_payment_id` : ID du paiement Stripe

## Ajuster le prix

Pour changer le montant de l'adhésion :

1. Ouvrez `src/lib/stripe.ts`
2. Modifiez `membershipPrice` :
   ```typescript
   membershipPrice: 5000, // 50.00 EUR en centimes
   ```
   - Pour 30€ : `3000`
   - Pour 75€ : `7500`
   - etc.

## Problèmes courants

**Erreur : "STRIPE_SECRET_KEY is not defined"**
- Vérifiez que `.env.local` contient bien la clé
- Redémarrez le serveur (`npm run dev`)

**Webhook ne fonctionne pas**
- Vérifiez que `STRIPE_WEBHOOK_SECRET` est configuré
- En local, assurez-vous que `stripe listen` tourne
- En production, vérifiez l'URL du webhook dans Stripe

**Paiement réussi mais adhésion pas activée**
- Vérifiez les logs du webhook dans Stripe dashboard
- Vérifiez que les tables Supabase sont créées
- Vérifiez les logs de votre application

## Passer en production

1. Dans Stripe, désactivez le mode test
2. Créez de nouvelles clés API (production)
3. Mettez à jour les variables d'environnement dans Vercel
4. Configurez le webhook en production
5. Testez avec une vraie carte (petit montant)
6. Annulez immédiatement pour éviter les frais
