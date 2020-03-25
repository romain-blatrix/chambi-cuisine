const id = "risotto-bourguignon";

const risottoBourguignon = {
  id,
  title: "Risotto bourguignon",
  headerTitle: "un risotto bourguignon",
  ingredients: [
    "1 bouteille de vin rouge (type Malbec ou Syrah), 60 cl pour la recette, le reste pour le cuisinier",
    "25 cl de fond de veau",
    "200g de riz arborio (riz à risotto)",
    "2 carottes",
    "2 échalotes",
    "25 petits oignons grelots",
    "20 champignons de Paris boutons (des petits champignons)",
    "100g de lardons",
    "30 g de beurre"
  ],
  steps: [
    {
      title: "Préparation du bouillon 1/3",
      description: "Mettre à réduire 50 cl de vin rouge à légère ébullition",
      imageUrl: `${id}/step1_1.jpg`
    },
    {
      title: "Préparation du bouillon 2/3",
      description:
        "Quand 2/3 du liquide s’est évaporé, ajouter 25cl de fond de veau délayé et laisser réduire encore de moitié l’ensemble de la préparation",
      imageUrl: `${id}/step1_2.jpg`
    },
    {
      title: "Préparation du bouillon 3/3",
      description: "Garder à température (autour de 50 degrés)",
      imageUrl: `${id}/step1_3.jpg`
    },
    {
      title: "Préparation de la garniture 1/5",
      description: "Éplucher et couper les carottes en macédoine (5mm de côté)"
    },
    {
      title: "Préparation de la garniture 2/5",
      description: "Ciseler les échalotes"
    },
    {
      title: "Préparation de la garniture 3/5",
      description: "Couper les champignons boutons en 4"
    },
    {
      title: "Préparation de la garniture 4/5",
      description: "Tailler la poitrine fumée en petits lardons "
    },
    {
      title: "Préparation de la garniture 5/5",
      description:
        "Eplucher les oignons grelots (astuce du chef : recouvrir les oignons d’eau bouillante, ils seront plus faciles à éplucher)"
    },
    {
      title: "Préparation des oignons grelots 1/4",
      description:
        "Dans une casserole faire chauffer à feu moyen : les oignons grelots, 20 grammes de beurre, une cuillère à soupe de sucre, une cuillère à café de vinaigre et 10 cl d’eau"
    },
    {
      title: "Préparation des oignons grelots 2/4",
      description: "Couvrir avec un papier sulfurisé"
    },
    {
      title: "Préparation des oignons grelots 3/4",
      description:
        "Au bout de 10 min de cuisson retirer le papier sulfurisé et laisser évaporer le sirop pour faire « glacer à brun » en poursuivant 5 min de plus (en remuant régulièrement)"
    },
    {
      title: "Préparation des oignons grelots 4/4",
      description: "Retirer du feu et garder au chaud"
    },
    {
      title: "La cuisson du risotto 1/6",
      description:
        "Dans une casserole assez large, faire chauffer un généreux filet d’huile d’olive et ajoutez l’échalote, les lardons et les carottes et petits dés"
    },
    {
      title: "La cuisson du risotto 2/6",
      description: "Faire suer tranquillement pendant 2 à 3 minutes"
    },
    {
      title: "La cuisson du risotto 3/6",
      description:
        "Ajouter le riz arborio et mélanger intimement pour faire « nacrer » le riz, il doit être translucide"
    },
    {
      title: "La cuisson du risotto 4/6",
      description:
        "Au bout de 2 minutes déglacer les sucs avec 15 cl de vin rouge (ayant servi pour le bouillon) et faire réduire à sec"
    },
    {
      title: "La cuisson du risotto 5/6",
      description:
        "Une fois que le vin est évaporé ajouter le « bouillon » en plusieurs fois par petites quantités et remuer l’ensemble régulièrement jusqu’à ce que le riz ait absorbé le liquide"
    },
    {
      title: "La cuisson du risotto 6/6",
      description: "Compter environ 12 minutes de cuisson à feu doux"
    }
  ]
};

export default risottoBourguignon;
