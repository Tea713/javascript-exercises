const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let oldestAge = (("yearOfDeath" in oldest) ? oldest.yearOfDeath : new Date().getFullYear()) -  oldest.yearOfBirth;
        let personAge = (("yearOfDeath" in person) ? person.yearOfDeath : new Date().getFullYear()) -  person.yearOfBirth;
        return personAge > oldestAge ? person : oldest
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
