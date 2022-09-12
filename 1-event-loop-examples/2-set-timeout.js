console.log('start process');
setTimeout(() => {
    console.log('settimeout');
}, 0);
console.log('end process');
/*print:
    start process
    end process
    settimeout
*/