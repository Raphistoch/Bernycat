-- ============================================
-- SÉCURISER LA TABLE MEMBERSHIPS
-- Réactiver RLS avec les bonnes politiques
-- ============================================

-- Réactiver RLS
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;

-- Supprimer les anciennes politiques
DROP POLICY IF EXISTS "Users can view own memberships" ON memberships;
DROP POLICY IF EXISTS "Users can insert own memberships" ON memberships;
DROP POLICY IF EXISTS "Service role can update memberships" ON memberships;

-- POLITIQUE 1 : Les utilisateurs peuvent voir leurs propres adhésions
CREATE POLICY "Users can view own memberships"
  ON memberships FOR SELECT
  USING (auth.uid() = user_id);

-- POLITIQUE 2 : Permettre les insertions depuis n'importe quel contexte authentifié
-- (nécessaire pour l'API route qui utilise le service role)
CREATE POLICY "Allow authenticated inserts"
  ON memberships FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- POLITIQUE 3 : Permettre les mises à jour pour le webhook
-- (le webhook utilise aussi le service role)
CREATE POLICY "Allow authenticated updates"
  ON memberships FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- POLITIQUE 4 : Permettre toutes les opérations pour le service role
-- (utilisé par les API routes et webhooks)
CREATE POLICY "Service role full access"
  ON memberships
  TO service_role
  USING (true)
  WITH CHECK (true);
