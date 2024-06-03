const isLoop = false;

while (isLoop) {
    console.log('This loop will never run')
}

do {
    console.log('it will run at least once')
} while (isLoop);