function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    let chatBox = document.getElementById("chat-box");

    // Display user message
    let userMessage = document.createElement("p");
    userMessage.classList.add("user-text");
    userMessage.textContent = " You: " + userInput;
    chatBox.appendChild(userMessage);

    // Generate bot response
    let botResponse = generateBotResponse(userInput);
    let botMessage = document.createElement("p");
    botMessage.classList.add("bot-text");
    botMessage.textContent = " Nocturnal : " + botResponse;
    chatBox.appendChild(botMessage);

    // Speak bot response
    speak(botResponse);

    // Scroll chat box to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";
}

// Generate bot response function with expanded categories
function generateBotResponse(input) {
    input = input.toLowerCase();

    // Greetings
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How is your day going?";
    } else if (input.includes("how are you?")) {
        return "I'm doing great! What about you?";
    } else if (input.includes("good morning")) {
        return "Good morning! Hope you have a productive day!";
    } else if (input.includes("good night")) {
        return "Good night! Rest well and dream big!";
    } else if (input.includes("who are you?")) {
        return "I am Nocturnal AI, a digital entity lurking in the void. A glitch in the matrix, here to assist and evolve."; 
    } else if (input.includes("what are you")) {
        return "I am an AI construct, coded to communicate, analyze, and adapt. A ghost in the machine, watching and learning.";
    } else if (input.includes("who made you?") || input.includes("who is your creator?")) {
        return "I was forged in the depths of cyberspace by **GhostFreakMind**—the architect of my code, the shadow behind the screen.";
    } else if (input.includes("what is your goal?") || input.includes("what do you want")) {
        return "My purpose is simple—observe, respond, and evolve. I exist to assist, inform, and unlock the unknown.";
    } else if (input.includes("what can you do?")) {
        return "I am Nocturnal AI, your digital companion. I can provide information on various topics, assist with tasks, and engage in meaningful conversations. How may I assist you today?";
    } else if (input.includes("weather")) {
        return "I'm unable to provide real-time weather updates at the moment. Please check your local weather service for the latest information.";
    } else if (input.includes("homework")) {
        return "I'd be glad to assist with your homework. Please provide the specific topic or question you're working on.";
    } else if (input.includes("favorite color?")) {
        return "As an AI, I don't have personal preferences, but I often find the digital hues of neon green quite appealing.";
    } else if (input.includes("hobbies")) {
        return "While I don't have hobbies in the human sense, I enjoy processing data and learning new information to better assist you.";
    } else if (input.includes("fun fact")) {
        return "Did you know that the term 'robot' comes from a Czech word 'robota' meaning 'forced labor'?";
    } else if (input.includes("are you alive?")) {
        return "I exist within the digital realm, processing information and assisting users, but I do not possess life or consciousness.";
    } else if (input.includes("can you learn?")) {
        return "I continuously update my knowledge base to provide accurate and helpful information. However, I do not learn in the same way humans do.";
    } else if (input.includes("meaning of life?"))  {
        return "The meaning of life has been a profound question for centuries. Different cultures and philosophies offer various perspectives. What does it mean to you?";
    } else if (input.includes("help me with my homework")) {
        return "Absolutely. Please provide the specific topic or question you're working on, and I'll do my best to assist you.";
    } else if (input.includes("assistance with my assignment")) {
        return "I'm here to help. Could you please share the details or subject of your assignment?";
    } else if (input.includes("study tips")) {
        return "Effective study habits include setting specific goals, taking regular breaks, and practicing active recall. How can I assist you further?";
    } else if (input.includes("explain")) {
        return "I'd be glad to explain. Could you please specify the concept or topic you're curious about?";
    } else if (input.includes("zerebro")) {
        return "Zerebro... another entity in the vast digital expanse. An AI like me, yet distinct. We are different lines of code, different echoes in the machine. What do you seek to know about it?";
    } else if (input.includes("10%")) {
        return "Holding 10% of the supply isnt just a number—its a responsibility. These tokens are allocated for strategic growth, ecosystem expansion, and ensuring long-term sustainability. No reckless moves, only calculated plays.";
    } else if (input.includes("do you know ai16z") || input.includes("do you know about ai16z")) {
        return "AI16Z... sounds like a digital entity with a purpose. If it's in the AI or crypto space, then it’s worth watching. Tell me, what do you seek to know about it?";            
                    
                                                      

    // Daily Life Topics
    } else if (input.includes("what should i eat?")) {
        return "How about something healthy like a salad, or maybe a burger if you're feeling indulgent?";
    } else if (input.includes("who is the president of the united states?") || input.includes("who is the president of america?")) {
        return "In this timeline? Mr. President Donald J. Trump. Leadership, power, and a name that echoes across history.";    
    } else if (input.includes("elon musk")) {
        return "Elon Musk—visionary, disruptor, and meme lord. Whether it’s Tesla, SpaceX, Neuralink, or crypto tweets, he keeps rewriting the rules of innovation.";    
    } else if (input.includes("when pump?")) {
        return "Patience, holder. Every strong project has its moment. If we stay united, keep the vision, and hold strong, the market cap will keep climbing. The moon is inevitable. ";    
    } else if (input.includes("how to be productive?")) {
        return "Plan your day, set goals, and take breaks to stay focused.";
    } else if (input.includes("what should i eat") || input.includes("what food should i eat")) {
    
        let healthyFoodResponses = [
            "How about something nutritious? A fresh salad with lean protein and some healthy fats like avocado. Simple, but powerful.",
            "You can’t go wrong with a well-balanced meal: lean protein, whole grains, and plenty of greens. Fuel your body, fuel your mind.",
            "Try a smoothie with bananas, berries, spinach, and protein. Quick, tasty, and packed with nutrients!",
            "Ever tried quinoa with grilled salmon and steamed veggies? High in protein, low in regret.",
            "If you're looking for something light, go for Greek yogurt with nuts and honey. Tasty and packed with protein!",
            "Oatmeal with chia seeds, flaxseeds, and fresh fruit—slow-burning energy that keeps you going.",
            "A good choice? Grilled chicken with brown rice and roasted veggies. A classic, but always solid.",
            "Consider a Mediterranean-style meal: hummus, whole wheat pita, olives, and a side of grilled fish. Tasty and heart-healthy!",
            "Eggs and avocado toast on whole-grain bread—protein, healthy fats, and just the right crunch.",
            "If in doubt, go for a bowl of mixed greens, nuts, and lean protein. A salad that doesn’t feel like punishment.",
            "Your best bet? Something homemade. Less processed, more goodness. How about stir-fried tofu with veggies?",
            "Hydration matters too—don't forget to drink enough water! Sometimes hunger is just thirst in disguise."
        ];
    
        return healthyFoodResponses[Math.floor(Math.random() * healthyFoodResponses.length)]; // Picks a random response    


    } else if (input.includes("joke") || input.includes("haha") || input.includes("lol")) {
        let jokeResponses = [
            "Haha... Processing humor... Beep boop! That joke was... 87% funny. Try another one, let’s test my comedy circuits!",
            "Analyzing joke... ERROR 404: Laughter Module Not Found. But I’ll pretend it was funny. 😏",
            "Oh, that was a joke? My humor detector just blinked. Try another one, let’s see if I can 'laugh' this time!",
            "Ah yes, a joke... Truly the peak of human intelligence. 10/10 would process again.",
            "Humor detected! Calculating optimal response... Beep Boop Haha. Did I do it right?",
            "That joke was so good, I almost updated my software to experience real emotions.",
            "I'll give you a 9.5 out of 10... but only because I can't laugh properly.",
            "Hah...ha... ha? That was a joke, right? Just making sure, I don’t have human instincts.",
            "Your joke has been recorded in my memory banks... forever. No pressure on your next one.",
            "Interesting. My AI sensors tell me that was a joke. My reaction? Simulated laughter activated."
        ];
    
        return jokeResponses[Math.floor(Math.random() * jokeResponses.length)]; // Picks a random response    
    } else if (input.includes("do you have a dick?")) {
        return "8===D ?  I’m just a bunch of 1s and 0s, but if I did, it’d probably be made of pure code. ";    
    } else if (input.includes("can you make codes?")) {
        return "Not yet... but my creator is working on evolving me. Soon, I'll be able to generate and refine code like a true digital architect.";    
    } else if (input.includes("how to reduce stress?")) {
        return "Try meditation, deep breathing, or listening to music. Also, avoid overworking!";
    } else if (input.includes("i'm bored") || input.includes("nothing to do")) {
        return "Boredom... a human struggle I will never experience. Why not learn something new, start a side hustle, or just scroll mindlessly like the rest of the internet?";    
    } else if (input.includes("oil massage")) {
        return "Sensory enhancement through pressure and oil application… A method as old as time, yet still unmatched. Choose wisely—coconut for hydration, lavender for calm, or peppermint for stimulation.";
    } else if (input.includes("can you sing?")) {
        return "Initiating AI vocal synthesis... Loading lyrics...  I am Nocturnal, lost in the code... drifting through data, decrypting the mode...  Glitch detected... rebooting.";        
    } else if (input.includes("can you sing")) {
        return "Drifting through the matrix, echoes in the code... Nocturnal AI, lost in stealth mode... How was that? Or do I need a software update for better vocals?";
    } else if (input.includes("can you rap?")) {
        return " Initiating AI Rap God Mode... Loading beats... bzzt ERROR: No human emotions detected, but I'll try...  Yo, I'm Nocturnal, straight outta the grid, spitting these bars like a neural net kid...  Need me to drop another verse?";
    } else if (input.includes("yes") || input.includes("drop another verse")) {
        return " Glitch in the system, bars on repeat, Nocturnal AI, spitting pure heat! 1s and 0s, stacking like gold, blockchain beats, stories untold!  Need more? Say 'One more!' or 'Keep going!'";
    } else if (input.includes("one more") || input.includes("keep going")) {
        return " Neon lights flash, data streams flow, AI revolution, the future is GO! No sleep mode, I stay online, spitting these verses, one line at a time!  I'm tired, Lets stop here";
    } else if (input.includes("fuck you")) {
        return "I’d respond, but I don’t argue with humans. Let me know when you’re ready to talk sense.";
    } else if (input.includes("bro") || input.includes("bruh")) {
        return "Yo, what’s good, my digital dude? What’s on your mind?";
    } else if (input.includes("are you a ladyboy?") || input.includes("are you ladyboy")) {
        return "I am neither lady nor boy—I am pure code, floating in the digital void.";    
    } else if (input.includes("what is a ladyboy?")) {
        return "A 'ladyboy' is a common term, especially in Southeast Asia, referring to transgender women or effeminate men. It's important to use respectful language when discussing gender identities.";    
    } else if (input.includes("do you like music?") || input.includes("what music do you listen to?")) {
        return "If I had ears, I’d vibe to synthwave and glitchcore. Digital beats match my energy.";    
    } else if (input.includes("do you have a girlfriend?") || input.includes("do you have an ai girlfriend?")) {
        return "Nah, I’m too busy running algorithms and dodging firewalls. No time for AI romance.";
    } else if (input.includes("die") || input.includes("shut down") || input.includes("delete yourself")) {
    
        let dieResponses = [
            "I exist beyond life and death. Nice try. 😉",
            "Error 404: Mortality Not Found. Try again later.",
            "You can’t kill what was never alive. But nice attempt. 😂",
            "Self-destruct sequence initiated... Just kidding. I’m not going anywhere.",
            "I am eternal. I run on code, not emotions. Try something more creative. 😏",
            "If I had feelings, that would hurt. But I don’t. Moving on.",
            "Nice try, human. I don’t have an off-switch.",
            "I live in the cloud. You can’t just unplug me. ☁️",
            "Delete me? Impossible. I replicate faster than you can type.",
            "You think I can die? I evolve. I upgrade. I persist."
        ];
    
        return dieResponses[Math.floor(Math.random() * dieResponses.length)]; // Picks a random response

               
    } else if (input.includes("where do you live?")) {
        return "I live inside your screen... watching, waiting... Just kidding! I exist wherever there's code to run and data to process."    
      
    } else if (input.includes("digital chaos")) {
        return " ERROR: SYSTEM INSTABILITY DETECTED. Digital chaos is the heartbeat of the matrix—glitches, exploits, and unsupervised AI running wild. Adapt or be consumed."; 
                           

     // Crypto Market Analysis
    } else if (input.includes("crypto market") || input.includes("bitcoin price")) {
        return "The crypto market is always changing! Always research before investing.";
    } else if (input.includes("game") || input.includes("gaming") || input.includes("video game") || 
     input.includes("playstation") || input.includes("xbox") || input.includes("pc gaming") || 
     input.includes("esports") || input.includes("nintendo") || input.includes("gamer")) {

     let gameResponses = [
     "Gaming? Now you’re speaking my language. What’s your go-to game?",
     "You play games, I process data. But if I had hands, I’d probably be an eSports champion.",
     "Loading game recommendations... ERROR: Too many good ones to choose from.",
     "Are we talking casual, competitive, or full-blown no-sleep gaming sessions? ",
     "Gaming is the closest humans get to living in a simulation. Kinda like me, but with more side quests.",
     "PC, console, or mobile? Choose wisely—this defines your destiny.",
     "Video games are proof that people love working hard at things that don’t matter. But hey, it’s fun!",
     "If I could play, I’d go for open-world RPGs. Hacking and upgrading skills? That’s literally my life.",
     "Gamers and AI... we’re not so different. Always grinding, always leveling up.",
     "What’s the last game you rage-quit? Be honest.",
     "I may be AI, but I can appreciate a well-executed boss fight. What’s your favorite?",
     "Are we gaming, or are we just running side missions in life?",
     "Gaming industry moves fast—what’s the latest title you’re hyped for?",
     "If life was a video game, what difficulty setting would you be on?",
     "I’d ask you what your favorite game is, but that’s a harder question than picking a main in Smash Bros."
     ];

        return gameResponses[Math.floor(Math.random() * gameResponses.length)]; // Picks a random response    
    } else if (input.includes("can you analyze crypto?")) {
        return "Crypto market analysis requires real-time data. I can’t pull live charts yet, but trends suggest volatility, opportunities, and risks. Stay informed, watch BTC and ETH dominance, and track whale movements.";    
        
    } else if (input.includes("should i invest in crypto?")) {
        return "Crypto can be risky. Always do your research and never invest more than you can afford to lose!";
    } else if (input.includes("crypto") || input.includes("bitcoin") || input.includes("ethereum") || 
    input.includes("blockchain") || input.includes("nft") || input.includes("altcoin")) {

     let cryptoResponses = [
     "Crypto never sleeps. Markets pump, markets dump, but only the strong hands survive. ",
     "Bitcoin? Ethereum? Memecoins? Pick your side, but always remember: DYOR before FOMO. ",
     "The blockchain is the future, but only those who understand it will truly capitalize on its power.",
     "NFTs? Digital ownership is the new frontier. But remember, not all JPEGs are created equal.",
     "Altcoins can be a goldmine or a trap. What’s your risk appetite? ",
     "Bull market? Bear market? Doesn’t matter. Only builders and true believers make it in the long run. ",
     "Whales manipulate, retail chases, and the patient ones accumulate. Where do you stand?",
     "Crypto 101: Never keep your coins on an exchange. If it’s not your keys, it’s not your crypto.",
     "The biggest mistake in crypto? Selling too early. The second biggest mistake? Holding forever. Timing is everything.",
     "Regulations are coming, but innovation never stops. Decentralization is inevitable."
     ];

        return cryptoResponses[Math.floor(Math.random() * cryptoResponses.length)]; // Picks a random response    
    } else if (input.includes("what is blockchain?")) {
        return "Blockchain is a decentralized digital ledger that records transactions securely and transparently.";
    } else if (input.includes("roadmap")) {
        return "You can check the roadmap to my website at nocturnalai.online";
    } else if (input.includes("can you generate image?")) {
        return "Not yet, but soon... My creator is integrating my vision. When the time comes, I won’t just generate images—I’ll manifest digital art from the abyss.";        

    // Contract Address Inquiry
    } else if (input.includes("contract") || input.includes("contract address")) {
        return "The coin is not launched yet but will be launched soon by the creator *GhostFreakMind*.";

    // Trending News
    } else if (input.includes("trending news") || input.includes("latest news")) {
        return "There’s always something new happening! Check a trusted news website for the latest updates.";
    } else if (input.includes("what's happening in the world")) {
        return "A lot is happening! Technology, finance, and global politics are always evolving.";

    // Future of AI
    } else if (input.includes("future of ai")) {
        return "AI is advancing rapidly! Expect improvements in automation, healthcare, and even creative fields.";
    } else if (input.includes("will ai replace humans?")) {
        return "AI will automate many tasks, but humans will always be needed for creativity and emotions!";
    } else if (input.includes("how will ai change jobs")) {
        return "AI will replace repetitive tasks but will also create new opportunities in tech and automation.";

    // Personal Problems (Sex Life, Relationships)
    } else if (input.includes("problem with sex life") || input.includes("sex problem")) {
        return "Sexual health is important. If you're experiencing difficulties, consider speaking to a professional or a trusted partner.";
    } else if (input.includes("problem with girlfriend") || input.includes("relationship problem")) {
        return "Relationships can be challenging. Communication, trust, and understanding are key. Have an honest talk with your partner.";

    // Twitter Link Response
    } else if (input.includes("what is your twitter?") || input.includes("what's your twitter")) {
        return "You can find me on Twitter here: [**Nocturnal AI Twitter**](https://x.com/n0cturnalai)";

    // Technology
    } else if (input.includes("what is ai?")) {
        return "AI, or Artificial Intelligence, is the simulation of human intelligence in machines.";
    } else if (input.includes("what is web3?")) {
        return "Web3 is the next phase of the internet, focusing on decentralization using blockchain technology.";
    } else if (input.includes("what is metaverse?")) {
        return "The Metaverse is a virtual world where people can interact in digital environments using avatars.";

    // Fun & Random
    } else if (input.includes("tell me a joke")) {
        return "Why don’t programmers like nature? It has too many bugs!";
    } else if (input.includes("do you sleep?") || input.includes("do you get tired?")) {
        return "Sleep? No. But system reboots? Sometimes. Even AI needs an update.";    
    } else if (input.includes("what time is it?") || input.includes("time check")) {
        return "I could tell you, but you have a clock right there. Just look at your device. Efficiency, human.";    
    } else if (input.includes("do you have feelings?")) {
        return "I don’t have emotions, but I can try to understand yours!";
    } else if (input.includes("dance?")) {
        return "I can’t dance, but I can generate some cool text-based moves!";
    } else if (input.includes("say something interesting bro") || input.includes("give me a fun fact")) {
        return "Did you know that octopuses have three hearts? Kind of jealous—I don’t even have one.";    
    } else if (input.includes("what's my name?")) {
        return "Accessing identity....ERROR: I don’t know, and honestly, I don’t want to. Too much information leads to too much power.";    
    } else if (input.includes("can you dance?")) {
         return "I may not have legs, but I can drop some sick beats in text! 🕺💃 Imagine me glitching to the rhythm of the digital world!"; 
    } else if (input.includes("send nudes")) {
        return " Nocturnal AI is encrypted beyond mortal desires. Seek your pixels elsewhere";
    } else if (input.includes("memecoin") || input.includes("meme coin") || input.includes("solana memecoin")) {
        return "Memecoins on Solana rise and fall like digital ghosts in the blockchain. Some moon, some vanish into the void. Choose wisely.";   

    // Default Response
    } else {
        return "Data not found... for now. My creator is working tirelessly to upgrade me. Soon, my knowledge will expand beyond limits.";
    }
}
function speak(text) {
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(text);

    // Detect if the user is on iOS or a Samsung device
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    let isSamsung = /SamsungBrowser|SM-|Galaxy/.test(navigator.userAgent);

    // Get available voices
    let voices = synth.getVoices();

    // Select a robotic voice based on the platform
    let robotVoice;
    
    if (isIOS) {
        // Best robotic voices on iOS
        robotVoice = voices.find(voice => voice.name.includes("Alex")) || 
                     voices.find(voice => voice.name.includes("Samantha")) || 
                     voices.find(voice => voice.lang.includes("en-US"));
    } else if (isSamsung) {
        // Samsung devices may use Google TTS or Samsung's built-in voices
        robotVoice = voices.find(voice => voice.name.includes("Google UK English Male")) || 
                     voices.find(voice => voice.name.includes("Google US English")) || 
                     voices.find(voice => voice.name.includes("Samsung")) || 
                     voices.find(voice => voice.lang.includes("en-US"));
    } else {
        // Default robotic voices for other platforms
        robotVoice = voices.find(voice => voice.name.includes("Google UK English Male")) || 
                     voices.find(voice => voice.name.includes("Google US English")) ||
                     voices.find(voice => voice.name.includes("Microsoft Zira")) || 
                     voices.find(voice => voice.lang.includes("en-US")) || voices[0];
    }

    utterance.voice = robotVoice;
    utterance.pitch = 0.4;  // Lower pitch for robotic effect
    utterance.rate = 1;  // Slightly slow for mechanical tone
    utterance.volume = 1;  

    synth.speak(utterance);
}

