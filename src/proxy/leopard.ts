import Proteus from './proteus'
import Lion from './lion'
import Serpent from './serpent'


export default class Leopard implements Proteus {
    // Proteus in the form of a Leopard

    name = "Leopard"

    tell_me_the_future() {
        if (Math.floor(Math.random() * 2)) {
            Object.assign(this, new Lion())
            //this.constructor = Lion
            this.tell_me_the_future = Lion.prototype.tell_me_the_future
            this.tell_me_your_form = Lion.prototype.tell_me_your_form
        } else {
            Object.assign(this, new Serpent())
            //this.constructor = Serpent            
            this.tell_me_the_future = Serpent.prototype.tell_me_the_future
            this.tell_me_your_form = Serpent.prototype.tell_me_your_form
        }
    }

    tell_me_your_form() {
        console.log(`I am the form of ${this.name}`)
    }
}