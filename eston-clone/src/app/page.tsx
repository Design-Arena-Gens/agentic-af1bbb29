const ESTON_ORIGIN = "https://themedox.com/demo/eston";

async function loadEstonMarkup(): Promise<string> {
  try {
    const response = await fetch(`${ESTON_ORIGIN}/index.html`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Eston markup: ${response.status}`);
    }

    const fullHtml = await response.text();
    const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let content = bodyMatch ? bodyMatch[1] : fullHtml;

    content = content.replace(/<script[\s\S]*?<\/script>/gi, "");
    content = content.replace(/assets\//g, `${ESTON_ORIGIN}/assets/`);
    content = content.replace(/href="index\.html"/gi, 'href="/"');
    content = content.replace(
      /href="([^"#]+\.html)"/gi,
      (_, path: string) => `href="${ESTON_ORIGIN}/${path}"`,
    );
    content = content.replace(
      /href='([^'#]+\.html)'/gi,
      (_, path: string) => `href='${ESTON_ORIGIN}/${path}'`,
    );
    content = content.replace(
      /url\((['"]?)assets\//gi,
      (_, quote: string) => `url(${quote}${ESTON_ORIGIN}/assets/`,
    );

    return content;
  } catch (error) {
    console.error(error);
    return "<div class=\"eston-error\"><p>Unable to load the Eston landing page at this time.</p></div>";
  }
}

export default async function Home() {
  const markup = await loadEstonMarkup();

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
