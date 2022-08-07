// Grab HTML Elements

const displayCardOneImage = document.getElementById('cardOneImage');
const displayCardOneName = document.getElementById('cardOneName');
const displayCardOneText = document.getElementById('cardOneText');
const displayCardTwoImage = document.getElementById('cardTwoImage');
const displayCardTwoName = document.getElementById('cardTwoName');
const displayCardTwoText = document.getElementById('cardTwoText');
const displayCardThreeImage = document.getElementById('cardThreeImage');
const displayCardThreeName = document.getElementById('cardThreeName');
const displayCardThreeText = document.getElementById('cardThreeText');
const btn = document.getElementById('btn');

// Create Library of Cards

const theFool = {
    name: 'The Fool',
    image: 'url("./pics/cards/thefool.jpeg")',
    text: 'Let go of preconceived ideas and remain open to change.'
}

const theMagician = {
    name: 'The Magician',
    image: 'url("./pics/cards/themagician.jpeg")',
    text: 'Trust your inspiration. You are smarter than you think.'
}

const theHighPriestess = {
    name: 'The High Priestess',
    image: 'url("./pics/cards/thehighpriestess.jpeg")',
    text: 'Put self-cultivation at the top of your daily priority list.'
}

const theEmpress = {
    name: 'The Empress',
    image: 'url("./pics/cards/theempress.jpeg")',
    text: 'Rather than being tough on yourself for not measuring up, know that your positive influence has facilitated favorable outcomes.'
}

const theEmperor = {
    name: 'The Emperor',
    image: 'url("./pics/cards/theemperor.jpeg")',
    text: 'Draw upon the capable inner resources you possess to get the task completed.'
}

const theHierophant = {
    name: 'The Hierophant',
    image: 'url("./pics/cards/thehierophant.jpeg")',
    text: 'Develop your expertise, and have faith that you are a master in the making.'
}

const theLovers = {
    name: 'The Lovers',
    image: 'url("./pics/cards/thelovers.jpeg")',
    text: 'Creative compromise helps you accept your commitments fully.'
}

const theChariot = {
    name: 'The Chariot',
    image: 'url("./pics/cards/thechariot.jpeg")',
    text: 'Look upon the movements of change as full of promise and adventure.'
}

const strength = {
    name: 'Strength',
    image: 'url("./pics/cards/strength.jpeg")',
    text: 'Clearly distinguish between your ego and your intuitive self.'
}

const theHermit = {
    name: 'The Hermit',
    image: 'url("./pics/cards/thehermit.jpeg")',
    text: 'Give yourself time for contemplation. Don\'t allow others to stand in your way.'
}

const wheelOfFortune = {
    name: 'Wheel of Fortune',
    image: 'url("./pics/cards/wheeloffortune.jpeg")',
    text: 'Fundamental change is imminent. The positive benefits you gain during this period could last a long time.'
}

const justice = {
    name: 'Justice',
    image: 'url("./pics/cards/justice.jpeg")',
    text: 'You are seen as a fair-minded party whose opinion matters.'
}

const theHangedMan = {
    name: 'The Hanged Man',
    image: 'url("./pics/cards/thehangedman.jpeg")',
    text: 'Accept the consequences of your decisions. Go through it, get it over with, and free yourself up for new pursuits.'
}

const death = {
    name: 'Death',
    image: 'url("./pics/cards/death.jpeg")',
    text: 'Free yourself from a past that no longer serves you well and proceed toward the future.'
}

const temperance = {
    name: 'Temperance',
    image: 'url("./pics/cards/temperance.jpeg")',
    text: 'Identify and acquire the ingredients that will most help you complete your mission and leave the rest behind.'
}

const theDevil = {
    name: 'The Devil',
    image: 'url("./pics/cards/thedevil.jpeg")',
    text: 'Let go of inhibitions. Allow yourself to express all of who you are.'
}

const theTower = {
    name: 'The Tower',
    image: 'url("./pics/cards/thetower.jpeg")',
    text: 'You are the one to serve as a catalyst for change.'
}

const theStar = {
    name: 'The Star',
    image: 'url("./pics/cards/thestar.jpeg")', 
    text: 'Your time is better spent in reflection and spiritual pursuit.'
}

const theMoon = {
    name: 'The Moon',
    image: 'url("./pics/cards/themoon.jpeg")',
    text: 'Listen to the body and its unique wisdom. Rely upon your inner resources as your best source of support and security.'
}

