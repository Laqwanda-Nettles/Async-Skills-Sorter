"use strict";

async function skills() {
  try {
    const data = await fetch("skills.json");
    const newData = await data.json();
    console.log(newData);

    const sortLevel = newData.sort((a, b) => (a.level < b.level ? 1 : -1));
    console.log(sortLevel);
  } catch (error) {
    console.error(error);
  }
}
skills();
