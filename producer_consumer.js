const buffer = [];
const bufferSize = 5;

async function producer() {
  let item = 1;
  while (item <= 10) {
    if (buffer.length < bufferSize) {
      buffer.push(item);
      console.log(`Producer produced item ${item}. Buffer: [${buffer.join(", ")}]`);
      item++;
    } else {
      console.log("Buffer full! Producer waiting...");
    }
    await new Promise(r => setTimeout(r, 500));
  }
}

async function consumer() {
  while (true) {
    if (buffer.length > 0) {
      const consumed = buffer.shift();
      console.log(`Consumer consumed item ${consumed}. Buffer: [${buffer.join(", ")}]`);
    } else {
      console.log("Buffer empty! Consumer waiting...");
    }
    await new Promise(r => setTimeout(r, 800));
  }
}

producer();
consumer();
