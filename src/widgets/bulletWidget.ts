import { Decoration, WidgetType } from '@codemirror/view';

export class BulletWidget extends WidgetType {
  eq() {
    return true;
  }
  toDOM() {
    const span = document.createElement('span');
    span.className = 'cm-list-bullet cm-list-mark';
    span.textContent = '•';
    return span;
  }
}

export const bulletDecoration = Decoration.replace({ widget: new BulletWidget() });
