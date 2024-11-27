// STEP 2: Wrap the entire content in an IIFE
(function (window) {
    const helloSpeaker = {};
  
    // STEP 3: Create a "speak" method to say "Hello"
    const speakWord = "Hello";
    helloSpeaker.speak = function (name) {
      console.log(`${speakWord} ${name}`);
    };
  
    // STEP 4: Expose the helloSpeaker object to the global scope
    window.helloSpeaker = helloSpeaker;
  })(window);
  