"use strict";
const insert = document.getElementById("insert");
window.addEventListener('keydown', (e) => {
    if (insert) {
        insert.innerHTML =
            ` 
    <div class="key">
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
        </div>
        <div class="key">
        ${e.keyCode}
            <small>event.AskeyCode</small>
        </div>
       <div class="key"> 
        ${e.code}
        <small>event.code</small>
       </div>
`;
    }
});
