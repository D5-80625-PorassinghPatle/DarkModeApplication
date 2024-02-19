document.addEventListener("DOMContentLoaded",function(){
    const darkModeToggle =document.getElementById("darkModeToggle");
    const isDarkModePreffered=window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;

    function toggleDarkMode(){
        document.body.classList.toggle("dark-mode");
    }

    if(isDarkModePreffered){
        document.body.classList.toggle("dark-mode");

    }

    darkModeToggle.addEventListener("click",function(){
        toggleDarkMode();
        
    })
})