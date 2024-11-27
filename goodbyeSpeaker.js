// STEP 2: Wrap the entire content in an IIFE
(function (window) {
    const goodbyeSpeaker = {};
  
    // STEP 3: Create a "speak" method to say "Goodbye"
    const speakWord = "Goodbye";
    goodbyeSpeaker.speak = function (name) {
      console.log(`${speakWord} ${name}`);
    };
  
    // STEP 4: Expose the goodbyeSpeaker object to the global scope
    window.goodbyeSpeaker = goodbyeSpeaker;
  })(window);
  