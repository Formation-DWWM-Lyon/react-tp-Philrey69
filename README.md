# Travaux pratiques React

Nous aimerions créer un réseau social réservé aux développeurs. Nous avons plusieurs investisseurs potentiels, mais ils ne nous accorderont leur confiance que si nous pouvons leur présenter un prototype de notre idée! Ta mission, si tu l'acceptes: réaliser ce prototype en suivant les instructions données par notre chef de projet.

## 1. Récupérer les données

Une autre équipe s'occupe de la partie _back-end_ de l'application. En attendant que leur travail soit exploitable, tu peux utiliser l'API de [randomuser.me](https://randomuser.me/documentation). Tu peux utiliser l'_endpoint_ suivant comme référence:

`https://randomuser.me/api/?page=1&results=10&seed=abc&nat=fr`

- **results** permet de choisir combien de résultats renverra la requête (dans cet exemple, 10),
- **page** permet d'"avancer" ou de "reculer" dans les résultats (par exemple, avoir les résultats de 11 à 20, de 21 à 30...). Ne fonctionne qu'avec **seed**,
- **seed** permet de définir une chaîne de caractères arbitraire qui sera utilisée comme base pour générer les résultats. Donner une valeur fixe à **seed** permet donc d'avoir toujours les mêmes résultats,
- **nat** permet d'avoir uniquement des résultats d'une certaine nationalité (dans cet exemple, français).

Tu dois commencer par récupérer une série de personnes dans l'API et afficher leur nom dans une liste.

### BONUS

Ajouter un bouton qui permet de charger une nouvelle liste de personnes (sans recharger la page), pour simuler la mise à jour de l'affichage. 

> Penser à enlever le paramètre **seed** de la requête, sinon il ne se passera rien!

### BONUS 2

Utiliser l'objet **Date** pour générer une nouvelle valeur de **seed** toutes les minutes, afin de simuler l'arrivée de nouveaux profils sur l'application.

## 2. Faire une carte de présentation pour chaque personne

Au lieu d'afficher juste leur nom, nous aimerions avoir une carte qui présente pour chaque personne (au moins) son nom, sa photo, sa ville, son sexe.

> Note: tu peux t'aider de `react-bootstrap` qui est déjà incluse dans le code.

### BONUS

Les cartes pourraient être affichées dans une grille _responsive_ qui s'adapte aux mobiles.

## 3. Afficher le profil complet d'une personne

Créer une page "profil" sur laquelle toutes les informations relatives à une personne apparaissent. Rajouter également, dans les cartes de présentation, un bouton "Voir le profil" qui permet d'accéder à cette page.

> Attention: l'API est faite de telle manière qu'il faut faire exactement la même requête pour avoir les mêmes résultats, même si on n'a besoin que d'une seule personne. Il faut donc fournir le numéro de page sur laquelle une personne apparaît + son index dans la page pour pouvoir l'identifier.

### BONUS

Au lieu d'afficher directement toutes les informations, la page de profil propose des onglets qui permettent d'afficher les informations par thématique (adresse, date de naissance, téléphone, etc.).

## 4. Naviguer entre différentes pages de résultats

Ajouter un bouton "page suivante" et un bouton "page précédente" qui permettent d'afficher les 10 personnes suivantes ou précédentes. Si nous sommes sur la première page, le bouton "page précédente" ne doit pas avoir d'effet.

### BONUS

Lorsqu'on est sur la première page, le bouton "page précédente" apparaît en grisé et n'est pas cliquable.

## 5. Poster des commentaires sur un profil

Sur la page profil, rajouter un formulaire qui permet de poster un commentaire. Une fois validé, ce commentaire est ajouté à la liste de commentaires sur le profil.

### BONUS

Afin de simuler un utilisateur authentifié, utiliser une requête avec un **seed** différent (et fixe, si vous avez fait les bonus de l'étape 1) qui va chercher une seule personne. Afficher le nom et la photo de cette personne en haut de la page, et l'afficher à nouveau devant chaque commentaire pour montrer qui en est l'auteur.

## SUPER BONUS

- Rajouter un champ qui permet de filtrer les profils parmi les 10 résultats sur une même page (voire plusieurs champs pour filtrer selon différentes critères)
- Faire une liste déroulante qui permet de sélectionner combien de résultats on souhaite avoir dans chaque page
- Faire une liste déroulante qui permet de sélectionner la nationalité des profils générés
- Laisser libre cours à votre imagination pour nous surprendre...
