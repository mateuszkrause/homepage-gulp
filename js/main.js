!function(n){var c={};function l(e){if(c[e])return c[e].exports;var r=c[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=n,l.c=c,l.d=function(n,c,e){l.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:e})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,c){if(1&c&&(n=l(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var r in n)l.d(e,r,function(c){return n[c]}.bind(null,r));return e},l.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(c,"a",c),c},l.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},l.p="",l(l.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconsole.log('Hej!');\r\nconst name = 'Mateusz Krause';\r\nconst age = 27;\r\nconsole.log(name);\r\nconsole.log(age);\r\n\r\nconsole.log(`Nazywam się ${name} i mam ${age} lat`);\r\n\r\nconsole.log('Gdzie mi tu zaglądasz pod s..tronę?');\r\n\r\nconst about = document.querySelector('.about__paragraph--js');\r\nconsole.log(about.innerHTML);\r\n\r\nabout.innerHTML = `Nazywam się <strong>${name}</strong> i mam ${age} lat`;\r\n\r\nconst paragraphs = document.querySelectorAll('p');\r\nconsole.log(paragraphs);\r\nconsole.log(paragraphs[3]);\r\n\r\nif (true) {\r\n  console.log('To prawda!');\r\n}\r\n\r\nif (age > 20) {\r\n  console.log('Masz więcej niż 20 lat');\r\n} else {\r\n  console.log('Masz mniej niż 20 lat');\r\n}\r\nswitch (age) {\r\n  case 20:\r\n    console.log('Masz równo 20 lat');\r\n    break;\r\n  case 30:\r\n    console.log('Masz równo 30 lat');\r\n    break;\r\n  default:\r\n    console.log(`Masz ${age} lat`);\r\n    break;\r\n}\r\n\r\nlet oldIndicator;\r\nif (age > 70) {\r\n  oldIndicator = 'yes';\r\n} else {\r\n  oldIndicator = 'no';\r\n}\r\nconsole.log(oldIndicator);\r\n\r\nconst amIOld = (age > 70) ? 'yes' : 'no';\r\nconsole.log(amIOld);\r\n\r\nfunction calculate(x) {\r\n  x = x + 3;\r\n  console.log(`Tradycyjnie: ${x}`);\r\n  return x * 7;\r\n}\r\n\r\nconsole.log(calculate(2));\r\n\r\nconst calculateFat = x => (x + 3) * 7;\r\n\r\nconsole.log(calculateFat(2));\r\n\r\nfunction welcome(x, y) {\r\n  console.log(`Cześć ${x}! Masz ${y} lat, prawda?`);\r\n}\r\nwelcome(\"Andrzej\", 37);\r\n\r\nconst button = document.querySelector('.main__button--js');\r\nconsole.log(button);\r\nfunction handleClick(e) {\r\n  console.log(e);\r\n  console.log('Halo!');\r\n}\r\nbutton.addEventListener('click', handleClick);\r\nbutton.addEventListener('click', (e) => {\r\n  console.log(e.target);\r\n  console.log('Halo arrow function!');\r\n});\r\nbutton.addEventListener('click', (e) => {\r\n  const header = document.querySelector('.main__heading--js');\r\n  header.innerHTML = 'Klik!';\r\n  header.classList.toggle('main__heading--red');\r\n\r\n  if (header.classList.contains('main__heading--red')) {\r\n    console.log('Jest klasa \"main__heading--red\".');\r\n  } else {\r\n    console.log('Brak klasy \"main__heading--red\".')\r\n  }\r\n});\r\n\r\nconst navigationSwitcher = document.querySelector('.navigation__switcher--js');\r\nnavigationSwitcher.addEventListener('click', (e) => {\r\n  const navigationList = document.querySelector('.navigation__list--js');\r\n  navigationList.classList.toggle('navigation__list--visible');\r\n  if (navigationList.classList.contains('navigation__list--visible')) {\r\n    navigationSwitcher.innerHTML = '&#10005';\r\n  } else {\r\n  navigationSwitcher.innerHTML = '&#9776';\r\n  }\r\n});\r\n\r\nconst faces = ['😊','😂','🤣'];\r\n\r\nfor (let i = 0; i <faces.length; i++) {\r\n  console.log ([i+1] + ': ' + faces[i]);\r\n  console.log (`${i+1} element tablicy: ${faces[i]}`);\r\n}\r\n\r\nfor (let face of faces){\r\n  console.log(face);\r\n}\r\n\r\nconst person = {\r\n  name: 'Mateusz',\r\n  age: 27\r\n}\r\nfor (let property in person){\r\n  console.log (`${property}: ${person[property]}`);\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsS0FBSyxTQUFTLElBQUk7O0FBRTdDOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDLEtBQUssa0JBQWtCLElBQUk7O0FBRXBFO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQXNCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLEVBQUUsU0FBUyxFQUFFO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQSxrQkFBa0IsSUFBSSxvQkFBb0IsU0FBUztBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLElBQUksaUJBQWlCO0FBQ2hEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5jb25zb2xlLmxvZygnSGVqIScpO1xyXG5jb25zdCBuYW1lID0gJ01hdGV1c3ogS3JhdXNlJztcclxuY29uc3QgYWdlID0gMjc7XHJcbmNvbnNvbGUubG9nKG5hbWUpO1xyXG5jb25zb2xlLmxvZyhhZ2UpO1xyXG5cclxuY29uc29sZS5sb2coYE5henl3YW0gc2nEmSAke25hbWV9IGkgbWFtICR7YWdlfSBsYXRgKTtcclxuXHJcbmNvbnNvbGUubG9nKCdHZHppZSBtaSB0dSB6YWdsxIVkYXN6IHBvZCBzLi50cm9uxJk/Jyk7XHJcblxyXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fcGFyYWdyYXBoLS1qcycpO1xyXG5jb25zb2xlLmxvZyhhYm91dC5pbm5lckhUTUwpO1xyXG5cclxuYWJvdXQuaW5uZXJIVE1MID0gYE5henl3YW0gc2nEmSA8c3Ryb25nPiR7bmFtZX08L3N0cm9uZz4gaSBtYW0gJHthZ2V9IGxhdGA7XHJcblxyXG5jb25zdCBwYXJhZ3JhcGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncCcpO1xyXG5jb25zb2xlLmxvZyhwYXJhZ3JhcGhzKTtcclxuY29uc29sZS5sb2cocGFyYWdyYXBoc1szXSk7XHJcblxyXG5pZiAoJ2phdmFzY3JpcHQnICE9ICdqYXZhJykge1xyXG4gIGNvbnNvbGUubG9nKCdUbyBwcmF3ZGEhJyk7XHJcbn1cclxuXHJcbmlmIChhZ2UgPiAyMCkge1xyXG4gIGNvbnNvbGUubG9nKCdNYXN6IHdpxJljZWogbmnFvCAyMCBsYXQnKTtcclxufSBlbHNlIHtcclxuICBjb25zb2xlLmxvZygnTWFzeiBtbmllaiBuacW8IDIwIGxhdCcpO1xyXG59XHJcbnN3aXRjaCAoYWdlKSB7XHJcbiAgY2FzZSAyMDpcclxuICAgIGNvbnNvbGUubG9nKCdNYXN6IHLDs3dubyAyMCBsYXQnKTtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgMzA6XHJcbiAgICBjb25zb2xlLmxvZygnTWFzeiByw7N3bm8gMzAgbGF0Jyk7XHJcbiAgICBicmVhaztcclxuICBkZWZhdWx0OlxyXG4gICAgY29uc29sZS5sb2coYE1hc3ogJHthZ2V9IGxhdGApO1xyXG4gICAgYnJlYWs7XHJcbn1cclxuXHJcbmxldCBvbGRJbmRpY2F0b3I7XHJcbmlmIChhZ2UgPiA3MCkge1xyXG4gIG9sZEluZGljYXRvciA9ICd5ZXMnO1xyXG59IGVsc2Uge1xyXG4gIG9sZEluZGljYXRvciA9ICdubyc7XHJcbn1cclxuY29uc29sZS5sb2cob2xkSW5kaWNhdG9yKTtcclxuXHJcbmNvbnN0IGFtSU9sZCA9IChhZ2UgPiA3MCkgPyAneWVzJyA6ICdubyc7XHJcbmNvbnNvbGUubG9nKGFtSU9sZCk7XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGUoeCkge1xyXG4gIHggPSB4ICsgMztcclxuICBjb25zb2xlLmxvZyhgVHJhZHljeWpuaWU6ICR7eH1gKTtcclxuICByZXR1cm4geCAqIDc7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGNhbGN1bGF0ZSgyKSk7XHJcblxyXG5jb25zdCBjYWxjdWxhdGVGYXQgPSB4ID0+ICh4ICsgMykgKiA3O1xyXG5cclxuY29uc29sZS5sb2coY2FsY3VsYXRlRmF0KDIpKTtcclxuXHJcbmZ1bmN0aW9uIHdlbGNvbWUoeCwgeSkge1xyXG4gIGNvbnNvbGUubG9nKGBDemXFm8SHICR7eH0hIE1hc3ogJHt5fSBsYXQsIHByYXdkYT9gKTtcclxufVxyXG53ZWxjb21lKFwiQW5kcnplalwiLCAzNyk7XHJcblxyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fYnV0dG9uLS1qcycpO1xyXG5jb25zb2xlLmxvZyhidXR0b24pO1xyXG5mdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XHJcbiAgY29uc29sZS5sb2coZSk7XHJcbiAgY29uc29sZS5sb2coJ0hhbG8hJyk7XHJcbn1cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICBjb25zb2xlLmxvZygnSGFsbyBhcnJvdyBmdW5jdGlvbiEnKTtcclxufSk7XHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2hlYWRpbmctLWpzJyk7XHJcbiAgaGVhZGVyLmlubmVySFRNTCA9ICdLbGlrISc7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ21haW5fX2hlYWRpbmctLXJlZCcpO1xyXG5cclxuICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnbWFpbl9faGVhZGluZy0tcmVkJykpIHtcclxuICAgIGNvbnNvbGUubG9nKCdKZXN0IGtsYXNhIFwibWFpbl9faGVhZGluZy0tcmVkXCIuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdCcmFrIGtsYXN5IFwibWFpbl9faGVhZGluZy0tcmVkXCIuJylcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgbmF2aWdhdGlvblN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX3N3aXRjaGVyLS1qcycpO1xyXG5uYXZpZ2F0aW9uU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2xpc3QtLWpzJyk7XHJcbiAgbmF2aWdhdGlvbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9fbGlzdC0tdmlzaWJsZScpO1xyXG4gIGlmIChuYXZpZ2F0aW9uTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmlnYXRpb25fX2xpc3QtLXZpc2libGUnKSkge1xyXG4gICAgbmF2aWdhdGlvblN3aXRjaGVyLmlubmVySFRNTCA9ICcmIzEwMDA1JztcclxuICB9IGVsc2Uge1xyXG4gIG5hdmlnYXRpb25Td2l0Y2hlci5pbm5lckhUTUwgPSAnJiM5Nzc2JztcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgZmFjZXMgPSBbJ/CfmIonLCfwn5iCJywn8J+koyddO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPGZhY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29uc29sZS5sb2cgKFtpKzFdICsgJzogJyArIGZhY2VzW2ldKTtcclxuICBjb25zb2xlLmxvZyAoYCR7aSsxfSBlbGVtZW50IHRhYmxpY3k6ICR7ZmFjZXNbaV19YCk7XHJcbn1cclxuXHJcbmZvciAobGV0IGZhY2Ugb2YgZmFjZXMpe1xyXG4gIGNvbnNvbGUubG9nKGZhY2UpO1xyXG59XHJcblxyXG5jb25zdCBwZXJzb24gPSB7XHJcbiAgbmFtZTogJ01hdGV1c3onLFxyXG4gIGFnZTogMjdcclxufVxyXG5mb3IgKGxldCBwcm9wZXJ0eSBpbiBwZXJzb24pe1xyXG4gIGNvbnNvbGUubG9nIChgJHtwcm9wZXJ0eX06ICR7cGVyc29uW3Byb3BlcnR5XX1gKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);