const theSun = {
    name: 'The Sun',
    image: 'url("./pics/cards/thesun.jpeg")',
    text: 'Let your light shine. Be confident in the sacred power of your original nature.'
}

const judgement = {
    name: 'Judgement',
    image: 'url("./pics/cards/judgement.jpeg")',
    text: 'Let go of your past. The future welcomes you with a bounty of growth and change.'
}

const theWorld = {
    name: 'The World',
    image: 'url("./pics/cards/theworld.jpeg")',
    text: 'Be serene in knowing you are succeeding in your goal.'
}

const aceOfWands = {
    name: 'Ace of Wands',
    image: 'url("./pics/cards/aceofwands.jpeg")',
    text: 'Be ready to act on imminent opportunity.'
}

const twoOfWands = {
    name: 'Two of Wands',
    image: 'url("./pics/cards/twoofwands.jpeg")',
    text: 'Be patient and observant as you go through the decision making process.'
}

const threeOfWands = {
    name: 'Three of Wands',
    image: 'url("./pics/cards/threeofwands.jpeg")',
    text: 'Go with your intuition. This is the time to make your move.'
}

const fourOfWands = {
    name: 'Four of Wands',
    image: 'url("./pics/cards/fourofwands.jpeg")',
    text: 'Exchanging ideas and proposals for addressing a universal need ensures approval and support.'
}

const fiveOfWands = {
    name: 'Five of Wands',
    image: 'url("./pics/cards/fiveofwands.jpeg")',
    text: 'Identify your passions and build your mission around them.'
}

const sixOfWands = {
    name: 'Six of Wands',
    image: 'url("./pics/cards/sixofwands.jpeg")',
    text: 'Fearlessly act on your convictions and others will be inspired to support your ideals.'
}

const sevenOfWands = {
    name: 'Seven of Wands',
    image: 'url("./pics/cards/sevenofwands.jpeg")',
    text: 'Rouse your ambition and the competitive aspects of your nature to push beyond limits. Launch yourself.'
}

const eightOfWands = {
    name: 'Eight of Wands',
    image: 'url("./pics/cards/eightofwands.jpeg")',
    text: 'Recent successes provide confidence to accomplish more.'
}

const nineOfWands = {
    name: 'Nine of Wands',
    image: 'url("./pics/cards/nineofwands.jpeg")',
    text: 'There is an important place for rest and recuperation in any endeavor.'
}

const tenOfWands = {
    name: 'Ten of Wands',
    image: 'url("./pics/cards/tenofwands.jpeg")',
    text: 'Rediscover the idealism and optimism of your youth to reinvigorate your vision.'
}

const pageOfWands = {
    name: 'Page of Wands',
    image: 'url("./pics/cards/pageofwands.jpeg")',
    text: 'Quietly gather information that will help you direct a situation to unity.'
}

const knightOfWands = {
    name: 'Knight of Wands',
    image: 'url("./pics/cards/knightofwands.jpeg")',
    text: 'Focused action must be taken; appropriate resources are available to draw upon, and the time is ripe.'
}

const queenOfWands = {
    name: 'Queen of Wands',
    image: 'url("./pics/cards/queenofwands.jpeg")',
    text: 'Realize you are not in the leadership role right now. Concentrate on a more supportive role that promotes the overall objectives.'
}

const kingOfWands = {
    name: 'King of Wands',
    image: 'url("./pics/cards/pageofwands.jpeg")',
    text: 'The possibility of success is open to you. There are no substantial obstacles.'
}

const aceOfCups = {
    name: 'Ace of Cups',
    image: 'url("./pics/cards/aceofcups.jpeg")',
    text: 'Remembering that each person and event may possess a precious gem hidden inside. Make a conscious effort to find it.'
}

const twoOfCups = {
    name: 'Two of Cups',
    image: 'url("./pics/cards/twoofcups.jpeg")',
    text: 'Express the caring that you feel. Reach out to those you hold in your heart, so that they know you are thinking of them.'
}

const threeOfCups = {
    name: 'Three of Cups',
    image: 'url("./pics/cards/threeofcups.jpeg")',
    text: 'Call your family together to support you and trust that the results will be just what you need.'
}

