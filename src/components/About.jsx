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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Aliquam vitae convallis ex. Sed ut nulla id magna
							consectetur tincidunt. Quisque rhoncus ipsum ut iaculis
							iaculis. Nunc non vestibulum justo, in hendrerit tellus.
							Vestibulum ac vulputate nulla. Duis id eros orci. Morbi
							sem sapien, varius sit amet lorem tincidunt, pulvinar
							viverra ex. Aliquam feugiat odio sem, non semper augue
							malesuada cras.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Aliquam vitae convallis ex. Sed ut nulla id magna
							consectetur tincidunt.
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

