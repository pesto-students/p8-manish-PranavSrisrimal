import { useState, useRef } from "react";

export default function Body() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const link = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  function removeHttp(url) {
    return url.replace(/^https?:\/\//, "");
  }

  function shortenUrl() {
    setIsCopied(false);
    const longUrl =
      "https://api.shrtco.de/v2/shorten?url=" + removeHttp(inputUrl);

    async function resolution() {
      try {
        const response = await fetch(longUrl);
        const data = await response.json();
        const shortenedUrl = data.result.full_short_link;
        setShortUrl(shortenedUrl);
      } catch (error) {
        console.error(error);
      }
    }

    resolution(longUrl);
  }

  function copyToClipBoard() {
    if (link.current) {
      link.current.select();
      document.execCommand("copy");
      setIsCopied(true);
    }
  }

  return (
    <div className="body">
      <h1>More than just shorter Links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing
      </p>
      <img
        alt="person on a computer"
        className="body-img"
        src="https://shrtco.de/VjB1SS"
      />
      <div className="body-url-input">
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={(event) => setInputUrl(event.target.value)}
        />
        <button onClick={() => shortenUrl()}>Shorten it!</button>
      </div>
      <div className="body-url-output">
        <input
          type="text"
          placeholder=""
          value={shortUrl}
          ref={link}
          readOnly
        />
        <button onClick={copyToClipBoard}>
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
