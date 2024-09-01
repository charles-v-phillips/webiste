import { useEffect } from "react";

export type StravaEmbedProps = {
    id: string;
}

function StravaEmbed(props: StravaEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://strava-embeds.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if the component is unmounted
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <div
        className="strava-embed-placeholder"
        data-embed-type="activity"
        data-embed-id={props.id}
        data-style="standard"
      ></div>
    </div>
  );
}

export default StravaEmbed;