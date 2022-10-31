import React from 'react';
import './DrumKit.css';

function DrumKit() {
    function playSound(e) {
        // console.log('event', e, e.keyCode);
        //document.querySelector (or attribute selector) looks for an element with a matching "keyCode"
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Find an element with a class of "key" (.key)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return // stops function if no audio
        else {
            // console.log(audio); // console.logs if audio exists
            audio.currentTime = 0; // rest set audio to beginning 
            audio.play() //plays audio file

            key.classList.add('playing'); // adds a class of "playing" (Vanilla Javascript)
            // key.classList.remove('playing'); // removes a class of "playing" (Vanilla Javascript)
            // key.classList.toggle('playing'); // toggles a class of "playing" (Vanilla Javascript)
            console.log(key); // CL actual key element
            setBg();
            // removeTransition();
        };
    };



    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; // skip if it doesn't exist
        console.log(e.propertyName);
        this.classList.remove('playing'); // remove class "playing"
    };

    const keys = document.querySelectorAll('.key'); // find ALL elements with class of "key"
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // runs function "removeTransition"

    window.addEventListener('keydown', playSound);


    const setBg = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        console.log('randomColor:', randomColor);
        document.body.style = "--main-color:" + "#" + randomColor;
        // HOW TO MASS VARIABLE FROM HTL TO .CSS FILE IN LINK BELOW //
        // http://www.js-craft.io/blog/passing-a-css-variable-value-from-the-html-into-the-css/ 
        // HOW TO GENERATE A RANDOM COLOR AND SAVE IT IN A VARIABLE IN LINK BELOW // 
        // https://css-tricks.com/snippets/javascript/random-hex-color/
    };


    return (
        <>
            <div className="moveDown"></div>

            <h1 className="h1"> DRUM KIT </h1>

            <div className="mainDiv">
                <div className="keys">
                    <div data-key="81" className="key">
                        <kbd>Q</kbd>
                        <span className="sound">Please</span>
                    </div>
                    <div data-key="87" class="key">
                        <kbd>W</kbd>
                        <span class="sound">Hire</span>
                    </div>
                    <div data-key="69" class="key">
                        <kbd>E</kbd>
                        <span class="sound">Me</span>
                    </div>
                    <div data-key="82" class="key">
                        <kbd>R</kbd>
                        <span class="sound">You</span>
                    </div>
                    <div data-key="84" class="key">
                        <kbd>T</kbd>
                        <span class="sound">Wont</span>
                    </div>
                    <div data-key="89" class="key">
                        <kbd>Y</kbd>
                        <span class="sound">Regret</span>
                    </div>
                    <div data-key="85" class="key">
                        <kbd>U</kbd>
                        <span class="sound">It</span>
                    </div>
                </div>

                <div class="keys">
                    <div data-key="65" class="key">
                        <kbd>A</kbd>
                        <span class="sound">clap</span>
                    </div>
                    <div data-key="83" class="key">
                        <kbd>S</kbd>
                        <span class="sound">hihat</span>
                    </div>
                    <div data-key="68" class="key">
                        <kbd>D</kbd>
                        <span class="sound">kick</span>
                    </div>
                    <div data-key="70" class="key">
                        <kbd>F</kbd>
                        <span class="sound">openhat</span>
                    </div>
                    <div data-key="71" class="key">
                        <kbd>G</kbd>
                        <span class="sound">boom</span>
                    </div>
                    <div data-key="72" class="key">
                        <kbd>H</kbd>
                        <span class="sound">ride</span>
                    </div>
                    <div data-key="74" class="key">
                        <kbd>J</kbd>
                        <span class="sound">snare</span>
                    </div>
                    <div data-key="75" class="key">
                        <kbd>K</kbd>
                        <span class="sound">tom</span>
                    </div>
                    <div data-key="76" class="key">
                        <kbd>L</kbd>
                        <span class="sound">tink</span>
                    </div>
                    <div data-key="67" class="key">
                        <kbd>C</kbd>
                        <span class="sound">Siren</span>
                    </div>

                </div>

            </div>

            <audio data-key="81" src="sounds/please.wav"></audio>
            <audio data-key="87" src="sounds/hire.wav"></audio>
            <audio data-key="69" src="sounds/me.wav"></audio>
            <audio data-key="82" src="sounds/you.wav"></audio>
            <audio data-key="84" src="sounds/wont.wav"></audio>
            <audio data-key="89" src="sounds/regret.wav"></audio>
            <audio data-key="85" src="sounds/it.wav"></audio>


            <audio data-key="65" src="sounds/clap.wav"></audio>
            <audio data-key="83" src="sounds/hihat.wav"></audio>
            <audio data-key="68" src="sounds/kick.wav"></audio>
            <audio data-key="70" src="sounds/openhat.wav"></audio>
            <audio data-key="71" src="sounds/boom.wav"></audio>
            <audio data-key="72" src="sounds/ride.wav"></audio>
            <audio data-key="74" src="sounds/snare.wav"></audio>
            <audio data-key="75" src="sounds/tom.wav"></audio>
            <audio data-key="76" src="sounds/tink.wav"></audio>
            <audio data-key="67" src="sounds/airhorn.wav"></audio>

        </>
    )
};

export default DrumKit; 