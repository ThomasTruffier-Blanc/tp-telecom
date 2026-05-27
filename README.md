# Révision Examen TP - BUT Réseaux & Télécommunications

Site statique multi-pages pour réviser rapidement les TP fournis avant l'examen pratique de 1h30.

## Ouvrir le site

Ouvre directement le fichier :

`index.html`

Aucun serveur n'est nécessaire. Le site fonctionne en HTML, CSS et JavaScript simples.

## Structure

- `index.html` : accueil, progression, accès rapide
- `planning.html` : planning de révision express
- `cours.html` : fiches théoriques
- `tp.html` : liste des TP
- `tp-*.html` : détails de chaque TP
- `commandes.html` : commandes, réglages et formules
- `erreurs.html` : dépannage rapide
- `quiz.html` : quiz interactif avec meilleur score
- `examen.html` : examen blanc avec minuteur 1h30
- `comptes-rendus.html` : modèles et liens vers les documents
- `galerie.html` : captures et placeholders

## Où mettre les images

Place les photos, schémas et captures dans :

`assets/images/`

Des placeholders existent déjà, par exemple :

- `schema-analyse-spectrale.png`
- `echantillonnage-schema.png`
- `filtrage-rlc.png`
- `tnt-canal.png`
- `schema-vlan.png`
- `wireshark-capture.png`

Tu peux remplacer ces fichiers par tes vraies images en gardant le même nom.

## Documents fournis

Les PDF, le XLSX et le CSV ont été copiés dans :

`assets/docs/`

Les liens de la page `comptes-rendus.html` pointent vers ces copies locales.

## Modifier les TP

Toutes les données principales sont dans :

`js/data.js`

Pour modifier un TP, cherche l'objet correspondant dans `tps`, par exemple :

- `tp2-analyse-spectrale`
- `tp3-transmission-radio`
- `tp4-echantillonnage`
- `tp6-reception-tnt`
- `tp7-filtrage-rlc`
- `tp8-analyseur-modulations`

Tu peux modifier :

- `summary`
- `objective`
- `equipment`
- `steps`
- `commands`
- `tests`
- `expected`
- `errors`
- `theoryQuestions`
- `report`
- `checklist`

## Ajouter un nouveau TP

1. Ajoute un nouvel objet dans le tableau `tps` de `js/data.js`.
2. Crée une nouvelle page HTML sur le modèle des fichiers `tp-*.html`.
3. Dans le `<body>`, mets `data-page="tp-detail"` et `data-tp="ton-id-de-tp"`.
4. Ajoute les images dans `assets/images/`.
5. Ajoute le compte rendu dans `assets/docs/` et référence-le dans `sourceDocs`.

## Modifier les questions du quiz

Dans `js/data.js`, modifie le tableau `quizQuestions`.

Chaque question contient :

- `question`
- `options`
- `answer` : index de la bonne réponse, en commençant à 0
- `explanation`

Le meilleur score est sauvegardé dans le `localStorage` du navigateur.

## Lancer le mode examen

Ouvre `examen.html`, puis clique sur `Démarrer`.

Le mode examen propose :

- un minuteur de 1h30
- un TP tiré au hasard
- quatre questions théoriques
- une partie pratique
- une checklist
- une zone de notes
- un bouton de correction

La checklist, les notes, les TP révisés et le quiz utilisent `localStorage`.
