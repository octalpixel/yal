import { invoke } from '@tauri-apps/api';
import type { WindowManager } from '@tauri-apps/api/window';
import { setInputText } from 'state/input';
import { results } from 'state/results';
import { tailwindClasses } from 'state/theme';
import {
  ARROW_DOWN_KEY_CODE,
  ARROW_UP_KEY_CODE,
  ESCAPE_KEY_CODE,
  RETURN_KEY_CODE,
} from 'utils/constants';
import { pluginActions } from 'utils/plugin-actions';

export const disableMouseOnResults = () => {
  const results = document.querySelectorAll<HTMLElement>(
    '[data-id="result-item"]'
  );
  results.forEach((x) => (x.style.pointerEvents = 'none'));
};

export const enableMouseOnResults = () => {
  const results = document.querySelectorAll<HTMLElement>(
    '[data-id="result-item"]'
  );
  results.forEach((x) => x.style.removeProperty('pointer-events'));
};

export const handleKeydown =
  (appWindow: WindowManager) =>
  async (event: KeyboardEvent): Promise<void> => {
    const highlightClasses = tailwindClasses()['highlight'].split(' ');
    disableMouseOnResults();
    if (event.code === ESCAPE_KEY_CODE || event.key === ESCAPE_KEY_CODE) {
      event.preventDefault();
      setInputText('');
      await invoke('app_hide_show', { forceHide: true });
      return;
    }

    const resultItems = document.querySelectorAll('[data-id="result-item"]');
    const indexOfHighlight = Array.from(resultItems).findIndex((x) =>
      x.classList.contains('highlight')
    );

    if (event.code === RETURN_KEY_CODE) {
      const highlight = Array.from(resultItems).find((x) =>
        x.classList.contains('highlight')
      );
      const index = Array.from(highlight.parentNode.children).findIndex(
        (node) => node === highlight
      );
      const headingNode = highlight.parentNode.parentNode.querySelector(
        '[data-id="result-heading"]'
      );

      const heading = headingNode.getAttribute('data-plugin-name');
      const resultsState = results();
      const result = resultsState[heading].state()[index];

      resultsState[heading].action?.({
        item: result,
        pluginActions,
        store: resultsState[heading].store,
      });
      
      if (!resultsState[heading].keepOpen) {
        setInputText('');
        await invoke('app_hide_show', { forceHide: true });
      }

      return;
    }

    if (
      event.code === ARROW_DOWN_KEY_CODE ||
      event.key === ARROW_DOWN_KEY_CODE
    ) {
      event.preventDefault();
      const target =
        indexOfHighlight === resultItems.length - 1
          ? resultItems[0]
          : resultItems[indexOfHighlight + 1];

      if (target) {
        const event = new Event('mouseenter');
        target.dispatchEvent(event);
      }
      scrollHandler(target);
    }

    if (event.code === ARROW_UP_KEY_CODE || event.key === ARROW_UP_KEY_CODE) {
      event.preventDefault();
      const target =
        indexOfHighlight === 0
          ? resultItems[resultItems.length - 1]
          : resultItems[indexOfHighlight - 1];
      if (target) {
        const event = new Event('mouseenter');
        target.dispatchEvent(event);
      }
      scrollHandler(target);
    }
  };

function scrollHandler(domNode: Element) {
  if (domNode instanceof Element) {
    domNode?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
}
