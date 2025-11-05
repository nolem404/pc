function producerConsumer() {
    const buffer = [];
    const bufferSize = 5;
    let item = 0;

    function producer() {
        if (buffer.length === bufferSize) {
            console.log("Buffer full, producer waiting...");
        } else {
            item++;
            buffer.push(item);
            console.log(`Producer produced item ${item}`);
        }
    }

    function consumer() {
        if (buffer.length === 0) {
            console.log("Buffer empty, consumer waiting...");
        } else {
            const consumed = buffer.shift();
            console.log(`Consumer consumed item ${consumed}`);
        }
    }

    for (let i = 0; i < 10; i++) {
        producer();
        consumer();
    }
}

producerConsumer();

















// The producer adds items to a shared buffer (array).

// The consumer removes items from that buffer.

// The buffer size limits how many items can be stored at once.

// If the buffer is full → producer waits.

// If the buffer is empty → consumer waits.