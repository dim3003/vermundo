import { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';

function ConfirmNewsletter() {
  const { token } = useParams(); // comes from /confirm-newsletter/:token
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const [state, setState] = useState('loading'); // 'loading' | 'success' | 'error'

  useEffect(() => {
    if (!token) {
      setState('error');
      return;
    }

    const confirm = async () => {
      try {
        const res = await fetch('/api/newsletter/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }), // matches ConfirmNewsletterSubscriptionRequest.Token
        });

        if (!res.ok) {
          setState('error');
          return;
        }

        setState('success');
      } catch (err) {
        console.error(err);
        setState('error');
      }
    };

    confirm();
  }, [token]);

  const isLoading = state === 'loading';
  const isSuccess = state === 'success';
  const isError = state === 'error';

  return (
    <main style={{ maxWidth: 600, margin: '4rem auto', padding: '0 1rem' }}>
      <h1>
        {isLoading && 'Confirmation de votre abonnement en cours…'}
        {isSuccess && 'Abonnement à la newsletter confirmé'}
        {isError && 'Échec de la confirmation de la newsletter'}
      </h1>

      <p style={{ marginTop: '1rem' }}>
        {isLoading && <>Veuillez patienter…</>}

        {isSuccess && (
          <>
            {email ? (
              <>
                Merci, <strong>{email}</strong> a bien été abonné à notre newsletter.
              </>
            ) : (
              <>Merci d’avoir confirmé votre abonnement.</>
            )}
          </>
        )}

        {isError && (
          <>
            Une erreur est survenue lors de la confirmation de votre abonnement.
            <br />
            Le lien a peut-être expiré ou déjà été utilisé.
          </>
        )}
      </p>

      <p style={{ marginTop: '2rem' }}>
        <Link to="/">Retour à l’accueil</Link>
      </p>
    </main>
  );
}

export default ConfirmNewsletter;