const fourOfCups = {
    name: 'Four of Cups',
    image: 'url("./pics/cards/fourofcups.jpeg")',
    text: 'Renounce the circumstances that have brought you to a standstill.'
}

const fiveOfCups = {
    name: 'Five of Cups',
    image: 'url("./pics/cards/fiveofcups.jpeg")',
    text: 'Loss happens on the material plane. Yet what truly belongs to you cannot be taken away.'
}

const sixOfCups = {
    name: 'Six of Cups',
    image: 'url("./pics/cards/sixofcups.jpeg")',
    text: 'Look at your past as a repository of wisdom to be applied judiciously in the present.'
}

const sevenOfCups = {
    name: 'Seven of Cups',
    image: 'url("./pics/cards/sevenofcups.jpeg")',
    text: 'Allow yourself to daydream, for dreams give you creative ideas and solutions and produce wonderful results.'
}

const eightOfCups = {
    name: 'Eight of Cups',
    image: 'url("./pics/cards/eightofcups.jpeg")',
    text: 'Look deep within to understand what motivates an occasional tendency to be pessimistic or depressed.'
}

const nineOfCups = {
    name: 'Nine of Cups',
    image: 'url("./pics/cards/nineofcups.jpeg")',
    text: 'The best faculties to use in this situation are the intuitive ones.'
}

const tenOfCups = {
    name: 'Ten of Cups',
    image: 'url("./pics/cards/tenofcups.jpeg")',
    text: 'Share abundantly with all the levels of people who are involved in this creative endeavor.'
}

const pageOfCups = {
    name: 'Page of Cups',
    image: 'url("./pics/cards/pageofcups.jpeg")',
    text: 'Make yourself fully available for whatever is needed.'
}

const knightOfCups = {
    name: 'Knight of Cups',
    image: 'url("./pics/cards/knightofcups.jpeg")',
    text: 'This is the moment to apply yourself fully.'
}

const queenOfCups = {
    name: 'Queen of Cups',
    image: 'url("./pics/cards/queenofcups.jpeg")',
    text: 'Exercise your empathy. Be nurturing to others in a way that allows them to understand what it is all about.'
}

const kingOfCups = {
    name: 'King of Cups',
    image: 'url("./pics/cards/pageofcups.jpeg")',
    text: 'Support others with your strength and wisdom.'
}

const aceOfSwords = {
    name: 'Ace of Swords',
    image: 'url("./pics/cards/aceofswords.jpeg")',
    text: 'Stay focused and resolute, for you are about to reach your objective.'
}

const twoOfSwords = {
    name: 'Two of Swords',
    image: 'url("./pics/cards/twoofswords.jpeg")',
    text: 'Wait until the timing is right and all the facts are clear before taking action.'
}

const threeOfSwords = {
    name: 'Three of Swords',
    image: 'url("./pics/cards/threeofswords.jpeg")',
    text: 'It might be healthier to disentangle yourself and start fresh.'
}

const fourOfSwords = {
    name: 'Four of Swords',
    image: 'url("./pics/cards/fourofswords.jpeg")',
    text: 'Concentrate less on the opinions and biases of others. Be open to intuition and insight from a deeper source.'
}

const fiveOfSwords = {
    name: 'Five of Swords',
    image: 'url("./pics/cards/fiveofswords.jpeg")',
    text: 'Challenge the pessimism of others around you by evoking their higher nature.'
}

const sixOfSwords = {
    name: 'Six of Swords',
    image: 'url("./pics/cards/sixofswords.jpeg")',
    text: 'Others will be grateful that you responded quickly to the need for immediate action.'
}

const sevenOfSwords = {
    name: 'Seven of Swords',
    image: 'url("./pics/cards/sevenofswords.jpeg")',
    text: 'Discipline yourself to stay focused on the desired outcome and you will make your way past all competing circumstances.'
}

const eightOfSwords = {
    name: 'Eight of Swords',
    image: 'url("./pics/cards/eightofswords.jpeg")',
    text: 'Rise to the occasion with confidence in your talent and ability.'
}

const nineOfSwords = {
    name: 'Nine of Swords',
    image: 'url("./pics/cards/nineofswords.jpeg")',
    text: 'Honestly admit to yourself that you have sacrificed time and energy on a situation that simply does not work.'
}

