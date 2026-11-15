# Glossaire d’essai HIC (synthétique)

> Glossaire de formation pour la recherche de documents Gemini. Pas une norme Holcim.

## Facteur de clinker

La fraction massique de clinker dans le liant. Un facteur de clinker de 0.52 signifie 52 pour cent de clinker. Plus bas est l’objectif habituel du HIC dans cet essai, à condition que la formule respecte encore la spec.

## LC3

Ciment d’argile calcinée et de calcaire. Dans ce jeu de formation, **LC3-50** vise environ 50 pour cent de clinker avec de l’argile calcinée et du calcaire. **LC3-35** est une variante à plus fort taux de clinker de la même famille.

## Témoin CEM I

Formule témoin de style Portland ordinaire dans cet essai. Facteur de clinker d’environ 0.95. Utilisée seulement comme référence de laboratoire. Pas une recommandation d’usine à elle seule.

## CEM II/A-LL

Mélange de style Portland-calcaire dans cet essai. Facteur de clinker en général d’environ 0.70 à 0.75 dans le jeu synthétique.

## Résistance de spec

Pour HIC-LC3-24, la spec de résistance à la compression à 28 jours est **42.5 MPa** (classe CEM 42.5) sur des cubes de mortier EN 196-1. Les autres âges n’ont pas de spec chiffrée dans ce glossaire.

## Réussite par rapport à la spec

Une ligne réussit quand `Compressive_Strength_MPa` est supérieur ou égal à `Spec_Strength_MPa` à cet âge. Seule la réussite ou l’échec à 28 jours sert aux décisions de transfert.

## Prêt pour le transfert

`Handover_Ready` vaut **Yes** seulement quand tout ce qui suit est vrai pour la formule :

1. `Trial_Stage` vaut Plant-ready
2. La résistance à la compression à **28 jours** de la formule est au moins de 42.5 MPa
3. La note de demande en eau du fichier de limites a été prise en compte (demande plus haute que le CEM I)

Si un point est faux, `Handover_Ready` vaut **No**. Ne traitez pas une réussite à 1 jour ou à 7 jours comme un transfert prêt.

## Étapes d’essai

- **Lab screening :** premiers cubes, pas pour l’usine
- **Scale-up :** lots supplémentaires, encore sous la responsabilité du HIC
- **Plant-ready :** une fiche formule peut être émise si prêt pour le transfert vaut Yes

## Loire Plant

Usine cible synthétique de cette histoire de formation. Pas un rapport de site réel.
