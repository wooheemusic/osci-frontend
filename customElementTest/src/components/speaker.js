export default class Speaker extends HTMLElement {
  speak() {
    return "i say " + this.name;
  }

  constructor() {
    super();
    console.log("constructor arguments :", arguments);
    console.log("constructor this :", this);
    console.dir(this);
    this.name = "aaaaaahhhhh";
    // console.log(name, "is constructed");
    this.addEventListener('click', (event) => {
      console.log("this: ", this); // speak method property not shown?
      console.dir(this);
      console.log("this instanceof Speaker", this instanceof Speaker);
      console.log("this.hasOwnProperty('speak')", this.hasOwnProperty("speak"));
      var prot = Object.getPrototypeOf(this);
      console.log("Object.getPrototypeOf(this).constructor.name", prot.constructor.name);
      console.log("Object.getPrototypeOf(this).hasOwnProperty('speak')", prot.hasOwnProperty("speak"));
      console.log("this.hasOwnProperty('name')", this.hasOwnProperty("name"));
      alert(this.speak());

    });
  }

  connectedCallback() {
    console.log("connectedCallback of Speaker");
  }

};

export class LoudSpeaker extends Speaker {
  speak(){
    return super.speak() + " !!!!!!!!!!!!";
  }
}

export function test(){
  console.log("test");
}
