// break은 자신을 감싼 반복문만 탈출합니다. 그 상위 반복문까지 탈출하지 않습니다.
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
        if (j == 3) {
            break;
        }
    }
}
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
        if (j == 3) {
            if (true) {
                break;
            }
        }
    }
}

// continue는 아래 구문을 실행시키지 않고 다음 루프로 넘어가서 다시 구문을 실행합니다.
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        if (j == 3) {
            continue;
        }
        console.log(`${i} X ${j} = ${i * j}`);
    }
}

// label은 특정한 곳으로 `점프`하게 만듭니다. 가독성을 떨어뜨리므로 사용하지 않는 것이 좋습니다.

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            break outer;
        }
        console.log(i, j);
    }
}

hojun: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            break hojun;
        }
        console.log(i, j);
    }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
    hojun: for (let i = 2; i < 3; i++) {
        for (let j = 1; j < 3; j++) {
            if (j === 3) {
                break hojun;
            }
            console.log(`${반복}. ${i} X ${j} = ${i * j}`);
        }
    }
}

hojun: for (let 반복 = 0; 반복 < 3; 반복++) {
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            if (j === 3) {
                break hojun;
            }
            console.log(`${반복}. ${i} X ${j} = ${i * j}`);
        }
    }
}
