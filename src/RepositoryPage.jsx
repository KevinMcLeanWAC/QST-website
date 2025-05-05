import React from 'react';

export default function RepositoryPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Investor Documents</h1>
      <ul className="space-y-4">
        <li>
          <a
            href="/docs/qst-investor-deck.pdf"
            download
            className="text-blue-400 underline"
          >
            Download QST Investor Deck
          </a>
        </li>
        <li>
          <a
            href="/docs/qst-company-presentation.pptx"
            download
            className="text-blue-400 underline"
          >
            Download QST Company Presentation (.pptx)
          </a>
        </li>
      </ul>
    </>
  );
}