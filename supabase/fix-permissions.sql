-- Vérifier et corriger les permissions RLS pour memberships

-- Permettre aux utilisateurs d'insérer leurs propres adhésions
DROP POLICY IF EXISTS "Users can insert own memberships" ON memberships;
CREATE POLICY "Users can insert own memberships"
  ON memberships FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Permettre la mise à jour (pour le webhook)
DROP POLICY IF EXISTS "Service role can update memberships" ON memberships;
CREATE POLICY "Service role can update memberships"
  ON memberships FOR UPDATE
  USING (true);
