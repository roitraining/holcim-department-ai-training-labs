# HIC trial glossary (synthetic)

> Training glossary for Gemini document search. Not a Holcim standard.

## Clinker factor

The mass fraction of clinker in the binder. A clinker factor of 0.52 means 52 percent clinker. Lower is the usual HIC goal in this trial, provided the mix still meets spec.

## LC3

Limestone calcined clay cement. In this training set, **LC3-50** targets about 50 percent clinker with calcined clay and limestone. **LC3-35** is a higher-clinker variant in the same family.

## CEM I control

Ordinary Portland-style control mix in this trial. Clinker factor about 0.95. Used only as a laboratory benchmark. Not a plant recommendation by itself.

## CEM II/A-LL

Portland-limestone style blend in this trial. Clinker factor typically about 0.70 to 0.75 in the synthetic set.

## Spec strength

For HIC-LC3-24, the 28-day compressive-strength spec is **42.5 MPa** (CEM 42.5 class) on EN 196-1 mortar cubes. Other ages have no numeric spec in this glossary.

## Pass versus spec

A row passes when `Compressive_Strength_MPa` is greater than or equal to `Spec_Strength_MPa` at that age. Only 28-day pass/fail is used for handover decisions.

## Handover ready

`Handover_Ready` is **Yes** only when all of the following are true for the mix:

1. `Trial_Stage` is Plant-ready
2. The mix’s **28-day** compressive strength is at or above 42.5 MPa
3. The water-demand note in the limitations file has been acknowledged (higher demand than CEM I)

If any item is false, `Handover_Ready` is **No**. Do not treat a 1-day or 7-day pass as handover ready.

## Trial stages

- **Lab screening:** first cubes, not for plant
- **Scale-up:** extra batches, still HIC-owned
- **Plant-ready:** mix card may be issued if handover ready is Yes

## Loire Plant

Synthetic target plant for this training story. Not a real site report.
