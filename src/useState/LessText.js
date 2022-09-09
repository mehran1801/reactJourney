import React, { useState } from "react";





// This component expects 2 props:
//   text - the text to display
//   maxLength - how many characters to show before "read more button"
export function LessText({text, maxLength}) {
  const [hidden, setHidden] = useState(true);

  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it

  if (text.length <= maxLength) {
    return <span>{text}</span>;

    // If the text is short enough, just render it
  }

  // Render the text (shortened or full-length) followed by
  // a link to expand/collapse it.
  // When a link is clicked, update the value of `hidden`,
  // which will trigger a re-render

  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()}` : text}
      {hidden ? (
        <button onClick={() => setHidden(false)}> read more</button>
      ) : (
        <button onClick={() => setHidden(true)}> read less</button>
      )}
    </span>
  );
}

