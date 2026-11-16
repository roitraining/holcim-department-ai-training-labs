# Glossaire de l’essai HIC (synthétique)

> Glossaire de formation pour la recherche de documents avec Gemini. Ce n’est pas une norme Holcim.

## Facteur de clinker

Fraction massique de clinker dans le liant. Un facteur de clinker de 0,52 correspond à 52 % de clinker. Dans cet essai, le HIC cherche en général à le réduire, à condition que la formule reste conforme à la spécification.

## LC3

Ciment au calcaire et à l’argile calcinée (Limestone Calcined Clay Cement). Dans ce jeu de formation, **LC3-50** vise environ 50 % de clinker, avec de l’argile calcinée et du calcaire. **LC3-35** est une variante de la même famille, plus riche en clinker.

## Témoin CEM I

Formule témoin de type ciment Portland ordinaire dans cet essai. Facteur de clinker d’environ 0,95. Sert uniquement de référence de laboratoire ; ce n’est pas, à elle seule, une recommandation pour l’usine.

## CEM II/A-LL

Ciment Portland au calcaire dans cet essai. Facteur de clinker généralement compris entre 0,70 et 0,75 dans le jeu synthétique.

## Résistance spécifiée

Pour HIC-LC3-24, la spécification de résistance à la compression à 28 jours est de **42,5 MPa** (classe CEM 42,5), sur cubes de mortier EN 196-1. Les autres âges n’ont pas de spécification chiffrée dans ce glossaire.

## Conformité à la spécification

Une ligne est conforme lorsque `Compressive_Strength_MPa` est supérieure ou égale à `Spec_Strength_MPa` à l’âge considéré. Seule la conformité à 28 jours sert aux décisions de transfert.

## Prêt pour le transfert

`Handover_Ready` vaut **Yes** uniquement si toutes les conditions suivantes sont remplies pour la formule :

1. `Trial_Stage` vaut Plant-ready
2. La résistance à la compression à **28 jours** de la formule est d’au moins 42,5 MPa
3. La remarque sur la demande en eau du fichier des limites a été prise en compte (demande supérieure à celle du CEM I)

Si une condition n’est pas remplie, `Handover_Ready` vaut **No**. Une conformité à 1 jour ou à 7 jours ne signifie pas que la formule est prête pour le transfert.

## Étapes de l’essai

- **Lab screening** (criblage en laboratoire) : premiers cubes, pas pour l’usine
- **Scale-up** (passage à l’échelle) : gâchées supplémentaires, toujours sous la responsabilité du HIC
- **Plant-ready** (prêt pour l’usine) : une fiche formule peut être émise si `Handover_Ready` vaut Yes

## Loire Plant

Usine cible synthétique de ce scénario de formation. Il ne s’agit pas d’un rapport de site réel.
