import { useEffect, useRef, useState } from "react";

export default function Newsletter() {
  const containerRef = useRef(null);
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/newsletter.html")
      .then((res) => res.text())
      .then((html) => setHtmlContent(html));
  }, []);

  useEffect(() => {
    if (!htmlContent || !containerRef.current) return;

    const container = containerRef.current;

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
  }, [htmlContent]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

