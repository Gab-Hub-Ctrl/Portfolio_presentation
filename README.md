# Portfolio — Dossier de présentation Gabriel ROULON

*Dossier de candidature — Bachelor Intelligence Artificielle & Business, Eugenia School Paris, alternance 2026*

Ce dossier regroupe l'ensemble des pages de présentation personnelle et technique de Gabriel ROULON.
Il est conçu comme un dossier de candidature interactif, accessible via GitHub Pages.

---

## Statistiques du dépôt

- **Fichiers HTML** : 16 pages (navigation, profil, candidature, réalisations, finance)
- **Fichiers CSS/JS** : 2 fichiers partagés (`common.css`, `common.js`)
- **PDF téléchargeables** : 2 fichiers (`PEA_V2_PRO.pdf`, `Procédure_VLAN.pdf`)
- **Markdown téléchargeable** : 1 fichier (`RESUME_STANDARDS.md`)
- **Fichier exclu** : `Cv_ROULON_Gabriel.pdf` (défini dans `.gitignore`)

---

## Structure du dossier

```
Presentation/
├── .gitignore
├── README.md
├── common.css                          # Design system partagé
├── common.js                           # Scripts communs (accordéons, modals, nav)
│
├── index.html                          # Page d'accueil — navigation et filtres profil
│
├── -- Profil et candidature --
├── profil_personnel.html               # Parcours, compétences, relation à l'IA
├── cv.html                             # Curriculum Vitae (format A4)
├── lettre_motivation_ecole.html        # Lettre de motivation — Eugenia School
├── lettre_motivation_entreprise.html   # Lettre de motivation — Alternance IA
├── contact.html                        # Coordonnées
│
├── -- IT Dashboard (projet principal) --
├── presentation_synthetique.html       # Architecture, pipeline ETL, agents, métriques
├── init_sequence.html                  # Gouvernance IA — machine à états finis (7 états)
├── poc_agents.html                     # POC Agents v2.1.0 — Cerveau, Chatbot, Collecteurs
├── realisations_standards.html         # 31 standards en 8 catégories
│
├── -- Finance & Investissement --
├── realisations_doc_financiere.html    # Vue d'ensemble étude PEA v2.0
├── PEA_V2_PRO.html                     # Étude PEA complète (11 chapitres)
├── simulation_pea.html                 # Dashboard PEA interactif — projections et stress tests
├── PEA_V2_PRO.pdf                      # Étude PEA v2.0 — PDF téléchargeable
│
└── -- Informatique & Systèmes --
    ├── realisations_doc_technique.html # Procédure VLAN-DNS-DHCP (Cisco Packet Tracer)
    ├── realisations_maintenance_agent.html  # Suite modulaire Windows — PowerShell + React
    ├── mon_laboratoire.html            # Infrastructure virtuelle — Hyper-V, Proxmox, 11 labs
    ├── Procédure_VLAN.pdf              # Procédure VLAN — PDF téléchargeable
    └── RESUME_STANDARDS.md            # Résumé des 31 standards — Markdown téléchargeable
```

---

## Navigation

| Page | Description |
|---|---|
| `index.html` | Accueil — filtres RH / Jury école / Technicien |
| `profil_personnel.html` | Profil personnel et objectif de gouvernance IA |
| `cv.html` | CV Gabriel ROULON (format A4 imprimable) |
| `lettre_motivation_ecole.html` | Candidature Bachelor IA, Eugenia School |
| `lettre_motivation_entreprise.html` | Candidature alternance IA |
| `presentation_synthetique.html` | IT Dashboard — architecture et démarche |
| `init_sequence.html` | INIT_SEQUENCE — gouvernance IA formalisée |
| `poc_agents.html` | POC Agents — architecture multi-agents |
| `realisations_standards.html` | 31 standards professionnels |
| `realisations_doc_financiere.html` | Étude PEA — vue d'ensemble |
| `PEA_V2_PRO.html` | Étude PEA — document complet |
| `simulation_pea.html` | Dashboard PEA interactif |
| `realisations_doc_technique.html` | Procédure VLAN-DNS-DHCP |
| `realisations_maintenance_agent.html` | Maintenance Agent Windows |
| `mon_laboratoire.html` | Infrastructure virtuelle personnelle |
| `contact.html` | Coordonnées |

---

## Déploiement GitHub Pages

Le site est déployé via **GitHub Pages** (branche `main`, dossier racine `/`).

URL : `https://gab-hub-ctrl.github.io/Portfolio_presentation/`

---

## Guide Git rapide

```bash
# Statut
git status

# Ajouter les modifications
git add .

# Commit
git commit -m "Description des modifications"

# Pousser vers GitHub
git push origin main
```

---

*Gabriel ROULON — Candidature Bachelor Intelligence Artificielle & Business 2026*