const tenOfSwords = {
    name: 'Ten of Swords',
    image: 'url("./pics/cards/tenofswords.jpeg")',
    text: 'Protect yourself while the storm rages and focus on rebuilding after it passes.'
}

const pageOfSwords = {
    name: 'Page of Swords',
    image: 'url("./pics/cards/pageofswords.jpeg")',
    text: 'Circumstances call for anonymous action even if you would prefer to receive credit.'
}

const knightOfSwords = {
    name: 'Knight of Swords',
    image: 'url("./pics/cards/knightofswords.jpeg")',
    text: 'Refine your communication and negotiation skills so you are at peak effectiveness.'
}

const queenOfSwords = {
    name: 'Queen of Swords',
    image: 'url("./pics/cards/queenofswords.jpeg")',
    text: 'Make your own decisions. Exercise as much independence as you know you can handle.'
}

const kingOfSwords = {
    name: 'King of Swords',
    image: 'url("./pics/cards/pageofswords.jpeg")',
    text: 'Listen to the inner wisdom offered by the wise elder that dwells inside of you.'
}

const aceOfCoins = {
    name: 'Ace of Coins',
    image: 'url("./pics/cards/aceofcoins.jpeg")',
    text: 'Take small, steady steps toward your long-term goal and you will accumulate magnificent results.'
}

const twoOfCoins = {
    name: 'Two of Coins',
    image: 'url("./pics/cards/twoofcoins.jpeg")',
    text: 'Do not allow yourself to be coaxed into premature decisions or actions.'
}

const threeOfCoins = {
    name: 'Three of Coins',
    image: 'url("./pics/cards/threeofcoins.jpeg")',
    text: 'Let the world see your skills and talents.'
}

const fourOfCoins = {
    name: 'Four of Coins',
    image: 'url("./pics/cards/fourofcoins.jpeg")',
    text: 'Study the responsibilities you have inherited rather than just looking at the advantages they represent.'
}

const fiveOfCoins = {
    name: 'Five of Coins',
    image: 'url("./pics/cards/fiveofcoins.jpeg")',
    text: 'Pooling resources allows you to make bolder moves and larger investments in future projects.'
}

const sixOfCoins = {
    name: 'Six of Coins',
    image: 'url("./pics/cards/sixofcoins.jpeg")',
    text: 'Think of yourself as someone who can assist others in refining their skills and talents and using them successfully.'
}

const sevenOfCoins = {
    name: 'Seven of Coins',
    image: 'url("./pics/cards/sevenofcoins.jpeg")',
    text: 'Success is won by perseverance. Be resolute in the use of your time and energy.'
}

const eightOfCoins = {
    name: 'Eight of Coins',
    image: 'url("./pics/cards/eightofcoins.jpeg")',
    text: 'When you dedicate yourself to producing quality work, you will gain greater freedom all the way around.'
}

const nineOfCoins = {
    name: 'Nine of Coins',
    image: 'url("./pics/cards/nineofcoins.jpeg")',
    text: 'Realize you are free to create a secure, enduring, and satisfying lifestyle for yourself. Look for ways to share it with those who have helped you along the way.'
}

const tenOfCoins = {
    name: 'Ten of Coins',
    image: 'url("./pics/cards/tenofcoins.jpeg")',
    text: 'You have the potential power to be a benefactor.'
}

const pageOfCoins = {
    name: 'Page of Coins',
    image: 'url("./pics/cards/pageofcoins.jpeg")',
    text: 'The open-minded novice can look at a situation with fresh eyes and get down to the essentials with confidence.'
}

const knightOfCoins = {
    name: 'Knight of Coins',
    image: 'url("./pics/cards/knightofcoins.jpeg")',
    text: 'Your resources will enhance an endeavor significantly and you can reap many blessings as a result of your participation.'
}

const queenOfCoins = {
    name: 'Queen of Coins',
    image: 'url("./pics/cards/queenofcoins.jpeg")',
    text: 'Be confident that if you express your truth, you will not have to worry about the consequences. You will remain safe and sound.'
}

const kingOfCoins = {
    name: 'King of Coins',
    image: 'url("./pics/cards/pageofcoins.jpeg")',
    text: 'Project all the confidence you can muster, as if you already know your plans are working and your goal is secured.'
}

// Creater Library Array

