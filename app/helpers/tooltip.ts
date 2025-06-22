export class Tooltip {
  private element: HTMLElement;
  private description: string;
  private tooltipElement: HTMLDivElement | null = null;
  private isVisible: boolean = false;

  constructor(element: HTMLElement | string, description: string) {
    if (typeof element === 'string') {
      const foundElement = document.querySelector(element) as HTMLElement;
      if (!foundElement) {
        throw new Error(`Element with selector "${element}" not found`);
      }
      this.element = foundElement;
    } else {
      this.element = element;
    }

    this.description = description;
    this.init();
  }

  private init(): void {
    if (!this.element.hasAttribute('data-title')) {
      this.element.setAttribute('data-title', this.description);
    }

    this.element.addEventListener('mouseenter', this.showTooltip.bind(this));
    this.element.addEventListener('mouseleave', this.hideTooltip.bind(this));
    this.element.addEventListener('mousemove', this.updatePosition.bind(this));
  }

  private createTooltipElement(): HTMLDivElement {
    const tooltip = document.createElement('div');
    tooltip.className = `
      absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 
      rounded-lg shadow-sm tooltip pointer-events-none transition-opacity 
      duration-300 opacity-0 max-w-xs break-words
    `.trim().replace(/\s+/g, ' ');
    
    tooltip.textContent = this.description;
    
    const arrow = document.createElement('div');
    arrow.className = `
      absolute top-full left-1/2 transform -translate-x-1/2 
      border-4 border-transparent border-t-gray-900
    `.trim().replace(/\s+/g, ' ');
    
    tooltip.appendChild(arrow);
    
    return tooltip;
  }

  private showTooltip(event: MouseEvent): void {
    if (this.isVisible) return;

    this.tooltipElement = this.createTooltipElement();
    document.body.appendChild(this.tooltipElement);

    this.updatePosition(event);

    requestAnimationFrame(() => {
      if (this.tooltipElement) {
        this.tooltipElement.classList.remove('opacity-0');
        this.tooltipElement.classList.add('opacity-100');
      }
    });

    this.isVisible = true;
  }

  private hideTooltip(): void {
    if (!this.isVisible || !this.tooltipElement) return;
    this.tooltipElement.classList.remove('opacity-100');
    this.tooltipElement.classList.add('opacity-0');    
    this.tooltipElement?.parentNode?.removeChild(this.tooltipElement);
    this.tooltipElement = null;
    this.isVisible = false;
  }

  private updatePosition(event: MouseEvent): void {
    if (!this.tooltipElement) return;

    const tooltip = this.tooltipElement;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    
    const tooltipRect = tooltip.getBoundingClientRect();
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;
    
    let left = mouseX + scrollX - (tooltipWidth / 2);
    let top = mouseY + scrollY - tooltipHeight - 10;

    const windowWidth = window.innerWidth;
    if (left < 0) {
      left = 10;
    } else if (left + tooltipWidth > windowWidth) {
      left = windowWidth - tooltipWidth - 10;
    }

    if (top < scrollY) {
      top = mouseY + scrollY + 10;
      const arrow = tooltip.querySelector('div') as HTMLDivElement;
      if (arrow) {
        arrow.className = `
          absolute bottom-full left-1/2 transform -translate-x-1/2 
          border-4 border-transparent border-b-gray-900
        `.trim().replace(/\s+/g, ' ');
      }
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  public destroy(): void {
    this.element.removeEventListener('mouseenter', this.showTooltip.bind(this));
    this.element.removeEventListener('mouseleave', this.hideTooltip.bind(this));
    this.element.removeEventListener('mousemove', this.updatePosition.bind(this));
    
    if (this.tooltipElement && this.tooltipElement.parentNode) {
      this.tooltipElement.parentNode.removeChild(this.tooltipElement);
    }
  }
}
