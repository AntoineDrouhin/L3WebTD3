# L3WebTD3

   
## TD3
###Angular JS { Directive - Factory } Node { Api }   

## TD 3.0 Démarrage projet
* Avoir fait les pre requis du TD2
* Récupérer la correction du TD2 et copie le tout dans votre répertoire
   
## TD 3.1 Update de l‘architecture
###Objectif
Alleger la visibilité du code et factoriser le développement. Ajouter des models
###Procédure
* Faire une directive commune pour les experiences professionnelles et formations
* Faire une directive commune pour les loisirs et les compétences
* Ajouter une factory Person et Resume pour les lier avec l’API et utiliser l’heritage pour lier a _model et _collection.
* Faire une directive pour externaliser le person-card [ bonus ]

## TD 3.2 Formulaire de contact candidat
### Objectif
Débuter une l’interface de saisie tout en utilisant un service externe
### Procedure
* Ajouter un bouton contact sur chaque CV
* Ajouter un action de click qui ouvrira une dialog box
* Dans cette dialog box :
 * Un rappel de la personne à contacter ( easy si bonus td3.1 effectué)
 * Un formulaire de contact ( simple juste un champs text area avec limitation à 100 caractères ) * Un bouton valider > click : fermeture dialog box + toast service
 * Un bouton annuler > juste fermeture de la dialog box

Une fois API disponible ( vous pouvez faire le TD3.3 en attendant ;) )

* Lancer une méthode $http.post après la validation du formulaire avec les informations vers l’API
* Sur le CV ajouter un bouton pour visualiser les différentes prises de contact
 * Nouvelle pages avec routes et directives qui font appel à l’API pour afficher toutes les prises de contact
 * Sur cette nouvelle page sera présent un rappel de la personne en cours, du titre du CV ainsi que la liste des prises de contact
 * Bien entendu, la sidenav est toujours disponible. (si TD3.3 )
* Ne pas oublier de créer un modèle et une collection handskahe.

###Link :
* https://material.angularjs.org/latest/demo/input * https://material.angularjs.org/latest/demo/toast
* https://material.angularjs.org/latest/demo/dialog * https://material.angularjs.org/latest/demo/button

   
## TD 3.3 Utilisation de Material Angular [ BONUS ]
### Objectif
Manipuler un peu material angular
###Procedure
   * Ajouter <md-toolbar>
* Ajouter une sidenav comprenant le moteur de recherche
* Ajouter un bouton d’affichage de la sidenav quand la resolution de l’écran est faible

### Link
* https://material.angularjs.org/latest/demo/sidenav
* https://material.angularjs.org/latest/demo/toolbar
   
## TD3.4 Sauvegarder les demandes de contacts
### Objectif
Créer une interaction entre API et le Web
### Procédures
* Créer une route en methods POST qui va recevoir les informations pour l’enregistrement en base de données. /resume/:id_resume/handshakes
* Créer un route pour un CV en méthode GET pour obtenir tous les demandes de prises de contact /id_resume/:id_id_resume/handshakes
* Créer un nouveau model de prise de contact pour l’enregistrement
* Créer un controller pour la sauvegarde et le chargement
* Lier la prise de contact avec un CV.