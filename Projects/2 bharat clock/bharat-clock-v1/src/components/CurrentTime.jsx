function CurrentTime() {
  let time = new Date();
  return<p>This is current time: <strong>{time.toLocaleDateString()} - {time.toLocaleTimeString()}</strong></p>
}

export default CurrentTime;
