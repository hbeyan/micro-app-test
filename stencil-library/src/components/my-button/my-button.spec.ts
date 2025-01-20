import { newSpecPage } from '@stencil/core/testing';
import { MyButton } from './my-button';

describe('my-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyButton],
      html: '<my-button></my-button>',
    });
    expect(root).toEqualHtml(`
      <my-button>
          <div>
            Hello, World! I'm
          </div>
      </my-button>
    `);
  });
});
