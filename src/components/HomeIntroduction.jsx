import introStyles from "./HomeIntroduction.module.css";

const HomeIntroduction = () => {
	return (
    <>
    <div className={introStyles.homeIntroTitleBox}>
      <h2 className={introStyles.homeIntroTitle}>
        Voyager autrement
      </h2>
    </div>
    <div className={introStyles.homeIntroText}>
        <p>
          Sillonner les routes du Vietnam en scooter, s’arrêter dans une échoppe en bord de route, se laisser séduire par un enfant de cinq ans qui vend des bracelets de perles, payer le prix plein, voire même un peu plus pour le “soutenir”, filmer le tout et poster sur les réseaux sociaux. 
        </p>
        <p>
          La façon dont nous voyageons à un fort impact sur les représenation de l’ailleur, et certains comportements peuvent renforcer des stéréotypes d’exotisme, de pauvreté ou encore de “sauveur blanc”. Chaque voyageur laisse une trace derrière lui, tant en termes écologique que culturel. Les rencontres ne bouleversent pas que le voyageur, mais aussi les habitants des régions traversées. Ce que l’on achète, ce que l’on utilise, ce que l’on partage a des répercussions sur les personnes rencontrées et les environnements traversés, mais aussi sur la représentation de l’ailleurs que l’on véhicule.
        </p>
        <ul>
          <li>
            Comment poster sur les réseaux sociaux  sans porter préjudice aux populations locales ?
          </li>
          <li>
            Quels comportements adopter face à des situations sociales complexes ? 
          </li>
          <li>
            Comment réduire au maximum son empreinte écologique lors du voyage ? 
          </li>
        </ul>
        <p>
          Ce blog se veut comme un guide des bonnes pratiques du voyageur. Différents articles tenteront de répondre à ces questions essentielles, afin d’éveiller une prise de conscience chez le voyageur et d'encourager une pratique du voyage plus consciente et responsable.
        </p>
    </div>
    </>
	);
};

export default HomeIntroduction;
