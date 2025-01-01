function greet(greeting, name){
    return `${greeting}, ${name}`
}

function curryGreet(greeting) {
  return function (name ) {
    return `${greeting}, ${name}`
  }
}

const greetItal = curryGreet("Chao")
greetItal("Alonzo")

const greetTex = curryGreet("Howdy")
greetTex("Alonzo")
greetTex("Alan")

function writeMessage(message, salutation, name) {
  return md`<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
}

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name)
}

const writeFriendlyNote = signMessageFrom("Your best bud")

function signMessageWith(salutation) {
  return (message, name) => writeMessage(message, salutation, name)
}

function quote(name, year, text) {
  return md`<p style="font-size:smaller;padding:1em;font-family:monospace;">"${text}"<br>- ${name} (${year})</p>`;
}

const curriedQuote = (name) => {
  return (year) => {
    return (text) => quote(name, year, text)
  }
}

const arrowCurriedQuote = name => year => text => quote(name, year, text)

const quoteCrockford = curriedQuote("Doug Crockford")


