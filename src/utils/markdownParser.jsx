import React from "react";

export const parseMarkdown = (markdown) => {
  if (!markdown || typeof markdown !== "string") return null;

  const lines = markdown.split("\n");
  const elements = [];
  let currentParagraph = [];
  let listItems = [];
  let inList = false;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      elements.push(
        <p key={`p-${elements.length}`} className="description-p">
          {currentParagraph.join(" ")}
        </p>
      );
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="description-ul">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    // 1. Handle Empty Lines (End of block)
    if (trimmedLine === "") {
      flushParagraph();
      flushList();
      return;
    }

    // 2. Handle New Bullet Points
    if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
      flushParagraph();
      inList = true;
      listItems.push(trimmedLine.substring(2));
      return;
    }

    // 3. Handle Multiline Bullet Continuation
    // If the line starts with spaces/tabs while we are already in a list
    if (inList && (line.startsWith("  ") || line.startsWith("\t"))) {
      if (listItems.length > 0) {
        listItems[listItems.length - 1] += " " + trimmedLine;
      }
      return;
    }

    // 4. Handle Regular Paragraph Text
    if (inList) flushList();
    currentParagraph.push(trimmedLine);
  });

  // Final Flush
  flushParagraph();
  flushList();

  return elements;
};
