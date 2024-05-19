function createUserProfiles(names, modifiedNames) {
  const userProfiles = [];
  for (let i = 0; i < names.length; i++) {
    const userProfile = {
      originalName: names[i],
      modifiedNames: modifiedNames[i],
      id: i + 1,
    };
    userProfiles.push(userProfile);
  }
  return userProfiles;
}

const oldNames = [
  "peter",
  "paul",
  " jane",
  " nichelle ",
  "ricky",
  "damian",
  "bane",
  "dennis",
  "wayne",
];
const modifiedNames = [
  "peter",
  "PAUL",
  " jane",
  " NICHELLE ",
  "ricky",
  "DAMIAN",
  "bane",
  "DENNIS",
  "wayne",
];
const profiles = createUserProfiles(oldNames, modifiedNames);
console.log(profiles);
