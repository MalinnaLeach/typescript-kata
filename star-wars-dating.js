const ewokFurTypes = {
    BROWN: 'brown',
    GREY: 'grey',
    BLACK: 'black',
    STRIPY: 'stripy',
    PATTERNED: 'patterned',
}

const ewokList = [{
  {
    name: 'Ewoky',
    furType: ewokFurTypes.GREY,
    furPreference: ewokFurTypes.STRIPY,
  },
  {
    name: 'Ewoker',
    furType: ewokFurTypes.GREY,
    likesWookies: true,
    faveFood: 'hrrrfle'
  }
}];

const wookieList = [{
    {
        name: 'Wookle',
        bestFood: 'tinngr',
        likesEwoks: false,
    },
    {
        name: 'Wookara',
        bestFood: 'hrrrfle',
        likesEwoks: true,
    }
}]

const droidsDisguisedAsEwoks = [{
    name: 'Droidy',
    furType: ewokFurTypes.GREY,
    furPreference: ewokFurTypes.STRIPY,
    specialSkill: 'hacking into Imperial computers',
},
{
    name: 'Droidoo',
    furType: ewokFurTypes.GREY,
    likesWookies: true,
    faveFood: 'hrrrfle'
    specialSkill: 'making beep noises',
}]


const ewokCompatibilityChecker = (ewok, potentialDate) => {
    if (ewok.furType === 'pattrned' && potentialDate !== 'patterned') return false;
    if (ewok.furType === potentialDate.furPrference) return true;
    if (ewok.likesWookies && potentialDate.likesEwoks && ewok.faveFood === potentialDate.bestFood) {
        return true;
    }
    tellEwokTheyAreAnEwok(ewok);
    return false;
}

// The ewok param should only be of Ewok type
const tellEwokTheyAreAnEwok = (ewok) => {
    console.log('You are an Ewok!');
}