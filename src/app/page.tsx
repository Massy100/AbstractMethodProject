import { HTMLFactory } from './factories/concrete/HTMLFactory';
import { MDFactory } from './factories/concrete/MDFactory';
import { ConverterService } from './services/ConverterService';

const sampleData = {
  content: [
    { type: 'heading1', text: 'Main Title' },
    { type: 'paragraph', text: 'This is a sample paragraph.' },
    { type: 'quote', text: 'This is an inspiring quote.' },
    { type: 'image', url: 'image.jpg', alt: 'Image description' },
    { type: 'heading2', text: 'Subtitle' },
    { type: 'paragraph', text: 'Another paragraph here.' }
  ]
};

export default function Home() {
  const htmlFactory = new HTMLFactory();
  const mdFactory = new MDFactory();
  
  const htmlConverter = new ConverterService(htmlFactory);
  const mdConverter = new ConverterService(mdFactory);

  const htmlResult = htmlConverter.convert(sampleData);
  const mdResult = mdConverter.convert(sampleData);

  console.log('=== HTML RESULT ===');
  console.log(htmlResult);
  
  console.log('=== MARKDOWN RESULT ===');
  console.log(mdResult);

  console.log(sampleData)

  return (
    <div style={{ display: 'none' }}>
      <h1>JSON Converter</h1>
      <p>Check the server console to see the results</p>
    </div>
  );
}