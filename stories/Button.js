import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor = null, size, label = 'Primary', onClick, icon }) => {
  const mode = primary ? 'btn--primary' : 'btn--secondary';

  return html`
    <button
      type="button"
      class=${['btn', `btn--${size || 'medium'}`, `icon--${icon || 'none'}`, mode].join(' ')}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
      <span class="icon--${icon || 'none'}">&nbsp;</span>
    </button>
  `;
};