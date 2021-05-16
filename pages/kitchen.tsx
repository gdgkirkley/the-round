import Button from 'components/common/Button';

const Kitchen: React.FC = () => (
  <div>
    <h1>Kitchen</h1>
    <p>
      Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Suspendisse suscipit facilisis tellus,
      eget ullamcorper quam aliquet in. Donec id nisl nibh. Vivamus viverra aliquet purus, nec posuere nunc. Maecenas
      mattis <a href="/">ligula libero</a>, eget consequat nulla fermentum ac. Phasellus pellentesque felis et urna
      sollicitudin euismod. Proin ultricies aliquet mi eu dignissim. <i>Donec cursus eget leo sit amet imperdiet.</i>{' '}
      Mauris urna nibh, consectetur id porttitor eu, tincidunt vel nisl. Praesent laoreet commodo risus, et commodo orci
      aliquet sed. Quisque purus justo, tempus sed porta a, aliquam sed tellus. Ut commodo vehicula ligula, ut finibus
      purus faucibus id. Mauris non ligula pulvinar, scelerisque diam a, ullamcorper nisi.
    </p>
    <h2>Kitchen</h2>
    <h3>Kitchen</h3>
    <h4>Kitchen</h4>
    <h5>Kitchen</h5>
    <h6>Kitchen</h6>
    <hr />
    <blockquote>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit facilisis tellus, eget ullamcorper
      quam aliquet in. Donec id nisl nibh. Vivamus viverra aliquet purus, nec posuere nunc. Maecenas mattis ligula
      libero, eget consequat nulla fermentum ac. Phasellus pellentesque felis et urna sollicitudin euismod. Proin
      ultricies aliquet mi eu dignissim. Donec cursus eget leo sit amet imperdiet. Mauris urna nibh, consectetur id
      porttitor eu, tincidunt vel nisl. Praesent laoreet commodo risus, et commodo orci aliquet sed. Quisque purus
      justo, tempus sed porta a, aliquam sed tellus. Ut commodo vehicula ligula, ut finibus purus faucibus id. Mauris
      non ligula pulvinar, scelerisque diam a, ullamcorper nisi.
    </blockquote>

    <ul>
      <li>Test</li>
      <li>Testy</li>
      <li>Tester</li>
    </ul>

    <Button type="button" role="button" size="small" inline={true}>
      Grey Small
    </Button>
    <Button type="button" role="button" color="primary" inline={true}>
      Primary Medium
    </Button>
    <Button type="button" role="button" color="accent" size="large">
      Accent Large
    </Button>
    <Button type="button" role="button" color="accent" size="large" disabled={true}>
      Accent Large Disabled
    </Button>
    <Button type="button" role="button" color="warning">
      Warning
    </Button>
    <div style={{ background: 'yellow' }}>
      <Button type="button" role="button" color="transparent">
        Transparent
      </Button>
    </div>
    <Button type="button" role="button" color="primary" inline={true} onClick={() => console.log('Clicked!')}>
      Primary With On Click
    </Button>
  </div>
);

export default Kitchen;
