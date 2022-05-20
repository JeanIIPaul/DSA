var isAnagram = function (s, t) {
  const letters = {};

  if (s.length === 1 && t.length === 1) {
    return s === t;
  }
  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] in letters) {
      letters[s[i]] += 1;
    } else {
      letters[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (t[j] in letters) {
      letters[t[j]] -= 1;
    } else {
      return false;
    }
  }
  return Object.values(letters).every((v) => v === 0);
};

let s = "anagram";
let t = "nagaram";

isAnagram(s, t);
