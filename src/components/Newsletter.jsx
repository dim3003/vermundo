import React from "react";
import { useEffect, useRef } from "react";

export default function Newsletter() {
  const containerRef = useRef(null);
  const infomaniakForm = `
    <!-- Infomaniak Newsletter Form Embed -->
<form method="post" action="https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/21795/submit" class="inf-form"><input type="email" name="email" style="display:none" /><input type="hidden" name="key" value="eyJpdiI6IkJEbDh5Y1E2dUdKTTdhRHdCTE1YM1VGeUtKUkQ0ekFSazZZaXNTM1wvaVVrPSIsIm1hYyI6IjE3NjZhODUzYzAyMWYxMmU1ZTUzNjRiZDM1NDVkYWRlNWNmOTllOWY0Yjc0YTdhNDFkOTE5N2E3Zjk1MmVlYjYiLCJ2YWx1ZSI6InRxS3R4cFwvNUxSaEpyOHpWTk1CM09lYVwvd1Erd0hUY2VMS25ZaGVvajdSRT0ifQ=="><input type="hidden" name="webform_id" value="21795"><style> .inf-main_c7498c23c40caf66d815866fd8c0d398{ background-color:#F6E191; padding:25px 20px; margin:25px auto; } .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-content { margin-top:13px;} .inf-main_c7498c23c40caf66d815866fd8c0d398 h4, .inf-main_c7498c23c40caf66d815866fd8c0d398 span, .inf-main_c7498c23c40caf66d815866fd8c0d398 label, .inf-main_c7498c23c40caf66d815866fd8c0d398 input, .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-submit, .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-success p a { color:#555; font-size:14px; } .inf-main_c7498c23c40caf66d815866fd8c0d398 h4{ font-size:18px; margin:0px 0px 13px 0px; } .inf-main_c7498c23c40caf66d815866fd8c0d398 h4, .inf-main_c7498c23c40caf66d815866fd8c0d398 label{ font-weight:bold; } .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-input { margin-bottom:7px; } .inf-main_c7498c23c40caf66d815866fd8c0d398 label { display:block;} .inf-main_c7498c23c40caf66d815866fd8c0d398 input{ height:35px; color:#999999; border: 1px solid #E9E9E9; padding-left:7px; } .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-input.inf-error label, .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-input.inf-error span.inf-message{ color: #cc0033; } .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-input.inf-error input{ border: 1px solid #cc0033; } .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-input input { width:100%;} .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-input.inf-error span.inf-message { display: block; } .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-submit { text-align:right;} .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-submit input{ background-color:#2C4348; color:#ffffff; border:none; font-weight: normal; height:auto; padding:7px; } .inf-main_c7498c23c40caf66d815866fd8c0d398 .inf-submit input.disabled{ opacity: 0.4; } .inf-btn { color: rgb(85, 85, 85); border: medium none; font-weight: normal; height: auto; padding: 7px; display: inline-block; background-color: white; box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.24); border-radius: 2px; line-height: 1em; } .inf-rgpd { margin:25px 0px 15px 0px; color:#555; } .altcha-label span { color: #555 } </style><div class="inf-main_c7498c23c40caf66d815866fd8c0d398"> <h4>Inscrivez-vous à la newsletter !</h4> <span>Ne manquez pas les nouveautés de vermundo</span> <div class="inf-success" style="display:none"> <h4>Votre inscription a été enregistrée avec succès !</h4> <p> <a href="#" class="inf-btn">&laquo;</a> </p> </div> <div class="inf-content"> <div class="inf-input inf-input-text"> <input type="email" name="inf[1]" data-inf-meta="1" data-inf-error="" required="required" placeholder="Email *" > </div> <div class="inf-rgpd">Votre adresse de messagerie est uniquement utilisée pour vous envoyer notre lettre d&#039;information ainsi que des informations concernant nos activités. Vous pouvez à tout moment utiliser le lien de désabonnement intégré dans chacun de nos mails.</div> <script src="https://eu.altcha.org/js/latest/altcha.min.js" type="module" defer></script> <altcha-widget hidelogo hidefooter floating challengeurl="https://newsletter.infomaniak.com/v3/altcha-challenge" ></altcha-widget> <script src="https://newsletter.storage5.infomaniak.com/mcaptcha/altcha.js" defer> </script> <script type="text/javascript" src="https://newsletter.infomaniak.com/v3/static/webform_index.js?v=1759423974"></script> <div class="inf-submit"> <input type="submit" style="margin-top: 25px;" name="" value="Valider"> </div> </div> </div> </form>
  `;

    useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Extract and execute all <script> tags inside the injected HTML
    const scripts = container.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
        newScript.async = oldScript.async;
        newScript.defer = oldScript.defer;
        newScript.type = oldScript.type || "text/javascript";
      } else {
        newScript.textContent = oldScript.textContent;
      }
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }, []);

  return (
      <div ref={containerRef}
        dangerouslySetInnerHTML={{ __html: infomaniakForm }}
      />
  );
}

