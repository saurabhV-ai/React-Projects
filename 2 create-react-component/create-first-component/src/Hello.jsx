function Hello(){

  let myName = "Saurabh"
  let userName = () => {
    return "Saurabh Vibhute"
  }

  return <div>
    <h2>
      Hello this is the future speaking. I am your host {myName}.
    </h2>
    <p>
      How can I help you Mr. {userName()}?
    </p>
  </div>
}

export default Hello;