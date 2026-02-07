# Site Allumeurs d'Étoiles ⭐

Site web statique moderne pour l'association culturelle **Allumeurs d'Étoiles**.

## 🎯 À propos

Site vitrine professionnel présentant les spectacles musicaux et théâtraux de l'association, avec un calendrier de tournée éditable et un système de gestion de contenu simple pour les bénévoles.

**Objectif** : Remplacer le site Wix actuel pour économiser 230-470€/an tout en offrant une meilleure performance et une autonomie maximale.

## 🛠️ Stack Technique

- **Générateur** : [Astro 5.0+](https://astro.build) - Site statique ultra-rapide
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com) - CSS moderne et responsive
- **CMS** : [Sveltia CMS](https://github.com/sveltia/sveltia-cms) - Interface admin Git-based
- **Hébergement** : [Netlify](https://netlify.com) - Free tier (100 GB/mois)
- **Domaine** : allumeursdetoiles.com (Ionos)

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement local

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

L'interface admin CMS sera accessible sur `http://localhost:4321/admin/`

### Build production

```bash
npm run build
npm run preview
```

## 📁 Structure du Projet

```
site-allumeurs-astro/
├── admin/                    # Configuration Sveltia CMS
│   ├── config.yml           # Config CMS (collections éditables)
│   └── index.html           # Page d'accès admin
├── public/                   # Assets statiques
│   ├── images/              # Images (logos, favicon)
│   └── favicon.png
├── src/
│   ├── assets/              # Images optimisées Astro
│   │   ├── spectacles/
│   │   ├── galerie/
│   │   └── equipe/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/             # Contenu Markdown (éditable CMS)
│   │   ├── config.ts        # Schéma collections Astro
│   │   ├── spectacles/      # Fiches spectacles
│   │   ├── events/          # 📝 Événements tournée (ÉDITABLE CMS)
│   │   ├── news/            # 📝 Actualités homepage (ÉDITABLE CMS)
│   │   └── blog/            # Articles blog
│   ├── layouts/
│   │   └── Layout.astro     # Layout global (header/footer)
│   ├── pages/               # Pages site (routing auto)
│   │   ├── index.astro      # Homepage
│   │   ├── spectacles/      # Pages spectacles
│   │   ├── tournee.astro    # Calendrier tournée
│   │   ├── galerie.astro
│   │   ├── association.astro
│   │   ├── contact.astro
│   │   └── blog/            # Articles blog
│   └── styles/
│       └── global.css       # Styles CSS globaux
├── astro.config.mjs         # Configuration Astro
├── netlify.toml             # Configuration Netlify
├── package.json
└── README.md
```

## 📝 Gestion du Contenu (Bénévoles)

### Accès à l'interface admin

**Local** : `http://localhost:4321/admin/`
**Production** : `https://allumeursdetoiles.com/admin/`

### Zones éditables par les bénévoles

#### 1️⃣ Calendrier Tournée (Collection "Événements")

**Comment ajouter un événement :**

1. Connexion admin CMS (`/admin/`)
2. Onglet **"Événements Tournée"** → **"Créer"**
3. Remplir les champs :
   - Titre : "Vices & Versa - Lille"
   - Date : 15/03/2026
   - Heure : 20h00
   - Lieu : Théâtre Sébastopol
   - Ville : Lille
   - Spectacle : Sélectionner dans liste
   - (Optionnel) Lien billetterie
4. Clic **"Publier"**
5. Le site se met à jour automatiquement en ~30 secondes ✅

**Temps nécessaire** : ~3 minutes

#### 2️⃣ Actualités Homepage (Collection "Actualités")

**Comment modifier l'actualité homepage :**

1. Connexion admin CMS
2. Onglet **"Actualités"** → Modifier actualité existante OU créer nouvelle
3. Remplir :
   - Titre : "Meilleurs vœux 2026 !"
   - Résumé court (150 caractères max)
   - ✅ Cocher **"Afficher sur homepage"**
   - Contenu complet (Markdown avec éditeur visuel)
4. Clic **"Publier"**
5. L'actualité apparaît sur homepage immédiatement

**Temps nécessaire** : ~5 minutes

### Collections disponibles

| Collection | Éditable | Fréquence | Description |
|-----------|----------|-----------|-------------|
| **Événements Tournée** | ✅ Bénévoles | Tous les 3 mois | Dates de spectacles |
| **Actualités** | ✅ Bénévoles | Occasionnel | Pavé homepage + archives |
| **Spectacles** | ⚙️ Admin | Rare | Fiches spectacles (rarement modifié) |
| **Blog** | ✅ Bénévoles | Occasionnel | Articles actualités |

## 🎨 Identité Visuelle

### Couleurs

```css
--color-primary: #2C3E7C;   /* Bleu marine */
--color-secondary: #FF8947;  /* Orange */
--color-accent: #FFD700;     /* Jaune doré (étoiles) */
--color-text: #333333;       /* Gris foncé */
--color-background: #FFFFFF; /* Blanc */
```

### Typographies

- **Titres** : Montserrat, Poppins (Google Fonts)
- **Texte** : System fonts (performance)

### Logos disponibles

- `logo-allumeurs.png` - Logo fond blanc
- `logo-allumeurs-transparent.png` - Logo transparent
- `logo-allumeurs-bleu.png` - Logo fond bleu
- `logo-allumeurs-monochrome.png` - Logo noir & blanc

## 🌐 Déploiement

### Netlify (Production)

Le site est déployé automatiquement sur Netlify à chaque push sur `main`.

**URL production** : https://allumeursdetoiles.com

**Configuration DNS (Ionos)** :
- Nameservers Netlify configurés dans My IONOS
- Redirection `www` → `apex` automatique
- HTTPS Let's Encrypt (auto-renouvelé)

### Build & Deploy

```bash
# Build local
npm run build

# Preview build
npm run preview

# Deploy automatique via Git
git add .
git commit -m "feat: nouvelle fonctionnalité"
git push origin main
# → Netlify détecte et déploie automatiquement
```

## 📊 Performance

**Objectifs** :
- ✅ PageSpeed > 90/100 (mobile & desktop)
- ✅ First Contentful Paint < 1.5s
- ✅ Temps chargement total < 2s

**Optimisations** :
- Zero JavaScript par défaut (Astro)
- Images optimisées automatiquement (`<Image>` component)
- CSS minifié et inliné
- CDN Netlify global
- Cache optimisé (1 an assets statiques)

## 💰 Coûts

| Poste | Coût annuel |
|-------|-------------|
| Domaine `allumeursdetoiles.com` (Ionos) | 10€ |
| Hébergement Netlify Free | 0€ |
| Sveltia CMS | 0€ |
| SSL/HTTPS | 0€ |
| **TOTAL** | **10€/an** |

**vs Wix actuel : 240-480€/an**

**💸 Économie : 230-470€/an** 🎉

## 📚 Documentation Technique

### Commandes utiles

```bash
# Développement
npm run dev              # Serveur local + hot reload

# Build
npm run build            # Build production
npm run preview          # Preview build local

# Astro CLI
npm run astro add        # Ajouter intégrations
npm run astro check      # Vérifier TypeScript
```

### Configuration Astro

Voir `astro.config.mjs` pour :
- Intégrations (MDX, Sitemap, Tailwind)
- Site URL production
- Build options

### Configuration CMS

Voir `admin/config.yml` pour :
- Collections de contenu
- Champs personnalisés
- Workflow éditorial

## 🔒 Sécurité

- **HTTPS forcé** : Let's Encrypt (Netlify)
- **Headers sécurité** : X-Frame-Options, CSP (netlify.toml)
- **Git-based CMS** : Authentification Netlify Identity
- **Pas de backend** : Site statique = surface d'attaque minimale

## 🆘 Support

### Problèmes courants

**Le site ne se met pas à jour après modification CMS :**
- Attendre 1-2 minutes (délai build Netlify)
- Vérifier statut build sur Netlify dashboard
- Vider cache navigateur (Ctrl+Shift+Suppr)

**Erreur build Netlify :**
- Vérifier logs dans Netlify dashboard
- Tester build en local : `npm run build`
- Vérifier syntaxe Markdown fichiers `.md`

**Interface CMS ne charge pas :**
- Vérifier que `/admin/` est bien accessible
- Vérifier configuration `admin/config.yml`
- Tester en local : `npm run dev` puis `localhost:4321/admin/`

### Contact technique

Pour toute question technique, contacter le développeur ou consulter :
- Documentation Astro : https://docs.astro.build
- Documentation Sveltia CMS : https://github.com/sveltia/sveltia-cms
- Documentation Netlify : https://docs.netlify.com

## 📄 Licence

© 2026 Allumeurs d'Étoiles - Tous droits réservés

---

**Développé avec ❤️ et Astro pour les Allumeurs d'Étoiles** ⭐
