import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'inscription.");
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Impossible d’envoyer votre email. Veuillez vérifier votre boîte mail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.newsletterWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Reste informé·e !</h2>

        {!success ? (
          <>
            <label htmlFor="email">Entre ton email ici :</label>
            <div className={styles.inputRow}>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
              />

              <button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? "Envoi..." : "Envoyer"}
              </button>
            </div>

            {error && <p className={styles.error}>{error}</p>}
          </>
        ) : (
          <div className={styles.success}>
            <h4>Merci pour ton inscription 🎉</h4>
            <p>Vérifie ta boîte mail pour confirmer ton adresse.</p>
          </div>
        )}
      </form>
    </section>
  );
}
