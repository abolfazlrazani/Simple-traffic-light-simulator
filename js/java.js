let currentLight = 0; // 0: red, 1: yellow, 2: green  
const lights = [document.getElementById('red'), document.getElementById('yellow'), document.getElementById('green')];  

function changeLight() {  
    // خاموش کردن همه چراغ‌ها  
    lights.forEach(light => light.classList.remove('red', 'yellow', 'green'));  

    // روشن کردن چراغ فعلی  
    if (currentLight === 0) {  
        lights[0].classList.add('red');  
        currentLight = 1;  
        setTimeout(changeLight, 20000); // 1. Red color timer 20 seconds
    } else if (currentLight === 1) {  
        lights[1].classList.add('yellow');  
        currentLight = 2;  
        setTimeout(changeLight, 9000); // 2. yellow color timer 9 seconds
    } else {  
        lights[2].classList.add('green');  
        currentLight = 0;  
        setTimeout(changeLight, 15000); // 3. green color timer 15 seconds
    }  
}  
changeLight();