const data = {
  f01: {
    name: "Alice", // is followed by 2 people
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob", // is followed by 2 people
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie", // is followed by 2 people
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie", // is followed by 3 people
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth", // is followed by 3 people
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn", // if followed by 3 people
    age: 25,
    follows: ["f05"],
  },
};

// print a list of everyone, who they follow, and who follows them. 
const printAll = (data) => {
  let printList = {}

  for (const id in data) {
    for (const ids of data[id].follows) {
      let personName = data[id].name;
      printList[personName] = {}
      // currently returning undefined
      console.log(printList);
      // printList[data[id]]["name"] = {
      //   follows: data[ids].name,
      // }
    }
  }

  return printList;

};

console.log(printAll(data));

// return a list of names of people who follow someone who doesn't follow back
const unrequitedFollowers = () => {
  
};

// return name of person who has most followers && over 30
const mostPopularOverAge30 = () => {
  
};

// return name of person who follows the most people && over 30 
const biggestFollowerOverAge30 = () => {
  
};

// print a list of everyone and the sum # of their followers & followers of followers.
const printAllReach = () => {
  
};


// return name of the person who follows the most people
const biggestFollower = (data) => {
  // map for current name of the person who follows the most and how much following
  let mostFollowing = {
    name: "",
    following: 0,
  };
  
  for (const profile in data) {
    const accessFollowsProp = data[profile].follows;
    const accessNameProp = data[profile].name;
    // Update map if we find someone with greater follows array
    if(accessFollowsProp.length > mostFollowing.following) {
      mostFollowing.name = accessNameProp;
      mostFollowing.following = accessFollowsProp.length;
    }
  }
  
  return mostFollowing.name;
};

// return name of the person who is followed by the most people
const mostPopular = (data) => {
  // going to create a map of each profile (f01, f02.. etc) as key and a value that holds # of times it appears in a follows array
  let mostPopularMap = {};
  
  for (const profile in data) {
    const accessFollowsArray = data[profile].follows
    accessFollowsArray.forEach((person) => {
      if(!mostPopularMap[person]) {
        mostPopularMap[person] = 1;
      } else {
        mostPopularMap[person] ++;
      }
    });
  }

  let mostFollowers = 0;
  let nameString = ""
  for (const id in mostPopularMap) {
    if (mostPopularMap[id] > mostFollowers) {
      //reset the string to remove all the highest Names if new highest
      nameString = ""
      // change the most Followers Number
      mostFollowers = mostPopularMap[id];
      // concat into string 
      nameString += `${data[id].name} `;
    } else if (mostPopularMap[id] === mostFollowers) {
      nameString += `${data[id].name} `;
    }
  }

  return nameString;
};