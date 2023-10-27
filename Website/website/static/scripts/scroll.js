document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.infinite-scroll-container');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    leftArrow.addEventListener('mouseover', pauseAnimation);
    leftArrow.addEventListener('mouseout', resumeAnimation);
    leftArrow.addEventListener('click', () => scrollContainerOnClick('left'));

    rightArrow.addEventListener('mouseover', pauseAnimation);
    rightArrow.addEventListener('mouseout', resumeAnimation);
    rightArrow.addEventListener('click', () => scrollContainerOnClick('right'));

    function pauseAnimation() {
      scrollContainer.style.animationPlayState = 'paused';
    }

    function resumeAnimation() {
      scrollContainer.style.animationPlayState = 'running';
    }

    function scrollContainerOnClick(direction) {
        console.log(`Arrow clicked: ${direction}`);
        console.log('Current play state:', scrollContainer.style.animationPlayState);
        
        const originalDuration = getComputedStyle(scrollContainer).animationDuration;
        scrollContainer.style.animationDuration = '1s';  // Setting a shorter duration
    
        scrollContainer.style.animationPlayState = 'running';
    
        if (direction === 'left') {
            scrollContainer.style.animationDirection = 'reverse';
        } else {
            scrollContainer.style.animationDirection = 'normal';
        }
        
        setTimeout(() => {
            scrollContainer.style.animationPlayState = 'paused';
            scrollContainer.style.animationDuration = originalDuration;  // Reverting back to original duration
            scrollContainer.style.animationDirection = 'normal';
        }, 1000);
    }
    
});
