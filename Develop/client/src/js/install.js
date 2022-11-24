const butInstall = document.getElementById('buttonInstall');
let promptDeffered

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    promptDeffered = event;
    butInstall.classList.toggle('hidden', fasle);
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (promptDeffered !== null){
        promptDeffered.prompt();
        const{outcome} = await promptDeffered.userChoice;

        if (outcome === "accepted"){
            promptDeffered = null;
            butInstall.classList.toggle("hidden", true);
        }
        console.log(`User response to the install prompt: ${outcome}`);
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.classList.toggle("hidden", true);
    promptDeffered = null;
});
