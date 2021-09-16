import React from "react";
import ReactMarkdown from "react-markdown";

function Markdown({ content }: { content: string }) {
  return (
    <div className="prose lg:prose-xl">
      <ReactMarkdown children={content} skipHtml={true}></ReactMarkdown>
    </div>
  );
}

export default Markdown;
