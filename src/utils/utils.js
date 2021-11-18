import * as pdfjs from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export async function getNumPages(file){
    let doc
    doc = await pdfjs.getDocument({data: file}).promise
    return doc.numPages
}