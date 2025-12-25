export function draggable(node, data) {
  let state = data;
  let initialX;
  let initialY;
  let isDragging = false;
  let touchElement = null;
  let clone = null;


  // Set up traditional drag attributes
  node.draggable = true;
  node.style.cursor = 'grab';

  // Traditional mouse events
  function handle_dragstart(e) {
    if (!e.dataTransfer) return;
    e.dataTransfer.setData('text/plain', state);
    node.style.opacity = '0.4';
  }

  function handle_dragend(e) {
    node.style.opacity = '1';
  }

  // Touch events
  function handle_touchstart(e) {
    const touch = e.touches[0];
    initialX = touch.clientX;
    initialY = touch.clientY;
    
    // Create a clone for visual feedback during touch drag
    clone = node.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.opacity = '0.6';
    clone.style.pointerEvents = 'none';
    clone.style.zIndex = '1000';
    clone.style.width = `${node.offsetWidth}px`;
    clone.style.height = `${node.offsetHeight}px`;
    clone.style.left = `${initialX - node.offsetWidth / 2}px`;
    clone.style.top = `${initialY - node.offsetHeight / 2}px`;
    
    document.body.appendChild(clone);
    touchElement = node;
    
    // Prevent scrolling while dragging
    e.preventDefault();
  }

  function handle_touchmove(e) {
    if (!touchElement || !clone) return;
    
    const touch = e.touches[0];
    const currentX = touch.clientX;
    const currentY = touch.clientY;
    
    // Update clone position
    clone.style.left = `${currentX - node.offsetWidth / 2}px`;
    clone.style.top = `${currentY - node.offsetHeight / 2}px`;
    
    isDragging = true;
    
    // Find potential drop targets
    const potentialDropTargets = document.querySelectorAll('[data-dropzone="true"]');
    let isOverDropzone = false;
    
    potentialDropTargets.forEach(target => {
      const rect = target.getBoundingClientRect();
      if (
        currentX >= rect.left && 
        currentX <= rect.right && 
        currentY >= rect.top && 
        currentY <= rect.bottom
      ) {
        // Add visual feedback
        target.classList.add('droppable');
        isOverDropzone = true;
      } else {
        target.classList.remove('droppable');
      }
    });
    
    // Prevent scrolling while dragging
    e.preventDefault();
  }

  function handle_touchend(e) {
    if (!isDragging || !clone) {
      if (clone) {
        document.body.removeChild(clone);
      }
      isDragging = false;
      touchElement = null;
      clone = null;
      return;
    }
    
    const touch = e.changedTouches[0];
    const currentX = touch.clientX;
    const currentY = touch.clientY;
    
    // Find the dropzone element under the touch point
    const potentialDropTargets = document.querySelectorAll('[data-dropzone="true"]');
    potentialDropTargets.forEach(target => {
      const rect = target.getBoundingClientRect();
      if (
        currentX >= rect.left && 
        currentX <= rect.right && 
        currentY >= rect.top && 
        currentY <= rect.bottom
      ) {
        // Trigger custom drop event
        const customEvent = new CustomEvent('custom:drop', {
          detail: {
            data: state,
            sourceElement: node,
            originalEvent: e
          }
        });
        target.dispatchEvent(customEvent);
        target.classList.remove('droppable');
      } else {
        target.classList.remove('droppable');
      }
    });
    
    // Clean up
    document.body.removeChild(clone);
    isDragging = false;
    touchElement = null;
    clone = null;
  }

  node.addEventListener('dragstart', handle_dragstart);
  node.addEventListener('dragend', handle_dragend);
  node.addEventListener('touchstart', handle_touchstart, { passive: false });
  document.addEventListener('touchmove', handle_touchmove, { passive: false });
  document.addEventListener('touchend', handle_touchend);

  return {
    update(data) {
      state = data;
    },

    destroy() {
      node.removeEventListener('dragstart', handle_dragstart);
      node.removeEventListener('dragend', handle_dragend);
      node.removeEventListener('touchstart', handle_touchstart);
      document.removeEventListener('touchmove', handle_touchmove);
      document.removeEventListener('touchend', handle_touchend);
      
      if (clone && clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }
    }
  };
}

export function dropzone(node, options) {
  let state = {
    dropEffect: 'move',
    dragover_class: 'droppable',
    ...options
  };

  // Add attribute for touch detection
  node.setAttribute('data-dropzone', 'true');

  // Traditional mouse events
  function handle_dragenter(e) {
    if (!(e.target instanceof HTMLElement)) return;
    e.target.classList.add(state.dragover_class);
  }

  function handle_dragleave(e) {
    if (!(e.target instanceof HTMLElement)) return;
    e.target.classList.remove(state.dragover_class);
  }

  function handle_dragover(e) {
    e.preventDefault();
    if (!e.dataTransfer) return;
    e.dataTransfer.dropEffect = state.dropEffect;
  }

  function handle_drop(e) {
    e.preventDefault();
    if (!e.dataTransfer) return;
    const data = e.dataTransfer.getData('text/plain');
    if (!(e.target instanceof HTMLElement)) return;
    e.target.classList.remove(state.dragover_class);
    state.on_dropzone(data, e);
  }

  // Touch event handler
  function handle_custom_drop(e) {
    const { data, sourceElement, originalEvent } = e.detail;
    state.on_dropzone(data, originalEvent, sourceElement);
  }

  node.addEventListener('dragenter', handle_dragenter);
  node.addEventListener('dragleave', handle_dragleave);
  node.addEventListener('dragover', handle_dragover);
  node.addEventListener('drop', handle_drop);
  node.addEventListener('custom:drop', handle_custom_drop);

  return {
    update(options) {
      state = {
        dropEffect: 'move',
        dragover_class: 'droppable',
        ...options
      };
    },

    destroy() {
      node.removeAttribute('data-dropzone');
      node.removeEventListener('dragenter', handle_dragenter);
      node.removeEventListener('dragleave', handle_dragleave);
      node.removeEventListener('dragover', handle_dragover);
      node.removeEventListener('drop', handle_drop);
      node.removeEventListener('custom:drop', handle_custom_drop);
    }
  };
}