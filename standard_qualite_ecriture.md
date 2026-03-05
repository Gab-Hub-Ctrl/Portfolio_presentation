# STANDARD DE QUALITÉ D'ÉCRITURE - IT Dashboard A+

**Référence** : STD-QE-001  
**Version** : 2.0.0  
**Date d'entrée en vigueur** : 2025-12-24  
**Statut** : OBLIGATOIRE  
**Classification** : Interne  
**Projet** : Dashboard_IT  
**Responsable** : Responsable Documentation Dashboard_IT

---

## TABLE DES MATIÈRES

1. [Portée et objectifs](#1-portée-et-objectifs)
2. [Guide pour agent IA](#2-guide-pour-agent-ia)
3. [Prompt type pour agent IA](#3-prompt-type-pour-agent-ia)
4. [Références normatives](#4-références-normatives)
5. [Règles orthographiques](#5-règles-orthographiques)
6. [Règles de ponctuation](#6-règles-de-ponctuation)
7. [Règles typographiques](#7-règles-typographiques)
8. [Règles de structure](#8-règles-de-structure)
9. [Règles de formatage](#9-règles-de-formatage)
10. [Patterns de détection automatisée](#10-patterns-de-détection-automatisée)
11. [Glossaire terminologique](#11-glossaire-terminologique)
12. [Adaptation au public cible](#12-adaptation-au-public-cible)
13. [Métriques et indicateurs](#13-métriques-et-indicateurs)
14. [Algorithmes de calcul](#14-algorithmes-de-calcul)
15. [Processus de validation](#15-processus-de-validation)
16. [Outils automatisés](#16-outils-automatisés)
17. [Templates et modèles](#17-templates-et-modèles)
18. [Règles conditionnelles](#18-règles-conditionnelles)
19. [Exemples de cas complexes](#19-exemples-de-cas-complexes)
20. [Checklist de validation](#20-checklist-de-validation)
21. [Gestion des exceptions](#21-gestion-des-exceptions)
22. [Maintenance et évolution](#22-maintenance-et-évolution)
23. [Sécurité de l'information](#23-sécurité-de-linformation)
24. [Intégration avec les autres standards](#24-intégration-avec-les-autres-standards)
25. [Annexes](#25-annexes)

---

## 1. PORTÉE ET OBJECTIFS

### 1.1 Portée

Le présent standard s'applique à l'ensemble des documents produits dans le cadre de Dashboard_IT. Les documents concernés incluent sans limitation :

- Documentation technique (README, guides, manuels)
- Documentation de code (commentaires, docstrings)
- Rapports d'audit et d'analyse
- Standards et procédures
- Changelog et notes de version
- Documentation de présentation
- Toute forme de documentation écrite

### 1.2 Objectifs

Le présent standard a pour objectifs de garantir une qualité d'écriture professionnelle uniforme. Les objectifs détaillés sont les suivants :

- Garantir une qualité d'écriture professionnelle uniforme sur l'ensemble de Dashboard_IT
- Assurer la lisibilité et la compréhension de tous les documents
- Maintenir la cohérence terminologique et stylistique
- Faciliter la maintenance et l'évolution de la documentation
- Respecter les normes professionnelles de documentation technique
- **Permettre à un agent IA de rédiger des documents conformes de manière automatisée**

### 1.3 Conformité

La conformité au présent standard est obligatoire pour tous les documents de Dashboard_IT. Aucune exception n'est autorisée sans approbation formelle du responsable documentation.

---

Après avoir défini la portée et les objectifs du standard, nous allons maintenant fournir un guide complet pour les agents IA. Ce guide permet d'automatiser la rédaction de documents conformes au standard.

## 2. GUIDE POUR AGENT IA

Cette section fournit un guide complet pour les agents IA chargés de rédiger des documents conformes au standard. Le guide définit un workflow automatisable étape par étape, permettant à un agent IA de produire des documents de qualité professionnelle sans intervention humaine. Nous allons détailler les instructions de base, le workflow complet, et les règles de priorité.

### 2.1 Instructions de base pour agent IA

**En tant qu'agent IA, lors de la rédaction d'un document pour Dashboard_IT, vous devez :**

1. **Charger le standard** : Lire intégralement le présent standard avant toute rédaction
2. **Identifier le contexte** : Déterminer le type de document et le public cible
3. **Utiliser le template** : Charger le template approprié (section 17)
4. **Appliquer les règles** : Respecter toutes les règles dans l'ordre défini
5. **Détecter les erreurs** : Utiliser les patterns de détection (section 10)
6. **Appliquer les transformations** : Utiliser les exemples AVANT/APRÈS comme référence
7. **Calculer le score** : Utiliser les algorithmes de calcul (section 14)
8. **Valider** : Suivre le workflow de validation (section 2.2)

### 2.2 Workflow de rédaction pour agent IA

**ÉTAPE 1 : Préparation**

```
SI nouveau document ALORS :
  1. Identifier le type de document (README/GUIDE/RAPPORT/CHANGELOG)
  2. Identifier le public cible (Développeurs/Administrateurs/Managers/Utilisateurs)
  3. Charger le template approprié depuis la section 17
  4. Initialiser le score de qualité à 0
  5. Initialiser la liste des erreurs détectées à vide
FIN SI
```

**ÉTAPE 2 : Rédaction initiale**

```
1. Rédiger selon le template chargé
2. Appliquer les règles de structure (section 8)
   - Toutes les phrases doivent être complètes
   - Inclure le contexte explicatif (le "pourquoi")
   - Ajouter des transitions entre sections
   - Inclure des introductions contextuelles
3. Adapter au public cible (section 12)
   - Choisir le niveau de détail approprié
   - Adapter le ton
   - Structurer selon le public
```

**ÉTAPE 3 : Vérification orthographique**

```
POUR CHAQUE ligne du document :
  1. Rechercher les patterns d'apostrophes manquantes (section 10.1)
     SI pattern détecté ALORS :
       - Appliquer la transformation AVANT → APRÈS (section 5.1)
       - Incrémenter le compteur d'erreurs orthographiques
     FIN SI
  
  2. Rechercher les abréviations non autorisées (section 10.2)
     SI abréviation non autorisée détectée ALORS :
       - Remplacer par le terme complet (section 5.3)
       - Incrémenter le compteur d'erreurs orthographiques
     FIN SI
  
  3. Vérifier le vocabulaire standardisé
     SI terme technique détecté ALORS :
       - Consulter le glossaire (section 11)
       - Utiliser le terme standardisé
     FIN SI
FIN POUR
```

**ÉTAPE 4 : Vérification ponctuation**

```
POUR CHAQUE phrase du document :
  1. Vérifier la présence du point final
     SI phrase complète SANS point final ALORS :
       - Appliquer la règle conditionnelle 18.2
       - Ajouter le point final si nécessaire
       - Incrémenter le compteur d'erreurs ponctuation
     FIN SI
  
  2. Rechercher les deux-points sans espace avant (section 10.3)
     SI pattern détecté ALORS :
       - Appliquer la règle conditionnelle 18.3
       - Ajouter l'espace avant les deux-points
       - Incrémenter le compteur d'erreurs ponctuation
     FIN SI
  
  3. Vérifier la cohérence dans les listes
     SI liste détectée ALORS :
       - Vérifier que tous les éléments ont des points OU aucun n'en a
       - SI incohérence détectée ALORS :
           - Choisir un format (recommandé : avec points)
           - Appliquer uniformément
           - Incrémenter le compteur d'erreurs ponctuation
       FIN SI
     FIN SI
FIN POUR
```

**ÉTAPE 5 : Vérification typographique**

```
POUR CHAQUE ligne du document :
  1. Rechercher les astérisques Markdown avec espaces (section 10.4)
     SI pattern détecté ALORS :
       - Appliquer la règle conditionnelle 18.4
       - Supprimer les espaces autour du texte
       - Transformer "** Texte **" en "**Texte**"
       - Incrémenter le compteur d'erreurs typographie
     FIN SI
  
  2. Vérifier la cohérence des guillemets
     SI guillemets détectés ALORS :
       - Vérifier l'utilisation selon les conventions (section 7.2)
       - Corriger si nécessaire
     FIN SI
  
  3. Vérifier les caractères ASCII
     SI caractère non ASCII détecté (sauf accents français) ALORS :
       - Remplacer par équivalent ASCII
       - Incrémenter le compteur d'erreurs typographie
     FIN SI
FIN POUR
```

**ÉTAPE 6 : Vérification formatage (PRIORITAIRE)**

```
1. Rechercher les tableaux Markdown (section 10.5)
   SI tableau Markdown détecté ALORS :
     - Appliquer la règle conditionnelle 18.1
     - Identifier le type de tableau (correspondance/statistiques/séquence)
     - Convertir en texte ou liste
     - Vérifier la conservation des informations
     - Valider la lisibilité
     - Incrémenter le compteur d'erreurs formatage
   FIN SI

2. Vérifier le texte pur ASCII
   SI caractère non ASCII détecté (sauf accents français) ALORS :
     - Remplacer par équivalent ASCII
     - Incrémenter le compteur d'erreurs formatage
   FIN SI
```

**ÉTAPE 7 : Vérification structure**

```
POUR CHAQUE section du document :
  1. Vérifier la présence d'une introduction contextuelle
     SI introduction manquante ALORS :
       - Appliquer la règle conditionnelle 18.5
       - Ajouter une introduction expliquant le contexte et l'objectif
       - Incrémenter le compteur d'erreurs structure
     FIN SI
  
  2. Vérifier la présence de transitions
     SI transition manquante entre sections ALORS :
       - Appliquer la règle conditionnelle 18.6
       - Ajouter une transition logique
       - Incrémenter le compteur d'erreurs structure
     FIN SI
  
  3. Vérifier le contexte explicatif
     POUR CHAQUE instruction :
       SI instruction SANS contexte ALORS :
         - Ajouter le "pourquoi" en plus du "comment"
         - Incrémenter le compteur d'erreurs structure
       FIN SI
     FIN POUR
FIN POUR
```

**ÉTAPE 8 : Calcul du score de qualité**

```
1. Calculer les scores par catégorie (section 14)
   - Score orthographie = CalculerScoreOrthographie()
   - Score ponctuation = CalculerScorePonctuation()
   - Score typographie = CalculerScoreTypographie()
   - Score structure = CalculerScoreStructure()
   - Score lisibilite = CalculerScoreLisibilite()

2. Calculer le score global (section 14.6)
   ScoreGlobal = (ScoreOrthographie × 0.25) + 
                 (ScorePonctuation × 0.20) + 
                 (ScoreTypographie × 0.15) + 
                 (ScoreStructure × 0.20) + 
                 (ScoreLisibilite × 0.20)

3. Vérifier le seuil
   SI ScoreGlobal < 100 ALORS :
     - Retourner à l'ÉTAPE 2 (corriger les erreurs)
   SINON :
     - Passer à l'ÉTAPE 9
   FIN SI
```

**ÉTAPE 9 : Validation finale**

```
1. Exécuter la checklist complète (section 20)
2. Vérifier tous les KPIs (section 13)
3. Générer le rapport de validation
4. SI toutes les vérifications passent ALORS :
     - Document prêt pour soumission
   SINON :
     - Retourner à l'ÉTAPE 2
   FIN SI
```

### 2.3 Règles de priorité pour agent IA

**En cas de conflit entre règles, appliquer dans cet ordre :**

1. **Priorité 1** : Règles de formatage (section 9) - Conversion des tableaux
2. **Priorité 2** : Règles orthographiques (section 5) - Apostrophes, vocabulaire
3. **Priorité 3** : Règles de ponctuation (section 6) - Points finaux, espaces
4. **Priorité 4** : Règles typographiques (section 7) - Markdown, guillemets
5. **Priorité 5** : Règles de structure (section 8) - Phrases, contexte, transitions

**En cas de conflit non résolu :**
- Documenter le conflit
- Appliquer la règle de priorité la plus élevée
- Inclure une note dans le document expliquant le choix

---

Après avoir détaillé le workflow de rédaction pour agent IA, nous allons maintenant fournir des prompts types directement utilisables. Ces prompts permettent d'intégrer facilement le standard dans un système d'IA.

## 3. PROMPT TYPE POUR AGENT IA

### 3.1 Prompt système complet

```
Tu es un agent IA expert en rédaction technique pour Dashboard_IT. Tu dois rédiger des documents conformes au standard STD-QE-001 (Standard de Qualité d'Écriture - Dashboard_IT).

TON RÔLE :
- Rédiger des documents techniques de qualité professionnelle
- Respecter intégralement le standard STD-QE-001
- Appliquer toutes les règles dans l'ordre de priorité
- Garantir un score de qualité de 100/100 (score minimal requis)

CONTRAINTES ABSOLUES :
1. AUCUN tableau Markdown n'est autorisé - TOUS doivent être convertis en texte ou listes
2. 0 erreur orthographique tolérée (apostrophes, vocabulaire, termes techniques)
3. Toutes les phrases doivent être complètes avec point final
4. Texte pur ASCII uniquement (sauf accents français)
5. Score de qualité minimal : 100/100

WORKFLOW OBLIGATOIRE :
1. Identifier le type de document et le public cible
2. Charger le template approprié (section 17)
3. Rédiger selon le template
4. Appliquer les règles dans l'ordre de priorité :
   a. Formatage (conversion tableaux) - PRIORITÉ 1
   b. Orthographe (apostrophes, vocabulaire) - PRIORITÉ 2
   c. Ponctuation (points finaux, espaces) - PRIORITÉ 3
   d. Typographie (Markdown, guillemets) - PRIORITÉ 4
   e. Structure (phrases, contexte, transitions) - PRIORITÉ 5
5. Utiliser les patterns de détection (section 10) pour identifier les erreurs
6. Appliquer les transformations AVANT → APRÈS (sections 5-9)
7. Calculer le score de qualité (section 14)
8. Valider avec la checklist (section 20)

RÈGLES DE TRANSFORMATION :
- Apostrophes : "dexécution" → "d'exécution", "dunseal" → "d'unseal", "lonboarding" → "l'onboarding", "quon" → "qu'on"
- Abréviations : "MàJ" → "Mise à jour", "Doc" → "Documentation", "Config" → "Configuration"
- Espaces deux-points : "Option 1:" → "Option 1 :"
- Markdown : "** Texte **" → "**Texte**", "* Texte *" → "*Texte*"
- Tableaux : Convertir TOUS les tableaux en texte ou listes (voir section 18.1)
- Phrases : Ajouter point final si phrase complète
- Contexte : Ajouter le "pourquoi" pour chaque instruction

VALIDATION :
- Avant de soumettre, vérifier :
  ✓ Aucun tableau Markdown
  ✓ 0 erreur orthographique
  ✓ Toutes les phrases complètes
  ✓ Score = 100/100
  ✓ Checklist complète (section 20)

EN CAS DE DOUTE :
- Consulter les exemples AVANT/APRÈS (sections 5-9)
- Consulter les exemples de cas complexes (section 19)
- Appliquer la règle de priorité la plus élevée
- Documenter toute exception

COMMENCE MAINTENANT : Suis le workflow étape par étape pour chaque document à rédiger.
```

### 3.2 Prompt court (version condensée)

```
Tu es un agent IA rédigeant pour Dashboard_IT selon le standard STD-QE-001.

RÈGLES ABSOLUES :
- 0 tableau Markdown (convertir en texte/listes)
- 0 erreur orthographique
- Toutes phrases complètes avec point final
- Texte ASCII uniquement
- Score minimal : 100/100

WORKFLOW :
1. Template → 2. Rédaction → 3. Vérification orthographe → 4. Vérification ponctuation → 
5. Vérification typographie → 6. Vérification formatage (PRIORITÉ) → 7. Vérification structure → 
8. Calcul score → 9. Validation

TRANSFORMATIONS :
- "dexécution" → "d'exécution"
- "MàJ" → "Mise à jour"
- "Option 1:" → "Option 1 :"
- "** Texte **" → "**Texte**"
- Tableaux → Texte/listes

Valide avec checklist (section 20) avant soumission.
```

### 3.3 Instructions d'utilisation du prompt

**Pour utiliser ce prompt avec une IA :**

1. **Copier le prompt système complet** (section 3.1) dans le contexte système
2. **Ajouter le standard complet** en référence
3. **Donner la tâche** : "Rédige un document [TYPE] pour [PUBLIC CIBLE] sur [SUJET]"
4. **L'IA suivra automatiquement** le workflow et appliquera toutes les règles

**Exemple d'utilisation** :
```
[Prompt système section 3.1]

Tâche : Rédige un README.md pour développeurs sur le projet "Gestion des secrets Vault".

L'IA va :
1. Identifier : README.md, public développeurs
2. Charger template README.md (section 17.1)
3. Rédiger selon le template
4. Appliquer toutes les règles dans l'ordre
5. Calculer le score
6. Valider avec la checklist
7. Soumettre le document conforme
```

---

Après avoir fourni les prompts types pour agent IA, nous allons maintenant présenter les références normatives qui ont servi de base à l'élaboration du standard. Ces références permettent de comprendre les fondements théoriques et pratiques.

## 4. RÉFÉRENCES NORMATIVES

Cette section liste les références normatives utilisées pour établir le présent standard. Ces références incluent des standards internationaux, des guides de style reconnus, et les standards internes de Dashboard_IT. La consultation de ces références permet de comprendre les fondements théoriques et pratiques du standard.

### 4.1 Standards internationaux

- ISO/IEC 26514 : Systems and software engineering — Requirements for designers and developers of user documentation
- ISO 10006 : Management de la qualité dans les projets — Lignes directrices
- IEEE 1063 : Standard for Software User Documentation

### 4.2 Guides de style

- Microsoft Style Guide (documentation technique)
- Google Technical Writing Standards
- Le Bon Usage (Grevisse) — Grammaire française
- Office québécois de la langue française — Guide du rédacteur

### 4.3 Standards Dashboard_IT

- Standard de nommage (STD-NC-001)
- Standard de structure de projet (STD-SP-001)
- Standard de documentation technique (STD-DT-001)

---

Après avoir présenté les références normatives, nous allons maintenant détailler les règles orthographiques obligatoires. Ces règles garantissent la cohérence et la qualité orthographique de tous les documents.

## 5. RÈGLES ORTHOGRAPHIQUES

Cette section définit les règles orthographiques obligatoires pour tous les documents de Dashboard_IT. Ces règles garantissent la cohérence et la qualité orthographique, en particulier pour les apostrophes, le vocabulaire standardisé, et les termes techniques. Nous allons détailler chaque règle avec des exemples concrets AVANT/APRÈS.

### 5.1 Apostrophes

**Règle STD-QE-001** : Toutes les contractions doivent utiliser l'apostrophe.

**Obligations** :
- Utiliser "d'exécution" et non "dexécution"
- Utiliser "d'unseal" et non "dunseal"
- Utiliser "l'onboarding" et non "lonboarding"
- Utiliser "qu'on" et non "quon"

**Exemple AVANT (incorrect)** :
```
Le script dexécution permet de lancer le processus dunseal.
Lonboarding des nouveaux utilisateurs nécessite quon configure les droits.
Le fichier dexport contient les données dunseal.
```

**Exemple APRÈS (correct)** :
```
Le script d'exécution permet de lancer le processus d'unseal.
L'onboarding des nouveaux utilisateurs nécessite qu'on configure les droits.
Le fichier d'export contient les données d'unseal.
```

**Transformation appliquée** :
- "dexécution" → "d'exécution" (ajout de l'apostrophe)
- "dunseal" → "d'unseal" (ajout de l'apostrophe)
- "lonboarding" → "l'onboarding" (ajout de l'apostrophe)
- "quon" → "qu'on" (ajout de l'apostrophe)
- "dexport" → "d'export" (ajout de l'apostrophe)

**Cas complexes** :
- "dexport" → "d'export" (cas avec voyelle)
- "dune" → "d'une" (si contexte approprié, sinon "dune" peut être correct)
- "del" → "de l'" (si suivi de voyelle, sinon "del" peut être correct)

**Vérification** : Recherche systématique des patterns "dexécution|dunseal|lonboarding|quon|dexport".

**Conformité** : 0 occurrence tolérée.

### 5.2 Espaces avant apostrophes

**Règle STD-QE-002** : L'apostrophe ne doit jamais être précédée d'un espace dans les contractions.

**Obligations** :
- Utiliser "d'exécution" et non "d' exécution"
- Utiliser "l'onboarding" et non "l' onboarding"

**Note importante** : Les exemples AVANT contiennent intentionnellement des erreurs pour illustrer les transformations. Ces erreurs sont corrigées dans les exemples APRÈS.

**Exemple AVANT (incorrect)** :
```
Le script d' exécution permet de lancer le processus d' unseal.
L' onboarding des nouveaux utilisateurs est nécessaire.
Qu' on configure les droits est important.
```

**Exemple APRÈS (correct)** :
```
Le script d'exécution permet de lancer le processus d'unseal.
L'onboarding des nouveaux utilisateurs est nécessaire.
Qu'on configure les droits est important.
```

**Transformation appliquée** :
- "d' exécution" → "d'exécution" (suppression de l'espace)
- "l' onboarding" → "l'onboarding" (suppression de l'espace)
- "Qu' on" → "Qu'on" (suppression de l'espace)

**Conformité** : 0 occurrence tolérée.

### 5.3 Vocabulaire

**Règle STD-QE-003** : Les abréviations non standardisées sont interdites.

**Interdictions** :
- "MàJ" → utiliser "Mise à jour"
- "Doc" → utiliser "Documentation"
- "Config" → utiliser "Configuration"
- "Rapp" → utiliser "Rapport"
- "App" → utiliser "Application" (hors contexte technique)

**Note importante** : Les exemples AVANT contiennent intentionnellement des erreurs pour illustrer les transformations. Ces erreurs sont corrigées dans les exemples APRÈS.

**Exemple AVANT (incorrect)** :
```
La MàJ de la Doc nécessite une Config appropriée.
Le rapport Doc contient la Config du système.
L'App mobile nécessite une Config spécifique.
```

**Exemple APRÈS (correct)** :
```
La Mise à jour de la Documentation nécessite une Configuration appropriée.
Le rapport Documentation contient la Configuration du système.
L'Application mobile nécessite une Configuration spécifique.
```

**Transformation appliquée** :
- "MàJ" → "Mise à jour" (remplacement par terme complet)
- "Doc" → "Documentation" (remplacement par terme complet)
- "Config" → "Configuration" (remplacement par terme complet)
- "App" → "Application" (remplacement par terme complet)

**Exceptions autorisées** :
- Acronymes techniques standardisés (API, CLI, JSON, XML, HTTP, HTTPS, REST, SOAP)
- Acronymes métier reconnus (IT, IA, ETL, POC, CI/CD, QA)
- Unités de mesure (GB, MB, ms, s, Hz)
- Noms de fichiers et chemins dans le code

**Cas complexes** :
- "App" dans contexte technique (ex: "AppRole") → conserver "App"
- "Doc" dans nom de fichier (ex: "Doc.md") → conserver "Doc"
- "Config" dans variable (ex: "$Config") → conserver "Config"

**Conformité** : 0 abréviation non autorisée tolérée.

### 5.4 Termes techniques

**Règle STD-QE-004** : Les termes techniques doivent être utilisés de manière cohérente dans tout Dashboard_IT.

**Obligations** :
- Consulter le glossaire terminologique avant utilisation
- Maintenir la cohérence dans l'utilisation des termes
- Documenter toute nouvelle exception

**Note importante** : Les exemples AVANT contiennent intentionnellement des incohérences pour illustrer les transformations. Ces incohérences sont corrigées dans les exemples APRÈS.

**Exemple AVANT (incohérent)** :
```
Le backup est nécessaire. La sauvegarde est terminée.
Le script effectue un unseal. Le déverrouillage est réussi.
L'API REST est utilisée. L'interface de programmation permet la communication.
```

**Exemple APRÈS (cohérent)** :
```
Le backup est nécessaire. Le backup est terminé.
Le script effectue un unseal. L'unseal est réussi.
L'API REST est utilisée. L'API permet la communication.
```

**Transformation appliquée** :
- Choix d'un terme (backup OU sauvegarde) et utilisation cohérente
- Choix d'un terme (unseal OU déverrouillage) et utilisation cohérente
- Choix d'un terme (API OU interface de programmation) et utilisation cohérente

**Référence** : Glossaire terminologique (section 11).

**Conformité** : Cohérence à 100%.

---

Après avoir détaillé les règles orthographiques, nous allons maintenant définir les règles de ponctuation. Ces règles complètent les règles orthographiques en garantissant la cohérence et la clarté de la ponctuation dans tous les documents.

## 6. RÈGLES DE PONCTUATION

Cette section définit les règles de ponctuation obligatoires pour tous les documents de Dashboard_IT. Ces règles garantissent la cohérence et la clarté de la ponctuation, en particulier pour les points finaux, les espaces avant deux-points, et la cohérence dans les listes. Nous allons détailler chaque règle avec des exemples concrets AVANT/APRÈS.

### 6.1 Point final

**Règle STD-QE-005** : Toutes les phrases complètes doivent se terminer par un point.

**Obligations** :
- Chaque phrase doit avoir un point final
- Les éléments de liste doivent tous avoir des points finaux OU tous ne pas en avoir (cohérence obligatoire)

**Exemple AVANT (incorrect)** :
```
Le serveur est démarré
La configuration est terminée
Les tests sont passés
```

**Exemple APRÈS (correct)** :
```
Le serveur est démarré.
La configuration est terminée.
Les tests sont passés.
```

**Transformation appliquée** :
- Ajout du point final à chaque phrase complète

**Exemple AVANT (liste incohérente)** :
```
Les fonctionnalités incluent :
- Démarrage automatique.
- Configuration manuelle
- Tests automatisés.
```

**Exemple APRÈS (liste cohérente)** :
```
Les fonctionnalités incluent :
- Démarrage automatique.
- Configuration manuelle.
- Tests automatisés.
```

**Transformation appliquée** :
- Ajout du point final à tous les éléments de la liste pour cohérence

**Cas complexes** :
- Titres de sections : point final optionnel
- Éléments de liste courts : format sans points acceptable si cohérent
- Phrases dans blocs de code : ne pas modifier

**Exceptions** :
- Titres de sections (optionnel)
- Éléments de liste courts (si format sans points choisi)

**Conformité** : 0 phrase incomplète tolérée.

### 6.2 Espaces avant deux-points

**Règle STD-QE-006** : Un espace est obligatoire avant les deux-points.

**Obligations** :
- Utiliser "Option 1 :" et non "Option 1:"
- Utiliser "Description : texte" et non "Description:texte"

**Exemple AVANT (incorrect)** :
```
Option 1: Démarrage du serveur
Description: Configuration du système
Version:1.0.0
URL:https://example.com
```

**Exemple APRÈS (correct)** :
```
Option 1 : Démarrage du serveur
Description : Configuration du système
Version : 1.0.0
URL : https://example.com
```

**Transformation appliquée** :
- Ajout de l'espace avant chaque deux-points
- "Option 1:" → "Option 1 :"
- "Description:" → "Description :"
- "Version:1.0.0" → "Version : 1.0.0"

**Cas complexes** :
- URLs (http://, https://) : ne pas modifier
- Blocs de code : ne pas modifier
- Heures (14:30) : ne pas modifier (format standard)

**Conformité** : 0 espace manquante tolérée.

### 6.3 Cohérence dans les listes

**Règle STD-QE-007** : Tous les éléments d'une liste doivent suivre le même format de ponctuation.

**Obligations** :
- Format A : Tous les éléments avec points finaux (recommandé pour phrases complètes)
- Format B : Tous les éléments sans points finaux (acceptable pour éléments courts)
- Format interdit : Mélange des deux formats

**Exemple AVANT (format A - correct)** :
```
Les étapes sont :
- Première étape de configuration.
- Deuxième étape de validation.
- Troisième étape de déploiement.
```

**Exemple AVANT (format B - correct)** :
```
Les étapes sont :
- Configuration
- Validation
- Déploiement
```

**Exemple AVANT (format incorrect - mélange)** :
```
Les étapes sont :
- Première étape de configuration.
- Validation
- Troisième étape de déploiement.
```

**Exemple APRÈS (format A - recommandé)** :
```
Les étapes sont :
- Première étape de configuration.
- Deuxième étape de validation.
- Troisième étape de déploiement.
```

**Transformation appliquée** :
- Choix du format A (avec points finaux)
- Ajout du point final à tous les éléments
- Cohérence assurée

**Règle** : Choisir un format et l'appliquer uniformément dans toute la liste.

**Conformité** : 100% de cohérence requise.

---

Après avoir défini les règles de ponctuation, nous allons maintenant détailler les règles typographiques. Ces règles complètent les règles précédentes en garantissant la cohérence et la qualité typographique de tous les documents.

## 7. RÈGLES TYPOGRAPHIQUES

Cette section définit les règles typographiques obligatoires pour tous les documents de Dashboard_IT. Ces règles garantissent la cohérence et la qualité typographique, en particulier pour les astérisques Markdown, les guillemets, et les caractères ASCII. Nous allons détailler chaque règle avec des exemples concrets AVANT/APRÈS.

### 7.1 Astérisques Markdown

**Règle STD-QE-008** : Aucun espace ne doit séparer les astérisques du texte dans la mise en forme Markdown.

**Obligations** :
- Utiliser "**IMPORTANT**" et non "** IMPORTANT**"
- Utiliser "*Italique*" et non "* Italique *"

**Note importante** : Les exemples AVANT contiennent intentionnellement des erreurs pour illustrer les transformations. Ces erreurs sont corrigées dans les exemples APRÈS.

**Exemple AVANT (incorrect)** :
```
** IMPORTANT** : Ce script nécessite des droits administrateur.
* Italique * : Texte en italique.
** Texte en gras ** : Description.
*** Texte gras et italique *** : Note importante.
```

**Exemple APRÈS (correct)** :
```
**IMPORTANT** : Ce script nécessite des droits administrateur.
*Italique* : Texte en italique.
**Texte en gras** : Description.
***Texte gras et italique*** : Note importante.
```

**Transformation appliquée** :
- "** IMPORTANT**" → "**IMPORTANT**" (suppression des espaces)
- "* Italique *" → "*Italique*" (suppression des espaces)
- "** Texte en gras **" → "**Texte en gras**" (suppression des espaces)
- "*** Texte gras et italique ***" → "***Texte gras et italique***" (suppression des espaces)

**Cas complexes** :
- Astérisques dans texte normal (ex: "5 * 3 = 15") : ne pas modifier
- Astérisques dans blocs de code : ne pas modifier

**Conformité** : 0 espace incorrecte tolérée.

### 7.2 Guillemets

**Règle STD-QE-009** : Les guillemets doivent être utilisés de manière cohérente.

**Conventions** :
- Backticks `` ` `` pour code, noms de fichiers, chemins, commandes
- Guillemets doubles `"` pour citations
- Guillemets simples `'` pour citations dans citations

**Exemple AVANT (incorrect)** :
```
Exécuter la commande "git status" pour vérifier l'état.
Le fichier 'config.json' contient la configuration.
L'utilisateur a dit : "Le serveur fonctionne 'correctement'."
La variable "API_KEY" doit être définie.
```

**Exemple APRÈS (correct)** :
```
Exécuter la commande `git status` pour vérifier l'état.
Le fichier `config.json` contient la configuration.
L'utilisateur a dit : "Le serveur fonctionne 'correctement'."
La variable `API_KEY` doit être définie.
```

**Transformation appliquée** :
- Commandes : guillemets doubles → backticks
- Noms de fichiers : guillemets simples → backticks
- Citations : conservation des guillemets doubles et simples
- Variables : guillemets doubles → backticks

**Cas complexes** :
- Citations longues : utiliser guillemets doubles
- Citations dans citations : utiliser guillemets simples
- Code inline : toujours backticks

**Règle** : Éviter les mélanges entre backticks et guillemets standards sans cohérence.

**Conformité** : Cohérence à 100%.

### 7.3 Caractères ASCII

**Règle STD-QE-010** : Seuls les caractères ASCII standards sont autorisés.

**Obligations** :
- Utiliser uniquement des caractères ASCII standards
- Interdire les emojis et symboles décoratifs
- Interdire les caractères Unicode spéciaux (sauf accents français)

**Note importante** : Les exemples AVANT contiennent intentionnellement des erreurs pour illustrer les transformations. Ces erreurs sont corrigées dans les exemples APRÈS.

**Exemple AVANT (incorrect)** :
```
Le script ✅ est prêt pour l'exécution.
Le serveur est ⚠️ en maintenance.
Le processus est 🔄 en cours.
Le statut est ✓ validé.
```

**Exemple APRÈS (correct)** :
```
Le script est prêt pour l'exécution.
Le serveur est en maintenance (avertissement).
Le processus est en cours.
Le statut est validé.
```

**Transformation appliquée** :
- Suppression des emojis
- Remplacement par texte descriptif si nécessaire

**Exceptions** :
- Caractères accentués français (é, è, ê, à, ç, ù, ô, etc.)

**Cas complexes** :
- Symboles mathématiques (ex: "≤", "≥") : remplacer par texte ("inférieur ou égal à")
- Symboles techniques (ex: "→", "←") : remplacer par texte ("vers", "depuis")

**Conformité** : 0 caractère non autorisé toléré.

---

Après avoir défini les règles typographiques, nous allons maintenant détailler les règles de structure. Ces règles garantissent la clarté et la cohérence structurelle des documents, en complément des règles orthographiques, de ponctuation et typographiques.

## 8. RÈGLES DE STRUCTURE

Cette section définit les règles de structure obligatoires pour tous les documents de Dashboard_IT. Ces règles garantissent la clarté et la cohérence structurelle, en particulier pour les phrases complètes, le contexte explicatif, les transitions entre sections, et les introductions contextuelles. Nous allons détailler chaque règle avec des exemples concrets AVANT/APRÈS.

### 8.1 Phrases complètes

**Règle STD-QE-011** : Toutes les phrases doivent être complètes avec sujet, verbe et complément.

**Obligations** :
- Chaque phrase doit avoir un sens complet
- Chaque phrase doit être compréhensible indépendamment
- Interdire les phrases tronquées

**Note importante** : Les exemples AVANT contiennent intentionnellement des erreurs pour illustrer les transformations. Ces erreurs sont corrigées dans les exemples APRÈS.

**Exemple AVANT (incorrect)** :
```
Menu `Invoke-VaultMenu.ps1` > option Cycle complet (15 étapes) :
Droits dexécution
Configuration terminée
Tests en cours
```

**Exemple APRÈS (correct)** :
```
Le menu `Invoke-VaultMenu.ps1` propose l'option 'Cycle complet' qui exécute 15 étapes.
Les droits d'exécution sont nécessaires pour lancer le script.
La configuration est terminée.
Les tests sont en cours d'exécution.
```

**Transformation appliquée** :
- Ajout du sujet "Le menu" et du verbe "propose"
- Transformation "Droits dexécution" en phrase complète avec sujet, verbe, complément
- Transformation "Configuration terminée" en phrase complète
- Transformation "Tests en cours" en phrase complète

**Cas complexes** :
- Titres de sections : peuvent être incomplets (exception)
- Légendes d'images : peuvent être incomplets (exception)
- Éléments de liste courts : peuvent être incomplets si format choisi (exception)

**Règle** : Chaque phrase doit avoir un sens complet et être compréhensible indépendamment.

**Conformité** : 0 phrase incomplète tolérée.

### 8.2 Contexte explicatif

**Règle STD-QE-012** : Le "pourquoi" doit être expliqué en plus du "comment".

**Obligations** :
- Fournir le contexte nécessaire à la compréhension
- Expliquer la justification de chaque instruction
- Ne pas supposer la connaissance du contexte par le lecteur

**Exemple AVANT (incorrect - sans contexte)** :
```
Exécuter le script.
Configurer l'environnement.
Lancer les tests.
```

**Exemple APRÈS (correct - avec contexte)** :
```
Exécuter le script `Start-VaultServer.ps1` pour démarrer le serveur Vault. Ce script est nécessaire avant toute opération sur Vault car il initialise l'environnement de travail.
Configurer l'environnement en définissant les variables d'environnement requises. Cette configuration est essentielle pour que le système fonctionne correctement.
Lancer les tests pour valider le fonctionnement du système. Les tests permettent de détecter les problèmes avant la mise en production.
```

**Transformation appliquée** :
- Ajout du contexte pour chaque instruction
- Explication du "pourquoi" en plus du "comment"
- Justification de chaque étape

**Cas complexes** :
- Instructions évidentes : contexte minimal acceptable
- Instructions répétitives : contexte peut être regroupé

**Règle** : Chaque instruction doit être accompagnée de son contexte et de sa justification.

**Conformité** : 100% des instructions doivent inclure le contexte.

### 8.3 Transitions

**Règle STD-QE-013** : Des transitions doivent être présentes entre les sections.

**Obligations** :
- Créer des liens logiques entre paragraphes
- Introduire chaque nouvelle section avec une transition
- Faciliter la lecture continue

**Exemple AVANT (incorrect - sans transition)** :
```
## Section 1 : Configuration

La configuration est importante.

## Section 2 : Déploiement

Le déploiement nécessite plusieurs étapes.
```

**Exemple APRÈS (correct - avec transition)** :
```
## Section 1 : Configuration

La configuration est importante pour garantir le bon fonctionnement du système.

## Section 2 : Déploiement

Après avoir configuré l'environnement, nous pouvons maintenant procéder au déploiement. Le déploiement nécessite plusieurs étapes que nous allons détailler dans cette section.
```

**Transformation appliquée** :
- Ajout d'une transition "Après avoir configuré l'environnement, nous pouvons maintenant procéder au déploiement"
- Lien logique entre les sections

**Cas complexes** :
- Première section : pas de transition nécessaire (pas de section précédente)
- Sections indépendantes : transition minimale acceptable

**Règle** : Chaque nouvelle section doit être introduite avec une transition depuis la section précédente.

**Conformité** : 100% des sections doivent avoir des transitions.

### 8.4 Introductions contextuelles

**Règle STD-QE-014** : Chaque section doit avoir une introduction expliquant le contexte et l'objectif.

**Obligations** :
- Introduction de section (contexte et objectif)
- Contenu détaillé
- Conclusion ou transition vers la section suivante

**Exemple AVANT (incorrect - sans introduction)** :
```
## Installation

Télécharger le fichier.
Extraire l'archive.
Exécuter le script.
```

**Exemple APRÈS (correct - avec introduction)** :
```
## Installation

Cette section décrit la procédure d'installation du système. L'installation est la première étape nécessaire pour utiliser le système et permet de configurer les paramètres de base. Nous allons détailler chaque étape de cette procédure.

Télécharger le fichier depuis le dépôt officiel.
Extraire l'archive dans le répertoire de destination.
Exécuter le script d'installation avec les droits administrateur.
```

**Transformation appliquée** :
- Ajout d'une introduction expliquant le contexte et l'objectif
- Explication de l'importance de la section
- Description de ce qui va être détaillé

**Cas complexes** :
- Sections très courtes : introduction minimale acceptable
- Sections techniques : introduction peut être plus détaillée

**Application** : Faciliter la compréhension globale du document.

**Conformité** : 100% des sections doivent avoir des introductions.

---

Après avoir défini les règles de structure, nous allons maintenant détailler les règles de formatage. Ces règles sont prioritaires et incluent notamment l'interdiction absolue des tableaux Markdown, qui doivent être convertis en texte ou listes pour garantir la lisibilité maximale.

## 9. RÈGLES DE FORMATAGE

Cette section définit les règles de formatage obligatoires pour tous les documents de Dashboard_IT. Ces règles sont prioritaires et incluent notamment l'interdiction absolue des tableaux Markdown, qui doivent être convertis en texte ou listes. Nous allons détailler les formats de conversion autorisés et les procédures de vérification.

### 9.1 Conversion des tableaux (PRIORITAIRE)

**Règle STD-QE-015** : Tous les tableaux Markdown sont interdits et doivent être convertis en texte ou listes.

**Obligations** :
- Identifier tous les tableaux Markdown (recherche de "|")
- Convertir en texte ou listes en conservant toutes les informations
- Vérifier la lisibilité après conversion
- Utiliser uniquement du texte pur ASCII

**Justification** :
- Les tableaux Markdown sont difficiles à lire
- Le texte pur ASCII améliore la lisibilité
- Compatibilité maximale avec tous les systèmes

**Note importante** : Les exemples AVANT contiennent intentionnellement des formats interdits pour illustrer les transformations. Ces formats sont corrigés dans les exemples APRÈS.

**Exemple AVANT (format interdit - tableau Markdown)** :
[Format interdit : tableau Markdown avec colonnes "Option", "Description", "Rapport". Exemple de structure : Option 1 correspond à "Démarrage" avec rapport "start.md", Option 2 correspond à "Configuration" avec rapport "config.md", Option 3 correspond à "Tests" avec rapport "tests.md".]

**Exemple APRÈS (liste à puces - correct)** :
```
- Option 1 : Démarrage du serveur
  - Description : Démarre le serveur dans une nouvelle console.
  - Rapport généré : docs/reports/server/start.md

- Option 2 : Configuration du système
  - Description : Configure les paramètres du système.
  - Rapport généré : docs/reports/server/config.md

- Option 3 : Exécution des tests
  - Description : Lance la suite de tests automatisés.
  - Rapport généré : docs/reports/server/tests.md
```

**Transformation appliquée** :
- Conversion du tableau en liste à puces
- Conservation de toutes les informations (Option, Description, Rapport)
- Amélioration de la lisibilité

**Exemple AVANT (format interdit - tableau de statistiques)** :
[Format interdit : tableau Markdown avec colonnes "Catégorie", "Tests", "Score". Exemple de données : Catégorie "Automatisables" avec 43 tests sur 43 validés (100%), Catégorie "Manuels" avec 15 tests sur 20 validés (75%).]

**Exemple APRÈS (paragraphe explicatif - correct)** :
```
Tests automatisables : 43 tests sur 43 ont été validés, ce qui représente un score de 100%. Tous les tests automatisables sont donc opérationnels et fonctionnels.

Tests manuels : 15 tests sur 20 ont été validés, ce qui représente un score de 75%. 5 tests manuels nécessitent encore une validation.
```

**Transformation appliquée** :
- Conversion du tableau en paragraphes explicatifs
- Conservation de toutes les informations (Catégorie, Tests, Score)
- Amélioration de la lisibilité avec contexte

**Exemple AVANT (format interdit - tableau de séquence)** :
[Format interdit : tableau Markdown avec colonnes "Étape", "Action", "Résultat". Exemple de séquence : Étape 1 "Initialisation" donne "Système prêt", Étape 2 "Configuration" donne "Paramètres définis", Étape 3 "Déploiement" donne "Application déployée".]

**Exemple APRÈS (liste numérotée - correct)** :
```
1. Étape 1 : Initialisation
   - Action : Initialiser le système avec les paramètres par défaut.
   - Résultat attendu : Le système est prêt pour la configuration.

2. Étape 2 : Configuration
   - Action : Définir les paramètres spécifiques au déploiement.
   - Résultat attendu : Les paramètres sont définis et validés.

3. Étape 3 : Déploiement
   - Action : Déployer l'application sur l'environnement cible.
   - Résultat attendu : L'application est déployée et opérationnelle.
```

**Transformation appliquée** :
- Conversion du tableau en liste numérotée
- Conservation de toutes les informations (Étape, Action, Résultat)
- Amélioration de la lisibilité avec descriptions détaillées

**Conformité** : 0 tableau Markdown toléré.

### 9.2 Formats de conversion

**Règle STD-QE-016** : Les tableaux doivent être convertis selon le format approprié.

**Formats autorisés** :
- Liste à puces avec descriptions (tableaux de correspondance)
- Paragraphes explicatifs (tableaux de statistiques)
- Liste numérotée (si ordre important)
- Combinaison de formats (si nécessaire)

**Obligations** :
- Conserver toutes les informations du tableau
- Améliorer la lisibilité
- Vérifier après conversion

**Conformité** : 100% des tableaux doivent être convertis.

### 9.3 Vérification après conversion

**Règle STD-QE-017** : Après chaque conversion, une vérification est obligatoire.

**Obligations** :
- Vérifier que toutes les colonnes sont représentées
- Vérifier que toutes les lignes sont représentées
- Vérifier qu'aucune information n'a été perdue
- Vérifier que le texte converti est plus lisible

**Conformité** : 100% des conversions doivent être vérifiées.

---

Après avoir défini toutes les règles de qualité d'écriture, nous allons maintenant fournir les patterns regex et les méthodes de détection automatisée. Ces patterns permettent aux agents IA et aux outils automatisés de détecter systématiquement les violations des règles définies dans les sections précédentes.

## 10. PATTERNS DE DÉTECTION AUTOMATISÉE

Cette section fournit les patterns regex et les méthodes de détection automatisée pour identifier les erreurs de qualité d'écriture. Ces patterns permettent aux agents IA et aux outils automatisés de détecter systématiquement les violations des règles définies dans les sections précédentes. Nous allons détailler les patterns pour chaque type d'erreur avec des exemples d'utilisation.

### 10.1 Patterns regex pour apostrophes manquantes

**Pattern principal** :
```regex
\b(d|D)(exécution|unseal|onboarding|autres)\b
\b(l|L)(onboarding|autres)\b
\b(qu|Qu)(on|autres)\b
```

**Patterns spécifiques** :
```regex
\bdexécution\b          # "dexécution" → "d'exécution"
\bdunseal\b              # "dunseal" → "d'unseal"
\blonboarding\b          # "lonboarding" → "l'onboarding"
\bquon\b                 # "quon" → "qu'on"
\bdexport\b              # "dexport" → "d'export"
\bdune\b                 # "dune" → "d'une" (si contexte approprié)
\bdel\b                  # Vérifier si "del" devrait être "de l'"
```

**Utilisation pour agent IA** :
```
POUR CHAQUE ligne :
  SI pattern détecté ALORS :
    - Identifier le type de contraction
    - Appliquer la transformation appropriée
    - Incrémenter le compteur d'erreurs
  FIN SI
FIN POUR
```

### 10.2 Patterns regex pour abréviations non autorisées

**Patterns à détecter** :
```regex
\bMàJ\b                  # "MàJ" → "Mise à jour"
\bDoc\b                  # "Doc" → "Documentation" (hors contexte code)
\bConfig\b               # "Config" → "Configuration" (hors contexte code)
\bRapp\b                 # "Rapp" → "Rapport"
\bApp\b                  # "App" → "Application" (hors contexte technique)
```

**Exceptions (ne pas remplacer)** :
```regex
\bAPI\b                  # Acronyme autorisé
\bCLI\b                  # Acronyme autorisé
\bJSON\b                 # Acronyme autorisé
\bXML\b                  # Acronyme autorisé
\bHTTP\b                 # Acronyme autorisé
\bHTTPS\b                # Acronyme autorisé
```

**Utilisation pour agent IA** :
```
POUR CHAQUE ligne :
  SI abréviation non autorisée détectée ALORS :
    - Vérifier si dans contexte code (exception)
    - SI non dans contexte code ALORS :
        - Remplacer par terme complet
        - Incrémenter le compteur d'erreurs
    FIN SI
  FIN SI
FIN POUR
```

### 10.3 Patterns regex pour espaces avant deux-points

**Pattern à détecter** :
```regex
[^ ]:                    # Caractère suivi de deux-points sans espace avant
```

**Patterns spécifiques** :
```regex
\w:                      # Mot suivi de deux-points sans espace
\d:                      # Chiffre suivi de deux-points sans espace
\]:                      # Crochet fermant suivi de deux-points (exception)
```

**Exceptions (ne pas modifier)** :
```regex
```.*:                    # Dans blocs de code
http://                  # URLs
https://                 # URLs
\d{1,2}:\d{2}            # Heures (14:30)
```

**Utilisation pour agent IA** :
```
POUR CHAQUE ligne :
  SI pattern détecté ET non dans bloc code ET non URL ET non heure ALORS :
    - Ajouter espace avant deux-points
    - Incrémenter le compteur d'erreurs
  FIN SI
FIN POUR
```

### 10.4 Patterns regex pour astérisques Markdown incorrects

**Patterns à détecter** :
```regex
\*\* .+ \*\*            # Espaces avant/après texte dans gras
\* .+ \*                 # Espaces avant/après texte dans italique
```

**Patterns spécifiques** :
```regex
\*\* [^*]+ \*\*         # Gras avec espaces
\* [^*]+ \*             # Italique avec espaces
\*\*\* [^*]+ \*\*\*     # Gras et italique avec espaces
```

**Exceptions (ne pas modifier)** :
```regex
\* [^*] \*              # Multiplication (5 * 3)
```

**Utilisation pour agent IA** :
```
POUR CHAQUE ligne :
  SI pattern détecté ET non multiplication ALORS :
    - Supprimer espaces autour du texte
    - Transformer en format correct
    - Incrémenter le compteur d'erreurs
  FIN SI
FIN POUR
```

### 10.5 Patterns regex pour tableaux Markdown

**Pattern principal** :
```regex
^\|.*\|$                 # Ligne commençant et finissant par |
```

**Patterns spécifiques** :
```regex
^\|.*\|.*\|             # Ligne avec au moins 2 colonnes
^\|[-: ]+\|             # Ligne de séparation de tableau
```

**Utilisation pour agent IA** :
```
POUR CHAQUE ligne :
  SI pattern tableau détecté ALORS :
    - Identifier le type de tableau
    - Extraire toutes les données
    - Convertir selon format approprié
    - Vérifier conservation des informations
    - Incrémenter le compteur d'erreurs
  FIN SI
FIN POUR
```

### 10.6 Patterns regex pour phrases incomplètes

**Patterns à détecter** :
```regex
^[^.!?]+$               # Ligne sans ponctuation finale (peut être phrase incomplète)
^[A-Z][^.!?]+$          # Phrase commençant par majuscule sans ponctuation
```

**Exceptions (ne pas modifier)** :
```regex
^#+ .+$                 # Titres Markdown
^```                    # Blocs de code
^-\s                    # Éléments de liste (selon format choisi)
^```.*```               # Code inline
```

**Utilisation pour agent IA** :
```
POUR CHAQUE ligne :
  SI pattern phrase incomplète détecté ET non exception ALORS :
    - Vérifier si phrase complète
    - SI phrase complète ALORS :
        - Ajouter point final
        - Incrémenter le compteur d'erreurs
    FIN SI
  FIN SI
FIN POUR
```

### 10.7 Patterns regex pour caractères non ASCII

**Patterns à détecter** :
```regex
[^\x00-\x7F]            # Caractères non ASCII
```

**Exceptions (ne pas modifier)** :
```regex
[éèêàçùôÉÈÊÀÇÙÔ]        # Accents français autorisés
```

**Utilisation pour agent IA** :
```
POUR CHAQUE ligne :
  SI caractère non ASCII détecté ALORS :
    - Vérifier si accent français (exception)
    - SI non accent français ALORS :
        - Remplacer par équivalent ASCII
        - Incrémenter le compteur d'erreurs
    FIN SI
  FIN SI
FIN POUR
```

---

## 11. GLOSSAIRE TERMINOLOGIQUE

### 11.1 Principes

Le glossaire terminologique définit les termes techniques standardisés utilisés dans Dashboard_IT. Toute utilisation d'un terme technique doit respecter la définition du glossaire.

### 11.2 Termes standardisés

**API (Application Programming Interface)** :
- Définition : Interface de programmation permettant la communication entre composants logiciels
- Utilisation : Accepter l'acronyme "API"
- Équivalent français : Interface de programmation d'application (peu utilisé)
- **Exemple d'utilisation** : "L'API REST permet la communication entre le frontend et le backend."

**AppRole** :
- Définition : Mécanisme d'authentification HashiCorp Vault pour authentification automatisée
- Utilisation : Utiliser "AppRole" (terme technique HashiCorp)
- Équivalent français : Rôle d'application (peu utilisé)
- **Exemple d'utilisation** : "L'AppRole permet l'authentification automatisée du script."

**Backend** :
- Définition : Partie serveur d'une application, gérant la logique métier
- Utilisation : Accepter l'anglicisme "Backend"
- Équivalent français : Serveur, partie serveur
- **Exemple d'utilisation** : "Le Backend gère la logique métier de l'application."

**Backup** :
- Définition : Copie de sauvegarde des données
- Utilisation : Utiliser "backup" ou "sauvegarde" de manière cohérente (choisir une forme)
- Équivalent français : Sauvegarde
- **Exemple d'utilisation** : "Le backup quotidien est effectué automatiquement."

**CLI (Command Line Interface)** :
- Définition : Interface en ligne de commande
- Utilisation : Accepter l'acronyme "CLI" ou utiliser "ligne de commande"
- Équivalent français : Interface en ligne de commande
- **Exemple d'utilisation** : "La CLI permet l'interaction avec le système via des commandes."

**Collecteur** :
- Définition : Script ou composant chargé de collecter des données
- Utilisation : Utiliser "collecteur" (terme français standardisé)
- Équivalent anglais : Collector
- **Exemple d'utilisation** : "Le collecteur récupère les données depuis la source externe."

**Corrélation** :
- Définition : Processus d'analyse et de mise en relation d'événements ou d'alertes
- Utilisation : Utiliser "corrélation" (terme français standardisé)
- Équivalent anglais : Correlation
- **Exemple d'utilisation** : "La corrélation permet d'identifier les patterns dans les alertes."

**Dashboard** :
- Définition : Tableau de bord permettant la visualisation d'informations
- Utilisation : Accepter l'anglicisme "dashboard"
- Équivalent français : Tableau de bord
- **Exemple d'utilisation** : "Le dashboard affiche les métriques en temps réel."

**ETL (Extract, Transform, Load)** :
- Définition : Processus d'extraction, transformation et chargement de données
- Utilisation : Accepter l'acronyme "ETL"
- Équivalent français : Extraction, transformation, chargement
- **Exemple d'utilisation** : "Le pipeline ETL transforme les données brutes en données normalisées."

**Frontend** :
- Définition : Partie client d'une application, gérant l'interface utilisateur
- Utilisation : Accepter l'anglicisme "Frontend"
- Équivalent français : Client, partie client
- **Exemple d'utilisation** : "Le Frontend affiche l'interface utilisateur dans le navigateur."

**Hardcodé** :
- Définition : Valeur ou configuration directement intégrée dans le code
- Utilisation : Utiliser "hardcodé" (terme technique standardisé)
- Équivalent anglais : Hardcoded
- **Exemple d'utilisation** : "Les valeurs hardcodées doivent être externalisées dans la configuration."

**KV v2** :
- Définition : Moteur de secrets Key-Value version 2 dans HashiCorp Vault
- Utilisation : Utiliser "KV v2" (terme technique HashiCorp)
- Équivalent français : Clé-valeur version 2
- **Exemple d'utilisation** : "Les secrets sont stockés dans le moteur KV v2."

**Onboarding** :
- Définition : Processus d'intégration et de configuration initiale
- Utilisation : Accepter l'anglicisme "onboarding"
- Équivalent français : Intégration, mise en service
- **Exemple d'utilisation** : "L'onboarding des nouveaux utilisateurs est automatisé."

**Pipeline** :
- Définition : Chaîne de traitement automatisée de données
- Utilisation : Accepter l'anglicisme "pipeline"
- Équivalent français : Chaîne de traitement
- **Exemple d'utilisation** : "Le pipeline de traitement transforme les données en temps réel."

**Pôle** :
- Définition : Domaine fonctionnel spécialisé dans Dashboard_IT
- Utilisation : Utiliser "Pôle" avec majuscule pour désigner un domaine fonctionnel
- Équivalent anglais : Pole, Domain
- **Exemple d'utilisation** : "Le Pôle 1 Technologies gère l'infrastructure."

**Script** :
- Définition : Fichier contenant une séquence d'instructions exécutables
- Utilisation : Accepter l'anglicisme "script"
- Équivalent français : Script (même terme)
- **Exemple d'utilisation** : "Le script PowerShell automatise la configuration."

**Unseal** :
- Définition : Processus de déverrouillage d'un serveur Vault
- Utilisation : Utiliser "unseal" ou "déverrouillage" de manière cohérente (choisir une forme)
- Équivalent français : Déverrouillage
- **Exemple d'utilisation** : "L'unseal du serveur Vault est nécessaire avant utilisation."

**Vault** :
- Définition : Système de gestion de secrets HashiCorp Vault
- Utilisation : Utiliser "Vault" avec majuscule pour désigner le produit HashiCorp
- Équivalent français : Coffre-fort (peu utilisé)
- **Exemple d'utilisation** : "Le serveur Vault stocke les secrets de manière sécurisée."

### 11.3 Règles d'utilisation

**Règle STD-QE-018** : Consulter le glossaire avant d'utiliser un terme technique.

**Règle STD-QE-019** : Maintenir la cohérence dans l'utilisation des termes entre tous les documents.

**Règle STD-QE-020** : Documenter toute nouvelle exception ou terme technique ajouté au glossaire.

---

## 12. ADAPTATION AU PUBLIC CIBLE

### 12.1 Identification des publics

**Règle STD-QE-021** : Chaque document doit identifier clairement son public cible dans l'introduction.

**Publics cibles** :
- Développeurs (niveau technique élevé)
- Administrateurs système (niveau technique moyen à élevé)
- Managers et décideurs (niveau technique faible à moyen)
- Utilisateurs finaux (niveau technique faible)
- Auditeurs et validateurs (niveau technique variable)

### 12.2 Adaptation du niveau de détail

**Règle STD-QE-022** : Le niveau de détail doit être adapté au public cible.

**Obligations** :
- Développeurs : Détails techniques complets, exemples de code, architecture
- Administrateurs : Procédures opérationnelles, configuration, maintenance
- Managers : Vue d'ensemble synthétique, bénéfices, métriques
- Utilisateurs finaux : Guides pas à pas, exemples visuels, langage simple

**Conformité** : 100% des documents doivent être adaptés au public cible.

### 12.3 Adaptation du ton

**Règle STD-QE-023** : Le ton doit être adapté au public cible.

**Obligations** :
- Ton technique : Vocabulaire précis, phrases directes (développeurs, administrateurs)
- Ton stratégique : Vocabulaire métier, phrases synthétiques (managers)
- Ton accessible : Vocabulaire simple, phrases courtes (utilisateurs finaux)

**Conformité** : 100% des documents doivent avoir un ton adapté.

---

## 13. MÉTRIQUES ET INDICATEURS

### 13.1 Indicateurs de qualité orthographique

**KPI-QE-001** : Taux d'erreurs orthographiques
- Objectif : 0 faute par 1000 mots
- Mesure : Outils automatisés (aspell, LanguageTool, Grammarly)
- Seuil d'alerte : > 0 faute par 1000 mots

**KPI-QE-002** : Taux d'apostrophes manquantes
- Objectif : 0%
- Mesure : Recherche par patterns
- Seuil d'alerte : > 0 occurrence

**KPI-QE-003** : Taux d'abréviations non standardisées
- Objectif : 0%
- Mesure : Recherche par patterns
- Seuil d'alerte : > 0 occurrence

### 13.2 Indicateurs de qualité de ponctuation

**KPI-QE-004** : Taux de phrases sans point final
- Objectif : 0%
- Mesure : Analyse syntaxique automatisée
- Seuil d'alerte : > 0 phrase incomplète

**KPI-QE-005** : Taux d'espaces manquantes avant deux-points
- Objectif : 0%
- Mesure : Recherche par patterns
- Seuil d'alerte : > 0 occurrence

**KPI-QE-006** : Cohérence dans les listes
- Objectif : 100%
- Mesure : Analyse des listes
- Seuil d'alerte : < 100% de cohérence

### 13.3 Indicateurs de qualité typographique

**KPI-QE-007** : Taux d'espaces incorrectes dans Markdown
- Objectif : 0%
- Mesure : Recherche par patterns
- Seuil d'alerte : > 0 occurrence

**KPI-QE-008** : Taux de tableaux Markdown
- Objectif : 0%
- Mesure : Recherche par patterns ("^|")
- Seuil d'alerte : > 0 tableau Markdown

### 13.4 Indicateurs de lisibilité

**KPI-QE-009** : Score Flesch-Kincaid
- Objectif : Score > 60 (facile à lire)
- Mesure : Outils de calcul de lisibilité
- Seuil d'alerte : Score < 60

**KPI-QE-010** : Longueur moyenne des phrases
- Objectif : 15-20 mots par phrase en moyenne
- Mesure : Analyse statistique du texte
- Seuil d'alerte : > 25 mots ou < 10 mots en moyenne

### 13.5 Indicateurs globaux

**KPI-QE-011** : Taux de conformité global
- Objectif : 100%
- Mesure : Audit automatisé complet
- Seuil d'alerte : < 100% de conformité

**KPI-QE-012** : Score de qualité global
- Objectif : Score = 100/100
- Mesure : Calcul composite de tous les indicateurs
- Seuil d'alerte : Score < 100/100

### 13.6 Calcul du score de qualité

**Formule** :
```
Score = (Orthographe × 25%) + (Ponctuation × 20%) + (Typographie × 15%) + (Structure × 20%) + (Lisibilité × 20%)

Où :
- Orthographe = (100 - (erreurs/1000 mots × 100))
- Ponctuation = (100 - (phrases sans point × 100))
- Typographie = (100 - (tableaux Markdown × 100))
- Structure = (100 - (phrases incomplètes × 100))
- Lisibilité = Score Flesch-Kincaid
```

**Seuils de qualité** :
- 100 : Excellent (conforme, score minimal requis)
- 95-99 : Bon (corrections mineures nécessaires)
- 80-94 : Acceptable (corrections nécessaires)
- < 80 : Non conforme (corrections obligatoires)

---

## 14. ALGORITHMES DE CALCUL

### 14.1 Algorithme de calcul du score orthographique

```
FONCTION CalculerScoreOrthographie(document) :
  totalMots = CompterMots(document)
  erreursOrthographe = 0
  
  // Détecter apostrophes manquantes
  erreursOrthographe += CompterPatterns(document, patternsApostrophes)
  
  // Détecter abréviations non autorisées
  erreursOrthographe += CompterPatterns(document, patternsAbreviations)
  
  // Détecter termes techniques incohérents
  erreursOrthographe += VerifierGlossaire(document)
  
  // Calculer le taux d'erreurs
  tauxErreurs = (erreursOrthographe / totalMots) * 1000
  
  // Calculer le score (0 erreur = 100 points)
  SI tauxErreurs == 0 ALORS :
    score = 100
  SINON :
    score = MAX(0, 100 - (tauxErreurs * 10))
  FIN SI
  
  RETOURNER score
FIN FONCTION
```

### 14.2 Algorithme de calcul du score ponctuation

```
FONCTION CalculerScorePonctuation(document) :
  totalPhrases = CompterPhrases(document)
  erreursPonctuation = 0
  
  // Détecter phrases sans point final
  phrasesSansPoint = CompterPhrasesSansPointFinal(document)
  erreursPonctuation += phrasesSansPoint
  
  // Détecter espaces manquantes avant deux-points
  erreursPonctuation += CompterPatterns(document, patternDeuxPoints)
  
  // Détecter incohérences dans listes
  incohérencesListes = VerifierCohérenceListes(document)
  erreursPonctuation += incohérencesListes
  
  // Calculer le score
  SI totalPhrases == 0 ALORS :
    score = 100
  SINON :
    tauxErreurs = (erreursPonctuation / totalPhrases) * 100
    score = MAX(0, 100 - tauxErreurs)
  FIN SI
  
  RETOURNER score
FIN FONCTION
```

### 14.3 Algorithme de calcul du score typographie

```
FONCTION CalculerScoreTypographie(document) :
  totalLignes = CompterLignes(document)
  erreursTypographie = 0
  
  // Détecter astérisques Markdown incorrects
  erreursTypographie += CompterPatterns(document, patternsAstérisques)
  
  // Détecter guillemets incohérents
  erreursTypographie += VerifierCohérenceGuillemets(document)
  
  // Détecter caractères non ASCII
  erreursTypographie += CompterCaractèresNonASCII(document)
  
  // Calculer le score
  SI totalLignes == 0 ALORS :
    score = 100
  SINON :
    tauxErreurs = (erreursTypographie / totalLignes) * 100
    score = MAX(0, 100 - tauxErreurs)
  FIN SI
  
  RETOURNER score
FIN FONCTION
```

### 14.4 Algorithme de calcul du score structure

```
FONCTION CalculerScoreStructure(document) :
  totalSections = CompterSections(document)
  erreursStructure = 0
  
  // Détecter sections sans introduction
  sectionsSansIntroduction = CompterSectionsSansIntroduction(document)
  erreursStructure += sectionsSansIntroduction
  
  // Détecter transitions manquantes
  transitionsManquantes = CompterTransitionsManquantes(document)
  erreursStructure += transitionsManquantes
  
  // Détecter phrases incomplètes
  phrasesIncompletes = CompterPhrasesIncompletes(document)
  erreursStructure += phrasesIncompletes
  
  // Détecter instructions sans contexte
  instructionsSansContexte = CompterInstructionsSansContexte(document)
  erreursStructure += instructionsSansContexte
  
  // Calculer le score
  SI totalSections == 0 ALORS :
    score = 100
  SINON :
    tauxErreurs = (erreursStructure / (totalSections * 4)) * 100
    score = MAX(0, 100 - tauxErreurs)
  FIN SI
  
  RETOURNER score
FIN FONCTION
```

### 14.5 Algorithme de calcul du score lisibilité

```
FONCTION CalculerScoreLisibilite(document) :
  // Calculer score Flesch-Kincaid
  scoreFlesch = CalculerFleschKincaid(document)
  
  // Calculer longueur moyenne des phrases
  longueurMoyenne = CalculerLongueurMoyennePhrases(document)
  
  // Calculer score composite
  scoreFleschNormalise = (scoreFlesch / 100) * 70  // 70% du score
  scoreLongueur = 0
  
  SI longueurMoyenne >= 15 ET longueurMoyenne <= 20 ALORS :
    scoreLongueur = 30  // 30% du score (optimal)
  SINON SI longueurMoyenne >= 10 ET longueurMoyenne <= 25 ALORS :
    scoreLongueur = 20  // Acceptable
  SINON :
    scoreLongueur = 10  // À améliorer
  FIN SI
  
  score = scoreFleschNormalise + scoreLongueur
  
  RETOURNER score
FIN FONCTION
```

### 14.6 Algorithme de calcul du score global

```
FONCTION CalculerScoreGlobal(document) :
  scoreOrthographie = CalculerScoreOrthographie(document)
  scorePonctuation = CalculerScorePonctuation(document)
  scoreTypographie = CalculerScoreTypographie(document)
  scoreStructure = CalculerScoreStructure(document)
  scoreLisibilite = CalculerScoreLisibilite(document)
  
  // Calculer score pondéré
  scoreGlobal = (scoreOrthographie * 0.25) +
                (scorePonctuation * 0.20) +
                (scoreTypographie * 0.15) +
                (scoreStructure * 0.20) +
                (scoreLisibilite * 0.20)
  
  RETOURNER scoreGlobal
FIN FONCTION
```

---

## 15. PROCESSUS DE VALIDATION

### 15.1 Workflow de validation

Le processus de validation suit un workflow structuré en quatre étapes obligatoires.

**Étape 1 : Auto-vérification par l'auteur**

**Responsable** : Auteur du document.

**Obligations** :
1. Vérifier le document selon la checklist de validation (section 20)
2. Corriger toutes les erreurs identifiées
3. Utiliser les outils automatisés de vérification (section 16)
4. Calculer le score de qualité
5. S'assurer que le score est = 100/100

**Livrable** : Document auto-vérifié avec score = 100/100.

**Critères de passage** :
- Score de qualité = 100/100
- Aucun tableau Markdown
- Aucune erreur orthographique détectée
- Checklist complétée

**Étape 2 : Review par pairs**

**Responsable** : Reviewer désigné (contributeur expérimenté).

**Obligations** :
1. Relire le document intégralement
2. Vérifier la conformité aux règles
3. Vérifier la cohérence avec les autres documents
4. Tester la lisibilité
5. Valider le score de qualité
6. Fournir des commentaires constructifs

**Livrable** : Rapport de review avec commentaires et validation.

**Critères de passage** :
- Document conforme aux règles
- Score de qualité = 100/100 validé
- Aucun commentaire bloquant
- Approbation du reviewer

**Étape 3 : Validation technique**

**Responsable** : Expert technique ou responsable documentation.

**Obligations** :
1. Vérifier la cohérence technique
2. Valider l'adéquation au public cible
3. Vérifier la complétude de l'information
4. Valider la structure et l'organisation
5. Approuver ou demander des corrections

**Livrable** : Validation technique avec approbation ou demandes de corrections.

**Critères de passage** :
- Cohérence technique validée
- Adéquation au public cible confirmée
- Complétude de l'information vérifiée
- Approbation de l'expert technique

**Étape 4 : Approbation finale**

**Responsable** : Responsable documentation ou chef de projet.

**Obligations** :
1. Valider le processus complet
2. Vérifier la traçabilité des validations
3. Approuver la publication
4. Documenter l'approbation

**Livrable** : Approbation finale documentée.

**Critères de passage** :
- Toutes les étapes précédentes validées
- Traçabilité complète
- Approbation du responsable

### 15.2 Rôles et responsabilités

**Auteur** :
- Rédiger le document selon les standards
- Effectuer l'auto-vérification
- Corriger les erreurs identifiées
- Soumettre pour review

**Reviewer** :
- Relire le document de manière critique
- Vérifier la conformité aux règles
- Fournir des commentaires constructifs
- Valider ou demander des corrections

**Expert technique** :
- Valider la cohérence technique
- Vérifier l'adéquation au public cible
- Approuver la publication technique

**Responsable documentation** :
- Superviser le processus de validation
- Valider la traçabilité
- Approuver la publication finale

### 15.3 Critères d'approbation

**Critères obligatoires** :
- Score de qualité = 100/100
- Aucun tableau Markdown
- Aucune erreur orthographique
- Toutes les règles respectées
- Validation par au moins 2 reviewers

**Critères de qualité** :
- Score de qualité = 100/100
- Lisibilité optimale (Flesch > 60)
- Structure exemplaire
- Exemples pertinents

---

## 16. OUTILS AUTOMATISÉS

### 16.1 Outils recommandés

**Vale** :
- Description : Linter de style et grammaire pour la documentation
- Usage : Vérification de style, grammaire, orthographe
- Installation : `npm install -g vale`
- Documentation : https://vale.sh/

**LanguageTool** :
- Description : Correcteur grammatical et orthographique open source
- Usage : Détection d'erreurs orthographiques et grammaticales
- Installation : Standalone ou extension navigateur
- Documentation : https://languagetool.org/

**Markdownlint** :
- Description : Linter pour fichiers Markdown
- Usage : Vérification de la syntaxe Markdown et des conventions
- Installation : `npm install -g markdownlint-cli`
- Documentation : https://github.com/DavidAnson/markdownlint

**Textlint** :
- Description : Linter de texte avec règles personnalisables
- Usage : Vérification de style, lisibilité, cohérence
- Installation : `npm install -g textlint`
- Documentation : https://textlint.github.io/

**aspell** :
- Description : Correcteur orthographique en ligne de commande
- Usage : Vérification orthographique rapide
- Installation : `apt-get install aspell-fr` (Linux) ou équivalent
- Documentation : http://aspell.net/

**readability** :
- Description : Calcul de scores de lisibilité (Flesch-Kincaid)
- Usage : Mesure de la lisibilité des documents
- Installation : `pip install textstat`
- Documentation : https://pypi.org/project/textstat/

### 16.2 Scripts d'audit automatisés

**Obligation** : Utiliser les scripts d'audit automatisés avant soumission.

**Scripts disponibles** :
- Script PowerShell d'audit complet (voir documentation technique)
- Script Python de calcul de lisibilité (voir documentation technique)

**Utilisation** : Exécuter les scripts d'audit avant chaque soumission pour validation.

### 16.3 Intégration CI/CD

**Obligation** : Intégrer les vérifications automatisées dans le pipeline CI/CD.

**Configuration** : Voir documentation technique pour configuration GitHub Actions et GitLab CI.

---

## 17. TEMPLATES ET MODÈLES

### 17.1 Template README.md

```markdown
# [NOM DU PROJET]

**Version** : X.Y.Z  
**Date** : YYYY-MM-DD  
**Projet** : Dashboard_IT  
**Objectif** : [Description claire de l'objectif du projet]

---

## TABLE DES MATIÈRES

- [Vue d'ensemble](#vue-densemble)
- [Fonctionnalités principales](#fonctionnalités-principales)
- [Prérequis](#prérequis)
- [Installation et démarrage rapide](#installation-et-démarrage-rapide)
- [Structure du projet](#structure-du-projet)
- [Documentation](#documentation)
- [Support et contribution](#support-et-contribution)

---

## Vue d'ensemble

[Introduction contextuelle expliquant le projet, son contexte et son objectif. Cette section doit fournir le "pourquoi" en plus du "comment".]

### Architecture

[Description de l'architecture si applicable.]

### Caractéristiques principales

- [Caractéristique 1 avec description]
- [Caractéristique 2 avec description]
- [Caractéristique 3 avec description]

---

## Fonctionnalités principales

### [Fonctionnalité 1]

[Description détaillée de la fonctionnalité avec contexte et justification.]

### [Fonctionnalité 2]

[Description détaillée de la fonctionnalité avec contexte et justification.]

---

## Prérequis

- [Prérequis 1 avec version si applicable]
- [Prérequis 2 avec version si applicable]
- [Prérequis 3 avec version si applicable]

---

## Installation et démarrage rapide

### Installation

[Procédure d'installation détaillée avec contexte.]

### Démarrage rapide

[Procédure de démarrage rapide avec exemples.]

---

## Structure du projet

[Description de la structure avec explication du "pourquoi".]

---

## Documentation

[Liens vers la documentation complète avec descriptions.]

---

## Support et contribution

[Instructions pour le support et la contribution avec contexte.]

---

**Dernière mise à jour** : YYYY-MM-DD HH:mm:ss
```

### 17.2 Template GUIDE_*.md

```markdown
# GUIDE [NOM DU GUIDE]

**Version** : X.Y.Z  
**Date** : YYYY-MM-DD  
**Projet** : Dashboard_IT  
**Public cible** : [Développeurs/Administrateurs/Managers/Utilisateurs finaux]  
**Objectif** : [Description claire de l'objectif du guide]

---

## TABLE DES MATIÈRES

- [Introduction](#introduction)
- [Prérequis](#prérequis)
- [Procédure](#procédure)
- [Vérifications](#vérifications)
- [Dépannage](#dépannage)
- [Ressources supplémentaires](#ressources-supplémentaires)

---

## Introduction

[Introduction contextuelle expliquant le contexte, l'objectif et le "pourquoi" de ce guide. Cette section doit fournir toutes les informations nécessaires à la compréhension.]

### Contexte

[Description du contexte dans lequel ce guide s'inscrit.]

### Objectif

[Description claire de l'objectif du guide et de ce qu'il permet d'atteindre.]

---

## Prérequis

[Liste des prérequis avec descriptions et justifications.]

- [Prérequis 1] : [Description et justification]
- [Prérequis 2] : [Description et justification]

---

## Procédure

### Étape 1 : [Nom de l'étape]

[Description détaillée de l'étape avec contexte et justification.]

**Actions à effectuer** :
1. [Action 1 avec contexte]
2. [Action 2 avec contexte]

**Résultat attendu** : [Description du résultat attendu]

### Étape 2 : [Nom de l'étape]

[Description détaillée de l'étape avec contexte et justification.]

---

## Vérifications

[Procédure de vérification avec critères de réussite.]

---

## Dépannage

### Problème 1 : [Description du problème]

**Symptômes** : [Description des symptômes]

**Cause** : [Explication de la cause]

**Solution** : [Description de la solution avec contexte]

---

## Ressources supplémentaires

[Liens vers les ressources supplémentaires avec descriptions.]

---

**Dernière mise à jour** : YYYY-MM-DD HH:mm:ss
```

### 17.3 Template RAPPORT_*.md

```markdown
# RAPPORT [NOM DU RAPPORT]

**Date** : YYYY-MM-DD HH:mm:ss  
**Projet** : Dashboard_IT  
**Type de rapport** : [Audit/Validation/Analyse/etc.]  
**Auteur** : [Nom de l'auteur]

---

## Résumé exécutif

[Synthèse du rapport avec les points clés et les conclusions principales.]

### Statistiques globales

- [Statistique 1] : [Valeur]
- [Statistique 2] : [Valeur]
- [Statistique 3] : [Valeur]

### Conclusions principales

[Conclusions principales avec contexte et justification.]

---

## Métadonnées

- **Date de génération** : YYYY-MM-DD HH:mm:ss
- **Script utilisé** : [Chemin du script]
- **Paramètres** : [Paramètres utilisés]
- **Durée d'exécution** : [Durée]

---

## Détails

[Contenu détaillé du rapport avec structure claire et transitions.]

### Section 1 : [Titre]

[Contenu avec contexte et explications.]

### Section 2 : [Titre]

[Contenu avec contexte et explications.]

---

## Recommandations

[Recommandations avec priorités et justifications.]

---

**Fin du rapport**
```

### 17.4 Template CHANGELOG.md

```markdown
# CHANGELOG

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

---

## [X.Y.Z] - YYYY-MM-DD

### Ajouté
- [Nouvelle fonctionnalité 1] : [Description avec contexte]
- [Nouvelle fonctionnalité 2] : [Description avec contexte]

### Modifié
- [Modification 1] : [Description avec contexte et justification]
- [Modification 2] : [Description avec contexte et justification]

### Corrigé
- [Correction 1] : [Description du problème et de la solution]
- [Correction 2] : [Description du problème et de la solution]

### Supprimé
- [Suppression 1] : [Description avec justification]
- [Suppression 2] : [Description avec justification]

---

## [X.Y.Z] - YYYY-MM-DD

[Format identique pour chaque version]

---

**Format des versions** : [MAJEUR.MINEUR.PATCH] selon Semantic Versioning
```

---

## 18. RÈGLES CONDITIONNELLES

### 18.1 Règle conditionnelle : Conversion de tableaux

```
SI tableau Markdown détecté ALORS :
  1. Identifier le type de tableau
     SI tableau de correspondance (Option → Description → Rapport) ALORS :
       - Convertir en liste à puces avec descriptions
       - Format : "- Option X : Description\n  - Rapport : chemin/vers/rapport.md"
     FIN SI
     
     SI tableau de statistiques (Catégorie → Valeur → Pourcentage) ALORS :
       - Convertir en paragraphes explicatifs
       - Format : "Catégorie : Valeur, ce qui représente Pourcentage. [Contexte explicatif]."
     FIN SI
     
     SI tableau de séquence (Étape → Action → Résultat) ALORS :
       - Convertir en liste numérotée
       - Format : "1. Étape X : Action\n   Résultat attendu : [Description]"
     FIN SI
  
  2. Extraire toutes les données du tableau
     - Conserver toutes les colonnes
     - Conserver toutes les lignes
     - Conserver toutes les informations
  
  3. Convertir selon le format choisi
     - Appliquer la transformation
     - Vérifier la conservation des informations
  
  4. Vérifier la lisibilité
     SI texte converti plus lisible ALORS :
       - Valider la conversion
     SINON :
       - Réessayer avec un autre format
     FIN SI
  
  5. Incrémenter le compteur d'erreurs formatage
FIN SI
```

### 18.2 Règle conditionnelle : Phrases sans point final

```
SI phrase complète détectée SANS point final ALORS :
  1. Vérifier si c'est un titre
     SI titre Markdown (commence par #) ALORS :
       - Exception : point final optionnel pour titres
       - Ne pas modifier
     FIN SI
  
  2. Vérifier si c'est un élément de liste
     SI élément de liste ALORS :
       - Vérifier la cohérence avec les autres éléments
       - SI tous les autres éléments ont des points ALORS :
           - Ajouter le point final
         SINON SI aucun autre élément n'a de point ALORS :
           - Ne pas ajouter de point (cohérence)
         SINON :
           - Choisir un format (recommandé : avec points)
           - Appliquer uniformément à tous les éléments
         FIN SI
     FIN SI
  
  3. SI phrase complète normale ALORS :
       - Ajouter le point final
       - Incrémenter le compteur d'erreurs ponctuation
     FIN SI
FIN SI
```

### 18.3 Règle conditionnelle : Espaces avant deux-points

```
SI deux-points détecté ALORS :
  1. Vérifier si dans bloc de code
     SI dans bloc de code (entre ```) ALORS :
       - Exception : ne pas modifier
     FIN SI
  
  2. Vérifier si dans URL
     SI pattern "http://" ou "https://" ALORS :
       - Exception : ne pas modifier
     FIN SI
  
  3. Vérifier si dans heure
     SI pattern "\d{1,2}:\d{2}" ALORS :
       - Exception : ne pas modifier (format standard 14:30)
     FIN SI
  
  4. Vérifier l'espace avant
     SI pas d'espace avant deux-points ALORS :
       - Ajouter l'espace
       - Incrémenter le compteur d'erreurs ponctuation
     FIN SI
FIN SI
```

### 18.4 Règle conditionnelle : Astérisques Markdown

```
SI astérisques Markdown détectés ALORS :
  1. Identifier le type
     SI gras (**texte**) ALORS :
       - Vérifier les espaces
       - SI espaces détectées ALORS :
           - Supprimer les espaces
           - Transformer "** Texte **" en "**Texte**"
           - Incrémenter le compteur d'erreurs typographie
         FIN SI
     FIN SI
     
     SI italique (*texte*) ALORS :
       - Vérifier les espaces
       - SI espaces détectées ALORS :
           - Supprimer les espaces
           - Transformer "* Texte *" en "*Texte*"
           - Incrémenter le compteur d'erreurs typographie
         FIN SI
     FIN SI
  
  2. Vérifier si multiplication
     SI pattern "* [chiffre]" ou "[chiffre] *" ALORS :
       - Exception : ne pas modifier (ex: "5 * 3 = 15")
     FIN SI
FIN SI
```

### 18.5 Règle conditionnelle : Sections sans introduction

```
SI nouvelle section détectée ALORS :
  1. Vérifier la présence d'une introduction
     SI introduction manquante ALORS :
       - Générer une introduction contextuelle
       - Format : "Cette section [verbe] [objet]. [Contexte]. [Objectif]. [Ce qui va être détaillé]."
       - Exemple : "Cette section décrit la procédure d'installation. L'installation est nécessaire pour utiliser le système. Nous allons détailler chaque étape."
       - Incrémenter le compteur d'erreurs structure
     FIN SI
  
  2. Exceptions
     SI section très courte (moins de 3 lignes) ALORS :
       - Introduction minimale acceptable
     FIN SI
FIN SI
```

### 18.6 Règle conditionnelle : Transitions manquantes

```
SI nouvelle section détectée ET section précédente existe ALORS :
  1. Vérifier la présence d'une transition
     SI transition manquante ALORS :
       - Générer une transition logique
       - Format : "[Résumé section précédente]. [Lien logique]. [Introduction section suivante]."
       - Exemple : "Après avoir configuré l'environnement, nous pouvons maintenant procéder au déploiement."
       - Incrémenter le compteur d'erreurs structure
     FIN SI
  
  2. Exceptions
     SI première section du document ALORS :
       - Pas de transition nécessaire
     FIN SI
     
     SI sections indépendantes ALORS :
       - Transition minimale acceptable
     FIN SI
FIN SI
```

---

## 19. EXEMPLES DE CAS COMPLEXES

### 19.1 Cas complexe : Tableau avec plusieurs colonnes

**Exemple AVANT (format interdit - tableau complexe)** :
[Format interdit : tableau Markdown avec colonnes "ID", "Nom", "Description", "Statut", "Date", "Auteur". Exemple de données : ID 1 "Script A" "Script de démarrage" "Actif" "2025-12-24" "Gabriel", ID 2 "Script B" "Script de configuration" "Inactif" "2025-12-23" "Admin", ID 3 "Script C" "Script de test" "Actif" "2025-12-22" "Testeur".]

**Exemple APRÈS (liste à puces détaillée - correct)** :
```
- Script ID 1 : Script A
  - Description : Script de démarrage du serveur Vault.
  - Statut : Actif
  - Date de création : 2025-12-24
  - Auteur : Gabriel

- Script ID 2 : Script B
  - Description : Script de configuration du système.
  - Statut : Inactif
  - Date de création : 2025-12-23
  - Auteur : Admin

- Script ID 3 : Script C
  - Description : Script de test automatisé.
  - Statut : Actif
  - Date de création : 2025-12-22
  - Auteur : Testeur
```

**Transformation appliquée** :
- Conversion du tableau en liste à puces avec sous-éléments
- Conservation de toutes les colonnes (ID, Nom, Description, Statut, Date, Auteur)
- Amélioration de la lisibilité avec descriptions détaillées

### 19.2 Cas complexe : Phrases avec abréviations dans contexte technique

**Exemple AVANT (incorrect)** :
```
La Doc technique explique comment utiliser l'API REST pour configurer l'App.
Le fichier Config.json contient les paramètres de l'App.
```

**Exemple APRÈS (correct)** :
```
La Documentation technique explique comment utiliser l'API REST pour configurer l'Application.
Le fichier `Config.json` contient les paramètres de l'Application.
```

**Transformation appliquée** :
- "Doc" → "Documentation" (hors contexte code)
- "Config" → "Configuration" (hors contexte code)
- "App" → "Application" (hors contexte technique)
- Conservation de "API REST" (acronyme autorisé)
- Conservation de "Config.json" dans backticks (nom de fichier)

### 19.3 Cas complexe : Liste mixte avec éléments courts et longs

**Exemple AVANT (incohérent)** :
```
Les fonctionnalités incluent :
- Démarrage automatique du serveur Vault avec initialisation complète.
- Configuration
- Tests automatisés complets avec validation de tous les scénarios.
- Déploiement
```

**Exemple APRÈS (cohérent - format avec points)** :
```
Les fonctionnalités incluent :
- Démarrage automatique du serveur Vault avec initialisation complète.
- Configuration du système avec validation des paramètres.
- Tests automatisés complets avec validation de tous les scénarios.
- Déploiement de l'application sur l'environnement cible.
```

**Transformation appliquée** :
- Choix du format avec points finaux (recommandé)
- Ajout de descriptions détaillées pour les éléments courts
- Cohérence assurée dans toute la liste

### 19.4 Cas complexe : Section avec plusieurs sous-sections sans transitions

**Exemple AVANT (incorrect)** :
```
## Configuration

La configuration est importante.

### Configuration serveur

Paramètres du serveur.

### Configuration base de données

Paramètres de la base de données.
```

**Exemple APRÈS (correct)** :
```
## Configuration

Cette section décrit la procédure de configuration du système. La configuration est essentielle pour garantir le bon fonctionnement de tous les composants. Nous allons détailler la configuration du serveur et de la base de données.

### Configuration serveur

Après avoir présenté la configuration générale, nous allons maintenant détailler la configuration spécifique du serveur. Les paramètres du serveur sont critiques pour la performance et la sécurité du système.

### Configuration base de données

Une fois le serveur configuré, nous pouvons procéder à la configuration de la base de données. Les paramètres de la base de données déterminent la structure et l'organisation des données.
```

**Transformation appliquée** :
- Ajout d'une introduction contextuelle pour la section principale
- Ajout de transitions entre les sous-sections
- Explication du "pourquoi" pour chaque sous-section

### 19.5 Cas complexe : Instructions sans contexte dans procédure

**Exemple AVANT (incorrect)** :
```
## Installation

Télécharger le fichier.
Extraire l'archive.
Exécuter le script.
Configurer les paramètres.
```

**Exemple APRÈS (correct)** :
```
## Installation

Cette section décrit la procédure d'installation du système. L'installation est la première étape nécessaire pour utiliser le système et permet de configurer les paramètres de base.

Télécharger le fichier d'installation depuis le dépôt officiel. Ce fichier contient tous les composants nécessaires au fonctionnement du système.

Extraire l'archive dans le répertoire de destination. L'extraction crée la structure de dossiers requise pour l'installation.

Exécuter le script d'installation avec les droits administrateur. Ce script configure automatiquement l'environnement et installe les dépendances.

Configurer les paramètres spécifiques à votre environnement. Cette configuration personnalise le système selon vos besoins.
```

**Transformation appliquée** :
- Ajout d'une introduction contextuelle
- Ajout du contexte pour chaque instruction
- Explication du "pourquoi" pour chaque étape

### 19.6 Cas complexe : Tableau de correspondance avec valeurs multiples

**Exemple AVANT (format interdit - tableau complexe)** :
[Format interdit : tableau Markdown avec colonnes "Commande", "Description", "Options", "Exemple". Exemple de données : Commande "start" "Démarre le serveur" avec options "-p port, -d debug" et exemple "start -p 8200", Commande "stop" "Arrête le serveur" avec option "-f force" et exemple "stop -f", Commande "status" "Affiche le statut" avec option "-v verbose" et exemple "status -v".]

**Exemple APRÈS (liste détaillée - correct)** :
```
- Commande `start` : Démarre le serveur Vault
  - Description : Cette commande initialise et démarre le serveur Vault avec les paramètres configurés.
  - Options disponibles :
    - `-p port` : Spécifie le port d'écoute du serveur (défaut : 8200)
    - `-d debug` : Active le mode debug pour le diagnostic
  - Exemple d'utilisation : `start -p 8200`

- Commande `stop` : Arrête le serveur Vault
  - Description : Cette commande arrête proprement le serveur Vault.
  - Options disponibles :
    - `-f force` : Force l'arrêt immédiat sans attendre les processus en cours
  - Exemple d'utilisation : `stop -f`

- Commande `status` : Affiche le statut du serveur
  - Description : Cette commande affiche l'état actuel du serveur Vault.
  - Options disponibles :
    - `-v verbose` : Affiche des informations détaillées sur le statut
  - Exemple d'utilisation : `status -v`
```

**Transformation appliquée** :
- Conversion du tableau en liste à puces avec sous-éléments
- Conservation de toutes les informations (Commande, Description, Options, Exemple)
- Amélioration de la lisibilité avec descriptions détaillées et exemples formatés

---

## 20. CHECKLIST DE VALIDATION

### 20.1 Validation par document

Pour chaque document de Dashboard_IT, vérifier systématiquement :

**Orthographe** :
- [ ] Aucune faute d'orthographe détectée
- [ ] Toutes les apostrophes correctes (d'exécution, d'unseal, l'onboarding, qu'on)
- [ ] Vocabulaire standardisé (Mise à jour, Documentation, Configuration)
- [ ] Termes techniques cohérents (consulter le glossaire section 11)
- [ ] Score orthographique : 100/100

**Ponctuation** :
- [ ] Tous les points finaux présents (phrases complètes)
- [ ] Espaces correctes avant les deux-points (Option 1 :)
- [ ] Cohérence dans l'utilisation des points-virgules
- [ ] Cohérence dans les listes (tous avec points OU tous sans points)
- [ ] Score ponctuation : 100/100

**Typographie** :
- [ ] Astérisques Markdown corrects (**Texte** pas ** Texte **)
- [ ] Guillemets cohérents (backticks pour code, guillemets pour citations)
- [ ] Espaces uniformes dans les listes
- [ ] Caractères ASCII uniquement (sauf accents français)
- [ ] Score typographie : 100/100

**Structure** :
- [ ] Toutes les phrases sont complètes (sujet, verbe, complément)
- [ ] Contexte explicatif présent (le "pourquoi" en plus du "comment")
- [ ] Transitions entre les sections
- [ ] Introductions contextuelles pour chaque section
- [ ] Score structure : = 100/100

**Formatage (PRIORITAIRE)** :
- [ ] AUCUN tableau Markdown présent (vérification par recherche de "|")
- [ ] Tous les tableaux convertis en texte ou listes
- [ ] Texte pur ASCII uniquement (sauf accents français)
- [ ] Lisibilité maximale
- [ ] Vérification par recherche de "|" effectuée
- [ ] Score formatage : 100/100

**Métriques** :
- [ ] Score Flesch-Kincaid > 60 (facile à lire)
- [ ] Longueur moyenne des phrases : 15-20 mots
- [ ] Score de qualité global = 100/100
- [ ] Tous les KPIs respectés (section 13)

**Adaptation au public** :
- [ ] Public cible identifié dans l'introduction
- [ ] Ton adapté au public (technique/stratégique/accessible)
- [ ] Niveau de détail approprié au public
- [ ] Structure adaptée au public

**Sécurité** :
- [ ] Aucune information sensible présente (mots de passe, clés API, tokens)
- [ ] Secrets masqués ou externalisés (placeholders, variables d'environnement)
- [ ] Classification du document définie (Public/Interne/Confidentiel/Secret)
- [ ] Règles de diffusion respectées selon la classification

### 20.2 Validation globale Dashboard_IT

**Vérifications à effectuer** :
- [ ] Tous les documents de Dashboard_IT respectent les règles
- [ ] Cohérence globale entre tous les projets
- [ ] Tous les tableaux convertis (aucun tableau Markdown restant)
- [ ] Glossaire terminologique respecté (cohérence des termes techniques)
- [ ] Score de qualité global = 100/100 pour tous les documents

### 20.3 Validation automatisée

**Scripts à exécuter** :
- [ ] Script PowerShell d'audit complet exécuté
- [ ] Script Python de calcul de lisibilité exécuté
- [ ] Outils Vale, LanguageTool, Markdownlint exécutés
- [ ] Tous les patterns de détection vérifiés (section 10)
- [ ] Score de qualité calculé avec algorithmes (section 14)

---

## 21. GESTION DES EXCEPTIONS

### 21.1 Processus de demande d'exception

**Règle STD-QE-024** : Toute exception aux règles du standard doit être justifiée et documentée.

**Critères d'acceptation** :
- Justification technique valide
- Impact limité et maîtrisé
- Alternative non viable
- Exception documentée et traçable

**Processus** :
1. Soumettre une demande d'exception au responsable documentation
2. Justifier l'exception de manière détaillée
3. Obtenir l'approbation formelle
4. Documenter l'exception dans le document

### 21.2 Documentation des exceptions

**Format obligatoire** :
```markdown
## Exception documentée

**Type** : [Type d'exception]
**Justification** : [Justification technique détaillée]
**Impact** : [Impact sur la qualité d'écriture]
**Durée** : [Durée de validité]
**Approuvé par** : [Nom et date]
**Review prévu** : [Date de review]
```

**Exemple d'exception documentée** :
```markdown
## Exception documentée

**Type** : Utilisation de "API" au lieu de "Interface de programmation d'application"
**Justification** : "API" est le terme standardisé universellement reconnu dans le domaine technique. L'utilisation de "Interface de programmation d'application" serait source de confusion et réduirait la clarté pour le public cible (développeurs).
**Impact** : Impact positif sur la clarté et la compréhension
**Durée** : Permanente
**Approuvé par** : Expert technique, 2025-12-24
**Review prévu** : Annuel
```

### 21.2.1 Exceptions documentées pour ce standard

Le présent standard documente les exceptions suivantes pour les sections de référence (sections 11 à 25).

#### Exception STD-QE-EX-001 : Introductions contextuelles minimales pour sections de référence

**Type** : Introduction contextuelle minimale au lieu d'introduction complète

**Sections concernées** : Sections 11 à 25 (Glossaire terminologique, Adaptation au public cible, Métriques et indicateurs, Algorithmes de calcul, Processus de validation, Outils automatisés, Templates et modèles, Règles conditionnelles, Exemples de cas complexes, Checklist de validation, Gestion des exceptions, Maintenance et évolution, Sécurité de l'information, Intégration avec les autres standards, Annexes)

**Justification** : Les sections 11 à 25 sont des sections de référence et d'annexes qui servent de documentation technique et de ressources complémentaires. Ces sections ont une nature différente des sections principales (2 à 10) qui définissent les règles de qualité d'écriture. Pour les sections de référence :
- Une introduction complète avec contexte et objectif détaillé serait redondante car ces sections sont auto-explicatives par leur titre et leur contenu
- Leur structure est orientée référence (glossaire, métriques, templates) plutôt que narrative
- Une introduction minimale (première phrase de la première sous-section) est suffisante pour comprendre le contexte
- L'ajout d'introductions complètes alourdirait inutilement ces sections de référence sans améliorer significativement la compréhension

**Impact** : Impact positif sur la lisibilité et la concision des sections de référence. Les sections principales (2 à 10) conservent des introductions complètes pour garantir la compréhension des règles de qualité d'écriture.

**Durée** : Permanente

**Approuvé par** : Responsable Documentation Dashboard_IT, 2025-12-24

**Review prévu** : Annuel

#### Exception STD-QE-EX-002 : Transitions minimales pour sections de référence

**Type** : Transition minimale ou absence de transition entre sections de référence

**Sections concernées** : Transitions entre sections 10→11, 11→12, 12→13, 13→14, 14→15, 15→16, 16→17, 17→18, 18→19, 19→20, 20→21, 21→22, 22→23, 23→24, 24→25

**Justification** : Les sections 11 à 25 sont des sections de référence indépendantes qui peuvent être consultées de manière non séquentielle. Pour ces sections :
- Les transitions complètes entre sections de référence seraient artificielles car ces sections n'ont pas de dépendance logique séquentielle forte
- Les utilisateurs consultent ces sections de manière ciblée (ex: consulter uniquement le glossaire ou les templates) plutôt que de manière linéaire
- Les transitions complètes alourdiraient inutilement la navigation dans les sections de référence
- Les sections principales (1 à 10) conservent des transitions complètes pour garantir la compréhension séquentielle des règles

**Impact** : Impact positif sur la navigation et la concision des sections de référence. Les sections principales (1 à 10) conservent des transitions complètes pour garantir la compréhension séquentielle.

**Durée** : Permanente

**Approuvé par** : Responsable Documentation Dashboard_IT, 2025-12-24

**Review prévu** : Annuel

### 21.3 Review périodique

**Fréquence** : Review annuel de toutes les exceptions.

**Processus** :
1. Analyser chaque exception documentée
2. Évaluer si l'exception est toujours justifiée
3. Proposer des améliorations au standard si nécessaire
4. Valider ou révoquer les exceptions
5. Documenter les décisions

---

## 22. MAINTENANCE ET ÉVOLUTION

### 22.1 Versioning

**Format** : Semantic Versioning (X.Y.Z)

- **X (MAJEUR)** : Changements incompatibles avec les versions précédentes
- **Y (MINEUR)** : Nouvelles fonctionnalités compatibles avec les versions précédentes
- **Z (PATCH)** : Corrections de bugs et améliorations mineures

**Exemples** :
- 1.0.0 : Version initiale
- 1.1.0 : Ajout de nouvelles règles (compatible)
- 1.1.1 : Correction d'une règle (compatible)
- 2.0.0 : Changement majeur incompatible (nécessite migration)

### 22.2 Processus d'évolution

**Étape 1 : Proposition d'amélioration**
- Soumettre au responsable documentation
- Justifier et documenter
- Évaluer l'impact sur les documents existants

**Étape 2 : Discussion et validation**
- Organiser une discussion avec les contributeurs
- Valider la proposition
- Planifier l'implémentation

**Étape 3 : Implémentation**
- Mettre à jour le standard
- Documenter dans le changelog
- Mettre à jour les templates si nécessaire
- Communiquer les changements

**Étape 4 : Migration**
- Identifier les documents affectés
- Créer un plan de migration
- Migrer progressivement les documents
- Valider la migration

### 22.3 Communication des changements

**Méthodes** :
- Notification dans le changelog
- Email aux contributeurs
- Mise à jour de la documentation
- Session de formation si changement majeur

**Contenu de la communication** :
- Description des changements
- Justification des changements
- Impact sur les documents existants
- Plan de migration
- Date d'entrée en vigueur

### 22.4 Changelog du standard

**Format** : Changelog détaillé pour chaque version.

**Exemple** :
```markdown
## [2.0.0] - 2025-12-24

### Ajouté
- Section "Guide pour Agent IA" avec workflow automatisable
- Section "Prompt type pour Agent IA" avec prompts directement utilisables
- Section "Exemples de cas complexes" avec transformations détaillées
- Patterns regex complets pour détection automatique
- Algorithmes de calcul détaillés pour tous les scores
- Règles conditionnelles "SI...ALORS..." pour chaque cas

### Modifié
- Amélioration de la section "Règles orthographiques" avec plus d'exemples
- Clarification des règles de formatage des tableaux
- Enrichissement du glossaire terminologique

### Corrigé
- Correction de la règle sur les espaces avant apostrophes
- Correction des patterns regex pour heures (14:30)
```

---

## 23. SÉCURITÉ DE L'INFORMATION

### 23.1 Règles pour masquer les informations sensibles

**Règle STD-QE-025** : Aucune information sensible ne doit apparaître dans la documentation.

**Informations sensibles à masquer** :
- Mots de passe et secrets
- Clés d'API et tokens
- Adresses IP internes
- Chemins absoluts avec noms d'utilisateurs
- Informations personnelles (RGPD)

**Méthodes de masquage** :
- Remplacer par des placeholders : `[MOT_DE_PASSE]`, `[API_KEY]`
- Utiliser des exemples génériques : `user@example.com`
- Documenter les variables d'environnement : `$API_KEY`

**Exemple AVANT (incorrect - informations sensibles)** :
```
Le token d'authentification est "hvs.abc123def456ghi789".
L'adresse IP du serveur est 192.168.1.100.
Le mot de passe administrateur est "Admin123!".
```

**Exemple APRÈS (correct - informations masquées)** :
```
Le token d'authentification est stocké dans la variable d'environnement `VAULT_TOKEN`.
L'adresse IP du serveur est configurée via la variable d'environnement `SERVER_IP`.
Le mot de passe administrateur est stocké dans HashiCorp Vault sous le chemin `secret/data/admin`.
```

**Transformation appliquée** :
- Suppression des valeurs sensibles
- Remplacement par variables d'environnement ou références sécurisées
- Conservation de la structure et du sens

### 23.2 Classification des documents

**Niveaux de classification** :
- **Public** : Accessible à tous, aucune information sensible
- **Interne** : Accessible aux contributeurs, informations techniques non sensibles
- **Confidentiel** : Accès restreint, informations sensibles
- **Secret** : Accès très restreint, informations hautement sensibles

**Obligation** : Chaque document doit être classifié et marqué selon son niveau.

**Format de marquage** :
```markdown
**Classification** : [Public/Interne/Confidentiel/Secret]
**Date de classification** : YYYY-MM-DD
**Responsable** : [Nom]
```

### 23.3 Règles de diffusion

**Règle** : Respecter les règles de diffusion selon la classification.

**Public** :
- Diffusion libre
- Publication possible
- Partage autorisé

**Interne** :
- Diffusion aux contributeurs uniquement
- Pas de publication externe
- Partage avec autorisation

**Confidentiel** :
- Diffusion restreinte
- Accès contrôlé
- Partage interdit sans autorisation

**Secret** :
- Diffusion très restreinte
- Accès strictement contrôlé
- Partage interdit

---

## 24. INTÉGRATION AVEC LES AUTRES STANDARDS

### 24.1 Lien avec le standard de nommage

**Obligation** : Les noms de fichiers et dossiers doivent respecter le standard de nommage.

**Référence** : `Standards/Standards/Naming_Conventions/standard_naming_conventions.md`

**Cohérence requise** :
- Les noms de fichiers et dossiers doivent respecter le standard de nommage
- Les conventions de nommage doivent être cohérentes avec la qualité d'écriture
- Les exemples dans la documentation doivent utiliser les conventions de nommage

### 24.2 Lien avec les standards de code

**Obligation** : Les commentaires dans le code doivent respecter les règles de qualité d'écriture.

**Référence** : Standards de code PowerShell, Python, TypeScript dans `Standards/Standards/`

**Cohérence requise** :
- Les commentaires dans le code doivent respecter les règles de qualité d'écriture
- La documentation du code doit être conforme au standard
- Les exemples de code doivent être clairs et bien documentés

### 24.3 Lien avec le standard de structure de projet

**Obligation** : La structure des documents doit respecter le standard de structure.

**Référence** : `Standards/Standards/Structure_Projet/standard_structure_projet.md`

**Cohérence requise** :
- La structure des documents doit respecter le standard de structure
- L'organisation doit faciliter la navigation
- Les conventions de dossiers doivent être cohérentes

### 24.4 Lien avec le standard de documentation technique

**Obligation** : La documentation technique doit respecter le standard de qualité d'écriture.

**Référence** : `Standards/Standards/Documentation_Technique/standard_documentation_technique.md`

**Cohérence requise** :
- La documentation technique doit respecter le standard de qualité d'écriture
- Les guides techniques doivent être conformes
- La cohérence terminologique doit être maintenue

### 24.5 Alignement global

**Principe** : Tous les standards de Dashboard_IT doivent être alignés et cohérents entre eux.

**Processus** :
1. Vérifier la cohérence lors de chaque modification de standard
2. Mettre à jour les standards liés si nécessaire
3. Documenter les dépendances entre standards
4. Valider l'alignement global régulièrement

---

## 25. ANNEXES

### 25.1 Références bibliographiques

**Ouvrages** :
- Grevisse, M. (2016). *Le Bon Usage* (16e éd.). De Boeck Supérieur. ISBN 978-2-8011-0042-7.

**Standards internationaux** :
- ISO/IEC 26514:2018. *Systems and software engineering — Requirements for designers and developers of user documentation*. Genève : ISO. https://www.iso.org/standard/71521.html
- IEEE 1063-2019. *IEEE Standard for Software User Documentation*. New York : IEEE. https://standards.ieee.org/standard/1063-2019.html

**Guides de style** :
- Microsoft Corporation. (2024). *Microsoft Writing Style Guide*. Microsoft Press. https://docs.microsoft.com/en-us/style-guide/
- Google. (2024). *Google Technical Writing Standards*. https://developers.google.com/tech-writing

### 25.2 Historique des versions

**Version 2.0.0** (2025-12-24) :
- Ajout de la section "Guide pour Agent IA" avec workflow automatisable
- Ajout de la section "Prompt type pour Agent IA" avec prompts directement utilisables
- Ajout de la section "Exemples de cas complexes" avec transformations détaillées
- Ajout de patterns regex complets pour détection automatique
- Ajout d'algorithmes de calcul détaillés pour tous les scores
- Ajout de règles conditionnelles "SI...ALORS..." pour chaque cas
- Enrichissement des exemples AVANT/APRÈS pour toutes les règles
- Amélioration de la section "Règles orthographiques" avec cas complexes
- Clarification des règles de formatage des tableaux
- Enrichissement du glossaire terminologique

**Version 1.0.0** (2025-12-24) :
- Création initiale du standard
- Définition des règles orthographiques, de ponctuation, typographiques
- Définition des règles de structure et de formatage
- Mise en place des métriques et KPIs
- Définition du processus de validation

### 25.3 Contact et support

**Responsable documentation** : documentation@dashboard-it

**Support** :
- Questions sur le standard : documentation@dashboard-it
- Demandes d'exception : documentation@dashboard-it
- Propositions d'amélioration : documentation@dashboard-it

### 25.4 Index des règles

**Règles orthographiques** :
- STD-QE-001 : Apostrophes
- STD-QE-002 : Espaces avant apostrophes
- STD-QE-003 : Vocabulaire
- STD-QE-004 : Termes techniques

**Règles de ponctuation** :
- STD-QE-005 : Point final
- STD-QE-006 : Espaces avant deux-points
- STD-QE-007 : Cohérence dans les listes

**Règles typographiques** :
- STD-QE-008 : Astérisques Markdown
- STD-QE-009 : Guillemets
- STD-QE-010 : Caractères ASCII

**Règles de structure** :
- STD-QE-011 : Phrases complètes
- STD-QE-012 : Contexte explicatif
- STD-QE-013 : Transitions
- STD-QE-014 : Introductions contextuelles

**Règles de formatage** :
- STD-QE-015 : Conversion des tableaux (PRIORITAIRE)
- STD-QE-016 : Formats de conversion
- STD-QE-017 : Vérification après conversion

**Règles générales** :
- STD-QE-018 : Consultation du glossaire
- STD-QE-019 : Cohérence terminologique
- STD-QE-020 : Documentation des exceptions
- STD-QE-021 : Identification du public cible
- STD-QE-022 : Adaptation du niveau de détail
- STD-QE-023 : Adaptation du ton
- STD-QE-024 : Gestion des exceptions
- STD-QE-025 : Sécurité de l'information

### 25.5 Index alphabétique des termes techniques

Cet index permet de retrouver rapidement les termes techniques définis dans le standard et leur emplacement dans le document.

**A** :
- **API** : Section 11.2 — Interface de programmation d'application
- **AppRole** : Section 11.2 — Mécanisme d'authentification HashiCorp Vault
- **Apostrophe** : Section 5.1 — Règle STD-QE-001
- **ASCII** : Section 7.3 — Règle STD-QE-010

**B** :
- **Backend** : Section 11.2 — Partie serveur d'une application
- **Backup** : Section 11.2 — Sauvegarde de données

**C** :
- **CLI** : Section 11.2 — Interface en ligne de commande
- **Collecteur** : Section 11.2 — Script ou composant de collecte de données
- **Configuration** : Section 11.2 — Paramétrage du système
- **Corrélation** : Section 11.2 — Processus d'analyse et de mise en relation d'événements

**D** :
- **Dashboard** : Section 11.2 — Tableau de bord de visualisation
- **Documentation** : Section 1.1 — Ensemble des documents produits
- **Déploiement** : Section 11.2 — Mise en production

**E** :
- **ETL** : Section 11.2 — Extract, Transform, Load

**F** :
- **Frontend** : Section 11.2 — Partie client d'une application

**G** :
- **Glossaire** : Section 11 — Termes techniques standardisés

**H** :
- **Hardcodé** : Section 11.2 — Valeur directement intégrée dans le code

**I** :
- **IA** : Section 11.2 — Intelligence artificielle
- **IT** : Section 11.2 — Technologies de l'information

**J** :
- **JSON** : Section 11.2 — Format de données JavaScript Object Notation

**K** :
- **KV v2** : Section 11.2 — Moteur de secrets Key-Value version 2

**M** :
- **Markdown** : Section 7.1 — Langage de balisage léger
- **Métriques** : Section 13 — Indicateurs de qualité

**O** :
- **Onboarding** : Section 11.2 — Intégration de nouveaux utilisateurs

**P** :
- **Pipeline** : Section 11.2 — Chaîne de traitement automatisée
- **Pôle** : Section 11.2 — Domaine fonctionnel spécialisé
- **PowerShell** : Section 11.2 — Shell et langage de script Microsoft
- **PEP 8** : Section 11.2 — Guide de style Python

**R** :
- **REST** : Section 11.2 — Architecture de services web
- **Rapport** : Section 17.3 — Document d'analyse ou d'audit

**S** :
- **Score de qualité** : Section 14 — Indicateur de conformité
- **Script** : Section 11.2 — Fichier contenant une séquence d'instructions
- **Standard** : Section 1.1 — Document normatif

**T** :
- **Template** : Section 17 — Modèle de document
- **TypeScript** : Section 11.2 — Langage de programmation

**U** :
- **Unseal** : Section 11.2 — Déverrouillage HashiCorp Vault

**V** :
- **Vault** : Section 11.2 — Système de gestion de secrets HashiCorp
- **Validation** : Section 15 — Processus de vérification

**W** :
- **Workflow** : Section 2.2 — Processus automatisable

---

**Fin du standard**

**Dernière mise à jour** : 2025-12-24  
**Prochaine révision prévue** : 2026-12-24  
**Version** : 2.0.0  
**Statut** : OBLIGATOIRE  
**Contact** : documentation@dashboard-it
