import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: false,
  scoped: true,
})
export class MyCard {
  render() {
    return (
      <Host>
        <slot name="header" />
        <div class="wrapper">
          <slot />
        </div>
        <slot name="footer" />
      </Host>
    );
  }
}
