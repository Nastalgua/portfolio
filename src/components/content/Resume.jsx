import { useState } from 'react';

import { Element } from 'react-scroll';
import { Document, Page, pdfjs } from 'react-pdf';

import resumePDF from '../../assets/resume.pdf';

import './Resume.css';

export const Resume = () => {
  const [pageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <Element name='resume' className='resume noselect'>
      <Document
        file={resumePDF}
        onLoadError={console.error}
        o
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </Element>
  )
}
