document.addEventListener('DOMContentLoaded', () => {
    initializeScrolling('.news-coverage', 6, 6, true);
    initializeScrolling('.partnered-libraries', 8, 8, false);
});

function initializeScrolling(sectionSelector, initialLeftArrowPressCount, initialRightArrowPressCount, isNewsCoverage) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const scrollContainer = section.querySelector('.infinite-scroll-container');
    const scrollWrapper = section.querySelector('.infinite-scroll-wrapper');
    const leftArrow = section.querySelector('.arrow.left');
    const rightArrow = section.querySelector('.arrow.right');

    const middlePosition = (scrollContainer.scrollWidth - scrollWrapper.clientWidth) / 2;
    scrollWrapper.scrollLeft = middlePosition;

    let leftArrowPressCount = initialLeftArrowPressCount;
    let rightArrowPressCount = initialRightArrowPressCount;
    let isAnimating = false;

    function updateArrowPositions() {
        const rect = scrollWrapper.getBoundingClientRect();
        leftArrow.style.top = rightArrow.style.top = (rect.top + rect.height / 2) + 'px';
    }

    function handleArrowClick(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const maxPressCount = isNewsCoverage ? 6 : 8;
        const resetLeftPressCount = isNewsCoverage ? 5 : 7;
        const resetRightPressCount = isNewsCoverage ? 7 : 5;

        if (direction === 'left' && leftArrowPressCount > 0) {
            scrollWrapper.scrollBy({ left: -350, behavior: 'smooth' });
            leftArrowPressCount--;
            rightArrowPressCount = Math.min(rightArrowPressCount + 2, maxPressCount - leftArrowPressCount);
        } else if (direction === 'right' && rightArrowPressCount > 0) {
            scrollWrapper.scrollBy({ left: 350, behavior: 'smooth' });
            rightArrowPressCount--;
            leftArrowPressCount = Math.min(leftArrowPressCount + 2, maxPressCount - rightArrowPressCount);
        } else if (direction === 'left') {
            scrollWrapper.scrollLeft = middlePosition;
            scrollWrapper.scrollBy({ left: -350, behavior: 'smooth' });
            leftArrowPressCount = resetLeftPressCount;
            rightArrowPressCount = resetRightPressCount;
        } else if (direction === 'right') {
            scrollWrapper.scrollLeft = middlePosition;
            scrollWrapper.scrollBy({ left: 350, behavior: 'smooth' });
            leftArrowPressCount = resetRightPressCount;
            rightArrowPressCount = resetLeftPressCount;
        }

        // Reset isAnimating flag after animation completes
        setTimeout(() => {
            isAnimating = false;
        }, 400); // Adjust the timeout duration to match your scroll animation duration
    }

    leftArrow.addEventListener('click', () => handleArrowClick('left'));
    rightArrow.addEventListener('click', () => handleArrowClick('right'));

    // Prevent horizontal scrolling with mouse wheel
    document.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            window.scrollBy(0, e.deltaY * 0.5);
        }
    }, { passive: false });

    updateArrowPositions();
    document.addEventListener('scroll', updateArrowPositions);
}
