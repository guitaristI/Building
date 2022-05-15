const selectedLocation = document.querySelector(".selected-location");
const selectedProperties = document.querySelector(".selected-properties");
const selectedPrice = document.querySelector(".selected-price");

const btn = document.querySelector('.form-main__link-location')
const btn2 = document.querySelector('.form-main__link-properties')
const btn3 = document.querySelector('.form-main__link-price')

const optionsContainer = document.querySelector(".options-container");
const optionsContainer2 = document.querySelector(".options-container-2");
const optionsContainer3 = document.querySelector(".options-container-3");

const optionsList = document.querySelectorAll(".option");
const optionsListProperties = document.querySelectorAll(".option-properties");
const optionsListPrice = document.querySelectorAll(".option-price");

btn.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});
btn2.addEventListener("click", () => {
    optionsContainer2.classList.toggle("active");
});
btn3.addEventListener("click", () => {
    optionsContainer3.classList.toggle("active");
});



selectedLocation.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});
selectedProperties.addEventListener("click", () => {
    optionsContainer2.classList.toggle("active");
});
selectedPrice.addEventListener("click", () => {
    optionsContainer3.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selectedLocation.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

optionsListProperties.forEach(o => {
    o.addEventListener("click", () => {
        selectedProperties.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer2.classList.remove("active");
    });
  });

  optionsListPrice.forEach(o => {
    o.addEventListener("click", () => {
        selectedPrice.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer3.classList.remove("active");
    });
  });




  
(function (){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }else {
            header.classList.remove('header_active');
        }
    };
}());





(function() {
    const burgerItem  = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem  = document.querySelector('.header__nav-close');
    const menuClose = document.querySelector('.header__list');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu_active')
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__menu_active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__menu_active')
    });
}())


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        target.classList.add('active')
        tab.classList.add('active')
    })
})


(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


