import { newSpecPage } from '@stencil/core/testing';
import { MyCard } from './my-card';

describe('my-card', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyCard],
      html: '<my-card></my-card>',
    });
    expect(root).toEqualHtml(`
      <my-card>
          <div>
            Hello, World!
          </div>
      </my-card>
    `);
  });
});
