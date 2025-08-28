import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.topBar}>
				<div className={styles.brand}>VERMUNDO</div>
			</div>
			<div className={styles.centralText}>PARTIR À L&apos;AVENTURE</div>
		</div>
	);
};

export default Header;
