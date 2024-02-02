let contentList = document.querySelector('.content');
let socials = document.querySelector('.socials')
let bgImgMountains = document.querySelector('.body-bg__item--mountains')
let bgBottomShading = document.querySelector('.body-bg__item--bottom-shading')


window.onload = function() {
    calculateContentMarginRight();
    calculateSocialsMarginLeft();
    calculateBgBottomShadingEdgeBottom();
}

window.addEventListener('resize', function() {
    calculateContentMarginRight();
    calculateSocialsMarginLeft();
    calculateBgBottomShadingEdgeBottom();

}, true)

function calculateContentMarginRight() {
    let contentListMarginRight = calculateElementMargin();
    contentList.style.right = `${contentListMarginRight}px`;
}
function calculateSocialsMarginLeft() {
    let socialsMarginLeft = calculateElementMargin();
    socials.style.left = `${socialsMarginLeft}px`;
}

function calculateElementMargin() {
    let windowScreenWidth = window.innerWidth;
    let elementSideMargin;
    switch (true) {
        // 1760px
        case windowScreenWidth > 1400:
            elementSideMargin = (windowScreenWidth - 1760)/2 + 12;
            break;
        case windowScreenWidth > 1200:
            elementSideMargin = (windowScreenWidth - 1140)/2 + 12;
            break;
        case windowScreenWidth > 992:
            elementSideMargin = (windowScreenWidth - 960)/2 + 12;
            break;
        case windowScreenWidth > 768:
            elementSideMargin = (windowScreenWidth - 720)/2 + 12;
            break;
        case windowScreenWidth > 576:
            elementSideMargin = (windowScreenWidth - 540)/2 + 12;
            break;
    
        default:
            break;
    }
    
    return elementSideMargin;
}

function calculateBgBottomShadingEdgeBottom() {
    let bgImgMountainsMarginTop = parseInt( getComputedStyle(bgImgMountains).top);
    let bgImgMountainsMarginHeight = parseInt( getComputedStyle(bgImgMountains).height);
    let bgBottomShadingHeight = parseInt( getComputedStyle(bgBottomShading).height);
    bgBottomShading.style.transform = 
        `translateY(${bgImgMountainsMarginTop 
            + bgImgMountainsMarginHeight 
            - bgBottomShadingHeight}px)`;
}


