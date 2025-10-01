import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<h3 className={styles.companyName}>
				VERMUNDO
			</h3 >
      <p className={styles.email}>
        hello.maevane@gmail.com
      </p>
			<p className={styles.copyright}>
				© 2024 par Dimitri André & Maévane Mas
			</p>
		</div>
	);
};

export default Footer;
