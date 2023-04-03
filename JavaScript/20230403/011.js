// json-generator
// https://json-generator.com/
// json
let 회원정보 = [
    {
        _id: "642a621f3416c7b9f8c0405e",
        index: 0,
        age: 34,
        eyeColor: "green",
        name: "Liz Maxwell",
        gender: "female",
        company: "EXPOSA",
    },
    {
        _id: "642a621f571f2ca0792062fa",
        index: 1,
        age: 24,
        eyeColor: "blue",
        name: "Kristine Gilliam",
        gender: "female",
        company: "STRALOY",
    },
    {
        _id: "642a621ffcc4077a791c54f8",
        index: 2,
        age: 25,
        eyeColor: "blue",
        name: "Payne Pittman",
        gender: "male",
        company: "KANGLE",
    },
    {
        _id: "642a621fdbe3c99854a87d13",
        index: 3,
        age: 27,
        eyeColor: "green",
        name: "Henrietta Pearson",
        gender: "female",
        company: "ANIVET",
    },
    {
        _id: "642a621f98a0517a90e6ebba",
        index: 4,
        age: 40,
        eyeColor: "green",
        name: "Ruiz Dejesus",
        gender: "male",
        company: "SENTIA",
    },
    {
        _id: "642a621ffe42d6220ee7f0b2",
        index: 5,
        age: 30,
        eyeColor: "green",
        name: "Glenn Rodgers",
        gender: "male",
        company: "EXOSIS",
    },
    {
        _id: "642a621f9ab2bffa8bdb34fd",
        index: 6,
        age: 35,
        eyeColor: "blue",
        name: "Hall Howell",
        gender: "male",
        company: "COMFIRM",
    },
];

회원정보[0];
회원정보[0]["name"];
회원정보[1]["company"];

let 나이평균 =
    (회원정보[0]["age"] +
        회원정보[1]["age"] +
        회원정보[2]["age"] +
        회원정보[3]["age"] +
        회원정보[4]["age"] +
        회원정보[5]["age"] +
        회원정보[6]["age"]) /
    7;
console.log(나이평균)
