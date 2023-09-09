function getTheAge(year){
    const century = Math.ceil(year/100);
    return `${year} year belongs to ${century} century`
}

console.log(getTheAge(1980));
console.log(getTheAge(2000));
console.log(getTheAge(2001))