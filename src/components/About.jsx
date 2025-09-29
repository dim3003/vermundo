import styles from "./About.module.css";

const About = () => {
	return (
		<>
			<div className={styles.aboutContainer}>
				<div className={styles.aboutTitleMobile}>À propos</div>

				<div className={styles.aboutContent}>
					<div className={styles.aboutImageBlock}>
						<img
							src="/images/maeJeanJacket.JPG"
							alt="Profile"
							className={styles.aboutImage}
						/>
					</div>

					<div className={styles.aboutDescription}>
						<div className={styles.aboutTitleDesktop}>À Propos</div>
						<p>
              Salut, je suis Maévane !
						</p>
            <p>
              Ayant exploré près de 25 pays, j’ai pu constater de mes propres yeux combien le tourisme peut transformer des paysages, et parfois bouleverser des cultures locales. Ces expériences m’ont poussée à réfléchir à la manière dont nous voyageons et à l’impact que nous laissons derrière nous.
            </p>
            <p>
              Aujourd’hui, en parallèle de mon master en communication d’intérêt général, j’ai décidé de créer ce blog pour partager une autre manière de parcourir le monde : plus éthique, plus consciente, plus respectueuse. Ici, il ne s’agit pas de vous partager les plus belles destinations ou les must-do en voyage, mais plutôt de discuter d’une approche qui remet en question notre manière de voyager.
            </p>
            <p>
              Explorer le monde, c’est apprendre dans le respect, prendre soin de soi et des autres, et surtout découvrir sans nuire. Bienvenue dans cette aventure où voyage rime avec responsabilité !
            </p>
					</div>
				</div>
			</div>

			<div className={styles.instagramSection}>
				<p>Retrouve-nous sur Instagram !</p>
				<a
					href="https://www.instagram.com/vermundo_ch"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.instagramLink}
				>
					@vermundo_ch
					<img
						className={styles.instagramIcon}
						src="/images/instagram-symbol.png"
						alt="Instagram Icon"
					/>
				</a>
			</div>
		</>
	);
};

export default About;

