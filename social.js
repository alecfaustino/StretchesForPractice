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


// print a list of everyone, who they follow, and who follows them. 
const printAll = (data) => {
  let printList = {}
  
  // initialize all the objects first 
  for (const id in data) {
    let personName = data[id].name;
    printList[personName] = {
      follows: [],
      followers: [],
    };
  }
  // now we can push into both followers and follows without any being undefined
  for (const id in data) {
    let personName = data[id].name;
    for (const ids of data[id].follows) {
      let oppositeName = data[ids].name;
      printList[personName].follows.push(data[ids].name);
      printList[oppositeName].followers.push(personName);
    }
  }
  
  
  return printList;
  
};

// return a list of names of people who follow someone who doesn't follow back
const unrequitedFollowers = (data) => {
  // using a set so that names are not duplicated
  const unrequitedList = new Set();
  
  for (const id in data) {
    const followList = data[id].follows;
    for (const follower of followList) {
      if(!data[follower].follows.includes(id)) {
        unrequitedList.add(data[id].name);
      }
    }
  }
  
  return Array.from(unrequitedList);
};

// return name of person who has most followers && over 30
const mostPopularOverAge30 = (data) => {
  const popularityMap = {};
  for (const id in data) {
    if(data[id].age > 30) {
      popularityMap[id] = 0;
      // {id: 0}
    }
  }
  for (const id in data) {
    const accessFollowsArray = data[id].follows;
    for (const follower of accessFollowsArray) {
      
      if(popularityMap[follower] !== undefined) {
        popularityMap[follower]++;
      }
    }
  }
  
  let highestCount = -1;
  let mostPopularName = "";
  for(const person in popularityMap) {
    if(popularityMap[person] > highestCount) {
      mostPopularName = data[person].name;
      highestCount = popularityMap[person];
    }
  }
  return mostPopularName;
  
  // return name of person who follows the most people && over 30 
  const biggestFollowerOverAge30 = (data) => {
    let biggestFollower = null;
    let howManyFollowing = 0;
    for (const id in data) {
      if (data[id].age > 30 && data[id].follows.length > howManyFollowing) {
        biggestFollower = data[id].name;
        howManyFollowing = data[id].follows.length;
      }
    }
    
    return biggestFollower;
  };
};