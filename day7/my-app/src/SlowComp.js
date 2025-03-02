import React from 'react';

const wait = (ms) => {
    const start = Date.now();
    let now = start;

    while (now - start < ms) now = Date.now();
}

export default function SlowComp() {
  wait(1000);
    return (
    <div>
      SlowComp
    </div>
  )
}