const library = [
    theFool,
    theMagician,
    theHighPriestess,
    theEmpress,
    theEmperor,
    theHierophant,
    theLovers,
    theChariot,
    strength,
    theHermit,
    wheelOfFortune,
    justice,
    theHangedMan,
    death,
    temperance,
    theDevil,
    theTower,
    theStar,
    theMoon,
    theSun,
    judgement,
    theWorld,
    aceOfWands,
    twoOfWands,
    threeOfWands,
    fourOfWands,
    fiveOfWands,
    sixOfWands,
    sevenOfWands,
    eightOfWands,
    nineOfWands,
    tenOfWands,
    pageOfWands,
    knightOfWands,
    queenOfWands,
    kingOfWands,
    aceOfCups,
    twoOfCups,
    threeOfCups,
    fourOfCups,
    fiveOfCups,
    sixOfCups,
    sevenOfCups,
    eightOfCups,
    nineOfCups,
    tenOfCups,
    pageOfCups,
    knightOfCups,
    queenOfCups,
    kingOfCups,
    aceOfSwords,
    twoOfSwords,
    threeOfSwords,
    fourOfSwords,
    fiveOfSwords,
    sixOfSwords,
    sevenOfSwords,
    eightOfSwords,
    nineOfSwords,
    tenOfSwords,
    pageOfSwords,
    knightOfSwords,
    queenOfSwords,
    kingOfSwords,
    aceOfCoins,
    twoOfCoins,
    threeOfCoins,
    fourOfCoins,
    fiveOfCoins,
    sixOfCoins,
    sevenOfCoins,
    eightOfCoins,
    nineOfCoins,
    tenOfCoins,
    pageOfCoins,
    knightOfCoins,
    queenOfCoins,
    kingOfCoins
];

// Make Function to Randomly pull Reversed Cards

const pullReversedCard = (reverseImage, reverseName, reverseText) => {
    let decide = Math.floor(Math.random() * 2);
    if(decide == 0) return;
    if(decide == 1) {
        reverseImage.classList.toggle('reverse-image')
        reverseName.classList.toggle('reverse-name')
        reverseText.classList.toggle('reverse-text')
    }
}

// Turn off Reversed by Default

const makeUpright = (uprightImage, uprightName, uprightText) => {
    uprightImage.classList.toggle('reverse-image')
    uprightName.classList.toggle('reverse-name')
    uprightText.classList.toggle('reverse-text')
} 

makeUpright(displayCardOneImage, displayCardOneName, displayCardOneText);
makeUpright(displayCardTwoImage, displayCardTwoName, displayCardTwoText);
makeUpright(displayCardThreeImage, displayCardThreeName, displayCardThreeText);

// Add Button Event Listener

btn.addEventListener('click', function() {
    let CardOne = library[Math.floor(Math.random() * library.length)];
    let CardOneImage = CardOne.image;
    let CardOneName = CardOne.name;
    let CardOneText = CardOne.text;

    let CardTwo = library[Math.floor(Math.random() * library.length)];
    while(CardTwo == CardOne) { return CardTwo = library[Math.floor(Math.random() * library.length)]; }
    let CardTwoImage = CardTwo.image;
    let CardTwoName = CardTwo.name;
    let CardTwoText = CardTwo.text;

    let CardThree = library[Math.floor(Math.random() * library.length)];
    while(CardThree == CardTwo || CardThree == CardOne) { return CardThree = library[Math.floor(Math.random() * library.length)]; }
    let CardThreeImage = CardThree.image;
    let CardThreeeName = CardThree.name;
    let CardThreeText = CardThree.text;

    pullReversedCard(displayCardOneImage, displayCardOneName, displayCardOneText);
    displayCardOneImage.style.backgroundImage = CardOneImage;
    displayCardOneName.innerHTML = CardOneName;
    displayCardOneText.innerHTML = CardOneText;

    pullReversedCard(displayCardTwoImage, displayCardTwoName, displayCardTwoText);
    displayCardTwoImage.style.backgroundImage = CardTwoImage;
    displayCardTwoName.innerHTML = CardTwoName;
    displayCardTwoText.innerHTML = CardTwoText;

    pullReversedCard(displayCardThreeImage, displayCardThreeName, displayCardThreeText);
    displayCardThreeImage.style.backgroundImage = CardThreeImage;
    displayCardThreeName.innerHTML = CardThreeeName;
    displayCardThreeText.innerHTML = CardThreeText;
});
