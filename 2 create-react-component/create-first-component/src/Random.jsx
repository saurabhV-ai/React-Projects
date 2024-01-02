function Random() {

  let randomNumber = Math.random() * 100

  return <h5 style={{'backgroundColor': '#e0e3ed'}}>
    Random number is {Math.round(randomNumber)}
  </h5>
}

export default Random