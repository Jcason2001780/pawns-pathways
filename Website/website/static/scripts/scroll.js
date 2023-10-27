document.addEventListener('DOMContentLoaded', () => {
    initializeScrolling('.news-coverage');
    initializeScrolling('.partnered-libraries');
});

function initializeScrolling(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const scrollContainer = section.querySelector('.infinite-scroll-container');
    const scrollWrapper = section.querySelector('.infinite-scroll-wrapper');
    const leftArrow = section.querySelector('.arrow.left');
    const rightArrow = section.querySelector('.arrow.right');

    const middlePosition = (scrollContainer.scrollWidth - scrollWrapper.clientWidth) / 2;
    scrollWrapper.scrollLeft = middlePosition;

    let leftArrowPressCount = 4;
    let rightArrowPressCount = 4;

    function updateArrowPositions() {
        const rect = scrollWrapper.getBoundingClientRect();
        leftArrow.style.top = rightArrow.style.top = (rect.top + rect.height / 2) + 'px';
    }

    function handleArrowClick(direction) {
        if (direction === 'left' && leftArrowPressCount > 0) {
            scrollWrapper.scrollBy({ left: -350, behavior: 'smooth' });
            leftArrowPressCount--;
            rightArrowPressCount = Math.min(rightArrowPressCount + 2, 8 - leftArrowPressCount);
        } else if (direction === 'right' && rightArrowPressCount > 0) {
            scrollWrapper.scrollBy({ left: 350, behavior: 'smooth' });
            rightArrowPressCount--;
            leftArrowPressCount = Math.min(leftArrowPressCount + 2, 8 - rightArrowPressCount);
        }
    }

    leftArrow.addEventListener('click', () => handleArrowClick('left'));
    rightArrow.addEventListener('click', () => handleArrowClick('right'));

    // Prevent horizontal scrolling with mouse wheel
    scrollWrapper.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            scrollWrapper.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    }, { passive: false });

    // Update the arrow positions initially and whenever the user scrolls
    updateArrowPositions();
    document.addEventListener('scroll', updateArrowPositions);
}
